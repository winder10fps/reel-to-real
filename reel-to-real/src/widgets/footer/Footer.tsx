import Link from '../../shared/ui/Link/Link'
import Logo from '../../shared/ui/Logo/Logo'
import './Footer.css'
import FooterMenu from './ui/FooterMenu/FooterMenu'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <Logo color='surface-default' />
        <FooterMenu
          heading='каталог'
          items={[
            { text: 'винил', href: '/' },
            { text: 'касеты', href: '/' },
            { text: 'аппаратура', href: '/' },
          ]}
        />
        <FooterMenu
          heading='клиентам'
          items={[
            { text: 'доставка', href: '/' },
            { text: 'возврат', href: '/' },
            { text: 'FAQ', href: '/' },
          ]}
        />
        <FooterMenu
          heading='контакты'
          items={[
            { text: 'Email: hi@reeltoreal.ru', href: '/' },
            { text: 'Телефон: +7 123 456-78-90', href: '/' },
            { text: 'Адрес: СПб, Невский пр-т, 59', href: '/' },
          ]}
        />
      </div>
      <div className="footer-bottom">
        <span className="footer-bottom__copyright">© 2024 Reel to Real. Все права защищены.</span>
        <div className='footer-bottom__links'>
          <Link color='secondary' href='/policy'>Политика конфиденциальности</Link>
          <Link color='secondary' href='/conditions'>Условия использования</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer