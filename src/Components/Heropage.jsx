import React from 'react'
import "./Css/Heropage.css"
import { Typewriter } from 'react-simple-typewriter'

const Heropage = () => {
  return (
    <div className='hero-page'>
        <h1>
          Anonymous Confession</h1>
        <div className="typewriter-effect">
        <Typewriter
         words={['#Spillyourthoughts', '#Clearyourmind', '#Clearyouheart',"#Lightenyourheart"]}
            loop={false}
            cursor
            cursorStyle='|' />
        </div>
        
    </div>
  )
}

export default Heropage