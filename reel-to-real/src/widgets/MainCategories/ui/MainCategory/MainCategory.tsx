import './MainCategory.css'
import { formatWithEnding } from '../../../../shared/lib/format/formatWithEnding'
import Link from '../../../../shared/ui/Link/Link'

type Props = {
  heading: string,
  icon: string,
  productsCount: number,
  href: string
}

function MainCategory({ heading, icon, productsCount, href }: Props) {
  return (
    <div className="main-category">
      <div className='main-category__content'>
        <img className='main-categories__icon' src={icon} alt="🎶" />
        <h4 className='main-categories__heading'>{heading}</h4>
        <Link color='secondary' href={href}>{formatWithEnding(productsCount, 'товар')}</Link>
      </div>
    </div>
  )
}

export default MainCategory