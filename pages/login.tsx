import React, { useState } from 'react'
import { useRouter } from 'next/router';


function login() {

  const [id,setID] = useState('');
  const [password,setPassword] = useState('');

  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(id == 'T123'){
      router.push('/profile')
      }
    else if(id == 'S123'){
      router.push('/student')
    }
  }
    
  return (
    <div className='h-screen'>

        <section className="h-screen " >
  <div className="h-full px-7">
    <div
      className="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-between g-6"
    >
      <div
        className="mb-12 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div>
      <div className="mb-12 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
        <form>
          <div className="flex flex-row items-center justify-center lg:justify-start">
           
          </div>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
          </div>

         
          <div className="mb-6">
            <input
              name='id'
              onChange={(e) => {setID(e.target.value)}}
              type="string"
              className="block w-full px-4 py-2 m-0 text-xl font-bold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Teacher ID or Student ID"
            />
          </div>

          
          <div className="mb-6">
            <input
              name='password'
              onChange={(e) => {setPassword(e.target.value)}}
              type="password"
              className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>

          <div className="text-center lg:text-middle">
            <button
              onClick={handleSubmit}
              type="button"
              className="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out rounded shadow-md bg-primary px-7 hover:bg-black hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg"
            >
              Login
            </button>
            {/* <p className="pt-1 mt-2 mb-0 text-lg font-semibold">
              If you are Teacher, Don't have an account? 
              </p>
              
              <a
                href="./signup/1"
                className="transition duration-200 ease-in-out text-primary hover:text-black focus:primary"
                >Register</a> */}
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>

)}
      

export default login;