'use client'
import React from 'react'
import Title from '../components/title'
import Image from 'next/image'
import commander from '../../public/assets/crew/image-douglas-hurley.png'
import EllipsesNav from '../components/ellipses-nav'

const Crew = () => {
  return (
    <div className="h-screen w-full bg-black bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-cover bg-center " >
    <main className='w-full md:w-[80%] mx-auto h-full flex justify-center items-center'>
        <div className="w-full md:w-[80%] h-[80%] md:h-[70%] lg:w-[90%]">
         <Title title='meet your crew' index='02' />
         <div className='flex justify-center items-center'>
          <div className='flex flex-col lg:flex-row justify-between lg:justify-around items-center w-full mt-5 lg:mt-20'>
              
              <div className=" text-white w-full lg:w-[40%]">
              <h2 className='text-gray-500 uppercase text-4xl'>commander</h2>
                <h1 className='text-4xl lg:text-8xl text-center lg:text-left uppercase tracking-[5px] my-4'>douglas hurley</h1>
                <p className='my-4 text-center lg:text-left '>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                <EllipsesNav />
              </div>

              <Image src={commander} alt='' className='w-[100px] md:w-[400px] '/>

          </div>
         </div>
        </div>
    </main>
  </div>
  )
}

export default Crew