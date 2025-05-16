import { getDb } from "@/models/User";

export async function GET() {
  try {
    const db = await getDb();
    
    // Check if users collection exists
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    let message = "Base de datos inicializada";
    const results = {};
    
    // Create users collection if it doesn't exist
    if (!collectionNames.includes("users")) {
      await db.createCollection("users");
      
      // Add validation schema to the collection
      await db.command({
        collMod: "users",
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["name", "email"],
            properties: {
              name: {
                bsonType: "string",
                description: "Nombre completo del usuario"
              },
              email: {
                bsonType: "string",
                pattern: "^.+@.+$",
                description: "Email del usuario en formato válido"
              },
              age: {
                bsonType: ["int", "null"],
                minimum: 0,
                maximum: 120,
                description: "Edad del usuario (entre 0 y 120)"
              },
              created_at: {
                bsonType: "date",
                description: "Fecha de creación del usuario"
              }
            }
          }
        }
      });
      
      // Create unique index on email
      await db.collection("users").createIndex({ email: 1 }, { unique: true });
      
      // Create sample user
      const sampleUser = {
        name: "Usuario de Prueba",
        email: "test@blindandosuenos.com",
        age: 30,
        created_at: new Date()
      };
      
      try {
        await db.collection("users").insertOne(sampleUser);
        results.sampleUserCreated = true;
      } catch (err) {
        if (err.code === 11000) { // Duplicate key error
          results.sampleUserExists = true;
        } else {
          throw err;
        }
      }
      
      results.usersCollectionCreated = true;
    } else {
      results.usersCollectionExists = true;
    }
    
    return Response.json({
      success: true,
      message,
      results
    });
  } catch (error) {
    console.error("Database initialization error:", error);
    return Response.json(
      { 
        success: false, 
        error: "Error al inicializar la base de datos",
        details: error.message
      },
      { status: 500 }
    );
  }
} 