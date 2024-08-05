import Link from 'next/link';
import React from 'react';

const EllipsesNav = () => {
  return (
    <div className='flex justify-around items-center border border-solid border-red-700 w-[40%]'>
      <div className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer hover:bg-white">
        <Link href={'/crew'}>
          <p className="w-full h-full block" />
        </Link>
      </div>
      <div className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer hover:bg-white">
        <Link href={'/crew/mission-specialist'}>
          <p className="w-full h-full block" />
        </Link>
      </div>
      <div className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer hover:bg-white">
        <Link href={'/crew/pilot'}>
          <p className="w-full h-full block" />
        </Link>
      </div>
      <div className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer hover:bg-white">
        <Link href={'/crew/flight-engineer'}>
          <p className="w-full h-full block" />
        </Link>
      </div>
    </div>
  );
}

export default EllipsesNav;
