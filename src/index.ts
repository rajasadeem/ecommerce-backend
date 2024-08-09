import 'reflect-metadata';
import 'module-alias/register';
import app from 'app';
import logger from '@config/logger';
import config from '@config/env';
import AppDataSource from 'data-source';

const PORT = config.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    logger.info('Database connection established successfully.');
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error('Error during Data Source initialization:', error);
    process.exit(1);
  });
