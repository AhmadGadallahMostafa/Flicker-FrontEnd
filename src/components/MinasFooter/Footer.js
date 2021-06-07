import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Footer.css'



/**
 * Component for Footer component for all pages
 *
 * @component
 * @example
 * return (
 *   <Footer/>
 * )
 */
function Footer() {
   
    return (
        <div className="FooterContainer">
            <div className="text-outline">
                <a href="https://www.flickr.com/people/mvmph/" className="UpperText">  About</a>
                <a href="https://www.flickr.com/people/mvmph/" className="UpperText">  Jobs</a>
                <a href="https://www.flickr.com/people/mvmph/" className="UpperText">  Blog</a>
                <a href="https://www.flickr.com/people/mvmph/" className="UpperText">  Developers</a>
                <a href="https://www.flickr.com/people/mvmph/" className="UpperText">  Guidlines</a>
                <a href="https://www.flickr.com/people/mvmph/" className="UpperText">  Help</a>
                <a href="https://www.flickr.com/people/mvmph/" className="UpperText">  Report Abuse</a>
                <a href="https://www.flickr.com/people/mvmph/" className="UpperText">  Help Forum</a>
                <div className="dropup">
                    <button className="dropbtn">English  <i class="fas fa-chevron-up fa-sm"></i></button>
                    <div class="dropup-content">
                        <a href="/#">Deutsch</a>
                        <a href="/#">Espanol</a>
                        <a href="/#">Francais</a>
                    </div>
                </div>    
                <hr className="solid" />
                <div className="LowerText">
                    <a href="https://www.flickr.com/help/privacy" className='LowerText-1'>Privacy</a>
                    <a href="https://www.flickr.com/help/terms" className='LowerText-1'>Terms</a>
                    <a href="https://www.flickr.com/help/cookies" className='LowerText-1'>Cookies</a>
                    <div className='LowerText-a'>
                    <p >SmugMug+Flickr. Connecting people through photography.</p>
                    </div>
                    <div className='LowerText-b'>
                        <a href="https://www.facebook.com/flickr" className='Button2'><i class="fab fa-facebook-square fa-lg"></i></a>
                        <a href="https://twitter.com/flickr" className='Button2'><i class="fab fa-twitter fa-lg"></i></a>
                        <a href="https://www.instagram.com/flickr/"  className='Button2'><i class="fab fa-instagram fa-lg"></i></a>  
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
    
    export default Footer;
