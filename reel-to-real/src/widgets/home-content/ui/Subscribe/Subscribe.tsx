import { Button, Input } from '@/shared/ui'
import './Subscribe.css'
import { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [isEmailErrored, setIsEmailErrored] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const [text, setText] = useState('Мы будем присылать вам обзоры аппаратуры, промокоды и интересные новости')

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubscribe = async (e: React.SubmitEvent) => {
    e.preventDefault()
    setIsEmailErrored(false)

    if (!validateEmail(email)) {
      setText('Некорректный Email')
      setIsEmailErrored(true)
      return
    }

    setStatus('loading')
    try {
      // имитация запроса
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setText('Спасибо за подписку! Мы будем присылать вам обзоры аппаратуры, промокоды и интересные новости на почту ' + email)
      setEmail('')
    }
    catch {
      setStatus('error')
      setText('Произошла ошибка, попробуйте снова')
    }
  }

  return (
    <section className='subscribe'>
      <h2 className="subscribe__heading">Подписка на рассылку</h2>
      <p className='subscribe__text'>{text}</p>
      <form onSubmit={handleSubscribe}>
        <Input
          placeholder='Ваш E-mail'
          disabled={status !== 'idle' && status !== 'error'}
          errored={isEmailErrored}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (isEmailErrored) {
              setIsEmailErrored(false)
              setText('Мы будем присылать вам обзоры аппаратуры, промокоды и интересные новости')
            }
          }}
        />
        <Button
          type='submit'
          disabled={status !== 'idle'}
        >
          Подписаться
        </Button>
      </form>
    </section>
  )
}

export default Subscribe