import React from 'react'
import './Resorts.css'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Resorts = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className='hoteTitle'>Grand Hotel</h1>
          <div className="hotelAddres">
            {/* <FontAwesomeIcon icon={faLocationDot}/> */}
            <span>Buea stClaire</span>
            <span className='hotelDistance'>
              excellent location 500m from center
            </span>
            <span className='hotelPrice'>
              Book a stay over $400 at this propertity and get a free airport taxi
            </span>
             
            <div className="hotelImages">
            <div className="hotelImgWrapper">
              <button className='bookNow'>Reserve or Book Now</button>
              <img src="img/mountain-hotel.jpg" alt="" className='hotelImg' />
              <img src="img/mountainhotel2.jpg" alt=""  className='hotelImg'/>
              <img src="img/mountain-hotel.jpg" alt=""  className='hotelImg' />
              {/* <img src="img/mountainhotel2.jpg" alt=""  className='hotelImg'/>
              <img src="img/mountain-hotel.jpg" alt="" className='hotelImg'/>
              <img src="img/mountainhotel2.jpg" alt=""  className='hotelImg'/> */}
            </div>
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className='hotelTitle'>Stay in the heart of People</h1>
                <p className='hotelDesc'> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Maiores quam eum fugit cupiditate totam, 
                  mollitia obcaecati reprehenderit amet,
                   distinctio veniam quia voluptatibus cum doloremque 
                  beatae sequi nisi in inventore maxime.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>perfect for a nights stay!</h1>
                <span>located in the real heart of Limbe</span>
                <h2>
                  <b>$977</b> (9 nights)
                </h2>
                <button>Reserve or book now </button>
              </div>
            </div>
            </div>
            <Mail/>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Resorts