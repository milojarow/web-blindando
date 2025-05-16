import { 
  findUsersByAge, 
  findAllUsers, 
  createUser, 
  countUsers, 
  searchUsers 
} from "../../../models/User";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const age = searchParams.get("age");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search");
    
    let users;
    let total;
    
    if (search) {
      // Search by name or email
      users = await searchUsers(search, limit);
      total = users.length; // Simplified count for search results
    } else if (age) {
      // Filter by age
      users = await findUsersByAge(parseInt(age, 10));
      total = users.length; // Simplified count for age filter
    } else {
      // Get all users with pagination
      users = await findAllUsers(limit, page);
      total = await countUsers();
    }
    
    return Response.json({ 
      success: true, 
      users,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { success: false, error: "Error al conectar con la base de datos" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const userData = await request.json();
    
    // Add some basic validation
    if (!userData || !userData.name || !userData.email) {
      return Response.json(
        { success: false, error: "Se requiere nombre y email" },
        { status: 400 }
      );
    }
    
    // Add created_at timestamp
    userData.created_at = new Date();
    
    // Convert age to number if present
    if (userData.age) {
      userData.age = parseInt(userData.age, 10);
    }
    
    try {
      const result = await createUser(userData);
      
      return Response.json({ 
        success: true, 
        message: "Usuario creado correctamente",
        userId: result.insertedId 
      });
    } catch (dbError) {
      // Check for duplicate email error
      if (dbError.code === 11000) {
        return Response.json(
          { success: false, error: "El email ya está registrado" },
          { status: 409 }
        );
      }
      throw dbError;
    }
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { success: false, error: "Error al crear el usuario" },
      { status: 500 }
    );
  }
} 