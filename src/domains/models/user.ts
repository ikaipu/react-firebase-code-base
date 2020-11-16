export type User = {
  uid: string;
  email: string;
} | null;

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return (
    u === null || (typeof u?.uid === 'string' && typeof u?.email === 'string')
  );
};

export { isUser };
