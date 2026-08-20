import { useRef, useState } from 'react'
import './Search.css'

const Search = () => {
  const [query, setQuery] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    console.log(`отправлен запрос с текстом ${query}`);
  }

  return (
    <div className="search" onClick={() => inputRef.current?.focus()}>
      <img src="/icons/search.svg" alt="🔍" />
      <input
        ref={inputRef}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
        placeholder='Найти винил или аппаратуру'
      />
    </div>
  )
}

export default Search