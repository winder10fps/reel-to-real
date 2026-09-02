import './Stepper.css'

type Props = {
  quantity: number,
  size: 'default' | 'mini',
  onIncrease: () => void,
  onDecrease: () => void
}

export const Stepper = ({ quantity, size, onIncrease, onDecrease }: Props) => {
  return (
    <div className={`stepper stepper-${size}`}>
      <button
        className={`stepper-button stepper-button-${size}`}
        onClick={() => onDecrease()}
        disabled={quantity <= 1}
      >
        <img src="/icons/minus.svg" alt="-" />
      </button>
      <div className={`stepper-value stepper-value-${size}`}>{quantity}</div>
      <button
        className={`stepper-button stepper-button-${size}`}
        onClick={() => onIncrease()}
      >
        <img src="icons/plus.svg" alt="+" />
      </button>
    </div>
  )
}