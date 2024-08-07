import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morganMiddleware from '@config/morgan';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

app.get('/', (_, res) => {
  return res.send('Server Running!');
});

export default app;
