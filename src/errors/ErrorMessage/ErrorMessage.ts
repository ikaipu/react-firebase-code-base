import { ErrorCodeType } from '../ErrorHandler/ErrorCode.type';

export enum ExceptionType {
  // 400
  badRequest = 'badRequest',

  // 401
  unauthorized = 'unauthorized',
  invalidEmail = 'invalidEmail',
  userDisabled = 'userDisabled',
  wrongEmailOrPassword = 'wrongEmailOrPassword',
  tokenExpired = 'tokenExpired',
  manyRequests = 'manyRequests',

  // 500
  invalidDataFound = 'invalidDataFound',
  invalidArgument = 'invalidArgument',
  networkRequestFailed = 'networkRequestFailed',

  unknown = 'unknown',
}

export enum ErrorIdType {
  // 500
  DATABASE_DATA_NOT_FOUND_BY_ID = 'DATABASE_DATA_NOT_FOUND_BY_ID',
  DATABASE_DATA_NOT_FOUND_UNIQUE_KEY = 'DATABASE_DATA_NOT_FOUND_UNIQUE_KEY',
  DATABASE_INVALID_ARGUMENT_FIND_BY_FIELDS = 'DATABASE_INVALID_ARGUMENT_FIND_BY_FIELDS',
  DATABASE_INVALID_DATA_VIOLATE_UNIQUE_CONSTRAINT = 'DATABASE_INVALID_DATA_VIOLATE_UNIQUE_CONSTRAINT',
  INVALID_PROPS_DOMAIN_OBJECT_FACTORY = 'INVALID_PROPS_DOMAIN_OBJECT_FACTORY',
  INVALID_PROPS_ERROR_OBJECT_FACTORY = 'INVALID_PROPS_ERROR_OBJECT_FACTORY',
  INVALID_ARGUMENT_SWITCH = 'INVALID_ARGUMENT_SWITCH',
  INVALID_ARGUMENT_TYPE_GUARD = 'INVALID_ARGUMENT_TYPE_GUARD',
  INVALID_ARGUMENT_NUM_STRING = 'INVALID_ARGUMENT_NUM_STRING',
}

export const ERROR_MESSAGE: {
  [id: string]: { code: string; message: string; type: ExceptionType };
} = {
  /* *
   *
   * 50x-00xx General (Server Error)
   *
   * */

  // 500
  INVALID_PROPS_DOMAIN_OBJECT_FACTORY: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `Creation of %%domain%% is rejected. The reason is %%reason%%`,
    type: ExceptionType.invalidArgument,
  },

  DATABASE_DATA_NOT_FOUND_BY_ID: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `%%dataSource%% with %%id%% is not found.`,
    type: ExceptionType.invalidDataFound,
  },

  DATABASE_DATA_NOT_FOUND_UNIQUE_KEY: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `%%dataSource%% where %%params%% is not found at %%place%%.`,
    type: ExceptionType.invalidDataFound,
  },

  DATABASE_INVALID_ARGUMENT_FIND_BY_FIELDS: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `Invalid parameter %%params%% is specified at %%place%%.`,
    type: ExceptionType.invalidArgument,
  },

  DATABASE_INVALID_DATA_VIOLATE_UNIQUE_CONSTRAINT: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `More than one %%name%% whose %%key%% is %%value%% are detected.`,
    type: ExceptionType.invalidDataFound,
  },

  INVALID_DATA_VIOLATE_UNIQUE_CONSTRAINT: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `More than one %%name%% whose %%key%% is %%value%% are detected.`,
    type: ExceptionType.invalidDataFound,
  },

  INVALID_ARGUMENT_SWITCH: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `Invalid argument %%value%% is specified at %%place%%.`,
    type: ExceptionType.invalidArgument,
  },

  INVALID_ARGUMENT_TYPE_GUARD: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `Argument should be type %%type%%, but an invalid argument is specified at %%place%%.`,
    type: ExceptionType.invalidArgument,
  },

  INVALID_ARGUMENT_NUM_STRING: {
    code: ErrorCodeType.SERVER_ERROR,
    message: `Invalid numString '%%numString%%' is specified for commaSeparatedToNumber .`,
    type: ExceptionType.invalidArgument,
  },
};
