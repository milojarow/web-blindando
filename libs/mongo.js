import { MongoClient } from "mongodb";

// Verificar que existe la variable de entorno
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

// Cliente global compartido para reutilización de conexiones
let client;
let clientPromise;

// En desarrollo, usamos una variable global para preservar la conexión
// entre recargas de módulos causadas por HMR (Hot Module Replacement)
if (process.env.NODE_ENV === "development") {
  // En este ámbito, `global` es el objeto global de Node.js
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, es mejor no usar una variable global
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exportamos la promesa clientPromise - así la resolveremos solo
// cuando sea necesario usar la conexión
export default clientPromise;