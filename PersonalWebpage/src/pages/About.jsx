import { useState } from 'react'
import './cssfiles/About.css'

function About() {
  return (
    <>
      <div className='About-Page-Container'>
        <div className='Past'>
          <p> Information about the past</p>
        </div>

        <div className='Present'>
          <p> Information about the present</p>
        </div>

        <div className='Future'>
          <p> Information about the future</p>
        </div>

      </div>
    </>
  )
}

export default About
