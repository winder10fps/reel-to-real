import Link from '../../shared/ui/Link/Link'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
      <span className="not-found__number">404</span>
      <div className="not-found__right">
        <div className="not-found__top-text">Ой! Что-то пошло не так</div>
        <div className="not-found__bottom-text">
          Попробуйте воспользоваться поиском
          или перейдите&nbsp;
          <Link href='/' color='accent' underline>на главную</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound