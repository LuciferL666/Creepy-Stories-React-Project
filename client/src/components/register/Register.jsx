import { Link } from "react-router-dom"

import '../../../public/styles/30_pages/register.css'


export default function Register () {
 return (
    <div className="reg">
      <h1>Sign Up</h1>
      <h2>You want to be able to write then sign up now</h2>
<form action="" id="sign">
  <input type="name" className="name-reg" placeholder="Your Name" required/>
  <input type="email" class="email-reg" placeholder="Your Email" required/>
  <input type="password" class="password-reg" placeholder="Password" required/>
  <input type="password" class="rPassword-reg" placeholder="Repeat Password" required/>
  <button className="sub-button" type="submit">Submit</button>
  <Link to="/login"><button type="button" class="goToLogin">Have an account</button></Link>
  
</form>
    </div>
  
 )
}