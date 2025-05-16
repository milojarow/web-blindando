import { MongoClient, ServerApiVersion } from "mongodb";

// Verificar que existe la variable de entorno
if (!process.env.MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}

const uri = process.env.MONGO_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// Cliente global compartido para reutilización de conexiones
let clientPromise;

// En desarrollo, usamos una variable global para preservar la conexión
// entre recargas de módulos causadas por HMR (Hot Module Replacement)
if (process.env.NODE_ENV === "development") {
  // En este ámbito, `global` es el objeto global de Node.js
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, es mejor no usar una variable global
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exportamos la promesa clientPromise - así la resolveremos solo
// cuando sea necesario usar la conexión
export default clientPromise;