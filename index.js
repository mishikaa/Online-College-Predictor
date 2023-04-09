require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const ejsMate = require('ejs-mate');

const {color} = require('console-log-colors');

// IMPORTING ROUTES
const BasicRoutes = require('./routes/basic');

const app = express();

// USING TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// setting up ejs-mate to add layouts
app.engine('ejs', ejsMate);

// SETTING THE PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, 'public')));


// MONGO CONNECTION
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Error handling for mongoose connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log(color.cyan.bold("DATABASE CONNECTED"));
})

app.use('/', BasicRoutes);

app.listen(3000,(req, res) => {
    console.log(color.cyan.bold("LISTENING ON PORT 3000"));
})