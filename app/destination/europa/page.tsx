import React from 'react'
import DestinationNavBar from '@/app/components/destination-navbar'
import Title from '@/app/components/title'
import Image from 'next/image'
import europa from '../../../public/assets/destination/image-europa.png'

const Europa = () => {
  return (
    <div className="h-screen w-full bg-black bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-cover bg-center " >
    <main className='w-full md:w-[80%] mx-auto h-full flex justify-center items-center'>
        <div className="w-full md:w-[80%] h-[80%] md:h-[70%] lg:w-[90%]">
         <Title title='pick Your Destination' index='01' />
         <div className='flex justify-center items-center'>
          <div className='flex flex-col lg:flex-row justify-between lg:justify-around items-center w-full mt-5 lg:mt-20'>
              <Image src={europa} alt='' className='w-[100px] md:w-[300px] '/>

              <div className=" text-white w-full lg:w-[40%]">
                <DestinationNavBar />
                <h1 className='text-4xl lg:text-8xl text-center lg:text-left uppercase tracking-[5px] my-4'>europa</h1>
                <p className='my-4 text-center lg:text-left '>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                <hr className='border-gray-500 my-4 w-[80%] mx-[10%]'/>
                <div className="flex flex-col md:flex-row uppercase justify-around items-center">
                  <div className='my-2'>
                    <p className='text-center'>Avg. distance</p>
                    <h1 className='text-center'>628 mil. km</h1>
                  </div>
                  <div className='my-2'>
                    <p className='text-center'>Est. travel time</p>
                    <h1 className='text-center'>3 years</h1>
                  </div>
                </div>
              </div>
          </div>
         </div>
        </div>
    </main>
  </div>
  )
}

export default Europa