import React from 'react'

import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
import {
    BsFillTelephoneForwardFill
  } from 'react-icons/bs';
  import { SiGmail } from "react-icons/si";
    const Contact = () => {
      return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center text-white items-center p-4'>
            <form method='POST' action="https://getform.io/f/b773c88e-6f86-43e9-8e20-5cbcc5ba3ac0" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
                    <ul className='py-4 flex justify-center gap-4'>
          <li className='bg-blue-600 w-fit rounded-sm hover:rounded-xl duration-75'>
            <a
              className=' flex items-center text-gray-300 p-2 '
              href='https://www.linkedin.com/in/muhammed-musthafa-8862ba245/'
            >
            <FaLinkedin size={30} />
            </a>
          </li>
          <li className='bg-gray-700 w-fit rounded-sm hover:rounded-xl duration-75'>
            <a
              className=' flex items-center text-gray-300 p-2 '
              href='https://github.com/musthafamu'
            >
            <FaGithub size={30} />
            </a>
          </li>
          <li className='bg-gray-700 w-fit rounded-sm hover:rounded-xl duration-75'>
            <a
              className=' flex items-center text-gray-300 p-2 '
              
            >
            <BsFillTelephoneForwardFill size={30} /> <i className='px-4'>8848183774</i>
            </a>
          </li>
          <li className='bg-gray-700 w-fit rounded-sm hover:rounded-xl duration-75 flex justify-center items-center'>
          
             <i className='px-4 flex  justify-center'>musthafa.id78@gmail</i>
         
          </li>
          </ul>
                    <p className='text-center'> Submit the form below or Send me an email </p>
                </div>
          <input  placeholder='name'  type='text' className='w-full  bg-white shadow appearance-none border rounded border-blue-600   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username'   />
          <input type="email" placeholder='Email' name='email' className='w-full  bg-white shadow appearance-none border rounded border-blue-600   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'   />

                <textarea className='w-full  bg-white shadow appearance-none border rounded border-blue-600   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 bg-blue-600 p-2 rounded-md border-none '>Send</button>
            </form>
        </div>
  )
}

export default Contact