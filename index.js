//Importing packages/modules
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const agricRoutes = require('./routes/agricRoutes');
const foRoutes = require('./routes/foRoutes')
const ufRoutes = require('./routes/ufRoutes')
require('dotenv').config();
const mongoose = require('mongoose');
//Initialize express
//Create an express application by calling the express function
const app = express();

//DATABASE CONNECTION
//Dotenv will load our connection details, 
//from the configuration file into Node’s process.env.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

  //CONFIGURATION SETTINGS
//Setting the view engine to pug
app.set('view engine', 'pug')
//views is the folder where we shall be having our pug files & set path to views
app.set('views', path.join(__dirname, 'views')); 

//MIDDLEWARE SETTINGS
/*The urlencoded method within body-parser tells body-parser 
to extract data from the <form> element and add 
them to the body property in the request object.*/
app.use(bodyParser.urlencoded({ extended: true }));
/*Serving static files such as images, CSS files, and JavaScript files, 
using the express.static()*/
app.use(express.static(path.join(__dirname, 'public')));
//Using the routes for Agricultural Officer from routes directory
app.use('/', agricRoutes)
app.use('/', foRoutes)
app.use('/', ufRoutes)

//Serving the client with the 'Home' page
app.get('/welcome', (req, res) => {
  res.render('home');
}); 

//Serving the client with the 'Contact Us' page
app.get('/contactUfarm', (req, res) => {
  res.render('contactUfarm');
}); 

//Serving the client with the 'About Us' page
app.get('/aboutUfarm', (req, res) => {
  res.render('aboutUfarm');
}); 


//This gets the error page for any incorrect path
app.get('*', (req, res) => {
  res.send('error page');
}); 

app.listen(3000);
//() => console.log('listening on port 3000');
