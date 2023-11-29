import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

import "../../../public/styles/30_pages/register.css";

const RegisterFormKeys = {
  Name: "name",
  Email: "email",
  Password: "password",
  PasswordConfirm: "repeat-password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Name]: "",
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
          type="name"
          className="name-reg"
          placeholder="Your Name"
          required
          onChange={onChange}
          values={values[RegisterFormKeys.Name]}
        />
        <input
          type="email"
          class="email-reg"
          name="email"
          placeholder="Your Email"
          required
          onChange={onChange}
          values={values[RegisterFormKeys.Email]}
        />
        <input
          type="password"
          class="password-reg"
          name="password"
          placeholder="Password"
          required
          onChange={onChange}
          values={values[RegisterFormKeys.Password]}
        />
        <input
          type="password"
          class="rPassword-reg"
          name="repeat-password"
          placeholder="Repeat Password"
          required
          onChange={onChange}
          values={values[RegisterFormKeys.PasswordConfirm]}
        />
        <button className="sub-button" type="submit">
          Submit
        </button>
        <Link to="/login">
          <button type="button" class="goToLogin">
            Have an account
          </button>
        </Link>
      </form>
    </div>
  );
}
