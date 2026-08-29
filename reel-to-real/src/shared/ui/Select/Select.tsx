import { useState } from 'react'
import './Select.css'
import { Link as RouterLink } from 'react-router-dom'

export type Option = {
  title: string,
  href: string,
}

type Props = {
  title: string,
  options: Option[]
  iconPath?: string,
  haveBorders?: boolean
}

export const Select = ({
  title,
  options,
  iconPath,
  haveBorders
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={[
        'select',
        haveBorders && 'have-borders'
      ].filter(Boolean).join(' ')}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="select-header">
        {iconPath &&
          <img src={iconPath} className='select-header__icon' />
        }
        <span className='select-header__text'>{title}</span>
        <img
          src="icons/angle.svg"
          className={[
            'select-header__arrow',
            isOpen && 'active'
          ].filter(Boolean).join(' ')}
        />
      </div>

      {isOpen &&
        <ul className="select-list">
          {options.map((opt) => {
            return <li
              key={opt.title}
            >
              <RouterLink
                to={opt.href}
                className='select-list__link'
              >
                {opt.title}
              </RouterLink>
            </li>
          })}
        </ul>
      }
    </div>
  )
}
