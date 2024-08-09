'use client'
import React, { useState } from 'react'
import Title from '../components/title';
import Image from 'next/image';

const technology = [
  {
    name: 'Launch vehicle',
    role: 'The terminology...',
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageUrl: '/assets/technology/image-launch-vehicle-portrait.jpg', // Update with actual path
  },
  {
    name: 'Spaceport',
    role: 'The terminology...',
    description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    imageUrl: '/assets/technology/image-spaceport-portrait.jpg', // Update with actual path
  },
  {
    name: 'Space capsule',
    role: 'The terminology...',
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageUrl: '/assets/technology/image-space-capsule-portrait.jpg', // Update with actual path
  },

  // Add more crew members as needed
];

const Technology = () => {
  const [activeMember, setActiveMember] = useState(0);
  return (
    <div className="h-screen w-full bg-black bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-tablet.jpg)] lg:bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-cover bg-center " >
     <main className='w-full md:w-[80%] mx-auto h-full flex justify-center items-center'>
        <div className="w-full md:w-[80%] h-[80%] md:h-[70%] lg:w-[90%]">
         <Title title='space launch 101' index='03' />
         <div className='flex justify-center items-center'>
          <div className='flex flex-col-reverse lg:flex-row justify-between lg:justify-around items-center w-full mt-5 lg:mt-20'>
              <div className=" text-white w-full lg:w-[50%] flex flex-col lg:flex-row items-center justify-between h-[400px]">
              <div className="flex mt-5 flex-row lg:flex-col items-center justify-between h-[40%]">
                  {technology.map((_, index) => (
                    <button
                      key={index}
                      className={`h-10 w-10 mx-2 rounded-full ${index === activeMember ? 'bg-white text-black'  : 'bg-transparent text-white border border-solid border-white'}`}
                      onClick={() => setActiveMember(index)}
                      aria-label={`Go to ${index + 1} member`}
                    >{index + 1}</button>
                  ))}
                </div>
                <div className='mx-7'>
                  <h2 className='text-gray-500 uppercase text-2xl text-center lg:text-start'>{technology[activeMember].role}</h2>
                  <h1 className='text-4xl lg:text-4xl text-center lg:text-left uppercase tracking-[5px] my-4'>{technology[activeMember].name}</h1>
                  <p className='my-4 text-center lg:text-left text-xl'>{technology[activeMember].description}</p>
                </div>
              

              </div>

              <Image src={technology[activeMember].imageUrl} width={400} height={400} alt='' className='w-full h-[300px] lg:w-[600px] lg:h-[600px]'/>

          </div>
         </div>
        </div>
    </main>
    </div>
  )
}

export default Technology