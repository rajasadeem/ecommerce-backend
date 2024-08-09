import Joi from 'joi';

class AuthValidation {
  public CreateUser = {
    body: Joi.object({
      firstName: Joi.string().trim().required(),
      lastName: Joi.string().trim().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      profileLogo: Joi.string().uri().optional(),
    }),
  };
}

export default AuthValidation;
