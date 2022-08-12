import React from 'react'
import './Property.css'

const Property = () => {
  return (
    <div className="propertylist">
        <div className="propertyitem">
            <img src="img/sanagaresort.jpg" className='propertyimages' alt="" />
            <div className="propertytitles">
                <h2>Resorts</h2>
                <h3>344 Hotels</h3>
            </div>
        </div>

        <div className="propertyitem">
            <img src="img/sanagaresort3.jpg" className='propertyimages' alt="" />
            <div className="propertytitles">
                <h2>Cabins</h2>
                <h3>207 Houses</h3>
            </div>
        </div>
           
        <div className="propertyitem">
            <img src="img/seme1.jpg" className='propertyimages' alt="" />
            <div className="propertytitles">
                <h2>Villas</h2>
                <h3>321 Hotels</h3>
            </div>
        </div>

        <div className="propertyitem">
            <img src="img/seme3.jpg" className='propertyimages' alt="" />
            <div className="propertytitles">
                <h2>Appartments</h2>
                <h3>House 555</h3>
            </div>
        </div>
              
        <div className="propertyitem">
            <img src="img/sanagahotel.jpg" className='propertyimages' alt="" />
            <div className="propertytitles">
                <h2>Hotels</h2>
                <h3>321 Hotels</h3>
            </div>
        </div>

    </div>
  )
}

export default Property