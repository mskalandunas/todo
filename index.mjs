import express from 'express';
import mongoose from 'mongoose';

import { baseRouter } from './router/index.mjs';

const app = express();
const url = 'mongodb://127.0.0.1:27017/make'

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection
  .once('open', () => console.log('hello db'))
  .on('error', err => {
    console.error('connection error:', err)
  });

app
  .use('/', baseRouter)
  .listen(3000, () => console.log('Server started'));
