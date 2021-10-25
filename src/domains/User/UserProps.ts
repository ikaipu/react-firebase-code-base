import { baseModelPropsFormat } from 'domains/BaseModel/BaseModelProps';
import {
  TimestampProps,
  timestampPropsFormat,
} from 'domains/BaseModel/TimeStampProps';
import Joi from 'joi';

export type UserProps = {
  name: string;
  address: string;
  phoneNumber: string | null;
  industry: string;
  description: string | null;
} & TimestampProps;

export const userPropsFormat = {
  name: Joi.string().required(),
  address: Joi.string().required(),
  phoneNumber: Joi.string(),
  industry: Joi.string().required(),
  description: Joi.string(),
  ...baseModelPropsFormat,
  ...timestampPropsFormat,
};
