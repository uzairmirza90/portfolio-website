import { Container, Divider } from '@mui/material';
import React from 'react'
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';
import Skill from '../../components/Skill/Skill';
import { skills } from '../../utils/data/data';
import '../Skills/Skills.scss'

const Skills = () => {
  return (
      <Container>
    <div className='skills container'>
        <ContainerTitle title="Skills" />
        <div className='skills-container'>
        {skills.map((skill, index) => {
            return (
                <Skill 
                    key={index}
                    image={skill.image} 
                    text={skill.text} 
                    rating={skill.rating}
                />
            )
        })}
        </div>
    </div>
    <Divider sx={{backgroundColor: 'var(--divider-color)', marginBottom: 10}} />
    </Container>
  )
}

export default Skills