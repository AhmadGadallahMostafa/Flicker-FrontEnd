import nav_logo from './images/flickr_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './images/buddyicon.png'
import './Getpro-navbar.css';


const Navbar = () => {
    return ( 
        <nav className="getpro_navbar">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="getpro_nav_logo_click ">
                <a href="" >
                    <img src={nav_logo} width='98' height='49' className="getpro_nav_flickr_logo " alt=""/>
                </a>
            </div>
            <a href="" className="getpro_navbar_profile">
                <img src={profile} width='32' height='32' className="getpro_nav_profilepic" alt="" />
            </a>
            
        </nav>
     ); 
}
 
export default Navbar;