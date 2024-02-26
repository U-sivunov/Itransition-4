const express = require("express");
const fs = require('fs')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cr =  require('crypto');
let mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task4'
});

connection.connect(function(err) {
    if (err) {
        return console.error('ошибка: ' + err.message);
    }

    console.log('Подключились к базе данных MySQL');
});

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

function getUsers() {
    const usersArray = fs.readFileSync('usersData.json','utf8');
    return JSON.parse(usersArray);
}

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login-error', // Redirect on failure
}), (req, res) => {
    // Successful authentication, redirect to protected route or home page
    res.redirect('/');
});

app.get('/test', (req,res) => {
    res.setHeader('Content-Type', 'application/json; charset=ISO-8859-1');
    res.json(getUsers());
    res.end();
    console.log(`POSTtt`);
});

app.get('/users', (req,res) => {
    res.setHeader('Content-Type', 'application/json; charset=ISO-8859-1');
    res.json(getUsers());
    res.end();
});

app.listen(PORT, () => {

});