// import express in my project
const { request } = require('express');
const express = require('express');

// instance our runing express
const app = express();

// create router
app.get('/', function(req, res) {
    const home = 'Page Home'
    res.send(`It is ${home}`);
});

app.get('/profile', function(req, res) {
    const profile = 'Aspiring Programmer'
    res.send(`Profile: ${profile}`);
});

app.get('/graduate', function(req, res) {
    res.send('Graduate: System for Internet');
});

app.get('/work', function(req, res) {
    const work = 'Monitoring Analyst'
    res.send(`Work: ${work}`);
});

app.get('/contact', function(req, res) {
    const contact = '+55(00)00000-0000'
    res.send(`Contact: ${contact}`);
});

// start server
app.listen(8080, (erro) => {
    if(erro) {
        console.log('ops, server can not up...');
    } else {
        console.log('server runing in adress: http://localhost:8080')
    }
});
