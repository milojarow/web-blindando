import clientPromise from "@/libs/mongo";

export async function GET() {
  try {
    // Test the connection by getting the client
    const client = await clientPromise;
    
    // Test connecting to the actual database
    const db = client.db();
    
    // List all collections to validate access
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    // Get the database name
    const dbName = db.databaseName;
    
    // Confirm that the users collection exists
    const hasUsersCollection = collectionNames.includes("users");
    
    return Response.json({
      success: true,
      message: "Conexión a MongoDB establecida correctamente",
      database: dbName,
      collections: collectionNames,
      usersCollectionExists: hasUsersCollection
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return Response.json(
      { 
        success: false, 
        error: "Error al conectar con MongoDB",
        details: error.message
      },
      { status: 500 }
    );
  }
} 