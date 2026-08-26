import { Button } from '@/shared/ui'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
      <img className="hero-section__image" src="/images/hero-image.jpg" alt="" />
      <div className="hero-section__right">
        <h1 className="hero-section__heading">Звук, который можно потрогать</h1>
        <p className="hero-section__text">Reel to Real — портал в эпоху аналогового звука. Редкие виниловые пластинки и отреставрированная аппаратура для тех, кто ценит живой звук.</p>
        <Button
          className="hero-section__button"
          notFilled>
          Исследовать коллекцию
        </Button>
        <img className="hero-section__decor" src="/images/hero-decor.svg" alt="" />
      </div>
    </section>
  )
}

export default Hero