import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../contexts/authContext";

import '../../../public/styles/01_components/navigation.css'
import '../../../public/styles/10_layout/header.css'
import '../../../public/styles/10_layout/general.css'
import '../../../public/styles/01_components/buttons.css'

export default function Header() {
    const {
      isAuthenticated,
      username,
    } = useContext(AuthContext);

  return (

      <header className="site-header section">
        <div className="section-container">
            <div className="site-branding">
              <h1 className="site-title"><Link to='/'>Your Creepy Stories</Link></h1>
              <p className="site-subtitle">Post your stories read stories!</p>
            </div>

            <nav className="site-navigation">
              <ul>
                <li><Link to="/catalog">Catalog</Link></li>
                {isAuthenticated && (
                  <div className="logged">
                <li><Link to="/create">Create</Link></li>
                <li><Link to="/logout">
                <button className="logout">Logout</button>
                </Link></li>
                <span>| {username}</span>
                </div>
                )}
                {!isAuthenticated && (
                  <div className="notLogged">
                <li><Link to="/login">
                <button className="login">Login</button>
                </Link></li>
                <li><Link to="/register">
                <button className="register">Register</button>
                </Link></li> 
                  </div>
                )}

                
              </ul>
            </nav>
        </div>
      </header>
  );
}
