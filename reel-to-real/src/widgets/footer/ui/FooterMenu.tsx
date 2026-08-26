import { Link } from '@/shared/ui'
import './FooterMenu.css'

type FooterMenuItem = {
  text: string,
  href: string
}

type Props = {
  heading: string,
  items: FooterMenuItem[]
}

const FooterMenu = ({ heading, items }: Props) => {
  return (
    <div className='footer-menu'>
      <h3 className="footer-menu__heading">{heading}</h3>
      <ul className='footer-menu__list'>
        {items.map((el) => (
          <li key={el.text}>
            <Link
              href={el.href}
              color='surface-default'
              className='footer-menu__link'
            >
              {el.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterMenu