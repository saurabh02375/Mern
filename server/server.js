const express = require("express")   

const app = express()

const router = require("./router/auth-router")

app.use('/api/auth' , router);

app.get("/" , (req , res) => {
    res.send("home page setup new ")
})

const port = 3000;

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://newuser:5xGpOzq6iw4Ow5Lm@cluster0.lzbqvi0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    app.listen(port , () => {
        console.log(`server is running in ${port}`)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



