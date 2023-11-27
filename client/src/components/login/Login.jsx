import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import "../../../public/styles/30_pages/login.css";

const LoginFormKyes = {
  Email: 'email',
  Password: 'password',
}

export default function Login({
  loginSubmitHandler,
}) {
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    [LoginFormKyes.Email]: '',  
    [LoginFormKyes.Password]: '',
  });

  return (
    <div className="log">
      <h1>Login</h1>
      <h2>Get in and start writing</h2>
      <form id="log" onSubmit={onSubmit}>
        <input
          type="email"
          class="email-log"
          name={LoginFormKyes.Email}
          placeholder="Your Email"
          required
          onChange={onChange}
          value={values[LoginFormKyes.Email]}
        />
        <input
          type="password"
          class="password-login"
          name={LoginFormKyes.Password}
          placeholder="Password"
          required
          onChange={onChange}
          value={values[LoginFormKyes.Password]}
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
