import React from 'react'
import Image from 'next/image'
import mypic from '../../assets/Sva.jpeg'

import { AiFillHome, AiFillIdcard,AiFillGold,AiFillMail,AiFillFire } from "react-icons/ai";
import { FiEdit, FiMeh } from "react-icons/fi";

function profile() {
    var name="Sivashanth"
    var role="Admin"
    
  return (
    <div>

        <div className='h-screen lg:w-1/4 sm:w-1/3 dark:bg-primary' >
            {/* Image Container */}
            <div className='lg:p-8 bg-grey sm:p-5 md:p-3'>
                <Image
                src={mypic}
                alt="Picture of the user"
                width="200px"
                height="200px"

                className='max-w-full rounded-full lg:h-200'
                />
            </div>

            {/* Details  Container */}
            <div>
                <h1 className='flex pl-10 text-3xl lg:text-white'>{name}</h1>
                <h1 className='flex items-center pl-10 mt-3 text-3xl lg:text-white'>{role}</h1>
            
            </div>

            {/* Routing page */}
            <div className='mt-20'>
               
                <a href='/home-intro' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillHome className='mr-3'/> Home</a>
                <a href='./signup/2' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillIdcard className='mr-3'/> Create Teacher</a>
                <a href='./signup/1' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <FiMeh className='mr-3'/> Create Student</a>
                <a href='#' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillMail className='mr-3'/> Chat Box</a>
                <a href='#' className='flex items-center pl-10 mt-3 text-2xl lg:text-black'> <AiFillFire className='mr-3'/> Updated News</a>
                
            </div>
        </div>
    </div>
  )
}

export default profile;