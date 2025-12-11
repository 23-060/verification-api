import Joi from 'joi';

export const verifySchema = Joi.object({
  report_id: Joi.number().required(),
  claimant_id: Joi.number().required(),
  proof: Joi.string().uri().required()
});

export const validateVerification = (req, res, next) => {
  const { error } = verifySchema.validate(req.body);
  if (error) return res.status(422).json({ error: error.message });
  next();
};
