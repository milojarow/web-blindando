// app/api/auth/register/route.js (updated)
import connectMongo from "../../../../libs/mongoose";
import User from "../../../../models/User";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    // Input validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: "Nombre, email y contraseña son requeridos" },
        { status: 400 }
      );
    }
    
    if (password.length < 8) {
      return NextResponse.json(
        { success: false, error: "La contraseña debe tener al menos 8 caracteres" },
        { status: 400 }
      );
    }
    
    // Connect to MongoDB
    await connectMongo();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      return NextResponse.json(
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
      emailVerified: null, // Not verified yet
    });
    
    // Send verification email
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.toLowerCase() }),
    });

    if (!response.ok) {
      console.error('Error sending verification email');
    }
    
    // Remove password from response
    const user = newUser.toObject();
    delete user.password;
    
    return NextResponse.json({
      success: true,
      message: "Usuario creado correctamente. Por favor, verifica tu email para activar tu cuenta.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Error al crear el usuario. Por favor, intenta nuevamente." 
      },
      { status: 500 }
    );
  }
}
