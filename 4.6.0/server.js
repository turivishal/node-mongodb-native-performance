const { MongoClient } = require("mongodb");

// Replace Connection URI
const uri = "mongodb://localhost:27017/?maxPoolSize=20&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {

    console.log("mongodb-npm-4.6.0");
    console.log("=================");

    console.time("connection");
    await client.connect();
    console.timeEnd("connection");

    console.time("find");
    // Replace Database name and Collection name
    let _find = await client.db("db_name").collection("coll_name").find();
    console.timeEnd("find");

    let _findExplain = await _find.explain("executionStats");
    console.log("explain.executionTimeMillis: ", _findExplain.executionStats.executionTimeMillis);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
