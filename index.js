'use strict';

import dotenv from 'dotenv';
import express from'express';

const app = express();
const env = dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { config } from './config/index.js';
import initWeb from './src/web.js';

initWeb(app)