import { useEffect, useState } from 'react'
import './ToTop.css'

export const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibillity = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      }
      else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibillity)
    return () => window.removeEventListener('scroll', toggleVisibillity)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      className="to-top"
      onClick={scrollToTop}
      aria-label='Наверх'
    >
      <img src="/icons/arrow-small-up.svg" alt="🔝"/>
    </button>
  )
}