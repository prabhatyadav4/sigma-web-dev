"use client"
import React from 'react'

const About = () => {
  return (
    <div>

    <div className='container'>
      <h2>Hey, this is about me.</h2>
      <p>I am good boy.</p>
      <style jsx global>{
          `
          .container{
            background-color: red;
            }
            `
        }
      </style>
    </div>
    <div className="container">
        <h2>Hey I am a great coder.</h2>
    </div>
    </div>
    
  )
}

export default About
