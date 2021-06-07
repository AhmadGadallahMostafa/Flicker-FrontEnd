import nav_logo from '../../images/flickr_logo.svg';
import cloud from '../../images/cloud.png'
import search from '../../images/Search-icon.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';


/**
 * Component for normal Navbar
 *
 * @component
 * @example
 * return (
 *   <Navbar/>
 * )
 */
const Navbar = () => {
    return ( 
        <nav id="navbar-page" className="navbar">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <a href="" className="nav_logo_click ani">
                <img src={nav_logo} width='98' height='49' className="nav_flickr_logo ani" alt=""/>
            </a>
            <a href="" className="signin-button nav-button">Sign Up</a>
            <a href="" className="nav-button nav-button1 ani">Explore</a>
            <a href="" className="nav-button nav-button2 ani">Prints</a>
            <a href="" className="nav-button nav-button3 ani">Get Pro</a>
            <form action="" className="navbarsearch">
                <a href="">
                    <img src={search} alt="" className="navbarsearch-icon"/>
                </a>
                <input type="text" placeholder="      Photos, people, or groups" className="navbarsearch-bar"></input>
            </form>
            <a href="" className="nav-button4 ani">
                <img src={cloud} alt=""/>   
            </a>
            <a href="" className="nav-button nav-button5 ani">Sign In</a>

        </nav>
     ); 
}
 
export default Navbar;
