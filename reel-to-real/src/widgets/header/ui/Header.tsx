import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import './Header.css'
import type { ReactNode } from 'react'

type Props = {
  miniCartSlot: ReactNode,
  onToggleMiniCart: () => void
}

export const Header = ({ miniCartSlot, onToggleMiniCart }: Props) => {
  return (
    <header>
      <HeaderTop
        miniCartSlot={miniCartSlot}
        onToggleMiniCart={onToggleMiniCart}
      />
      <HeaderBottom />
    </header>
  )
}