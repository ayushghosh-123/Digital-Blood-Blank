import PropTypes from "prop-types";
import Form from "../../components/shared/form/Form";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4 sm:p-6">
      <div className="flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden w-full max-w-4xl bg-white transform transition duration-500 hover:scale-105 animate-fade-in-up">
        {/* Left Side - Image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src="front.jpg"
            alt="Medical Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-10 md:p-12 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6 sm:mb-10 text-center fade-in">Welcome to MediCare</h2>
          <Form formTitle={"Login Page"} submitbutton={"Login"} formType={"login"} />

          <p className="mt-6 sm:mt-8 text-center text-gray-600 text-sm sm:text-lg fade-in">
            {"Don't have an account?"} 
            <a href="#" className="text-blue-500 font-semibold hover:underline transition duration-300 ease-in-out transform hover:scale-105">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  formType: PropTypes.oneOf(["login", "register"]).isRequired,
  formTitle: PropTypes.string.isRequired,
};
