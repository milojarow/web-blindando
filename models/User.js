import mongoose from "mongoose";
import clientPromise from "@/libs/mongo";
import { ObjectId } from "mongodb";

// Mongoose Schema for NextAuth
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    emailVerified: Date,
    image: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    accounts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
      },
    ],
    sessions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Convert to model or get the existing model
export default mongoose.models.User || mongoose.model("User", UserSchema);

// MongoDB Driver functions
export async function getDb() {
  const client = await clientPromise;
  return client.db(); // Uses the database from your connection string
}

export async function getUsersCollection() {
  const db = await getDb();
  return db.collection("users");
}

// Create a new user
export async function createUser(userData) {
  const collection = await getUsersCollection();
  
  // Add created_at timestamp if not provided
  if (!userData.created_at) {
    userData.created_at = new Date();
  }
  
  return collection.insertOne(userData);
}

// Find users by age
export async function findUsersByAge(age) {
  const collection = await getUsersCollection();
  return collection.find({ age }).toArray();
}

// Find all users with pagination
export async function findAllUsers(limit = 10, page = 1, sort = { created_at: -1 }) {
  const collection = await getUsersCollection();
  const skip = (page - 1) * limit;
  return collection.find({}).sort(sort).skip(skip).limit(limit).toArray();
}

// Count all users
export async function countUsers() {
  const collection = await getUsersCollection();
  return collection.countDocuments({});
}

// Find user by ID
export async function findUserById(id) {
  const collection = await getUsersCollection();
  return collection.findOne({ _id: new ObjectId(id) });
}

// Find user by email
export async function findUserByEmail(email) {
  const collection = await getUsersCollection();
  return collection.findOne({ email });
}

// Update user by ID
export async function updateUser(id, updateData) {
  const collection = await getUsersCollection();
  
  // Add updated_at timestamp
  updateData.updated_at = new Date();
  
  return collection.updateOne(
    { _id: new ObjectId(id) }, 
    { $set: updateData }
  );
}

// Delete user by ID
export async function deleteUser(id) {
  const collection = await getUsersCollection();
  return collection.deleteOne({ _id: new ObjectId(id) });
}

// Search users by name or email
export async function searchUsers(searchTerm, limit = 10) {
  const collection = await getUsersCollection();
  return collection.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { email: { $regex: searchTerm, $options: "i" } }
    ]
  }).limit(limit).toArray();
}

// Find users by custom filter
export async function findUsersByFilter(filter = {}, limit = 10, page = 1, sort = { created_at: -1 }) {
  const collection = await getUsersCollection();
  const skip = (page - 1) * limit;
  return collection.find(filter).sort(sort).skip(skip).limit(limit).toArray();
}

// Count users by filter
export async function countUsersByFilter(filter = {}) {
  const collection = await getUsersCollection();
  return collection.countDocuments(filter);
} 