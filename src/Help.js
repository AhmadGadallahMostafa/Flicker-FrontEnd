import background from './images/Background-help4.jpg';
import flickrhelp from './images/flickr-help.svg';
import twitter from './images/twitter.svg';
import arrow from './images/grey-arrow.svg';
import search from './images/Search-icon.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Help.css';
import { useState } from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Footer from './Footer';


const Help = () => {
    const [leftcoltopics,setleftcoltopics]=useState(0);
    console.log(leftcoltopics);
    return ( 
        <div>
            <div id="help-page" className="Home">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="home0">
                <img src={background} width='100%' max-height='100%' className="opacity-img" alt=""/>
                <div className="top">
                    <a href="flickr-help">
                        <img src={flickrhelp} width='106.57' height='22.85' className="flickr-help-logo" alt=""/>
                    </a>
                    <span href="" className="button1 wbutton">
                        <Dropdown >
                            <Dropdown.Toggle style={{backgroundColor:"transparent",borderColor:"transparent"}}>
                                All Topics
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>Get Started</Dropdown.Item>  
                                <Dropdown.Item>Account Access</Dropdown.Item>
                                <Dropdown.Item>Billing</Dropdown.Item>  
                                <Dropdown.Item>Flickr Prints</Dropdown.Item>  
                                <Dropdown.Item>Manage contents</Dropdown.Item>  
                                <Dropdown.Item>Flickr App</Dropdown.Item>  
                                <Dropdown.Item>Sharing and Social</Dropdown.Item>  
                                <Dropdown.Item>Settings and preferences</Dropdown.Item>  
                                <Dropdown.Item>Upload and Download Photos</Dropdown.Item>  
                                <Dropdown.Item>Trust and Safety</Dropdown.Item>  
                                <Dropdown.Item>Privacy and Secuirity</Dropdown.Item> 
                                <Dropdown.Item>Third-Party Apps</Dropdown.Item>  
                                <Dropdown.Item>FAQ's</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>
                    <a href="" className="button2 wbutton">Status</a>
                    <img src={twitter}  className="button3 wbutton" alt=""/>
                    <a href="" className="button4 wbutton">Follow @FlickrHelp</a>
                    <a href="" className="button5 wbutton">flickr.com</a>
                </div>
                <div className="search">
                    <span className="help-center">Help Center</span>
                    <br/>
                    <div className="fill-searchbar">
                        <img src={search}  width='20%' height='20%' alt="" className="navbar-search-icon"/>
                        <input type="text" className="search-bar" placeholder="Find Answers"/>
                    </div>
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
                    <a className="article1">
                        <div className="article-text article1-text">
                            Logging in to Your Flickr Account
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </a>
                    <a className="article1">
                        <div className="article-text article2-text">
                            Change Your Flickr Contact Email Address
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </a>
                    <a className="article1">
                        <div className="article-text article3-text">
                            FAQ for Flickr members about our payment processor migration
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </a>
                    <a className="article1">
                        <div className="article-text article4-text">
                            Get Flickr notifications by email and in your account
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </a>
                    <a className="article1">
                        <div className="article-text article5-text">
                            Pricing FAQ
                        </div>
                        <img src={arrow} className="arrow" alt=""/>
                    </a>

                    {/* **********************Flickr topics header**************************/}

                    <div className="browse">
                        <div className="browse-text">
                            Browse Flickr Topics
                        </div>
                    </div>   

                    {/* **********************Flickr topics**************************/}
                    <div className="row topics-structure">
                        <div className="col-md-3 col-12 order-1">
                            <div className="left-title left-title1" >
                                <button onClick={()=>setleftcoltopics(0)} className="left-title-text">
                                    Get Started
                                </button>
                                {
                                    leftcoltopics===0?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                                
                            </div>
                            <div className="left-title left-title2" >
                                <button onClick={()=>setleftcoltopics(1)} className="left-title-text">
                                    Account Access
                                </button>
                                {
                                    leftcoltopics===1?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title3" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(2)} className="left-title-text">
                                    Billing 
                                </button>
                                {
                                    leftcoltopics===2?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title4" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(3)} className="left-title-text">
                                    Flickr Prints 
                                </button>
                                {
                                    leftcoltopics===3?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title5" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(4)} className="left-title-text">
                                    Manage Content 
                                </button>
                                {
                                    leftcoltopics===4?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title6" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(5)} className="left-title-text">
                                    Flickr App 
                                </button>
                                {
                                    leftcoltopics===5?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title7" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(6)} className="left-title-text">
                                    Sharing..Social 
                                </button>
                                {
                                    leftcoltopics===6?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title8" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(7)} className="left-title-text">
                                    Sharing 
                                </button>
                                {
                                    leftcoltopics===7?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title9" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(8)} className="left-title-text">
                                    Upload
                                </button>
                                {
                                    leftcoltopics===8?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title10" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(9)} className="left-title-text">
                                    Trust..Safety 
                                </button>
                                {
                                    leftcoltopics===9?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title11" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(10)} className="left-title-text">
                                    Privacy..Security 
                                </button>
                                {
                                    leftcoltopics===10?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title12" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(11)} className="left-title-text">
                                    Third-Parties
                                </button>
                                {
                                    leftcoltopics===11?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                            <div className="left-title left-title13" onclick="show-function()">
                                <button onClick={()=>setleftcoltopics(12)} className="left-title-text">
                                    FAQs
                                </button>
                                {
                                    leftcoltopics===12?
                                    <div className="right-arrow">&#62;</div>
                                    :null
                                }
                            </div>
                        </div>



                        <div className="col-md-9 col-12 order-2 topics-right">
                            {   leftcoltopics===0?
                                <div className="get-started-topics">
                                    <a href="" className="topics-link">
                                        <div className="topic1">
                                            <div className="topic1-title">
                                                <div className="get-started-topic1-title-text">
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
                                                <div className="get-started-topic2-title-text">
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
                                                <div className="get-started-topic3-title-text">
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
                                                <div className="get-started-topic4-title-text">
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
                                                <div className="get-started-topic5-title-text">
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
                                : leftcoltopics === 1?
                                <div className="account-access-topics">
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="account-access-topic1-title-text">
                                                <b>Fix mobile log in problems</b>
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
                                            <div className="account-access-topic2-title-text">
                                                <b>Merging Flickr Accounts</b>
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
                                            <div className="account-access-topic3-title-text">
                                                <b>Changes to Logging in</b>
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
                                            <div className="account-access-topic4-title-text">
                                                <b>In memoriam Flickr Accounts</b>
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
                                            <div className="account-access-topic5-title-text">
                                                <b>Logging in with a username</b>
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
                                : leftcoltopics === 2? 
                                <div className="get-started-topics">
                                    <a href="" className="topics-link">
                                        <div className="topic1">
                                            <div className="topic1-title">
                                                <div className="get-started-topic1-title-text">
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
                                                <div className="get-started-topic2-title-text">
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
                                                <div className="get-started-topic3-title-text">
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
                                                <div className="get-started-topic4-title-text">
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
                                                <div className="get-started-topic5-title-text">
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
                                :leftcoltopics === 3?
                                <div className="account-access-topics">
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="account-access-topic1-title-text">
                                                <b>Fix mobile log in problems</b>
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
                                            <div className="account-access-topic2-title-text">
                                                <b>Merging Flickr Accounts</b>
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
                                            <div className="account-access-topic3-title-text">
                                                <b>Changes to Logging in</b>
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
                                            <div className="account-access-topic4-title-text">
                                                <b>In memoriam Flickr Accounts</b>
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
                                            <div className="account-access-topic5-title-text">
                                                <b>Logging in with a username</b>
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
                                :leftcoltopics == 4?
                                <div className="get-started-topics">
                                    <a href="" className="topics-link">
                                        <div className="topic1">
                                            <div className="topic1-title">
                                                <div className="get-started-topic1-title-text">
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
                                                <div className="get-started-topic2-title-text">
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
                                                <div className="get-started-topic3-title-text">
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
                                                <div className="get-started-topic4-title-text">
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
                                                <div className="get-started-topic5-title-text">
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
                                :leftcoltopics === 5?
                                <div className="account-access-topics">
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="account-access-topic1-title-text">
                                                <b>Fix mobile log in problems</b>
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
                                            <div className="account-access-topic2-title-text">
                                                <b>Merging Flickr Accounts</b>
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
                                            <div className="account-access-topic3-title-text">
                                                <b>Changes to Logging in</b>
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
                                            <div className="account-access-topic4-title-text">
                                                <b>In memoriam Flickr Accounts</b>
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
                                            <div className="account-access-topic5-title-text">
                                                <b>Logging in with a username</b>
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
                                :leftcoltopics === 6?
                                <div className="get-started-topics">
                                    <a href="" className="topics-link">
                                        <div className="topic1">
                                            <div className="topic1-title">
                                                <div className="get-started-topic1-title-text">
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
                                                <div className="get-started-topic2-title-text">
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
                                                <div className="get-started-topic3-title-text">
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
                                                <div className="get-started-topic4-title-text">
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
                                                <div className="get-started-topic5-title-text">
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
                                :leftcoltopics === 7?
                                <div className="account-access-topics">
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="account-access-topic1-title-text">
                                                <b>Fix mobile log in problems</b>
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
                                            <div className="account-access-topic2-title-text">
                                                <b>Merging Flickr Accounts</b>
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
                                            <div className="account-access-topic3-title-text">
                                                <b>Changes to Logging in</b>
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
                                            <div className="account-access-topic4-title-text">
                                                <b>In memoriam Flickr Accounts</b>
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
                                            <div className="account-access-topic5-title-text">
                                                <b>Logging in with a username</b>
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
                                :leftcoltopics === 8?
                                <div className="get-started-topics">
                                    <a href="" className="topics-link">
                                        <div className="topic1">
                                            <div className="topic1-title">
                                                <div className="get-started-topic1-title-text">
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
                                                <div className="get-started-topic2-title-text">
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
                                                <div className="get-started-topic3-title-text">
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
                                                <div className="get-started-topic4-title-text">
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
                                                <div className="get-started-topic5-title-text">
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
                                :leftcoltopics === 9?
                                <div className="account-access-topics">
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="account-access-topic1-title-text">
                                                <b>Fix mobile log in problems</b>
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
                                            <div className="account-access-topic2-title-text">
                                                <b>Merging Flickr Accounts</b>
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
                                            <div className="account-access-topic3-title-text">
                                                <b>Changes to Logging in</b>
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
                                            <div className="account-access-topic4-title-text">
                                                <b>In memoriam Flickr Accounts</b>
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
                                            <div className="account-access-topic5-title-text">
                                                <b>Logging in with a username</b>
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
                                :leftcoltopics === 10?
                                <div className="get-started-topics">
                                    <a href="" className="topics-link">
                                        <div className="topic1">
                                            <div className="topic1-title">
                                                <div className="get-started-topic1-title-text">
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
                                                <div className="get-started-topic2-title-text">
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
                                                <div className="get-started-topic3-title-text">
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
                                                <div className="get-started-topic4-title-text">
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
                                                <div className="get-started-topic5-title-text">
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
                                :leftcoltopics === 11?
                                <div className="account-access-topics">
                                <a href="" className="topics-link">
                                    <div className="topic1">
                                        <div className="topic1-title">
                                            <div className="account-access-topic1-title-text">
                                                <b>Fix mobile log in problems</b>
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
                                            <div className="account-access-topic2-title-text">
                                                <b>Merging Flickr Accounts</b>
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
                                            <div className="account-access-topic3-title-text">
                                                <b>Changes to Logging in</b>
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
                                            <div className="account-access-topic4-title-text">
                                                <b>In memoriam Flickr Accounts</b>
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
                                            <div className="account-access-topic5-title-text">
                                                <b>Logging in with a username</b>
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
                                :leftcoltopics === 12?
                                <div className="get-started-topics">
                                    <a href="" className="topics-link">
                                        <div className="topic1">
                                            <div className="topic1-title">
                                                <div className="get-started-topic1-title-text">
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
                                                <div className="get-started-topic2-title-text">
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
                                                <div className="get-started-topic3-title-text">
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
                                                <div className="get-started-topic4-title-text">
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
                                                <div className="get-started-topic5-title-text">
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
                                :null                   
                            }
                            <button className="more-articles-button">See more articles</button>

                        </div>
                    </div>

                    {/* **********************Flickr topics Block**************************/}
                </div> 
                <div className="need-help-footer">
                    <div className="need-help-text">Still need Help?</div>
                    <div className="need-help-button-position">
                        <button className="need-help-button">Contact us</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        
     );
}
 
export default Help;