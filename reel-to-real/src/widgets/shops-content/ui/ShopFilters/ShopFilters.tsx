import { Checkbox, SearchField } from "@/shared/ui"
import './ShopFilters.css'

type ShopsFiltersProps = {
  query: string
  openNow: boolean
  nearby: boolean
  onQueryChange: (value: string) => void
  onOpenNowChange: (value: boolean) => void
  onNearbyChange: (value: boolean) => void
}

export const ShopFilters = ({
  query,
  openNow,
  nearby,
  onQueryChange,
  onOpenNowChange,
  onNearbyChange
}: ShopsFiltersProps) => {
  return (
    <div className='shops-filters'>
      <SearchField
        value={query}
        placeholder='Название, адрес или метро'
        size='small'
        onChange={onQueryChange}
      />
      <Checkbox
        label='Сейчас открыт'
        checked={openNow}
        onChange={() => onOpenNowChange(!openNow)}
      />
      <Checkbox
        label='Рядом'
        checked={nearby}
        onChange={() => onNearbyChange(!nearby)}
      />
    </div>
  )
}