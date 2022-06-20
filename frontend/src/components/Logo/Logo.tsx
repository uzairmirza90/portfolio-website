import React, { FC } from 'react'
import '../Logo/Logo.scss'
import { LogoImageInterface } from '../../utils/interfaces/interfaces'

const Logo: FC<LogoImageInterface> = ({logoImage}) => {
  return (
    <img className='logo-image' src={logoImage} alt='Logo' />
  )
}

export default Logo