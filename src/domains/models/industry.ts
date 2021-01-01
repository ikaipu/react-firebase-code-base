export type Industry = {
  id?: string;
  name: string;
};

const isIndustry = (arg: unknown): arg is Industry => {
  const o = arg as Industry;

  return typeof o?.id === 'string' && typeof o?.name === 'string';
};

const isIndustries = (args: unknown[]): args is Industry[] => {
  return !args.some((arg) => {
    return !isIndustry(arg);
  });
};

export { isIndustry, isIndustries };
