//Importing packages/modules, models, routes
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const mongoose = require('mongoose');
const aoRoutes = require('./routes/aoRoutes');
const foRoutes = require('./routes/foRoutes')
const ufRoutes = require('./routes/ufRoutes')
const loginRoutes = require('./routes/loginroutes')
const orderRoutes = require('./routes/orderRoutes')
const Users = require('./models/Users')

const expressSession = require('express-session')({
  secret: 'secret', //signs the session ID cookie(should be unique value) 
  resave: false, //forces the session to be saved back to the session store
  saveUninitialized: false //forces a session that is “uninitialized” to be saved to the store.
});
const passport = require('passport');

//Initialize express
//Create an express application by calling the express function
const app = express();

//DATABASE CONNECTION
//Dotenv will load our connection details, 
//from the configuration file into Node’s process.env.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
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
app.use(expressSession);
//Initialize passport along with its session authentication middleware, 
//directly inside our Express app.
app.use(passport.initialize());
app.use(passport.session());

// Passport configurations
passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

//Using the routes for different users from routes directory
app.use('/', aoRoutes);
app.use('/', foRoutes);
app.use('/', ufRoutes);
app.use('/', loginRoutes);
app.use('/', orderRoutes);


//Serving the client with the 'Home' page
app.get('/welcome', (req, res) => {
  res.render('home');
}); 

app.get('/', (req, res) => {
  res.render('home2');
}); 

//Serving the client with the 'Contact Us' page
app.get('/contactUfarm', (req, res) => {
  res.render('contactUfarm');
}); 

//Serving the client with the 'About Us' page
app.get('/aboutUfarm', (req, res) => {
  res.render('aboutUfarm');
}); 

app.get('/productDash', (req, res) => {
  res.render('productDash');
}); 




//Log out a user
app.post('/logout', (req, res) => {
  if (req.session) {
      req.session.destroy((err)=> {
          if (err) {
              // failed to destroy session
          } else {
              return res.redirect('/login');
          }
      })
  }  
})


//This gets the error page when an incorrect path is requested
app.get('*', (req, res) => {
  res.render('errorPage');
}); 

app.listen(3000);
//() => console.log('listening on port 3000');
