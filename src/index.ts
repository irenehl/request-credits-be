import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRouter from './router/user.router';
import geoRouter from './router/geo.router';
import { connectToDatabase } from './database';
import s3Router from './router/s3.router';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT || 3000;

app.use('/users', userRouter);
app.use('/geo', geoRouter);
app.use('/s3', s3Router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed', error);
    process.exit(1);
  });
