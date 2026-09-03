import { Button, Input } from '@/shared/ui'
import React, { useEffect, useRef, useState } from 'react'
import './StepFormConfirm.css'
import { useAuth } from '@/entities/user'

type Props = {
  phone: string,
  onSuccess: () => void
}

const StepFormConfirm = ({ phone, onSuccess }: Props) => {
  const { setUser } = useAuth()
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [secconds, setSeconds] = useState(5)

  const inputRef = useRef<HTMLInputElement>(null)

  const checkAndSubmitCode = (currentCode: string) => {
    // заглушка запроса к серверу
    if (currentCode === '1111') {
      setUser({
        id: 1,
        cart: [
          {
            id: 1,
            nameing: 'Neumann TLM 102 BK',
            price: 91890,
            quantity: 1,
          },
          {
            id: 2,
            nameing: 'Neumann TLM 102 BK',
            price: 91890,
            quantity: 1,
          },
          {
            id: 3,
            nameing: 'Neumann TLM 102 BK',
            price: 91890,
            quantity: 1,
          },
          {
            id: 4,
            nameing: 'Neumann TLM 102 BK',
            price: 91890,
            quantity: 1,
          },
          {
            id: 5,
            nameing: 'Neumann TLM 102 BK',
            price: 91890,
            quantity: 1,
          },
          {
            id: 6,
            nameing: 'Neumann TLM 102 BK',
            price: 91890,
            quantity: 1,
          },
          {
            id: 7,
            nameing: 'Neumann TLM 102 BK',
            price: 91890,
            quantity: 1,
          }
        ],
        favarite: []
      })
      onSuccess()
    }
    else {
      setError(true)
      setCode('')
      inputRef.current?.blur()
    }
  }

  const handleSubmitForm = (e: React.SubmitEvent) => {
    e.preventDefault()
    checkAndSubmitCode(code)
  }

  const handleResent = () => {
    alert(phone)
    setSeconds(5)
  }

  useEffect(() => {
    if (code.length === 4) {
      checkAndSubmitCode(code)
    }
  }, [code])

  useEffect(() => {
    if (secconds < 1) return

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [secconds])

  return (
    <form onSubmit={handleSubmitForm} className='confirm-form'>
      <p className="confirm-form__text">введите код из VK, Telegram или SMS</p>
      <Input
        ref={inputRef}
        placeholder='Введите код'
        value={code}
        errored={error}
        maxLength={4}
        onChange={(e) => {
          setCode(e.target.value)
          setError(false)
        }}
      />
      {secconds > 0 ? (
        <span
          className="confirm-form__timer">
          Запросить код в SMS: {secconds} с.
        </span>
      ) : (
        <Button
          size='small'
          notFilled
          onClick={handleResent}
        >
          Запросить в SMS
        </Button>
      )}
    </form>
  )
}

export default StepFormConfirm