import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morganMiddleware from '@config/morgan';
import errorHandler from '@middlewares/error';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

app.get('/', (_, res) => {
  return res.send('Server Running!');
});

app.use(errorHandler);

export default app;
