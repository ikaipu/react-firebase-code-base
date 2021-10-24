import Joi from 'joi';

export type BaseModelProps = {
  id: string;
};

export const baseModelPropsFormat = {
  id: Joi.string().min(1).required(),
};
