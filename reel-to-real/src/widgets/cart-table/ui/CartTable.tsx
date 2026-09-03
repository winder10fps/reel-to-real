import { CartItemRow } from '@/entities/cart-item'
import { useCart } from '@/entities/user'
import './CartTable.css'

export const CartTable = () => {
  const { cart, updateQuantity, removeFromCart } = useCart()

  return (
    <div className='cart-table-widget'>
      {cart.length > 0 ?
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
            {cart.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onIncrease={(id) => updateQuantity(id, 1)}
                onDecrease={(id) => updateQuantity(id, -1)}
                onRemove={removeFromCart}
              />
            ))}
          </tbody>
        </table>
        :
        <div className="cart-table-empty">
          В корзине пусто. Начните добавлять товары.
        </div>
      }
    </div>
  )
}