import Form from "antd/es/form/Form";
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

function signup() {

   const router = useRouter();

   const handleSubmit = (e) => {
    e.preventDefault();
    
      router.push('/admin/successTeacher')
    
  }
  
  
  return (
    <main className="min-h-screen bg-primary ">
      <div className="flex flex-col min-h-screen bg-grey-lighter">
        <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
          <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
            <h1 className="mb-8 text-3xl font-bold text-center">
              Create Teacher 
            </h1>
            <input
              type="text"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="id"
              placeholder="Teacher ID"
            />
            <input
              type="text"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="firstname"
              placeholder="First Name"
            />
            <input
              type="text"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="lastname"
              placeholder="Last Name"
            />  

            <input
              type="text"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="Class"
              placeholder="Class"
            />  
            <input
              type="text"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="Division"
              placeholder="Division"
            />


            <input
              type="date"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="dob"
              placeholder="Dat of Birth"
            />

            <input
              type="password"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button 
              onClick={handleSubmit}
              className="inline-block w-full p-5 py-3 my-1 font-bold text-center text-white rounded bg-primary align-items-center hover:bg-black hover:text-white "
            >
              create  
            </button>
          </div>

          <div className="mt-6 font-extrabold text-white">
            Back to the Dashboard
            <Link href={"../admin"}>
              <a className="mx-3 no-underline border-b border-blue text-blue">
                Click here
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default signup;
