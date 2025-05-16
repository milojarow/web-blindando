import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo";
import connectMongo from "./libs/mongoose";
import User from "./models/User";
import { compare } from "bcrypt";

const config = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email y contraseña son requeridos");
        }

        await connectMongo();
        
        const user = await User.findOne({ email: credentials.email.toLowerCase() });
        
        if (!user) {
          throw new Error("Usuario no encontrado");
        }
        
        if (!user.password) {
          throw new Error("Cuenta no configurada correctamente");
        }
        
        const passwordMatch = await compare(credentials.password, user.password);
        
        if (!passwordMatch) {
          throw new Error("Contraseña incorrecta");
        }
        
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
        };
      }
    }),
    
    // Resend provider commented out as requested
    // Resend({
    //   apiKey: process.env.RESEND_KEY,
    //   from: "noreply@resend.codefastsaas.com",
    //   name: "Email",
    // }),
    
    // Google provider commented out as requested
    // Google({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config); 