import Joi from "joi";

export const getDistanceSchema = Joi.object({
  locations: Joi.array().items(Joi.string()).required(),
});
