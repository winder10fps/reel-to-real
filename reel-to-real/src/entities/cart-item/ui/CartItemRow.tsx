import type { CartItem } from '@/entities/cart-item'
import './CartItemRow.css'

type Props = {
  item: CartItem,
  onIncrease: (id: number) => void,
  onDecrease: (id: number) => void,
  onRemove: (id: number) => void,
  className?: string
}

export const CartItemRow = ({ item, onIncrease, onDecrease, onRemove }: Props) => {
  return (
    <tr className='cart-item-row'>
      <td className='cart-item-row-image'>
        <img src={item.image} alt={item.nameing} />
      </td>
      <td className='cart-item-row-naming'>
        {item.nameing}
      </td>
      <td className='cart-item-row-price'>
        {item.price} ₽
      </td>
      <td className='cart-item-row-quantity'>
        <div className="quantity-controls">
          <button
            className="quantity-button"
            onClick={() => onDecrease(item.id)}
            disabled={item.quantity <= 1}
          >
            <img src="/icons/minus.svg" alt="-" />
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button
            className="quantity-button"
            onClick={() => onIncrease(item.id)}
          >
            <img src="icons/plus.svg" alt="+" />
          </button>
        </div>
      </td>
      <td className='cart-item-row-amount'>
        <div className='cart-item-row-amount__wrapper'>
          {item.price * item.quantity} ₽
          <button
            className='cart-item-row-amount__remove-btn'
            onClick={() => onRemove(item.id)}
          >
            Удалить
          </button>
        </div>
      </td>
    </tr>
  )
}