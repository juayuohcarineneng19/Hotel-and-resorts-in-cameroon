import React from 'react'
import './Propertyfeatures.css'

const Propertyfeatures = () => {
  return (
    <div className='propertyfeatures'>
       <div className="propertyfeaturesitem">
       <img src="img/mountain-hotel.jpg" alt=""  className='propertyfeaturesimg'/>
        <span className='pfname'>Mountain-hotel</span>
        <span className='pfcity'>Buea</span>
        <span className='pfprice'>Starting from 8.9</span>
        <div className="pfratings">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
       </div>
       <div className="propertyfeaturesitem">
       <img src="img/mountain-hotel.jpg" alt=""  className='propertyfeaturesimg'/>
        <span className='pfname'>Mountain-hotel</span>
        <span className='pfcity'>Buea</span>
        <span className='pfprice'>Starting from $7</span>
        <div className="pfratings">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
       </div>
    </div>
  )
}

export default Propertyfeatures