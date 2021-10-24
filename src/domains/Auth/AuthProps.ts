import Joi from 'joi';

export type AuthProps = {
  id: string;
  email: string;
};

export const authPropsFormat = {
  id: Joi.string().min(1).required(),
  email: Joi.string()
    .email({
      allowUnicode: false,
      tlds: { allow: false },
    })
    .required(),
};
