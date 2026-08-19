import React from 'react'
import './IconBadgeButton.css'

type Props = {
  children: React.ReactNode,
  figure: number,
  badgeBackgroundColor: 'primary' | 'accent',
  onClick?: () => void
}

const IconBadgeButton = ({
  children,
  figure,
  badgeBackgroundColor,
  onClick
}: Props) => {
  return (
    <button
      className='icon-badge-button'
      onClick={onClick}
    >
      {children}
      <div className={[
        'badge',
        badgeBackgroundColor
      ].join(' ')}>
        {figure}
      </div>
    </button>
  )
}

export default IconBadgeButton