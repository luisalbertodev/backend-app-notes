require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./database');

// Initializaions
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

//Static files

module.exports = app;
