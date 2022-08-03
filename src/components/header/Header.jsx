import {faBed, faCoffee, faHotel, faPerson, faPlaceOfWorship, faPlane} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="headercontainer">
        <div className="headerlist">
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed} />
            <span>stays</span>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            <FontAwesomeIcon icon={faPlaceOfWorship} />
            <span>Culture</span>
            <FontAwesomeIcon icon={faPerson} />
            <span>Attractions</span>
            <FontAwesomeIcon icon={faCoffee} />
            <span>Food</span>
            <FontAwesomeIcon icon={faHotel} />
            <span>Resorts</span>
            </div>
        </div>
        </div>
    </div>
   
  )
}

export default Header