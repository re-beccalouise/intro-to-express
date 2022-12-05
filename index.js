const express = require('express');
//needs to be initialised, its a function
const path = require('path');
//built into node js to avoid mac/windows/linux diff paths e.g. /\

const app = express();

//when app (server) gets a GET request to the '/' do this...

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
})

//all we need to set up a web server with express, worlds simplest web server

