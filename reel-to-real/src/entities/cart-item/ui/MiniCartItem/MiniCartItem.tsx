import type { CartItem } from '@/entities/cart-item'
import { Stepper } from '@/shared/ui'
import './MiniCartItem.css'

type Props = {
  item: CartItem,
  onIncrease: (id: number) => void,
  onDecrease: (id: number) => void,
  onRemove: (id: number) => void,
  className?: string
}

export const MiniCartItem = ({ item, onIncrease, onDecrease, onRemove }: Props) => {
  return (
    <div className='mini-cart-item'>
      <div className="mini-cart-item__top">
        <img className='mini-cart-item__image' src={item.image} alt="?" />
        <span>{item.nameing}</span>
        <button onClick={() => onRemove(item.id)}>
          <img src="icons/close-2.svg" alt="x" />
        </button>
      </div>
      <div className="mini-cart-item__bottom">
        <Stepper
          quantity={item.quantity}
          size='mini'
          onIncrease={() => onIncrease(item.id)}
          onDecrease={() => onDecrease(item.id)}
        />
        <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
      </div>
    </div>
  )
}