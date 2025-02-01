import React from "react";
import Form from "../../components/shared/form/Form";

function Register() {
  return (
    <>
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
            
            <br />
            <Form formTitle={'Registration-Page'} submitbutton={'Register'} fromType={'Register'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
