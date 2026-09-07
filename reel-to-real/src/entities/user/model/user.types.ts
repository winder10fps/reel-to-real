import type { CartItem } from "@/entities/cart-item";

export interface IUser {
  id: number,
  phone: string,
  cart: CartItem[],
  favarite: number[]
}

export interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}