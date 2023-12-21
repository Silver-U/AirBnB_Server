var express = require('express');
var router = express.Router();
const Comment = require('./../models/comment')


router.post('/', function(req, res, next) {
    const comment = new Comment({
        rate: req.body.rate,
        idUser: req.body.idUser,
        idAirbnb: req.body.idAirbnb,
        message: req.body.message
    });
    console.log(comment);
    res.status(201).json({
        message: 'Comment added succesfully'
    });
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    const comments = [
        {
            id: "dasdasdasv",
            idUser: "deschamps",
            idAirbnb: "dasdqw1e1ew1",
            message: "asdsaaaaaa",
            rate: 3
        },
        {
            id: "dasdasd1asv",
            idUser: "desch1242amps",
            idAirbnb: "da12sdqw1e1ew1",
            message: "asdsaaaaaa",
            rate: 3
        }

    ]
    res.status(200).json(
        {
            message: "succes",
            comments: comments,
        }
    );
});

module.exports = router;
