import type { Shop } from '@/entities/shop'
import ShopsList from './sections/Shops/ui/ShopsList/ShopsList'
import './ShopsPage.css'
import { useShopFilters } from './sections/Shops/ui/ShopFilters/useShopFilters'
import ShopFilters from './sections/Shops/ui/ShopFilters/ShopFilters'

const SHOPS: Shop[] = [
  {
    naming: 'Приморский',
    address: 'г. Санкт-Петербург, Комендантская площадь, 1 лит А​-3-6 этаж',
    metro: { color: 'purple', line: 'Комендантский проспект' },
    workingHours: {
      from: '10:00',
      to: '22:00',
      days: 'Ежедневно'
    }
  },
  {
    naming: 'Ладожский',
    address: 'г. Санкт-Петербург, Заневский проспект, 65 к1 лит А',
    metro: { color: 'orange', line: 'Ладожская' },
    workingHours: {
      from: '10:00',
      to: '22:00',
      days: 'Ежедневно'
    }
  },
  {
    naming: 'Калининский',
    address: 'г. Санкт-Петербург, Проспект Науки, 21 к1​',
    metro: { color: 'red', line: 'Академическая' },
    workingHours: {
      from: '10:00',
      to: '22:00',
      days: 'Ежедневно'
    }
  },
]

const ShopsPage = () => {
  const {
    query,
    setQuery,
    openNow,
    setOpenNow,
    nearby,
    setNearby,
    filteredShops
  } = useShopFilters(SHOPS)

  return (
    <div className='shops-page'>
      <h2 className='page-heading'>Магазины</h2>
      <ShopFilters
        query={query}
        openNow={openNow}
        nearby={nearby}
        onQueryChange={setQuery}
        onOpenNowChange={setOpenNow}
        onNearbyChange={setNearby}
      />
      <ShopsList shopsList={filteredShops} />
    </div>
  )
}

export default ShopsPage