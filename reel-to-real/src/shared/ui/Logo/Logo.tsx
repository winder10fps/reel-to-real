import { Link as RouterLink } from 'react-router-dom'
import './Logo.css'

type Props = {
  color: 'primary' | 'surface-default',
  style?: React.CSSProperties
}

export const Logo = ({ color, style }: Props) => {
  return (
    <RouterLink
      to="/"
      className={['logo', color].join(' ')}
      style={style}
    >
      Reel to real
    </RouterLink>
  )
}