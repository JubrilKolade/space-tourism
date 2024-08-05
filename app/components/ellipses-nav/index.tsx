import { useRouter } from 'next/router';
import React from 'react'

const EllipsesNav = () => {
    const router = useRouter();
    const handleNavigate = (path: string) => {
        router.push(path);
    };
  return (
    <div className="flex space-x-4 justify-center mt-10">
      <div
        className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-700"
        onClick={() => handleNavigate('/crew')}
      />
      <div
        className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-700"
        onClick={() => handleNavigate('/crew/mission-specialist')}
      />
      <div
        className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-700"
        onClick={() => handleNavigate('/crew/pilot')}
      />
      <div
        className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-700"
        onClick={() => handleNavigate('/crew/flight-engineer')}
      />
    </div>
  )
}

export default EllipsesNav