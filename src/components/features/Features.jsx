import React from 'react'
import './Features.css'
// import seme from './img/seme.jpg' 


const Features = () => {
  return (
        <div className="featured">
          <div className="featureditem">
          <img src='img/sanaga00.jpg' className='image' alt=""  />
          <div className="featuredtitles">
            <h2>Sanaga Beach</h2>
            <h3> 306 Properties</h3>
          </div>
          </div>

          <div className="featureditem">
          <img src='img/seme.jpg' className='image' alt=""  />
          <div className="featuredtitles">
            <h2>Hotel seme</h2>
            <h3> 404 Properties</h3>
          </div>
          </div>
          <div className="featureditem">
          <img src='img/domaine-de-petpenoun.jpg' className='image' alt=""  />
          <div className="featuredtitles">
            <h2>Petpenoun Resort</h2>
            <h3> 505 Properties</h3>
          </div>
          </div>
        </div>
  )
}

export default Features