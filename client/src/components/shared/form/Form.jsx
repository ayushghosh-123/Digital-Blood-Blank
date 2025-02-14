import { useState } from "react";
import Inputtype from "./Inputtype";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authservice";

function Form({formType, formTitle, formType}) {
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
          {["donor", "Admin", "Hospital", "Organization"].map((r) => (
            <div className="form-check me-3" key={r}>
              <input
                type="radio"
                className="form-check-input"
                id={r}
                name="role"
                value={r}
                checked={role === r}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor={r} className="form-check-label">
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
          </>
        )}

        <br />
        <div className="flex flex-row justify-content-between gap-1.5">
          {formType === "login" ? (
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
