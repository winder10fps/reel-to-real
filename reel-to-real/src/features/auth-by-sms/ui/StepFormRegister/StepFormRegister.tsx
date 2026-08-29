import { validatePhone } from '@/shared/lib'
import { Button, Input } from '@/shared/ui'
import React, { useRef, useState } from 'react'
import './StepFormRegister.css'

type Props = {
  onSuccess: (phone: string) => void
}

const StepFormRegister = ({ onSuccess }: Props) => {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()

    if (validatePhone(phone)) {
      onSuccess(phone)
    }
    else {
      setError(true)
      inputRef.current?.blur()
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form-register'>
      <Input
        ref={inputRef}
        placeholder='Ваш телефон'
        value={phone}
        errored={error}
        onChange={(e) => {
          setPhone(e.target.value)
          setError(false)
        }}
      />
      <Button type='submit' size='small'>Войти</Button>
    </form>
  )
}

export default StepFormRegister