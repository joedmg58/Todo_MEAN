const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.connect('mongodb://...');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
