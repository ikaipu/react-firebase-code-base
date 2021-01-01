import { isDate } from 'date-fns';

export type Post = {
  id: string;
  name: string;
  description: string | null;
  postNum: number;
  viewedNum: number;
  userId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
};

const isPost = (arg: unknown): arg is Post => {
  const o = arg as Post;

  return (
    typeof o?.id === 'string' &&
    typeof o?.name === 'string' &&
    (typeof o?.description === 'string' || o?.description === null) &&
    typeof o?.postNum === 'number' &&
    typeof o?.viewedNum === 'number' &&
    (isDate(o?.createdAt) || o?.createdAt === null) &&
    (isDate(o?.updatedAt) || o?.createdAt === null)
  );
};

const isPosts = (args: unknown[]): args is Post[] => {
  return !args.some((arg) => {
    return !isPost(arg);
  });
};

export { isPost, isPosts };
