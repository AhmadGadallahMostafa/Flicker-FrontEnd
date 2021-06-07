import Member from '../../images/Team_Member.jpg';
import Account from '../../images/create-account-button.png';
import Navbar from './components/AboutNavbar/Navbar';
import Footer from './components/MinasFooter/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/AboutPage/About.css';

/**
 * Component for About Page
 *
 * @component
 * @example
 * return (
 *   <About/>
 * )
 */
const About = () => {

    return ( 
        <div>
            <Navbar/>
            <div id="about-page" className="about-content">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <br /><br /><br />
            <div className="row">
                <div className="col-3 left-col">
                    <div className="upper-list">
                        <p className="links"><a href="" className="links-2 blue-white">Take the tour</a></p>
                        <p className="links"><a href="" className="links-2 blue-white">Flickr blog</a></p>
                        <p className="links"><a href="" className="links-2 blue-white">Community guidelines</a></p>
                        <p className="links"><a href="" className="links-2 blue-white">Jobs</a></p>
                    </div>
                    <p className="sign-up-pic">
                        <a href="">
                            <img src={Account} width="100%" height="100%"alt=""/>
                        </a>
                        <a href="" className="sign-in-center blue-white">or Sign In</a>
                    </p>
                    <h3 className="helptag"><b className="helptag2">Need help?</b></h3>
                    <p className="last">
                        <a href="" className="last blue-white">Visit our FAQ</a>
                        <br/>
                        <a href="" className="last blue-white">Get help by email</a>
                    </p>
                </div>
                <div className="col-9 right-col">
                    <h1 className="h1-resising">About Flickr</h1>
                    <h2 className="h2-resising">Flickr - almost certainly the best online photo management and
                         sharing application in the world - has <span>two main goals</span>:</h2>
                    <div className="list">
                        <h3 className="h3-resising">
                            <b className="Num">1.</b> We want to <b>help people make their photos available
                             to the people who matter to them</b>.
                        </h3>
                            <p>Maybe they want to keep a blog of moments captured on their
                                 cameraphone, or maybe they want to show off their best pictures 
                                or video to the whole world in a bid for web celebrity.
                                Or maybe they want to securely and privately share photos
                                of their kids with their family across the country. Flickr
                                makes all these things possible and more!</p>
                            <p>To do this, we want to <strong>get photos and video into and out of 
                                the system in as many ways as we can</strong>: from the web, from mobile
                                devices, from the users' home computers and from whatever software
                                they are using to manage their content. And we want to be able to
                                push them out in as many ways as possible: on the Flickr website,
                                in RSS feeds, by email, by posting to outside blogs or ways we
                                 haven't thought of yet. What else are we going to use those smart
                                  refrigerators for?</p>
                        <h3 className="h3-resising">
                            <b className="Num">2.</b> We want to <b>enable new ways of organizing photos and video</b>.
                        </h3>          
                                <p>Once you make the switch to digital, it is all too easy to get
                                 overwhelmed with the sheer number of photos you take or videos
                                you shoot with that itchy trigger finger. Albums, the principal
                                way people go about organizing things today, are great -- until
                                you get to 20 or 30 or 50 of them. They worked in the days of 
                                getting rolls of film developed, but the "album" metaphor is in
                                 desperate need of a Florida condo and full retirement.</p>
                                 <p>Part of the solution is to make the process of organizing
                                    photos or videos collaborative. In Flickr, you can give your
                                    friends, family, and other contacts permission to organize
                                    your stuff - not just to add comments, but also notes and tags.
                                    People like to ooh and ahh, laugh and cry, make wisecracks when
                                    sharing photos and videos. Why not give them the ability to do
                                    this when they look at them over the internet? And as all this
                                    info accretes as metadata, you can find things so much easier
                                    later on, since all this info is also searchable.
                                 </p>
                    </div>
                    <p>Flickr continues to evolve in myriad ways, all of which are
                         designed to make it easier and better. Check out 
                         the <a href="" className="blue-white">Flickr Blog</a> to stay apprised of the latest developments. The fact that 
                         you've read to the end of this entire document and are hanging out 
                         at the bottom of this page with nothing but this silly text to keep 
                         you company is proof of a deep and abiding interest on your part. 
                         What are you waiting for? <a href=""><b className="Sign-up blue-white">Sign up now!</b></a></p>  
                    <h2 className="h2-resising team-color">The Team</h2>

                    <table width="100%">
                        <tbody>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                            <tr valign = "top">
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                                <td width="16.666%" align="center">
                                    <a href="" className="images-styling"><img src={Member} width='75' height='75' alt=""/></a>
                                    <br/>
                                    <small>Ahmed</small>
                                    <br/><br/>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
        
     );
}
 
export default About;
