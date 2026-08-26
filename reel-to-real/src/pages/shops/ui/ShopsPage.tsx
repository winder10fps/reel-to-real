import { ShopsContent } from '@/widgets/shops-content'
import './ShopsPage.css'

export const ShopsPage = () => {
  return (
    <div className='shops-page'>
      <h2 className='page-heading'>Магазины</h2>
      <ShopsContent />
    </div>
  )
}