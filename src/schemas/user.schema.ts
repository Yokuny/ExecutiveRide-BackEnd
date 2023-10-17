import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string().min(6).max(26).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/)
    .required(),
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/)
    .required(),
});
