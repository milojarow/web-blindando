import connectMongo from "../../../../libs/mongoose";
import User from "../../../../models/User";
import { hash } from "bcrypt";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    // Input validation
    if (!name || !email || !password) {
      return Response.json(
        { success: false, error: "Nombre, email y contraseña son requeridos" },
        { status: 400 }
      );
    }
    
    if (password.length < 8) {
      return Response.json(
        { success: false, error: "La contraseña debe tener al menos 8 caracteres" },
        { status: 400 }
      );
    }
    
    // Connect to MongoDB
    await connectMongo();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      return Response.json(
        { success: false, error: "Ya existe una cuenta con este correo electrónico" },
        { status: 409 }
      );
    }
    
    // Hash the password
    const hashedPassword = await hash(password, 10);
    
    // Create new user
    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "user", // Default role
      emailVerified: null,
    });
    
    // Remove password from response
    const user = newUser.toObject();
    delete user.password;
    
    return Response.json({
      success: true,
      message: "Usuario creado correctamente",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json(
      { 
        success: false, 
        error: "Error al crear el usuario. Por favor, intenta nuevamente." 
      },
      { status: 500 }
    );
  }
} 