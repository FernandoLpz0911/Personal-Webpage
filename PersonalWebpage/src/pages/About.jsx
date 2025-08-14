import { useState } from 'react'
import './cssfiles/About.css'

function About() {
  return (
    <>
      <div className='About-Page-Container'>
        <div className='Past'>
          <p> I have 5 siblings, 3 brothers, and 2 sisters. I always used to mess with computers as a kid because I used to like install malware from the mods and my brother who is also in the field always used to have to fix it, needless to say, eventually he got tired of having to fix my messes and told me "You broke it, you fix it" and from there I learned how to use file directories and how to be more digitally safe. Now since we had a really bad computer at the time, it ran incredibly slow all the time and would barely manage to scrape by on minecraft so I had to speed it up by whatever means necessary including going through task manager and ending every small task in existence!!</p>
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
