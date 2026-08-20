import React from 'react'
import './Link.css'

type Props = {
  href: string,
  color: 'primary' | 'secondary' | 'surface-default',
  uppercase?: boolean,
  className?: string,
  children: React.ReactNode
}

const Link = ({
  href,
  color,
  uppercase = false,
  className,
  children
}: Props) => {
  return (
    <a
      href={href}
      className={[
        'link',
        className,
        color,
        uppercase && 'uppercase'
      ].filter(Boolean).join(' ')}
    >
      {children}
    </a>
  )
}

export default Link