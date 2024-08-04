import React, { FC } from 'react'

interface TitleProps {
    index: string;
    title: string;
}

const Title: FC<TitleProps> = ({ index, title }) => {
  return (
    <div className='flex justify-around items-center uppercase tracking-[2px] w-full md:w-[350px]'>
        <span className='text-gray-500 font-extrabold text-[20px]'>{index}</span>
        <h1 className='text-white text-[20px]'>{title}</h1>
    </div>
  )
}

export default Title