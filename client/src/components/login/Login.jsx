import { Link } from 'react-router-dom'

import '../../../public/styles/30_pages/login.css'

export default function Login () {
    return (

        <div className="log">
      <h1>Login</h1>
      <h2>You want to be able to write then sign up now</h2>
<form action="" id="log">
  <input type="email" class="email-log" placeholder="Your Email" required/>
  <input type="password" class="password-login" placeholder="Password" required/>
  <button className="sub-button" type="submit">Submit</button>
  <Link to="/login"><button type="button" class="goToRegistration">Don't have an account</button></Link>
</form>
    </div>
    )
}