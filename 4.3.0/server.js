const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017/?maxPoolSize=20&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    
    console.log("mongodb-npm-4.3.0");
    console.log("=================");

    console.time("connection");
    await client.connect();
    console.timeEnd("connection");

    console.time("find");
    let c = await client.db("db_name").collection("coll_name").find().explain("executionStats");
    console.timeEnd("find");

    console.log("explain.executionTimeMillis: ", c.executionStats.executionTimeMillis);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
