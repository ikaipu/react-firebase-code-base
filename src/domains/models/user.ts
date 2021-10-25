import { isDate } from 'date-fns';
import { Base } from './base';

export type User = {
  name: string;
  address: string;
  phoneNumber: string | null;
  industry: string;
  description: string | null;
} & Base;

const isUser = (arg: unknown): arg is User => {
  const o = arg as User;

  return (
    o === null ||
    (typeof o?.id === 'string' &&
      typeof o?.name === 'string' &&
      typeof o?.address === 'string' &&
      (typeof o?.phoneNumber === 'string' || o?.phoneNumber === null) &&
      typeof o?.industry === 'string' &&
      (typeof o?.description === 'string' || o?.description === null) &&
      (isDate(o?.createdAt) || o?.createdAt === null) &&
      (isDate(o?.updatedAt) || o?.updatedAt === null))
  );
};

export { isUser };
