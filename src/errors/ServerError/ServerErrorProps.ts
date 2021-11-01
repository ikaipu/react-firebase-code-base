import { ExceptionType } from 'errors/ErrorMessage/ErrorMessage';
import Joi from 'joi';

export type ServerErrorProps = {
  code: string;
  exceptionType: ExceptionType;
  message: string;
};

export const serverErrorPropsFormat = {
  code: Joi.string().required(),
  message: Joi.string().required(),
  exceptionType: Object.keys(ExceptionType)
    .reduce((joi, type) => joi.valid(type), Joi.string())
    .required(),
};
