export interface IFindAll<T> {
  findAll: () => Promise<T>;
}

export interface IFindById<T> {
  findById: (id: string) => Promise<T>;
}

export interface IFindByUserId<T> {
  findByUserId: (userId: string) => Promise<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IFindByPrimaryKey<T, U extends { [key: string]: any }> {
  findByPrimaryKey: (params: U) => Promise<T>;
}

export interface IIsExistsByFields {
  isExistsByFields: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: { [key: string]: any },
  ) => Promise<boolean>;
}

export interface IFindByFields<T> {
  findByFields: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: { [key: string]: any },
  ) => Promise<T[]>;
}

export interface IFindByConditions<T> {
  findByConditions: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    conditions: [string, string, any][],
  ) => Promise<T[]>;
}

export interface ICreate<T> {
  create: (object: T) => Promise<T>;
}

export interface IUpdate<T> {
  update: (object: T) => Promise<T>;
}

export interface IUpsert<T> {
  upsert: (object: T) => Promise<T>;
}

export interface ISubscribeAll<T> {
  subscribeAll: (setter: (data: T) => void) => void;
}

export interface ISubscribeById<T> {
  subscribeById: (id: string, setter: (data: T) => void) => () => void;
}

export interface ISubscribeByUserId<T> {
  subscribeByUserId: (userId: string, setter: (data: T) => void) => () => void;
}

export interface ISetById<T> {
  setById: (id: string, setter: (data: T) => void) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ISubscribeByPrimaryKey<T, U extends { [key: string]: any }> {
  subscribeByPrimaryKey: (fields: U, setter: (data: T) => void) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ISubscribeByFields<T, U extends { [key: string]: any }> {
  subscribeByFields: (fields: U, setter: (data: T) => void) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ISubscribeNewData<T, U extends { [key: string]: any }> {
  subscribeNewData: (fields: U, setter: (data: T) => void) => void;
}

export interface IAbstract {
  getInterface: () => string;
}
