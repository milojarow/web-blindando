// auth.js (updated)
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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

        // Check if email is verified
        if (!user.emailVerified) {
          throw new Error("Email no verificado. Por favor, verifica tu email.");
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
    
    // Google OAuth provider
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/api/auth/signin',
    verifyRequest: '/api/auth/verify-request', // Add a verification page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
          accessToken: account.access_token,
          provider: account.provider,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.provider = token.provider;
      }
      return session;
    }
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
