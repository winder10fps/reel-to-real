export const validatePhone = (phone: string) => {
  return /^[78]\d{10}$/.test(phone)
}
