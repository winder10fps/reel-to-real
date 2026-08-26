import { ShopFilters, ShopsList, useShopFilters } from '@/widgets/shops-content'
import type { Shop } from '@/entities/shop'

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

export const ShopsContent = () => {
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
    <>
      <ShopFilters
        query={query}
        openNow={openNow}
        nearby={nearby}
        onQueryChange={setQuery}
        onOpenNowChange={setOpenNow}
        onNearbyChange={setNearby}
      />
      <ShopsList shopsList={filteredShops} />
    </>
  )
}