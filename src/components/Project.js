import React from 'react'
import crypto from  '../assets/projects/Crypto.png'
import {work } from '../components/work'
function Project() {
  const project =work;
  return (
    <div name='project' className='w-full py-40 md:h-screen text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
          Work
        </p>
        <p className='py-6 text-center font-bold'> Check out some of my recent work</p>
      </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* Gird Item */}
        {project.map((item)=>{
          return(
            <div key={item.index}>
              <div className='w-[300px] shadow-md hover:border-blue-700 duration-75 border-2 border-white rounded-sm'>
                <img className='' src={item.image} />

                <div className='p-4 flex  flex-col items-center justify-center'>
                
                  <label className='text-green-600'> <span className='text-white'>Technologie:-</span>React,redux,tailwind.css </label>
               
<div className=''>

                  <button className=' px-7 mt-2 mx-2 rounded bg-gradient-to-br from-blue-700 to-sky-500'><a href={item.Live}>Live</a></button>
                  <button className=' px-7 mt-2 rounded bg-gradient-to-br from-blue-700 to-sky-500'><a href={item.git}>Code</a></button>
  </div>
                    

                  </div>
              
                </div>



              </div>
          )
        })}


</div>
    </div>
  </div>
    
  )
}

export default Project