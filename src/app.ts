import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from '@config/env';
import morgan from '@config/morgan';

const { NODE_ENV } = config;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

if (NODE_ENV !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.get('/', (_, res) => {
  return res.send('Server Running!');
});

export default app;
