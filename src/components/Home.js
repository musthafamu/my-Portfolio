import React from 'react'
import { HiArrowNarrowDown, HiArrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name='home' className='w-full my-4 bg-[#0a192f]'>
      <div className='w-full mx-auto flex flex-col md:flex-row md:items-center '>

        <div className='max-w-[1000px]  px-8 flex flex-col justify-center h-full'>

        <p className='text-[15px]'> <span className='text-pink-400'>Hi</span>,My name is</p>
        <h1 className='text-4xl md:text-7xl pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>Musthafa</h1>
        <h1 className='text-5xl md:text-7xl pb-3'>I'm a Front-end Developer</h1>
        <p className='leading-7  md:max-w-[700px]'>As a highly skilled front-end developer, I have a passion for creating visually stunning and intuitive websites and web applications. With extensive experience in technologies such as HTML, CSS, JavaScript, and frameworks like React , I am able to bring designs to life with clean, semantic code. My portfolio showcases a variety of projects I've worked on, from small landing pages to large-scale sites</p>
        <button className='text-white  rounded-lg w-[150px] border-2 border-pink-700 hover:bg-pink-700 duration-1000 px-4 py-1 my-3 flex flex-col items-center'>View Work <HiArrowNarrowDown/></button>
        </div>
        
      </div>
        
        </div>
  )
}

export default Home