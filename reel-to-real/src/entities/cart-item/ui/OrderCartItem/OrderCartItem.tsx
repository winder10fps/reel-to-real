import type { CartItem } from '@/entities/cart-item'
import './OrderCartItem.css'

type Props = {
  item: CartItem,
  className?: string
}

export const OrderCartItem = ({ item, className }: Props) => {
  return (
    <div className={`order-cart-item ${className}`}>
      <img className='order-cart-item__image' src={item.image} alt="?" />
      <div className="order-cart-item__nameing">{item.nameing}</div>
      <div className="order-cart-item__quantity">{item.quantity} шт</div>
      <div className="order-cart-item__price">
        {(item.price * item.quantity).toLocaleString()} ₽
      </div>
    </div>
  )
}