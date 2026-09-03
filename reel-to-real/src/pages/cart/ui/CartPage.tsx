// src/pages/cart/ui/CartPage.tsx
import { CartTable } from '@/widgets/cart-table'
import './CartPage.css'
import { CheckoutButton } from '@/features/create-order'
import { useCart } from '@/entities/user'

export const CartPage = () => {
  const { cart, totalPrice } = useCart()

  return (
    <div className='cart-page'>
      <div className="container">
        <h2 className='page-heading'>Корзина</h2>
        <CartTable />
      </div>
      <div className='cart-page__ckeckout-button'>
        <CheckoutButton
          cartAmount={totalPrice}
          disabled={cart.length === 0}
        />
      </div>
    </div>
  )
}
