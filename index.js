const express = require('express');
//needs to be initialised, its a function
const path = require('path');
//built into node js to avoid mac/windows/linux diff paths e.g. /\

const {engine} = require('express-handlebars');
//lets us use handlebars

const app = express();
//app is our server

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
//setting internal variables 

//when app (server) gets a GET request to the '/' do this...

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/about', (req, res) =>{
    res.render('about');
});

app.get('/signup', (req, res) =>{
    res.render('signup');
});

app.get('/login', (req, res) =>{
    res.render('login'); //name of the file
});


app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
})

//all we need to set up a web server with express, worlds simplest web server

