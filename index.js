const express = require('express');
//needs to be initialised, its a function

const app = express();

//when app receives a GET request to the index page, do this...
app.get('/', (req, res) => {
    res.sendFile('hello world!');
});

app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
})

//all we need to set up a web server with express, worlds simplest web server

