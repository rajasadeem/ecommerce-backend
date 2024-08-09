import { DataSource } from 'typeorm';
import config from '@config/env';

const { DATABASE, HOST, PASSWORD, PORT, USERNAME, LOGGING, SYNC } = config.DB;

const AppDataSource = new DataSource({
  type: 'postgres',
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  synchronize: SYNC,
  logging: LOGGING,
  entities: [__dirname + '/models/*.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  subscribers: [],
});

export default AppDataSource;
