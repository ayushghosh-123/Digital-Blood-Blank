import React from 'react'
import Form from '../../components/shared/form/Form';


export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
        <div className="flex shadow-2xl rounded-lg overflow-hidden w-full max-w-8xl bg-white">
          
          {/* Left Side - Image */}
          <div className="hidden md:flex md:w-1/2">
            <img
              src="front.jpg"
              alt="Medical Login"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">
              Welcome to MediCare
            </h2>
            <br />
            <Form formTitle={'Login-Page'} submitbutton={'Login'} fromType={'login'}/>
            
            <p className="mt-8 text-center text-gray-600 text-lg">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  