import React from 'react'
import './AppContainer.css'
type Props = { children: React.ReactNode }

const AppContainer = ({children}: Props) => {
  return (
    <div className='app-container'>{children}</div>
  )
}

export default AppContainer