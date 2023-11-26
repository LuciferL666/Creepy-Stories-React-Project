import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import "../../../public/styles/30_pages/login.css";

export default function Login() {
  const {values, onChange, onSubmit} = useForm({
    email: '',  
    password: '',
  })

  return (
    <div className="log">
      <h1>Login</h1>
      <h2>Get in and start writing</h2>
      <form id="log" onSubmit={onSubmit}>
        <input
          type="email"
          class="email-log"
          placeholder="Your Email"
          required
          onChange={onChange}
          value={values.email}
        />
        <input
          type="password"
          class="password-login"
          placeholder="Password"
          required
          onChange={onChange}
          value={values.password}
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
