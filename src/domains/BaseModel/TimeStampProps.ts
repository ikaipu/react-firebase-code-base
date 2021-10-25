import Joi from 'joi';

export type TimestampProps = {
  createdAt?: number;
  updatedAt?: number;
};

export const timestampPropsFormat = {
  createdAt: Joi.number().empty(''),
  updatedAt: Joi.number().empty(''),
};
