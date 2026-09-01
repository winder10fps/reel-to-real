import { CartTable } from '@/widgets/cart-table'
import './CartPage.css'

export const CartPage = () => {
  return (
    <div className='cart-page'>
      <h2 className='page-heading'>Корзина</h2>
      <CartTable />
    </div>
  )
}