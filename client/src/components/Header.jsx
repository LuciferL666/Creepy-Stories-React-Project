import { Link } from "react-router-dom";


import '../../public/styles/01_components/navigation.css'
import '../../public/styles/10_layout/header.css'
import '../../public/styles/10_layout/general.css'
import '../../public/styles/01_components/buttons.css'

export default function Header() {
  return (

      <header className="site-header section">
        <div className="section-container">
            <div className="site-branding">
              <h1 className="site-title"><Link to='/'>Your Stories</Link></h1>
              <p className="site-subtitle">Post your stories read stories!</p>
            </div>

            <nav className="site-navigation">
              <ul>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/login">
                <button className="login">Login</button>
                </Link></li>
                <li><Link to="/register">
                <button className="register">Register</button>
                </Link></li> 
                <li><Link to="/logout">
                <button className="logout">Logout</button>
                </Link></li>
              </ul>
            </nav>
        </div>
      </header>
// {/* <div class="topnav">
// <Link to="/">
//           <label className="logo">Halloween Memories</label>
// </Link>
// 
// 
// 
// 
// 
// 
// </div> */}
  );
}
