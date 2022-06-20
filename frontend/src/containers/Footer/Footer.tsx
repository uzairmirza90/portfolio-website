import React from 'react'
import Logo from '../../components/Logo/Logo'
import '../Footer/Footer.scss'
import logoImage from '../../assets/images/logo.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-logo'>
            <Logo logoImage={logoImage} />
        </div>
        <div className='footer-copyright'>
            <p className='footer-copyright-text'>@Copyright 2022. All rights reserved</p>
        </div>
        <div className='footer-icons'>
            <LinkedInIcon />
            <WhatsAppIcon />
        </div>
    </footer>
  )
}

export default Footer