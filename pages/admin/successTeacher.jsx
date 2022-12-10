import React from 'react'
import { FiUserCheck, FiActivity} from "react-icons/fi";

function success() {
  return (
    <div>
        <div class="bg-primary rounded-lg py-5 px-6 mb-4 text-base text-green-700 tems-center justify-center flex row-auto mt-20" role="alert">
            <FiUserCheck className='mr-10 text-7xl'/>
            <h4 class="text-4xl font leading-tight mb-2">Teacher Created Succesfully !</h4>
        
        </div>

        <div className="bg-black rounded-lg py-5 px-6 mb-4 text-base text-green-700 tems-center justify-center flex row-auto mt-20" role="alert">
            <FiActivity className='mr-10 text-7xl bg-white'/>
            <a href='../signup/2' className="text-4xl font leading-tight mb-2 bg-white">Click here to Back to Teacher Add Page</a>
        
        </div>

    </div>
  )
}

export default success