import './Logo.css'

type Props = {
  color: 'primary' | 'surface-default',
  style?: React.CSSProperties
}

const Logo = ({ color, style }: Props) => {
  return (
    <a
      href="/"
      className={['logo', color].join(' ')}
      style={style}
    >
      Reel to real
    </a>
  )
}

export default Logo