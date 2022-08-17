import React from 'react'
import './Searchitem.css'

const Searchitem = () => {
  return (
    <div className='searchitem'>
        <img src="img/mbapit-carousel-7.jpg" alt=""  className='siimage'/>
        <div className="sidesc">
            <h1 className='sititle'>Tower Street Apartments</h1>
            <span className='sidistance'> 500m from center</span>
            <span className='sitaxiop'>Free air port taxi</span>
            <span className='sisubtittle'>
                Studio Apartment With Air Condition
            </span>
            <span className='sifeatures'>
                Entire studio. 1 bathroom . 21m2 1 full bed
            </span>
            <span className='sicancelop'>Free cancellation</span>
            <span className='sicancelop2'>You can cancel later, so lock in this great price today</span>
        </div>
        <div className="sidetails"> 
        <div className="siRatings">
          <span className=''>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailText">
          <span className='siPrice'>$1234</span>
          <span className='siTaxOp'>include taxes and fees</span>
          <button className='siCheckbtn'>See availability</button>
        </div>
        </div>
    </div>
  )
}

export default Searchitem