import type { CartItem } from '@/entities/cart-item'
import './CartItemRow.css'
import { Stepper } from '@/shared/ui'

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
        <Stepper
          quantity={item.quantity}
          size='default'
          onIncrease={() => onIncrease(item.id)}
          onDecrease={() => onDecrease(item.id)}
        />
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