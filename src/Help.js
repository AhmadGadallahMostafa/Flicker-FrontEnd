import background from './images/Background-help4.jpg';
import flickrhelp from './images/flickr-help.svg';
import twitter from './images/twitter.svg';
import arrow from './images/grey-arrow.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Help.css';


const Help = () => {


    return ( 
        <div id="help-page" className="Home">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="home0">
                <img src={background} width='100%' max-height='100%' className="opacity-img" alt=""/>
                <nav className="top">
                    <a href="flickr-help">
                        <img src={flickrhelp} width='106.57' height='22.85' className="flickr-help-logo" alt=""/>
                    </a>
                    <a href="" className="button1 wbutton">All Topics</a>
                    <a href="" className="button2 wbutton">Status</a>
                    <img src={twitter}  className="button3 wbutton" alt=""/>
                    <a href="" className="button4 wbutton">Follow @FlickrHelp</a>
                    <a href="" className="button5 wbutton">flickr.com</a>
                </nav>
                <div className="search">
                    <span className="help-center">Help Center</span>
                    <br/>
                    <input type="text" className="search-bar" placeholder="Find Answers"/>
                </div>
                <a href="" className="image-credits">Image by Paul Cox</a>
            </div>
            <div className="home1">

                {/* **********************Header**************************/}
                <div className="all-systems">
                    <div className="circle"></div>
                    <div className="all-sys-text"> All Systems Operational</div>
                </div>

                {/* **********************Main Block**************************/}
                <div className="popular">
                    <div className="popular-text">
                        <span>Popular Articles</span>
                    </div>

                    {/* **********************Popular Boxes**************************/}
                    <div className="article1">
                        <div className="article-text article1-text">
                            Logging in to Your Flickr Account
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </div>
                    <div className="article1">
                        <div className="article-text article2-text">
                            Change Your Flickr Contact Email Address
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </div>
                    <div className="article1">
                        <div className="article-text article3-text">
                            FAQ for Flickr members about our payment processor migration
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </div>
                    <div className="article1">
                        <div className="article-text article4-text">
                            Get Flickr notifications by email and in your account
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </div>
                    <div className="article1">
                        <div className="article-text article5-text">
                            Pricing FAQ
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </div>

                    {/* **********************Flickr topics header**************************/}

                    <div className="browse">
                        <div className="browse-text">
                            Browse Flickr Topics
                        </div>
                    </div>   

                    {/* **********************Flickr topics**************************/}
                    <div className="row topics-structure">
                        <div className="col-3">
                            <div className="left-title left-title1" onclick="show-function()">
                                <div className="left-title-text">
                                    Get Started
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title2" onclick="show-function()">
                                <div className="left-title-text">
                                    Account Access
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title3" onclick="show-function()">
                                <div className="left-title-text">
                                    Billing 
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title4" onclick="show-function()">
                                <div className="left-title-text">
                                    Flickr Prints 
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title5" onclick="show-function()">
                                <div className="left-title-text">
                                    Manage Content 
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title6" onclick="show-function()">
                                <div className="left-title-text">
                                    Flickr App 
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title7" onclick="show-function()">
                                <div className="left-title-text">
                                    Sharing and Social 
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title8" onclick="show-function()">
                                <div className="left-title-text">
                                    Sharing and Preferences 
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title9" onclick="show-function()">
                                <div className="left-title-text">
                                    Upload and Download Photos
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title10" onclick="show-function()">
                                <div className="left-title-text">
                                    Trust and Safety 
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title11" onclick="show-function()">
                                <div className="left-title-text">
                                    Privacy and Security 
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title12" onclick="show-function()">
                                <div className="left-title-text">
                                    Third-Party Apps
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                            <div className="left-title left-title13" onclick="show-function()">
                                <div className="left-title-text">
                                    FAQs
                                </div>
                                <div className="right-arrow">&#62;</div>
                            </div>
                        </div>
                        <div className="col-9 topics-right">
                            <div className="Get-started-topics">
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="Get-started-topic1-title-text">
                                                <b>How to Sign Up for a Flickr Account</b>
                                            </div>
                                            <img src={arrow} className="arrow" alt=""/>
                                        </div>
                                        <div className="topic1-content">
                                            In order to sign up for an account, you will need both 
                                            an email address and a password of your choice. You will 
                                            be able to create an account on either...
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="Get-started-topic2-title-text">
                                                <b>Get Started with Flickr</b>
                                            </div>
                                            <img src={arrow} className="arrow" alt=""/>
                                        </div>
                                        <div className="topic1-content">
                                            Flickr is a great place to connect with friends and family, 
                                            find new and amazing images from photographers all over the globe, 
                                            and let others catch...
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="Get-started-topic3-title-text">
                                                <b>The rules of Flickr</b>
                                            </div>
                                            <img src={arrow} className="arrow" alt=""/>
                                        </div>
                                        <div className="topic1-content">
                                            Term of Service, Guidelines & Safety Requirements. To maintain 
                                            compliance with the Community Guidelines, members are responsible 
                                            for moderati...
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="Get-started-topic4-title-text">
                                                <b>Age requirements for Flickr</b>
                                            </div>
                                            <img src={arrow} className="arrow" alt=""/>
                                        </div>
                                        <div className="topic1-content">
                                        Flickr requires its members to be 13 years old or older. If 
                                        you're under the age of 18  you cannot:Make your profile public in 
                                        FlickrConnec...
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="Get-started-topic5-title-text">
                                                <b>Set up and manage a Flickr account for business use</b>
                                            </div>
                                            <img src={arrow} className="arrow" alt=""/>
                                        </div>
                                        <div className="topic1-content">
                                            Sign up for Flickr to promote your business with photos of 
                                            company culture, events, and office fun.While multiple 
                                            employees may access & manage t...
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* **********************Flickr topics Block**************************/}
                </div> 
            </div>
        </div>

     );
}
 
export default Help;