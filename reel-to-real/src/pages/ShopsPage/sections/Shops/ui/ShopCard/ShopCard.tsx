import type { Shop } from '../../../../../../entities/shop/model/shop'
import Link from '../../../../../../shared/ui/Link/Link'
import './ShopCard.css'

export type Props = {
  shop: Shop
}

const ShopCard = ({ shop }: Props) => {
  return (
    <div className='shop-card'>
      <Link
        href={`https://2gis.ru/search/${shop.address}`}
        color='accent'
        className='shop-card__link'
        target='_blank'
      >
        Reel to Real {shop.naming}
      </Link>
      <div className="shop-card__metro">
        <div className={`shop-card__metro-round ${shop.metro.color}`} />
        <span className="shop-card__metro-line">{shop.metro.line}</span>
      </div>
      <span className="shop-card__address">{shop.address}</span>
      <span className="shop-card__working-hours">
        {`${shop.workingHours.days} с ${shop.workingHours.from} до ${shop.workingHours.to}`}
      </span>
    </div>
  )
}

export default ShopCard