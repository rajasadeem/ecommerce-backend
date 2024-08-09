import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import logger from '@config/logger';
import ApiError from '@utils/ApiError';

const errorHandler: ErrorRequestHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let { status, message } = err;
  if (!err.isOperational) {
    status = 500;
    message = 'Internal server error';
  }

  res.locals.errorMessage = err.message;

  logger.error(err);

  res.status(status).json({ status, message });
};

export default errorHandler;
