'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/assets/logo.svg'
import close from '../../../public/assets/close.svg'
import hamburger from '../../../public/assets/hamburger.svg'
import Link from 'next/link'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleMenu = () => setIsOpen(!isOpen)


  return (
    <div>
      <nav className='w-full bg-transparent fixed top-0 left-0 right-0 z-10 mt-0 md:mt-10'>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/home">
                 <Image src={logo} alt=''/>
              </Link>

              <div className="md:hidden">
                <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400' 
                onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? 
                    (<Image src={close} alt=''/>
                  ): (
                    <Image src={hamburger} alt='' className='focus:border-none active:border-none'/>
                  ) 
                  }
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 bg-transparent ${isOpen ? 'p-12 md:p-0 block': 'hidden'}`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex backdrop-blur bg-opacity-10 bg-white">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900 md:hover:border-b-2 md:hover:border-white md:hover:bg-transparent">
                  <Link href="/home" onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex justify-center items-center uppercase'>
                      <span>00</span>
                      <p className='ml-3'>Home</p>
                      </div>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900 md:hover:border-b-2 md:hover:border-white md:hover:bg-transparent">
                  <Link href="/destination" onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex justify-center items-center uppercase'>
                      <span>01</span>
                      <p className='ml-3'>Destination</p>
                    </div>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:border-b-2 md:hover:border-white md:hover:bg-transparent">
                  <Link href="/crew" onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex justify-center items-center uppercase'>
                      <span>03</span>
                      <p className='ml-3'>crew</p>
                    </div>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:border-b-2 md:hover:border-white md:hover:bg-transparent">
                  <Link href="/technology" onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex justify-center items-center uppercase'>
                      <span>02</span>
                      <p className='ml-3'>Technology</p>
                    </div>
                  </Link>
                </li>
                
              </ul> 
            </div>
          </div>
        </div>
      </nav>
    </div>



  )
}

export default NavBar