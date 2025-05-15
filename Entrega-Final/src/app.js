import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

import env from './config/env.js';
import connectDB from './config/database.js';

const app = express();
const PORT = env.port||8080;
app.set("PORT", PORT);
app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);
// Listeners
connectDB(env.mongodb_url);
app.listen(app.get("PORT"), () => {
    console.log(`Server on port http://localhost:${env.port}`);
  });
