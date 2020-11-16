export type Post = {
  id: string;
  title: string;
  description: string;
};

const isPost = (arg: unknown): arg is Post => {
  const p = arg as Post;

  return (
    typeof p?.id === 'string' &&
    typeof p?.title === 'string' &&
    typeof p?.description === 'string'
  );
};

const isPosts = (args: unknown[]): args is Post[] => {
  return !args.some((arg) => {
    return !isPost(arg);
  });
};

export { isPost, isPosts };
