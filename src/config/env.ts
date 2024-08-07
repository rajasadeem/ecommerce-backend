import * as dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().required(),
  DB_DATABASE: Joi.string().required(),
  DB_HOST: Joi.string().hostname().required(),
  DB_PORT: Joi.number().port().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
})
  .unknown()
  .required();

// Validate environment variables
const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  NODE_ENV: envVars.NODE_ENV,
  PORT: envVars.PORT,
  DB: {
    DATABASE: envVars.DB_DATABASE,
    HOST: envVars.DB_HOST,
    PORT: envVars.DB_PORT,
    USERNAME: envVars.DB_USERNAME,
    PASSWORD: envVars.DB_PASSWORD,
  },
};

export default config;
