import { useCart } from '@/entities/user'
import './MiniCart.css'
import { useEffect } from 'react'
import { MiniCartItem } from '@/entities/cart-item'
import { Button } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'

type Props = {
  isOpen: boolean,
  onClose: () => void
}

export const MiniCart = ({ isOpen, onClose }: Props) => {
  const { cart, updateQuantity, removeFromCart, totalPrice, cartItemsCount } = useCart()

  const navigate = useNavigate()

  const navButtonClick = () => {
    onClose()
    navigate('/cart')
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='mini-cart__overlay'>
      <div className='mini-cart'>
        <div className='mini-cart__header'>
          <h4 className='mini-cart__heading'>
            Корзина
            <sup className="mini-cart__cart-items"> {cartItemsCount}</sup>
          </h4>
          <button
            className="mini-cart__close-button"
            onClick={onClose}>
            <img src="/icons/close-1.svg" alt="×" />
          </button>
        </div>
        <div className='mini-cart-items'>
          {cart.map((item) => (
            <MiniCartItem
              key={item.id}
              item={item}
              onIncrease={(id) => updateQuantity(id, 1)}
              onDecrease={(id) => updateQuantity(id, -1)}
              onRemove={removeFromCart}
            />
          ))}
        </div>
        <div className="mini-cart__footer">
          <div className="mini-cart__total-price">
            <div>Итог</div>
            <div>{totalPrice.toLocaleString()} ₽</div>
          </div>
          <Button
            className='mini-cart__navigate-button'
            type='button'
            onClick={navButtonClick}
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  )
}