import Search from '../../../features/Search/Search'
import Link from '../../../shared/ui/Link/Link'
import Select from '../../../shared/ui/Select/Select'
import './HeaderBottom.css'

const HeaderBottom = () => {

  return (
    <div className='header-bottom'>
      <Select
        title='каталог'
        iconPath='/icons/burger.svg'
        options={[
          { title: 'Проигрыватели', href: '/' },
          { title: 'Микрофоны', href: '/' },
          { title: 'Акустические системы', href: '/' },
          { title: 'Виниловые пластинки', href: '/' },
          { title: 'Портативный Hi-Fi', href: '/' },
          { title: 'Студийное оборудование', href: '/' },
          { title: 'Наушники', href: '/' },
          { title: 'Усилители', href: '/' },
          { title: 'Внешние ЦАПы', href: '/' },
          { title: 'Саундбары', href: '/' },
        ]}
      />
      <Select
        title='коллекции'
        options={[
          { title: 'Микрофоны для записи вокала', href: '/' },
          { title: 'Для студии', href: '/' },
          { title: 'Недорогие проигрыватели винила', href: '/' },
          { title: 'Лучшие наушники до 10000 ₽', href: '/' },
          { title: 'Винтажный звук', href: '/' },
          { title: 'Набор новичка', href: '/' },
          { title: 'Внешние ЦАПы', href: ' /' },
        ]}
        haveBorders
      />
      <Search />
      <Link
        href="tel:8-800-456-78-90"
        className='header-bottom__phone'
        color='primary'
      >
        8-800-456-78-90
      </Link>
    </div>
  )
}

export default HeaderBottom