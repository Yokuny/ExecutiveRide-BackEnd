import Joi from "joi";

export const getDistanceSchema = Joi.object({
  origin: Joi.string().required(),
  destination: Joi.string().required(),
  intermediates: Joi.array().items(Joi.string()),
});
