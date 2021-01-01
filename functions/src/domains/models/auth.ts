export type Auth = {
  id: string;
  email: string;
} | null;

const isAuth = (arg: unknown): arg is Auth => {
  const o = arg as Auth;

  return (
    o === null || (typeof o?.id === 'string' && typeof o?.email === 'string')
  );
};

export { isAuth };
