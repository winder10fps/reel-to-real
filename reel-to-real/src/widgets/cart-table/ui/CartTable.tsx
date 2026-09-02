import { CartItemRow } from '@/entities/cart-item'
import { useAuth } from '@/entities/user'
import './CartTable.css'
import { CheckoutButton } from '@/features/create-order'

export const CartTable = () => {
  const { user, setUser } = useAuth()

  const userCart = user?.cart || []

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

  const handleRemoveItem = (id: number) => {
    if (!user) return
    const updatedCart = user.cart.filter(item => item.id !== id)
    setUser({ ...user, cart: updatedCart })
  }

  const countCartAmount = () => {
    if (!userCart) return 0

    let amount = 0
    userCart.map((item) => (
      amount += item.price * item.quantity
    ))

    return amount
  }

  return (
    <div className='cart-table-widget'>
      {userCart.length > 0 ?
        <table className='cart-table'>
          <thead>
            <tr>
              <th className='col-image'>Фото</th>
              <th className='col-naming'>Название</th>
              <th className='col-price'>Цена</th>
              <th className='col-quantity'>Кол-во</th>
              <th className='col-amount'>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {userCart?.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onIncrease={(id) => updateQuantity(id, 1)}
                onDecrease={(id) => updateQuantity(id, -1)}
                onRemove={handleRemoveItem}
              />
            ))}
          </tbody>
        </table>
        :
        <div className="cart-table-empty">
          В корзине пусто. Начните добавлять товары.
        </div>
      }
      <div className="cart-table-widget__footer">
        <CheckoutButton
          cartAmount={countCartAmount()}
          disabled={userCart?.length === 0}
        />
      </div>
    </div>
  )
}