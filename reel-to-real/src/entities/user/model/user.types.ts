export interface IUser {
  id: number,
  name: string,
  cart: number[],
  favarite: number[]
}

export interface IAuthContext {
  user: IUser | null
}