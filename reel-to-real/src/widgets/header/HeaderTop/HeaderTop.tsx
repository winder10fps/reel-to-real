import './HeaderTop.css'
import { useAuth } from '../../../entities/user/model/user.context'
import Button from '../../../shared/ui/Button/Button'
import IconBadgeButton from '../../../shared/ui/IconBadgeButton/IconBadgeButton'
import Link from '../../../shared/ui/Link/Link'
import Logo from '../../../shared/ui/Logo/Logo'

const HeaderTop = () => {
  const { user } = useAuth()

  const loginButtonClick = () => {
    alert('login clicked')
  }

  const profileButtonCLick = () => {
    alert('profile clicked')
  }

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
              figure={user?.cart.length}
              badgeBackgroundColor='accent'>
              <img src="icons/cart.svg" alt="🛒" />
            </IconBadgeButton>
            <Button forHeader onClick={profileButtonCLick}>
              <img src="/icons/user.svg" alt="👤" />
              кабинет
            </Button>
          </>
          :
          <>
            <Button forHeader>
              <img src="icons/favorite.svg" alt="❤️" />
            </Button>
            <Button forHeader>
              <img src="/icons/cart.svg" alt="🛒" />
            </Button>
            <Button forHeader onClick={loginButtonClick}>войти</Button>
          </>
        }
      </div>
    </div>

  )
}

export default HeaderTop