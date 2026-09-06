import './CollectionsLayout.css'
import { Outlet, useLocation } from 'react-router-dom'
import { Link } from '@/shared/ui'

const COLLECTIONS = [
  { id: 'microphones', label: 'Микрофоны', path: '/collections/microphones' },
  { id: 'for-studio', label: 'Для студии', path: '/collections/for-studio' },
]

export const CollectionsLayout = () => {
  const location = useLocation()

  return (
    <div className='collections-container'>
      <aside className="collections-sidebar">
        <nav className="collections-sidebar__nav">
          {COLLECTIONS.map((collection) => {
            const isActive = location.pathname === collection.path
            return (
              <Link
                key={collection.id}
                href={collection.path}
                color='primary'
                className={`catalog-sidebar__link ${isActive ? 'catalog-sidebar__link--active' : ''}`}
              >
                {collection.label}
              </Link>
            )
          })}
        </nav>
      </aside>
      <main className='collections-content'>
        <Outlet />
      </main>
    </div>
  )
} 