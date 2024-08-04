'use client'
import Link from 'next/link';
import React, { useState } from 'react'

interface Link {
    url: string;
    title: string;
    id: number;
}

const links: Link[] = [
    {
        id: 1,
        title: 'Moon',
        url: '/destination'
    },
    {
        id: 2,
        title: 'Mars',
        url: '/destination/mars'
    },
    {
        id: 3,
        title: 'Europa',
        url: '/destination/europa'
    },
    {
        id: 4,
        title: 'Titan',
        url: '/destination/titan'
    }
]

const DestinationNavBar = () => {
    const [clicked, setClicked] = useState('')

    const handleClick = (href:string) => {
        setClicked(href)
    }
  return (
    <div>
    <ul className="flex text-white items-center justify-between w-[300px] uppercase mx-auto lg:mx-0 my-5">
      {links.map((link) => (
        <li key={(link.id)}>
          <Link
            href={link.url}
            onClick={() => handleClick(link.url)}
            className={`${
              clicked === link.url
                ? 'border-solid border-b-2 active:border-white text-white'
                : 'border-0 text-gray-400 hover:text-white'
            }`}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  )
}

export default DestinationNavBar