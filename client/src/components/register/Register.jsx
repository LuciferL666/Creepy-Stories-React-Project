import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

import "../../../public/styles/30_pages/register.css";

const RegisterFormKeys = {
  Name: "name",
  Email: "email",
  Password: "password",
  PasswordConfirm: "repeatPassword",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.PasswordConfirm]: "",
  });
  

  return (
    <div className="reg">
      <h1>Sign Up</h1>
      <h2>You want to be able to write then sign up now</h2>
      <form id="sign" onSubmit={onSubmit}>
       <input
  type="text"
  className="name-input"
  placeholder="Your Name"
  required
  onChange={onChange}
  defaultValue={values[RegisterFormKeys.Name] || ''}
/>

<input
  type="email"
  className="email-input"
  name="email"
  placeholder="Your Email"
  required
  onChange={onChange}
  value={values[RegisterFormKeys.Email]}
/>

<input
  type="password"
  className="password-input"
  name="password"
  placeholder="Password"
  required
  onChange={onChange}
  value={values[RegisterFormKeys.Password]}
/>

<input
  type="password"
  className="rPassword-input"
  name="repeatPassword"
  placeholder="Repeat Password"
  required
  onChange={onChange}
  value={values[RegisterFormKeys.PasswordConfirm]}
/>
        <button className="sub-button" type="submit">
          Submit
        </button>
        <Link to="/login">
          <button type="button" className="goToLogin">
            Have an account
          </button>
        </Link>
      </form>
    </div>
  );
}
