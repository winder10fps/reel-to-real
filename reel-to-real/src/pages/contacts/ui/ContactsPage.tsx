import { Checkbox, Input, Link, Textarea } from "@/shared/ui"
import { useState } from "react"
import './ContactsPage.css'
import { CompanyContacts } from "@/entities/company"
import { validateForm, type FormErrors } from "@/shared/lib"
import { Form } from "@/shared/ui/Form/Form"


export const ContactsPage = () => {
  const [firstName, setFirstName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isAccept, setIsAccept] = useState(false)

  const [error, setError] = useState<FormErrors | null>(null)

  const sendForm = (e: React.SubmitEvent) => {
    e.preventDefault()

    const currentErrors = validateForm({
      firstName, company, email, phone, message, isAccept
    })

    if (currentErrors.errorMessage) {
      setError(currentErrors)
      return
    }

    setFirstName('')
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
        <Form
          onSubmit={sendForm}
          buttonText="Отправить"
          errorMessage={error?.errorMessage}
        >
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
        </Form>
      </div>
      <div className="contacts-page__right">
        <h2 className="contacts-page__heading right">Наши контакты</h2>
        <CompanyContacts />
      </div>
    </div>
  )
}