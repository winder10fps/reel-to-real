import { Button, Checkbox, Input, Link, Textarea } from "@/shared/ui"
import { useState } from "react"
import './ContactsPage.css'
import { CompanyContacts } from "@/entities/company"
import { validatePhone } from "@/shared/lib"

type Error = {
  name: boolean,
  company: boolean,
  email: boolean,
  phone: boolean,
  message: boolean
  accept: boolean,
  errorMessage: string
}

export const ContactsPage = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isAccept, setIsAccept] = useState(false)


  const [error, setError] = useState<Error | null>(null)

  const sendForm = (e: React.SubmitEvent) => {
    e.preventDefault()

    const currentErrors: Error = {
      name: false,
      company: false,
      email: false,
      phone: false,
      message: false,
      accept: false,
      errorMessage: ''
    }

    if (name.trim().length < 2) {
      currentErrors.name = true
      currentErrors.errorMessage = 'Имя слишком короткое'
      setError(currentErrors)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      currentErrors.email = true
      currentErrors.errorMessage = 'Некоректный E-mail'
      setError(currentErrors)
      return
    }

    if (!validatePhone(phone)) {
      currentErrors.phone = true
      currentErrors.errorMessage = 'Некорректный номер телефона'
      setError(currentErrors)
      return
    }

    if (message.trim().length < 10 || message.trim().length > 5000) {
      currentErrors.message = true
      currentErrors.errorMessage = 'Длина сообщения от 10 до 5000 символов'
      setError(currentErrors)
      return
    }

    if (!isAccept) {
      currentErrors.accept = true
      currentErrors.errorMessage = 'Согласитесь с политикой'
      setError(currentErrors)
      return
    }

    setName('')
    setCompany('')
    setEmail('')
    setPhone('')
    setMessage('')
    setIsAccept(false)
  }

  return (
    <div className="contacts-page">
      <div className="contacts-page__left">
        <h2 className="contacts-page__heading">У вас есть вопросы? Напишите нам!</h2>
        <form onSubmit={sendForm}>
          {error?.errorMessage &&
            <span className='error-message' >{error.errorMessage}</span>
          }
          <div>
            <Input
              placeholder="Имя*"
              value={name}
              errored={error?.name}
              onChange={(e) => {
                setName(e.target.value)
                setError(null)
              }}
            />
            <Input
              placeholder="Компания"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value)
                setError(null)
              }}
            />
          </div>
          <div>
            <Input
              placeholder="E-mail*"
              value={email}
              errored={error?.email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError(null)
              }}
            />
            <Input
              placeholder="Телефон*"
              value={phone}
              errored={error?.phone}
              onChange={(e) => {
                setPhone(e.target.value)
                setError(null)
              }}
            />
          </div>
          <Textarea
            placeholder="Сообщение*"
            value={message}
            errored={error?.message}
            onChange={(e) => {
              setMessage(e.target.value)
              setError(null)
            }}
          />
          <Checkbox
            label="Я согласен с "
            checked={isAccept}
            errored={error?.accept}
            onChange={() => {
              setIsAccept(!isAccept)
              setError(null)
            }}
          >
            <Link href="/" color="accent" underline>политикой обработки пресональных данных</Link>
          </Checkbox>
          <Button type="submit">Отправить</Button>
        </form>
      </div>
      <div className="contacts-page__right">
        <h2 className="contacts-page__heading right">Наши контакты</h2>
        <CompanyContacts />
      </div>
    </div>
  )
}