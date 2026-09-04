import { validateName } from "./validateName";
import { validatePhone } from "./validatePhone";

export type FormFields = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  address?: string;
  index?: string;
  message?: string;
  isAccept?: boolean;
}

export type FormErrors = {
  firstName: boolean;
  lastName: boolean
  company: boolean;
  email: boolean;
  phone: boolean;
  address: boolean;
  index: boolean;
  message: boolean;
  accept: boolean;
  errorMessage: string;
}

const initialErrors: FormErrors = {
  firstName: false,
  lastName: false,
  company: false,
  email: false,
  phone: false,
  address: false,
  index: false,
  message: false,
  accept: false,
  errorMessage: ''
}


export const validateForm = (fields: FormFields): FormErrors => {
  const errors = { ...initialErrors }
  const { firstName, lastName, email, phone, address, index, isAccept, message } = fields


  if (firstName !== undefined && validateName(firstName)) {
    errors.firstName = true
    errors.errorMessage = 'Имя слишком короткое'
    return errors
  }

  if (lastName !== undefined && validateName(lastName)) {
    errors.lastName = true
    errors.errorMessage = 'Фамилия слишком короткая'
    return errors
  }

  if (email !== undefined && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = true
    errors.errorMessage = 'Некоректный E-mail'
    return errors
  }

  if (phone !== undefined && !validatePhone(phone)) {
    errors.phone = true
    errors.errorMessage = 'Некорректный номер телефона'
    return errors
  }

  if (address !== undefined && address.trim().length < 10) {
    errors.address = true
    errors.errorMessage = 'Некорректный адрес'
    return errors
  }

  if (index !== undefined && !/^\d{6}$/.test(index)) {
    errors.index = true
    errors.errorMessage = 'Неверный почтовый индекс'
    return errors
  }

  if (message !== undefined && (message.trim().length < 10 || message.trim().length > 5000)) {
    errors.message = true
    errors.errorMessage = 'Длина сообщения от 10 до 5000 символов'
    return errors
  }

  if (isAccept !== undefined && !isAccept) {
    errors.accept = true
    errors.errorMessage = 'Согласитесь с политикой'
    return errors
  }

  return errors
}