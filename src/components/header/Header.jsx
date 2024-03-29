import {faBed, faCalendarDays, faCoffee, faHotel, faPerson, faPlaceOfWorship, faPlane} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Children, useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";
import './Header.css'


const Header = ({type}) => { 
  const [destination, setDestination] =  useState("")
  const [openDate, setOpenDate] =  useState(false)
    const [date, setDate] = useState([ 
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions, setOpenOptions] =  useState(false)
      const[options, setOptions] = useState(
        {
          adult:2,
          children:0,
          room:1
        }
      )

      const navigate = useNavigate()
      const handleOption = (name, operation) =>{
        setOptions(prev=>{return{
          ...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1,
        }
      })
      }
      const handleSearch = () =>{
         navigate("/hotels", {state: {destination, date , options}})
      }
      
  
  return (
    <div className='header'>
        <div className={type === "list" ? "headercontainer listmode" : "headercontainer"}>
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
        { type !== "list" &&
          <> 
        <h1 className="headerwords">Enjoy every single day of your life 🤩</h1>
        <p className="headerdesc">Get Rewarded For Your Travels Around Cameroon. Discover New Touristic Sites</p>
            <button className="headerbtn">
                Sign in/Register
            </button>
            <div className="headersearch">
                 <div className="headersearchitem">
                        <FontAwesomeIcon icon={faBed} className="headericon" />
                       <input type="text" placeholder="Where are you going"  className="headersearchinput"
                       onChange={(e) => setDestination(e.target.value)}/>
                 </div>
                 <div className="headersearchitem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
                       <span 
                       onClick={() =>setOpenDate(!openDate)} 
                       className="headersearchtext"> 
                        {`${format(date[0].startDate, "MM/dd/yyyy")} to
                         ${format(date[0].endDate, "MM/dd/yyyy")} `}
                        </span>
                       { openDate && <DateRange
                           editableDateInputs={true}
                           onChange={item => setDate([item.selection])}
                           moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="headerdate"
                             minDate={new Date()} />}
                 </div>
                 <div className="headersearchitem">
                        <FontAwesomeIcon icon={faPerson} className="headericon " />
                        <span onClick = {()=> setOpenOptions(!openOptions)} className="headersearchtext"> {`${options.adult} adult  ${options.children} children  ${options.room} room`}</span> 
                        {openOptions && <div className="option">
                          <div className="optionitem">
                            <span className="optiontext">Adult</span>
                            <div className="optioncounter">
                            <button 
                            disabled={options.adult<= 1}
                            className="optioncounterbtn"
                            onClick={()=>handleOption("adult","d")}>-</button>
                            <span className="optioncounternumber">{options.adult}</span>
                            <button className="optioncounterbtn"onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                          </div>

                          <div className="optionitem">
                            <span className="optiontext">Children</span>
                            <div className="optioncounter">
                            <button
                            disabled={options.children <= 0}
                             className="optioncounterbtn" 
                             onClick={()=>handleOption("children ","d")}>-</button>
                            <span className="optioncounternumber">{options.children}</span>
                            <button className="optioncounterbtn" onClick={()=>handleOption("children","i")}>+</button>
                            </div>
                          </div>

                          <div className="optionitem">
                            <span className="optiontext">Room</span>
                            <div className="optioncounter">
                            <button 
                            disabled={options.room <= 1}
                            className="optioncounterbtn" 
                            onClick={()=>handleOption("room","d")}>-</button>
                            <span className="optioncounternumber">{options.room}</span>
                            <button className="optioncounterbtn" onClick={()=>handleOption("room","i")}>+</button>
                            </div>
                          </div>
                        </div>}
                 </div>
                 <div className="headersearchitem">
                    <button className="headerbtn" onClick={handleSearch}>Search</button>
                 </div>
            </div> </>}
        </div>
    </div>
   
  )
}

export default Header