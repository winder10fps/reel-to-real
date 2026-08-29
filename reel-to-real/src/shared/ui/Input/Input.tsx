import { forwardRef } from 'react'
import './Input.css'

type Props = {
  placeholder: string,
  type?: string,
  className?: string,
  errored?: boolean,
  disabled?: boolean
  value?: string,
  maxLength?: number,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = forwardRef<HTMLInputElement, Props>(({
  placeholder,
  type = 'text',
  className,
  errored,
  disabled,
  value,
  maxLength,
  onChange
}, ref) => {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      type={type}
      className={[
        'input',
        className,
        errored && 'errored'
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
    />
  )
})