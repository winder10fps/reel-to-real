import './Checkbox.css'

type Props = {
  label: string,
  checked: boolean,
  onChange: () => void,
  errored?: boolean,

}

const Checkbox = ({
  label,
  checked,
  onChange,
  errored
}: Props) => {
  const id = crypto.randomUUID()

  return (
    <label
    htmlFor={id}
    className={[
      'checkbox',
      errored && 'errored'
    ].filter(Boolean).join(' ')}
    >
      <input
        type='checkbox'
        id={id}
        checked={checked}
        onChange={onChange}
        className='checkbox-hidden'
      />

      <span className="custom-checkbox">
        <img src="/icons/check.svg" className='checkmark-icon'/>
      </span>

      <span className='checkbox-label'>{label}</span>
      
    </label>
  )
}

export default Checkbox