import React, { useState } from 'react'
import { FaBars, FaBeer, FaTimes } from "react-icons/fa";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Navbar() {
  const [menu,setmenu]=useState(false)
  const handleclick=()=>setmenu(!menu)
  return (
    <div className='rounded-lg shadow-xl fixed top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] '>
        <h1 className='text-4xl  pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-red-600'>Creative</h1>

      <ul className=' hidden md:flex font-bold '>
        <li className='mx-3 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link to='home' spy={true} offset={-100} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='mx-3 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='mx-3 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link to='skills' offset={-50} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='mx-3 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link to='project' offset={-40} smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='mx-3 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link to='contact' offset={-70} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    
    
      <div onClick={handleclick} className='md:hidden'>
        {!menu? <div className='duration-1000'> <FaBars size={35} /></div>:<div className='duration-1000'><FaTimes size={35}/> </div>}  
      </div>
   
    <ul className= {!menu ?' hidden duration-1000':  'md:hidden absolute right-0 w-full border font-bold border-sky-600 p-[100px] rounded shadow-xl ml-3 bg-gray-900 top-[80px] flex flex-col justify-center items-center duration-1000 '}>

    <li className='mx-3 my-2 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link onClick={handleclick} to='home' spy={true} offset={-100} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='mx-3 my-2 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link onClick={handleclick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='mx-3 my-2 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link onClick={handleclick} to='skills' offset={-50} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='mx-3 my-2 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link onClick={handleclick} to='project' offset={-40} smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='mx-3 my-2 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link onClick={handleclick} to='contact' offset={-70} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
    </ul>
    

      

    </div>
  )
}

export default Navbar