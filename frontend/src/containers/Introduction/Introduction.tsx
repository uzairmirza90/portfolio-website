import React from 'react'
import '../Introduction/Introduction.scss'
import introductionImg from '../../assets/images/introduction.jpg'
import { introduction } from '../../utils/data/data';
import { Container, Divider } from '@mui/material';

const Introduction: React.FC = () => {
  return (
      <Container>
    <div className='container introduction'>
        <div className='intro-text-container'>
            <p className='intro-text-1'>Hi There &nbsp;👋 &nbsp;I'M</p>
            <p className='intro-text-2'>{introduction.name}</p>
            <p className='intro-text-3'>{introduction.designation}</p>
            <p className='intro-text-4'>{introduction.description}</p>
          <div className='buttons'>
            <button className='button'>Hire Me</button>
            <button className='button'>Get CV</button>
          </div>
        </div>
        <div className='intro-image-container'>
            <img className="intro-image" src={introductionImg} alt='intro'></img>
        </div>
    </div>
    <Divider className='container-divider' sx={{backgroundColor: 'var(--divider-color)'}} />
    </Container>
  )
}

export default Introduction