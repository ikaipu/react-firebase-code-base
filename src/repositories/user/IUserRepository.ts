import { User } from 'domains/User/User';
import { ICreate, ISubscribeById } from 'repositories/interface/IRepository';

type IUserSubscribeById = ISubscribeById<User | null>;
type IUserCreate = ICreate<User>;

export type IUserQueryRepository = IUserSubscribeById;
export type IUserCreateRepository = IUserCreate;
// export type IUserUpdateRepository = IUserUpdate;

type IUserRepository = IUserQueryRepository & IUserCreate;

export default IUserRepository;
