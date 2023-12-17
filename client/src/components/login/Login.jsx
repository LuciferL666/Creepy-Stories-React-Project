import { Link } from "react-router-dom";
import { useContext } from "react";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import "../../../public/styles/30_pages/login.css";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  return (
    <div className="log">
      <h1>Login</h1>
      <h2>Get in and start writing</h2>
      <form id="log" onSubmit={onSubmit}>
        <input
          type="email"
          class="email-log"
          name={LoginFormKeys.Email}
          placeholder="Your Email"
          onChange={onChange}
          value={values[LoginFormKeys.Email]}
        />
        <input
          type="password"
          class="password-login"
          name={LoginFormKeys.Password}
          placeholder="Password"
          onChange={onChange}
          value={values[LoginFormKeys.Password]}
        />
        <button className="sub-button" type="submit">
          Submit
        </button>
        <Link to="/register">
          <button type="button" className="goToRegistration">
            Don't have an account
          </button>
        </Link>
      </form>
    </div>
  );
}
