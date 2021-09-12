import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'Input is required',
    oneOf: 'Password is not matched',
    notType: 'Input is invalid',
  },
  string: {
    email: 'Email address is invalid',
  },
  number: {
    integer: 'Enter an integer value',
    min: ({ min }) => `Enter a number greater than or equal to ${min}`,
    max: ({ max }) => `Enter a number less than or equal to ${max}`,
  },
});
