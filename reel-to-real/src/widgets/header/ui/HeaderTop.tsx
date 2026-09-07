import './HeaderTop.css'

import { useAuth, useCart } from '@/entities/user'
import { RegisterModal } from '@/features/auth-by-sms'
import { ProfileModal } from '@/features/profile-modal'
import { Logo, Link, IconBadgeButton, Button } from '@/shared/ui'
import { useState, type ReactNode } from 'react'

type Props = {
  miniCartSlot: ReactNode,
  onToggleMiniCart: () => void
}

const HeaderTop = ({ miniCartSlot, onToggleMiniCart }: Props) => {
  const { user } = useAuth()
  const { cartItemsCount } = useCart()

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <div className='header-top'>
      <div className='header-top__store'>
        <Logo color='primary' style={{ marginRight: '8px' }} />
        <Link href='/shops' color='secondary' uppercase>магазины</Link>
        <Link href='/contacts' color='secondary' uppercase>контакты</Link>
      </div>

      <div className='header-top__user'>
        {user ?
          <>
            <IconBadgeButton
              figure={user?.favarite.length}
              badgeBackgroundColor='primary'>
              <img src="icons/favorite.svg" alt="❤️" />
            </IconBadgeButton>
            <IconBadgeButton
              figure={cartItemsCount}
              badgeBackgroundColor='accent'
              onClick={onToggleMiniCart}
            >
              <img src="icons/cart.svg" alt="🛒" />
            </IconBadgeButton>
            <Button forHeader onClick={() => setIsProfileOpen(true)}>
              <img src="/icons/user.svg" alt="👤" />
              кабинет
            </Button>
            {miniCartSlot}

            <ProfileModal
              isOpen={isProfileOpen}
              onClose={() => setIsProfileOpen(false)}
            />
          </>
          :
          <>
            <Button forHeader>
              <img src="icons/favorite.svg" alt="❤️" />
            </Button>
            <Button forHeader>
              <img src="/icons/cart.svg" alt="🛒" />
            </Button>
            <Button forHeader onClick={() => setIsLoginOpen(true)}>войти</Button>

            <RegisterModal
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />
          </>
        }
      </div>
    </div>
  )
}

export default HeaderTop