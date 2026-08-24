import type { Shop } from "../../../../entities/shop/model/shop"
import ShopCard from "./ui/ShopCard/ShopCard"
import './Shops.css'

const Shops = () => {
  const shops: Shop[] = [
    {
      naming: 'Приморский',
      address: 'г. Санкт-Петербург, Комендантская площадь, 1 лит А​-3-6 этаж',
      metro: { color: 'purple', line: 'Комендантский проспект' },
      workingHours: 'Ежедневно с 10:00 до 22:00'
    },
    {
      naming: 'Ладожский',
      address: 'г. Санкт-Петербург, Заневский проспект, 65 к1 лит А',
      metro: { color: 'orange', line: 'Ладожская' },
      workingHours: 'Ежедневно с 10:00 до 22:00'
    },
    {
      naming: 'Калининский',
      address: 'г. Санкт-Петербург, Проспект Науки, 21 к1​',
      metro: { color: 'red', line: 'Академическая' },
      workingHours: 'Ежедневно с 10:00 до 22:00'
    },
  ]

  return (
    <section className="shops">
      <div className="shops-left">
        {shops.map((shop) =>
          <ShopCard
            key={shop.naming}
            shop={shop}
          />
        )}
      </div>

      <img className="shops-map" src="/images/shops-map.jpg" alt="Карта" />
    </section>
  )
}

export default Shops