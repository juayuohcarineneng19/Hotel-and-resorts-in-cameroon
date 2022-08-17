import React from 'react'
import './List.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import {format} from "date-fns"
import { DateRange } from 'react-date-range'
import Searchitem from '../../components/searchitem/Searchitem'
const List= () => {
  const location = useLocation();
  const[destination, setDestination] = useState(location.state.destination)
  const[date, setDate] = useState(location.state.date)
  const[openDate, setOpenDate] = useState(false)
  const[options, setOptions] = useState(location.state.options)
  console.log(location)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
            <h1 className='lstitle'>SEARCH</h1>
            <div className="lsitem">
              <label>Destination</label>
              <input type="text"placeholder='destination' />
            </div>
            <div className="lsitem">
              <label>Check-In-Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              { openDate &&(
                <DateRange
                onChange={(item) => setDate([item.selection])}
                 minDate={new Date()}
                 ranges={date} 
                 />
              )}
            </div>
            <div className="lsitem">
              <label>Options</label>
              <div className="lsoptions">
              <div className="lsitemoptions">
                <span className='lsoptiontext'>
                  Min price <small>Per night</small>
                </span>
                <input type="number" className='lsoptioninput'/>
              </div>

              <div className="lsitemoptions">
                <span className='lsoptiontext'>
                  Max price <small>Per night</small>
                </span>
                <input type="number" className='lsoptioninput'/>
              </div>

              <div className="lsitemoptions">
                <span className='lsoptiontext'>
                  Adult
                </span>
                <input type="number" min={1} className='lsoptioninput' placeholder={options.adult}/>
              </div>
              <div className="lsitemoptions">
                <span className='lsoptiontext'>
                  Children
                </span>
                <input type="number" min={0} className='lsoptioninput' placeholder={options.Children}/>
              </div>

              <div className="lsitemoptions">
                <span className='lsoptiontext'>
                  Room
                </span>
                <input type="number" min={1} className='lsoptioninput' placeholder={options.room}/>
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listresult">
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List