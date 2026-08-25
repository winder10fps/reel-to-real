import './SearchField.css'

type Props = {
  value: string,
  placeholder: string,
  size: 'big' | 'small'
  onChange: (value: string) => void
  onFocus?: () => void
}

const SearchField = ({
  value,
  placeholder,
  size,
  onChange,
  onFocus
}: Props) => {
  return (
    <div className={`search ${size}`}>
      <img src="/icons/search.svg" alt="🔍" />
      <input
        className='search-input'
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        onFocus={onFocus}
      />
    </div>
  )
}

export default SearchField