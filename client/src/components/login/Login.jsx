import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import "../../../public/styles/30_pages/login.css";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password',
}

export default function Login({
  loginSubmitHandler,
}) {
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',  
    [LoginFormKeys.Password]: '',
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
          required
          onChange={onChange}
          value={values[LoginFormKeys.Email]}
        />
        <input
          type="password"
          class="password-login"
          name={LoginFormKeys.Password}
          placeholder="Password"
          required
          onChange={onChange}
          value={values[LoginFormKeys.Password]}
        />
        <button className="sub-button" type="submit">
          Submit
        </button>
        <Link to="/login">
          <button type="button" class="goToRegistration">
            Don't have an account
          </button>
        </Link>
      </form>
    </div>
  );
}
