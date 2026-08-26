import './Input.css'

type Props = {
  placeholder: string,
  type?: string,
  className?: string,
  errored?: boolean,
  disabled?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({
  placeholder,
  type = 'text',
  className,
  errored,
  disabled,
  value,
  onChange
}: Props) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={[
        'input',
        className,
        errored && 'errored'
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  )
}