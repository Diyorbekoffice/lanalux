import React from 'react'
import Slider from '../components/Slider'
import Header from '../components/Header'
import chegirma from '../assets/chegirma.svg'
import Info from '../components/Info'
import Maps from '../components/Maps'
import Footer from '../components/Footer'
import Filter from '../components/Filter'
import shers from "../assets/shers.svg";



function Delivery() {
  return (
    <div className='bg-[#F9F7F4] '>
      <Header />
      <div className='mx-auto max-w-[1200px] '>
        <h2 className='text-[41px] text-[#313131]]'>Мужская курта</h2>

        <div>
          <img src={chegirma} alt="chegirma" />
          <Slider />
          <Filter />
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 border-b border-gray-300"></div>
            <span className="text-[#313131] cursor-pointer">развернуть все параметры</span>
            <div className="flex-1 border-b border-gray-300"></div>
          </div>

          <Slider />
        </div>
      </div>
      <Info />
      <img className="" src={shers} alt="shers" />
      <Maps />
      <Footer />
    </div>
  )
}

export default Delivery