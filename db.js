const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://silver:2cjB8KKC9RZRdXrS@cluster0.lt4xrpn.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const clientMongoDb = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db = () =>{
    try {
        // Connect to the MongoDB cluster
         clientMongoDb.connect()
            .then((cli)=>{
                console.log("Connection successfull to the database!")
                console.log("dasdadadasdas")
                return cli.db("sample_airbnb").collection("listingsAndReviews")
            });
    } catch (e) {
        console.error(e);
    } finally {
        clientMongoDb.close();
    }
}
MongoClient.g
module.exports = db;