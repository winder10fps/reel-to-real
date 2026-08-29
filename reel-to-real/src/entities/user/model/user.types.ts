export interface IUser {
  id: number,
  cart: number[],
  favarite: number[]
}

export interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}