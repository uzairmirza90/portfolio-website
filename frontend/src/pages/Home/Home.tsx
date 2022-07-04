// import React from 'react'
import Introduction from '../../containers/Introduction/Introduction'
import Qualification from '../../containers/Qualification/Qualification'
import Skills from '../../containers/Skills/Skills'
import '../Home/Home.scss'

const Home = () => {
  return (
    <div>
      
        <Introduction />
        <Skills />
        <Qualification />
    </div>
  )
}

export default Home