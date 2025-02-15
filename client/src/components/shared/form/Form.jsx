import { useState } from "react";
import Inputtype from "./Inputtype";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authservice";
import PropTypes from 'prop-types'; // Import PropTypes

function Form({ formType, formTitle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [hospital, setHospital] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(""); // Added phone number
  const [city, setCity] = useState("");   // Added city
  const [country, setCountry] = useState(""); // Added country


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      console.log("i am inside handle submit .......");
      handleLogin(e, email, password, role);
    } else if (formType === "register") {
      handleRegister(
        e,
        name,
        email,
        password,
        role,
        organization,
        hospital,
        website,
        address,
        phone, // Pass phone to handleRegister
        city,  // Pass city to handleRegister
        country // Pass country to handleRegister
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-4xl font-bold my-8 tracking-wide">
          {formTitle}
        </h1>

        <div className="flex flex-wrap gap-4 mb-6">
          {["donor", "admin", "hospital", "organization"].map((r) => (
            <div className="flex items-center" key={r}>
              <input
                type="radio"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                id={r}
                name="role"
                value={r}
                checked={role === r}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor={r} className="ml-2 text-sm font-medium text-gray-700">
                {r}
              </label>
            </div>
          ))}
        </div>

        {formType === "login" && (
          <>
            <Inputtype
              labeltext="Email"
              labelfor="forEmail"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Inputtype
              labeltext="Password"
              labelfor="forPassword"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        {formType === "register" && (
          <>
            {(role === "Admin" || role === "donor") && (
              <Inputtype
                labeltext="Name"
                labelfor="forName"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <Inputtype
              labeltext="Email"
              labelfor="forEmail"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Inputtype
              labeltext="Password"
              labelfor="forPassword"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Inputtype
              labeltext="Phone Number"
              labelfor="forPhone"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {role === "Organization" && (
              <Inputtype
                labeltext="Organization"
                labelfor="forOrganization"
                type="text"
                name="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            )}
            {role === "Hospital" && (
              <Inputtype
                labeltext="Hospital"
                labelfor="forHospital"
                type="text"
                name="hospital"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              />
            )}
            <Inputtype
              labeltext="Website"
              labelfor="forWebsite"
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <Inputtype
              labeltext="Address"
              labelfor="forAddress"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Inputtype
              labeltext="City"
              labelfor="forCity"
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Inputtype
              labeltext="Country"
              labelfor="forCountry"
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </>
        )}

        <div className="flex justify-between items-center mt-6 mb-4">
          {formType === "login" ? (
            <p className="text-sm">
              Not registered yet? Register
              <Link to="/register" className="text-red-600 font-bold underline ml-1">
                Here!
              </Link>
            </p>
          ) : (
            <p className="text-sm">
              Already a user?
              <Link to="/login" className="text-red-600 font-bold underline ml-1">
                Login!
              </Link>
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition duration-300"
        >
          {formType === "login" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  formType: PropTypes.oneOf(['login', 'register']).isRequired,
  formTitle: PropTypes.string.isRequired,
};

export default Form