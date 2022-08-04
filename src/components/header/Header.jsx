import {faBed, faCalendarDays, faCoffee, faHotel, faPerson, faPlaceOfWorship, faPlane} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { DateRange } from 'react-date-range';
import './Header.css'
function Header () {
  return (
    <div className='header'>
        <div className="headercontainer">
        <div className="headerlist">
            <div className="headerlistitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>stays</span>
            </div>
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faPlaceOfWorship} />
            <span>Culture</span>
            </div>
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faPerson} />
            <span>Attractions</span>
            </div>
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faCoffee} />
            <span>Food</span>
            </div>
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Resorts</span>
            </div>
        </div>
        <h1 className="headerwords">Enjoy every single day of your life :((</h1>
        <p className="headerdesc">Get rewarded for your travels-unlock instant savings of 10% or 
            more with a free iamavailable.com account</p>
            <button className="headerbtn">
                Sign in/Register
            </button>
            <div className="headersearch">
                 <div className="headersearchitem">
                        <FontAwesomeIcon icon={faBed} className="headericon" />
                       <input type="text" placeholder="Where are you going"  className="headersearchinput"/>
                 </div>
                 <div className="headersearchitem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
                       <span>Check in <span>  Check out</span></span>
                 </div>
                 <div className="headersearchitem">
                        <FontAwesomeIcon icon={faPerson} className="headericon " />
                        <span> 2Adults <span>  0Children</span> <span>  1Room</span></span>
                 </div>
                 <div className="headersearchitem">
                    <button className="headerbtn">Search</button>
                 </div>
            </div>
        </div>
    </div>
   
  )
}

export default Header