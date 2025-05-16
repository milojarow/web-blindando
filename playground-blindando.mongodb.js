/* MongoDB Playground for Blindando Sueños Project */
// To run: Click the green Play button in VS Code
// Results will appear in the "Playground Results" panel

// Select the database to use
use('development'); // This matches the database name shown in our tests

// Basic collection exploration
// List all users
db.getCollection('users').find();

// Find specific user by email
db.getCollection('users').findOne({ email: 'test@blindandosuenos.com' });

// Count total users
const userCount = db.getCollection('users').countDocuments();
console.log(`Total users: ${userCount}`);

// Advanced queries:

// Find users by name pattern (using regex)
db.getCollection('users').find({ 
  name: { $regex: 'Juan', $options: 'i' } 
});

// Add a sample user (commented out for safety - uncomment to run)
/*
db.getCollection('users').insertOne({
  name: "Maria Rodriguez",
  email: "maria@example.com",
  age: 28,
  created_at: new Date()
});
*/

// Update a user (commented out for safety - uncomment to run)
/*
db.getCollection('users').updateOne(
  { email: "maria@example.com" },
  { $set: { age: 29 } }
);
*/

// Add a field to all users (commented out for safety - uncomment to run)
/*
db.getCollection('users').updateMany(
  {},
  { $set: { role: "user" } }
);
*/

// Index information
db.getCollection('users').getIndexes();

// Example of aggregation pipeline - users by age groups
db.getCollection('users').aggregate([
  {
    $group: {
      _id: {
        $switch: {
          branches: [
            { case: { $lt: ["$age", 18] }, then: "Under 18" },
            { case: { $lt: ["$age", 30] }, then: "18-29" },
            { case: { $lt: ["$age", 50] }, then: "30-49" },
            { case: { $lt: ["$age", 70] }, then: "50-69" }
          ],
          default: "70+"
        }
      },
      count: { $sum: 1 },
      users: { $push: "$name" }
    }
  },
  { $sort: { "_id": 1 } }
]);

// Schema analysis - helpful to understand your data structure
db.getCollection('users').aggregate([
  { $sample: { size: 100 } },
  { $project: { _id: 0 } },
  { $merge: { into: "__schema__users", whenMatched: "replace", whenNotMatched: "insert" } }
]); 