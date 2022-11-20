# node-mongodb-native-performance
Test difference versions of node-mongodb-native driver

## Common Code:
```
const { MongoClient } = require("mongodb");

// Replace Your Connection URI
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
    // Replace Database name and Collection name
    let c = await client.db("db_name").collection("coll_name").find().explain("executionStats");
    console.timeEnd("find");

    console.log("explain.executionTimeMillis: ", c.executionStats.executionTimeMillis);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```

## Execute the server:
1. Replace the **MongoDB database connection URI** in each directories (4.3.0, 4.6.0, 4.12.0) `server.js` file
2. Replace the **Database name** and **Collection name** in each directories (4.3.0, 4.6.0, 4.12.0) `server.js` file
3. Go specific directory from 4.3.0, 4.6.0, 4.12.0
    ```
    cd 4.3.0
    ```
4. NPM install
    ```
    npm install
    ```
5. Run the server file
    ```
    node server.js
    ```

## Result:
```
mongodb-npm-4.3.0
=================
connection: 15.517ms
find: 10.751ms
explain.executionTimeMillis:  0
```