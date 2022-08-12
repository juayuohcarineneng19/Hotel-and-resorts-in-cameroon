import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Features from '../../components/features/Features'
import Property from '../../components/propertylist/Property'
import Propertyfeatures from '../../components/propertyfeatures/Propertyfeatures'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homecontainer">
      <Features/>
      <h1 className='hometitle'> Browse By Property Type</h1>
      <Property/>
      <h1 className='hometitle'>Homes Guest Love</h1>
      <Propertyfeatures/>
      </div>
     
    </div>
  );
}
export default Home