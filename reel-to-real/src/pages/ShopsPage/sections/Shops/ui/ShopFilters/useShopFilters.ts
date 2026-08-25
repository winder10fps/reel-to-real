import { useMemo, useState } from "react"
import type { Shop } from "../../../../../../entities/shop/model/shop"

const isShopOpen = (workingHours: Shop['workingHours']) => {
  const now = new Date()

  const currentHours = now.getHours()
  const currentMinutes = now.getMinutes()
  const currentTimeInMinutes = currentHours * 60 + currentMinutes

  const [fromHours, fromMinutes] = workingHours.from.split(':').map(Number)
  const [toHours, toMinutes] = workingHours.to.split(':').map(Number)

  const fromTimeInMinutes = fromHours * 60 + fromMinutes
  const toTimeInMinutes = toHours * 60 + toMinutes

  return currentTimeInMinutes >= fromTimeInMinutes && currentTimeInMinutes <= toTimeInMinutes
}


export const useShopFilters = (shops: Shop[]) => {
  const [query, setQuery] = useState('')
  const [openNow, setOpenNow] = useState(false)
  const [nearby, setNearby] = useState(false)

  const filteredShops = useMemo(() => {
    return shops.filter((shop) => {
      // Фильтрация по поиску
      const matchesQuery =
        shop.naming.toLowerCase().includes(query.toLowerCase()) ||
        shop.address.toLowerCase().includes(query.toLowerCase()) ||
        shop.metro.line.toLowerCase().includes(query.toLowerCase())

      // Фильтрация по чекбоксу "Сейчас открыт"
      const matchesOpenNow = !openNow || isShopOpen(shop.workingHours)

      // 3. Фильтрация по чекбоксу "Рядом"
      // ЗАГЛУШКА: так как реальных координат нет, пока просто возвращаем true.
      // Когда появится API геопозиции, заменить true на функцию валидации расстояния.
      const matchesNearby = !nearby || true

      return matchesQuery && matchesOpenNow && matchesNearby
    })
  }, [query, openNow, nearby])

  return {
    query,
    setQuery,
    openNow,
    setOpenNow,
    nearby, 
    setNearby,
    filteredShops
  }
}