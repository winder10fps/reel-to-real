import { OrderCartItem } from "@/entities/cart-item"
import { useCart } from "@/entities/user"
import './UsersOrder.css'

export const UsersOrder = () => {
  const { cart, totalPrice } = useCart()
  const DELIVERY_PRICE = 1500

  return (
    <div className="users-order">
      {cart.map((item) => (
        <OrderCartItem
          item={item}
        />
      ))}

      <div className="users-order__money">
        <div className="users-order__amount">
          <span>Сумма</span>
          <span>{totalPrice.toLocaleString()} ₽</span>
        </div>
        <div className="users-order__delivery">
          <span>Доставка</span>
          <span>{DELIVERY_PRICE.toLocaleString()} ₽</span>
        </div>
        <div className="users-order__total">
          <span>Итого</span>
          <span>{(totalPrice + DELIVERY_PRICE).toLocaleString()} ₽</span>
        </div>
      </div>
    </div>
  )
}