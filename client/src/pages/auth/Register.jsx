import Form from "../../components/shared/form/Form";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-400 p-4 sm:p-6">
      <div className="flex flex-col-reverse md:flex-row shadow-lg rounded-3xl overflow-hidden w-full max-w-4xl bg-white transform transition duration-500 hover:scale-105">
        
        {/* Right Side - Registration Form */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-10 lg:p-14 text-gray-800">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-3 sm:mb-4 md:mb-6 text-blue-500">Sign Up</h2>
          <p className="text-center text-gray-500 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg">Join us today and access exclusive benefits.</p>
          <Form formTitle={'Registration-Page'} submitbutton={'Register'} formType={'register'} />
          <p className="text-center text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a></p>
        </div>

        {/* Left Side - Image (Shown below form on mobile) */}
        <div className="w-full sm:w-1/2 flex sm:hidden">
          <img
            src="front.jpg"
            alt="Medical Registration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden sm:flex sm:w-1/2">
          <img
            src="front.jpg"
            alt="Medical Registration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;