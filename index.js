'use strict';

const dotenv = require('dotenv');
const express = require('express');

const app = express();
const env = dotenv.config();

const { config }  = require('./config');
console.log(config)
app.use(express.json());

require('./src/web')(app);