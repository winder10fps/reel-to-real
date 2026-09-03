import { Button } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import './CheckoutButton.css'

type Props = {
  cartAmount: number,
  disabled?: boolean,
  className?: string
}

export const CheckoutButton = ({ cartAmount, disabled, className }: Props) => {
  const navigate = useNavigate()
  const handleCheckout = () => {
    navigate('/')
  }
  return (
    <div className={`checkout-container ${className}`}>
      <Button
        type='button'
        onClick={handleCheckout}
        stretched
        disabled={disabled}
      >
        Оформить заказ
      </Button>
      <div className="checkout__cart-amount">
        Итого:
        <span className='checkout__cart-amount-bold'> {cartAmount} ₽</span>
      </div>
    </div>
  )
}