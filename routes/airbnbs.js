var express = require('express');
var router = express.Router();
const Comment = require('./../models/comment')

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




const dbName = "sample_airbnb";
const collectionName = "listingsAndReviews";

router.post('/', function(req, res, next) {
    res.status(201).json({
        message: 'Post added succesfully'
    });
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    clientMongoDb.db(dbName).collection(collectionName).find().limit(100).toArray().then((x) => {
        var list = []
        for (let value of x) {
            list.push(value)
        }
            res.status(200).json(
                {
                    message: "succes",
                    airbnbs: list
                }
            );
        }

    )

    });

router.patch('/', function(req, res, next) {
    clientMongoDb.db(dbName).collection(collectionName).updateOne(req.query._id,
        // {$push({reviews: req.query.review})})

    )

});

module.exports = router;
