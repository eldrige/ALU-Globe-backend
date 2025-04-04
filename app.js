import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import AppError from './utils/appError.js';
import userRouter from './routes/user-routes.js';

const app = express();

app.use(cors());
app.use(express.json({}));
app.use(morgan('dev'));
app.use('/users', userRouter);

app.get('/', (req, res) => res.send('Welcome to ALU-Globe API!'));

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

export default app;
