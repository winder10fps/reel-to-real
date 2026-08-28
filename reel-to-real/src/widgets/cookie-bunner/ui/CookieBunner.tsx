import { Button } from '@/shared/ui'
import { useEffect, useState } from 'react'
import './CookieBunner.css'

export const CookieBunner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-accept')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-accept', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className='cookie-bunner'>
      <h3 className="cookie-bunner__heading">Мы используем куки для улучшения работы сайта</h3>
      <p className="cookie-bunner__text">Оставаясь на сайте, вы соглашаетесь на использование файлов куки</p>
      <Button
        className='cookie-bunner__button'
        notFilled
        onClick={handleAccept}
      >
        ОК
      </Button>
    </div>
  )
}