import { useAuth } from "./user.context"

export const useCart = () => {
  const { user, setUser } = useAuth()

  const updateQuantity = (id: number, delta: number) => {
    if (!user) return

    const updatedCart = user.cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) }
      }
      return item
    })

    setUser({ ...user, cart: updatedCart })
  }

  const removeFromCart = (id: number) => {
    if (!user) return
    const updatedCart = user.cart.filter(item => item.id !== id)
    setUser({ ...user, cart: updatedCart })
  }

  const totalPrice = user?.cart.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0

  return {
    cart: user?.cart || [],
    updateQuantity,
    removeFromCart,
    totalPrice,
    cartItemsCount: user?.cart.length || 0
  }
}