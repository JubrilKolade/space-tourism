'use client'
import React, { useState } from 'react'
import Title from '../components/title'
import Image from 'next/image'


const crewMembers = [
  {
    name: 'Douglas Hurley',
    role: 'Commander',
    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot, and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    imageUrl: '/assets/crew/image-douglas-hurley.png', // Update with actual path
  },
  {
    name: 'Mark Shuttleworth',
    role: 'Mission Specialist',
    description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    imageUrl: '/assets/crew/image-mark-shuttleworth.png', // Update with actual path
  },
  {
    name: 'Victor Glover',
    role: 'Pilot',
    description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    imageUrl: '/assets/crew/image-victor-glover.png', // Update with actual path
  },
  {
    name: 'Anousheh Ansari',
    role: 'Flight Engineer',
    description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    imageUrl: '/assets/crew/image-anousheh-ansari.png', // Update with actual path
  },

  // Add more crew members as needed
];

const Crew = () => {
  const [activeMember, setActiveMember] = useState(0);

  return (
    <div className="h-screen w-full bg-black bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-cover bg-center " >
    <main className='w-full md:w-[80%] mx-auto h-full flex justify-center items-center'>
        <div className="w-full md:w-[80%] h-[80%] md:h-[70%] lg:w-[90%]">
         <Title title='meet your crew' index='02' />
         <div className='flex justify-center items-center'>
          <div className='flex flex-col lg:flex-row justify-between lg:justify-around items-center w-full mt-5 lg:mt-20'>
              <div className=" text-white w-full lg:w-[50%] flex flex-col justify-between h-[400px]">
                <div>
                  <h2 className='text-gray-500 uppercase text-2xl'>{crewMembers[activeMember].role}</h2>
                  <h1 className='text-4xl lg:text-4xl text-center lg:text-left uppercase tracking-[5px] my-4'>{crewMembers[activeMember].name}</h1>
                  <p className='my-4 text-center lg:text-left text-xl'>{crewMembers[activeMember].description}</p>
                </div>
                <div className="flex mt-5">
                  {crewMembers.map((_, index) => (
                    <button
                      key={index}
                      className={`h-4 w-4 mx-2 rounded-full ${index === activeMember ? 'bg-white' : 'bg-gray-500'}`}
                      onClick={() => setActiveMember(index)}
                      aria-label={`Go to ${index + 1} member`}
                    />
                  ))}
                </div>

              </div>

              <Image src={crewMembers[activeMember].imageUrl} width={400} height={400} alt='' className='w-[100px] md:w-[400px] '/>

          </div>
         </div>
        </div>
    </main>
  </div>
  )
}

export default Crew