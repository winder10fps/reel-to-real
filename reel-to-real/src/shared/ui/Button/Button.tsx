import './Button.css'

type ButtonProps = {
  children: React.ReactNode,
  className?: string,
  size?: 'default' | 'small',
  notFilled?: boolean,
  type?: 'button' | 'submit',
  disabled?: boolean,
  stretched?: boolean,
  forHeader?: boolean,
  onClick?: () => void,
}

const Button = ({
  children,
  className,
  size = 'default',
  notFilled = false,
  type = 'button',
  disabled = false,
  stretched = false,
  forHeader = false,
  onClick,
}: ButtonProps) => {

  const classNames = [
    'button',
    className,
    size,
    notFilled && 'not-filled',
    disabled && 'disabled',
    stretched && 'stretched',
    forHeader && 'for-header'
  ].filter(Boolean).join(' ')

  return (
    <button className={classNames}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  )
}


export default Button