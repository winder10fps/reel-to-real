import { validateForm, type FormErrors } from "@/shared/lib"
import { Button, Checkbox, Input, Link, Textarea } from "@/shared/ui"
import { useState } from "react"

export const OrderPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [index, setIndex] = useState('')
  const [message, setMessage] = useState('')
  const [isAccept, setIsAccept] = useState(false)

  const [error, setError] = useState<FormErrors | null>(null)

  const sendForm = (e: React.SubmitEvent) => {
    e.preventDefault()

    const currentErrors = validateForm({
      firstName, lastName, email, phone, message, index, address, isAccept
    })

    if (currentErrors.errorMessage) {
      setError(currentErrors)
      return
    }

    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setIndex('')
    setAddress('')
    setMessage('')
    setIsAccept(false)
  }

  return (
    <div className="contacts-page">
      <div className="contacts-page__left">
        <h2 className="contacts-page__heading">Контактные данные</h2>
        <form onSubmit={sendForm}>
          {error?.errorMessage &&
            <span className='error-message' >{error.errorMessage}</span>
          }
          <div>
            <Input
              placeholder="Имя*"
              value={firstName}
              errored={error?.firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                setError(null)
              }}
            />
            <Input
              placeholder="Фамилия*"
              value={lastName}
              errored={error?.lastName}
              onChange={(e) => {
                setLastName(e.target.value)
                setError(null)
              }}
            />
          </div>
          <div>
            <Input
              placeholder="E-mail"
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
          <div>
            <Input
              placeholder="Адрес*"
              value={address}
              errored={error?.address}
              onChange={(e) => {
                setAddress(e.target.value)
                setError(null)
              }}
            />
            <Input
              placeholder="Индекс*"
              value={index}
              errored={error?.index}
              onChange={(e) => {
                setIndex(e.target.value)
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
          <Button type="submit">Оформить заказ</Button>
        </form>
      </div>
      <div className="contacts-page__right">
        <h2 className="contacts-page__heading right">Ваш заказ</h2>
      </div>
    </div>
  )
}