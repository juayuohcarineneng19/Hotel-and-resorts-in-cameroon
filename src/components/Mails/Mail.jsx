import React from 'react'
import './Mail.css'

const Mail = () => {
  return (
    <div className='mail'>
        <h1 className='mailtitle'>Save Time, Save Money</h1>
        <span className='maildesc'>Sign up and we will send the best deals to you</span>
        <div className="mailinput">
            <input type="Text" placeholder='Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Mail