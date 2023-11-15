import { Link } from "react-router-dom";
import '../../public/styles/10_layout/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Footer () {
    return (

        <footer className="site-footer section">
            <div className="section-container">
                
                <div className="columns">

                    <div className="newsletter">

                    </div>

                    <div className="panel">
                        <h6>About Us</h6>
                        <ul>
                            <li><Link to=''>Popular</Link></li>
                            <li><Link to=''>Trending</Link></li>
                            <li><Link to=''>Contact</Link></li>
                            <li><Link to=''>Support</Link></li>
                            <li><Link to=''>Request Topics</Link></li>
                        </ul>
                    </div>

                    <div className="panel">
                        <h6>More ...</h6>
                        <ul>
                            <li><Link to=''>Popular</Link></li>
                            <li><Link to=''>Trending</Link></li>
                            <li><Link to=''>Contact</Link></li>
                            <li><Link to=''>Support</Link></li>
                            <li><Link to=''>Request Topics</Link></li>
                        </ul>
                    </div>

                    <div className="panel">
                        <h6>Follow us</h6>
                        <ul>
                            <li><Link to=''>Facebook</Link></li>
                            <li><Link to=''>GitHub</Link></li>
                            <li><Link to=''>Youtube</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="info">
                <p className="copyright"><strong>2023 &copy; Your Creepy Storie</strong> - All rights reserved. Designed by <span class="designer">Peyko Georgiev</span></p>
                
                <ul>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="#">Terms of Service</Link></li>
                    {/* <li><Link to="#"></Link></li> */}
                </ul>
                
                </div>

            </div>
        </footer>
        // <footer><p>Copyright &copy;2023 Designed by <span class="designer">Peyko Georgiev</span></p></footer>
    )
}