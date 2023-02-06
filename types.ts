type ReqUser = {
  name: string,
  email: string
};

type User = {
  id: string,
  name: string,
  email: string
};

type DbArray = User[]

export { ReqUser, User, DbArray }