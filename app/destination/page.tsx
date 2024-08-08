'use client'
import React, { useState } from 'react'
import Title from '../components/title'
import Image from 'next/image'
import moon from '../../public/assets/destination/image-moon.png'
import DestinationNavBar from '../components/destination-navbar'

const destinationInfo = [
  {
    id: 1,
    location: 'moon',
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    imageUrl: '/assets/destination/image-moon.png',
    distance: '384,400 km',
    travelTime: '3 days',
  },
  {
    id:2,
    location: 'moon',
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    imageUrl: '/assets/destination/image-moon.png',
    distance: '384,400 km',
    travelTime: '3 days',
  },
  {
    id:3,
    location: 'moon',
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    imageUrl: '/assets/destination/image-moon.png',
    distance: '384,400 km',
    travelTime: '3 days',
  },
  {
    id:4,
    location: 'moon',
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    imageUrl: '/assets/destination/image-moon.png',
    distance: '384,400 km',
    travelTime: '3 days',
  },
]

const Destination = () => {
  // const [clicked, setClicked] = useState('')
  const [activeMember, setActiveMember] = useState(0);

  
  return (
    <div className="h-screen w-full bg-black bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-cover bg-center " >
      <main className='w-full md:w-[80%] mx-auto h-full flex justify-center items-center'>
          <div className="w-full md:w-[80%] h-[80%] md:h-[70%] lg:w-[90%]">
           <Title title='pick Your Destination' index='01' />
           <div className='flex justify-center items-center'>
            <div className='flex flex-col lg:flex-row justify-between lg:justify-around items-center w-full mt-5 lg:mt-20'>
                <Image src={moon} alt='' className='w-[100px] md:w-[400px] '/>

                <div className=" text-white w-full lg:w-[40%]">
                  <DestinationNavBar />
                  {/* <ul className="flex text-white items-center justify-between w-[300px] uppercase mx-auto lg:mx-0 my-5">
                    {destinationInfo.map((location) => (
                      // <li key={index}>
                      //   <Link
                      //     href={link.url}
                      //     onClick={() => handleClick(link.url)}
                      //     className={`${
                      //       clicked === link.url
                      //         ? 'border-solid border-b-2 active:border-white text-white'
                      //         : 'border-0 text-gray-400 hover:text-white'
                      //     }`}
                      //   >
                      //     {link.title}
                      //   </Link>
                      // </li>
                      <button
                      key={location.id}
                      className={``} 
                      >
                      {location.location}
                      </button>
                    ))}
                  </ul> */}


                  <h1 className='text-4xl lg:text-8xl text-center lg:text-left uppercase tracking-[5px] my-4'>moon</h1>
                  <p className='my-4 text-center lg:text-left '>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                  <hr className='border-gray-500 my-4 w-[80%] mx-[10%]'/>
                  <div className="flex flex-col md:flex-row uppercase justify-around items-center">
                    <div className='my-2'>
                      <p className='text-center'>Avg. distance</p>
                      <h1 className='text-center'>384,400 km</h1>
                    </div>
                    <div className='my-2'>
                      <p className='text-center'>Est. travel time</p>
                      <h1 className='text-center'>3 days</h1>
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

export default Destination