var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var airbnbsRouter = require('./routes/airbnbs');
var commentsRouter = require('./routes/comments');

var app = express();

try {
  // Connect to the MongoDB cluster
  const excutionner = clientMongoDb.connect()
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


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use((req, res, next) =>
{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, PUT, DELETE, OPTIONS")
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/airbnbs', airbnbsRouter);
app.use('/comments', commentsRouter);

// app.get('/airbnbs', function(req, res, next) {
//   console.log(clientMongoDb.db("sample_airbnb").collection("listingsAndReviews").find())
//   const comments = [
//     {
//       id: "dasdasdasv",
//       idUser: "deschamps",
//       idAirbnb: "dasdqw1e1ew1",
//       message: "asdsaaaaaa",
//       rate: 3
//     },
//     {
//       id: "dasdasd1asv",
//       idUser: "desch1242amps",
//       idAirbnb: "da12sdqw1e1ew1",
//       message: "asdsaaaaaa",
//       rate: 3
//     }
//
//   ]
//   res.status(200).json(
//       {
//         message: "succes",
//         comments: comments,
//       }
//   );
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
