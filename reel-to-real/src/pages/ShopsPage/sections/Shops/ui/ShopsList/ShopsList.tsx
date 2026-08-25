import type { Shop } from "../../../../../../entities/shop/model/shop"
import ShopCard from "../ShopCard/ShopCard"
import './ShopsList.css'

type ShopsListProps = {
  shopsList: Shop[]
}

const ShopsList = ({ shopsList }: ShopsListProps) => {
  return (
    <div className="shops-list">
      <div className="shops-list__left">
        {
          shopsList.length > 0 ?
            shopsList.map((shop) =>
              <ShopCard
                key={shop.naming}
                shop={shop}
              />
            )
            :
            <div className="shops-not-found">Ничего не найдено</div>
        }
      </div>

      <img className="shops-map" src="/images/shops-map.jpg" alt="Карта" />
    </div>
  )
}

export default ShopsList