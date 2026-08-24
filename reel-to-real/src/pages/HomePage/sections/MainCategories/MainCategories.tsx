import './MainCategories.css'
import MainCategory from './ui/MainCategory/MainCategory'

const MainCategories = () => {
  const getProductsCount = () => {
    return {
      records: 11,
      cassettes: 25,
      players: 6,
      accessories: 31,
    }
  }

  const {
    records,
    cassettes,
    players,
    accessories
  } = getProductsCount()

  return (
    <section className="main-categories">
      <MainCategory
        icon='/icons/category1.svg'
        heading='Пластинки'
        productsCount={records}
        href='/'
      />
      <MainCategory
        icon='/icons/category2.svg'
        heading='Кассеты'
        productsCount={cassettes}
        href='/'
      />
      <MainCategory
        icon='/icons/category3.svg'
        heading='Проигрыватели'
        productsCount={players}
        href='/'
      />
      <MainCategory
        icon='/icons/category4.svg'
        heading='Аксессуары'
        productsCount={accessories}
        href='/'
      />
    </section>
  )
}

export default MainCategories