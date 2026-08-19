import React from 'react'
import './Link.css'

type Props = {
  href: string,
  color: 'primary' | 'secondary' | 'surface-default',
  uppercase?: boolean,
  children: React.ReactNode
}

const Link = ({
  href,
  color,
  uppercase = false,
  children
}: Props) => {
  return (
    <a
      href={href}
      className={[
        'link',
        color,
        uppercase && 'uppercase'
      ].filter(Boolean).join(' ')}
    >
      {children}
    </a>
  )
}

export default Link