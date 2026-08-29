import React from 'react'
import './Link.css'
import { Link as RouterLink } from 'react-router-dom'

type Props = {
  href: string,
  color: 'primary' | 'secondary' | 'surface-default' | 'accent',
  uppercase?: boolean,
  underline?: boolean
  className?: string,
  target?: '_self' | '_blank',
  children: React.ReactNode
}

export const Link = ({
  href,
  color,
  uppercase,
  underline,
  target = '_self',
  className,
  children
}: Props) => {
  return (
    <RouterLink
      to={href}
      target={target}
      className={[
        'link',
        className,
        color,
        uppercase && 'uppercase',
        underline && 'underline'
      ].filter(Boolean).join(' ')}
    >
      {children}
    </RouterLink>
  )
}