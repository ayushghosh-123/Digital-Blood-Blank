import React, { useState } from "react";
import Inputtype from "./Inputtype";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authservice";

function Form({ fromType, submitbutton, formTitle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [hospital, setHospital] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fromType === "login") {
      console.log("i am inside handle submit .......")
      handleLogin(e, email, password, role);
    } else if (fromType === "register") {
      handleRegister(
        e,
        name,
        email,
        password,
        role,
        organization,
        hospital,
        website,
        address
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-4xl font-bold my-8 tracking-wide">
          {formTitle}
        </h1>
        <br />

        <div className="flex gap-1.5 mb-3">
          <div className="form-check me-3">
            <input
              type="radio"
              className="form-check-input"
              id="donor"
              name="role"
              value="donor"
              checked={role === "donor"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="donor" className="form-check-label">
              Donor
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Admin"
              name="role"
              value="Admin"
              checked={role === "Admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="Admin" className="form-check-label">
              Admin
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Hospital"
              name="role"
              value="Hospital"
              checked={role === "Hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="Hospital" className="form-check-label">
              Hospital
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Organization"
              name="role"
              value="Organization"
              checked={role === "Organization"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="Organization" className="form-check-label">
              Organization
            </label>
          </div>
        </div>

        {fromType === "login" && (
          <>
            <Inputtype
              labeltext="Email"
              labelfor="forEmail"
              Inputtype="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Inputtype
              labeltext="Password"
              labelfor="forPassword"
              Inputtype="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        {fromType === "Register" && (
          <>
            {(role === "Admin" || role === "donor") && (
              <Inputtype
                labeltext="Name" 
                labelfor="forName"
                Inputtype="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <Inputtype
              labeltext="Email"
              labelfor="forEmail"
              Inputtype="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Inputtype
              labeltext="Password"
              labelfor="forPassword"
              Inputtype="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {role === "Organization" && (
              <Inputtype
                labeltext="Organization"
                labelfor="forOrganization"
                Inputtype="text"
                name="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            )}
            {role === "Hospital" && (
              <Inputtype
                labeltext="Hospital"
                labelfor="forHospital"
                Inputtype="text"
                name="hospital"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              />
            )}
            <Inputtype
              labeltext="Website"
              labelfor="forWebsite"
              Inputtype="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <Inputtype
              labeltext="Address"
              labelfor="forAddress"
              Inputtype="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </>
        )}

        <br />
        <div className="flex flex-row justify-content-between gap-1.5">
          {fromType === "login" ? (
            <p>
              Not registered yet? Register
              <Link to="/register" className="text-red-600 font-bold underline">
                {" "}
                Here!{" "}
              </Link>
            </p>
          ) : (
            <p>
              Already a user?{" "}
              <Link to="/login" className="text-red-600 font-bold underline">
                {" "}
                Login!
              </Link>
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition duration-300"
        >
          {submitbutton}
        </button>
      </form>
    </div>
  );
}

export default Form;
