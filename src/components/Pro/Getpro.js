import Welcomebackground from '../../images/1stphoto.jpg'
import Topic1 from '../../images/stats.png'
import Topic1_1 from '../../images/stats2.png'
import Topic2 from '../../images/adfree-background.jpg'
import Topic2_1 from '../../images/buddyicon22.png'
import Topic3 from '../../images/autoupload.png'
import Topic4 from '../../images/smugmug.jpg'
import Topic5 from '../../images/Blurb.png'
import Topic6 from '../../images/PHlearn.jpg'
import Topic7 from '../../images/Pixy.jpg'
import Topic8 from '../../images/flickrpro-adobe.jpg'
import Topic9 from '../../images/captureone.jpg'
import Topic10 from '../../images/priime.jpg'
import Endbackground from '../../images/footer-pic.jpg'
import plans from '../../images/plansbackground.jpg'
import Prologo from '../../images/probadge.png'



import { useState } from 'react';
import Getpronav from './components/ProNavbar/Getpro-navbar';
import './components/Pro/Getpro.css';
import Footer from './components/MinasFooter/Footer';

/**
 * Component for GetPro page, the whole page containing the bundles and everything
 *
 * @component
 * @example
 * return (
 *   <Getpro/>
 * )
 */
const Getpro = () => {
    const [proplans,setproplans]=useState(0);

    return ( 
        <div classname="pro_main">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <Getpronav/>
            {
            proplans===0?    
            <div className="pro_main2">
                {/* *************************Welcome Slide************************* */}
                <div className="pro_welcome">
                    <img src={Welcomebackground} width='100%' className="pro_welcomeimage" alt="" />
                    <div className="pro_welcomecontent">
                        <div className="pro_welcometitle"><b className="pro_welcometitleb">flickr</b> pro</div>
                        <div className="pro_welcomeslogan">Advanced stats, ad-free browsing, automatic photo uploads, and more.</div>
                        <button onClick={()=>setproplans(1)} className="pro_welcomebutton">Get Started</button>
                    </div>
                </div>
                {/* *************************Welcome Slide************************* */}

                {/* *************************1st 3 Topics************************* */}
                <div className="row pro_topic">
                    <div className=" col-md-6 col-12 order-md-1 order-1 pro_topiccontent">
                        <div>
                            <span className="pro_topiccontenttitle">Advanced stats on your photos and videos</span>
                        </div>
                        <div className="pro_topiccontentwording">
                            Gain an understanding of how people are discovering your Flickr Photos. 
                            See which of your photos are trending now, and which have performed the 
                            best over the life of your Flickr Pro account.
                        </div>
                    </div>
                    <div className="col-md-6 col-12 order-md-2 order-2 pro_topicimage0">
                        <img src={Topic1} className="pro_topicimage1" alt="" />
                        <img src={Topic1_1} className="pro_topicimage2" alt="" />
                    </div>
                </div>
                <hr />
                <div className="row pro_topic">
                    <div className="col-md-6 col-12 order-md-1 order-2 pro_topicimage22">
                        <img src={Topic2} className="pro_topicimage33" alt="" />
                        <img src={Topic2_1} width='16%' className="pro_topicimage44" alt="" />

                    </div>
                    <div className=" col-md-6 col-12 order-md-2 order-1 pro_topiccontent2">
                        <div>
                            <span className="pro_topiccontenttitle">Ad-free browsing on Flickr for you and your visitors</span>
                        </div>
                        <div className="pro_topiccontentwording">
                            Enjoy a fully ad-free experience across all of Flickr. 
                            Visitors to your account will never see an ad on your photostream, 
                            albums, profile, or any of your photos. <a href="">Learn more</a>.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row pro_topic">
                    <div className=" col-md-6 col-12 order-md-1 order-1 pro_topiccontent">
                        <div>
                            <span className="pro_topiccontenttitle">Unlimited uploads and worry-free photo backup</span>
                        </div>
                        <div className="pro_topiccontentwording">
                            Upload as many photos as you can take, always at true full resolution. 
                            With Auto-Uploadr, quickly and easily back up your entire photo collection 
                            from your phone, computer, hard drives, Dropbox, Adobe Lightroom, and more.
                        </div>
                    </div>
                    <div className="col-md-6 col-12 order-md-2 order-2 pro_topicimage">
                        <img src={Topic3} width='80%' height='100%' alt="" />
                    </div>
                </div>
                <hr />
                {/* *************************1st 3 Topics************************* */}

                {/* *************************7 Topics************************* */}
                <div className="pro_subtitle">Annual Pro subscription perks</div>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="pro_subbox1">
                            <div className="pro_subbox2">
                                <div className="pro_subimage">
                                    <img src={Topic4} width='100%' alt="" />
                                </div>
                                <div className="pro_subcontent">
                                    <div >
                                        <span className="pro_subcontenttitle">SmugMug</span>
                                    </div>
                                    <div className="pro_subcontentwording">
                                        With unlimited photo storage and website customization, 
                                        SmugMug is perfect for every photographer. Take 50% off the 
                                        first year for new subscriptions.
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pro_subbox1">
                            <div className="pro_subbox2">
                                <div className="pro_subimage">
                                    <img src={Topic5} width='100%' alt="" />
                                </div>
                                <div className="pro_subcontent">
                                    <div >
                                        <span className="pro_subcontenttitle">Blurb</span>
                                    </div>
                                    <div className="pro_subcontentwording">
                                        Get $35 dollars off your Photo Book purchase up to 4 times a year. 
                                        Valid for orders of $70 or more.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pro_subbox1">
                            <div className="pro_subbox2">
                                <div className="pro_subimage">
                                    <img src={Topic6} width='100%' alt="" />
                                </div>
                                <div className="pro_subcontent">
                                    <div >
                                        <span className="pro_subcontenttitle">PHLEARN</span>
                                    </div>
                                    <div className="pro_subcontentwording">
                                        Flickr Pro members get 1 free month, and unlimited access to
                                        the #1 Photoshop & Lightroom course catalog in the world for 35% off.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pro_subbox1">
                            <div className="pro_subbox2">
                                <div className="pro_subimage">
                                    <img src={Topic7} width='100%' alt="" />
                                </div>
                                <div className="pro_subcontent">
                                    <div >
                                        <span className="pro_subcontenttitle">Pixsy</span>
                                    </div>
                                    <div className="pro_subcontentwording">
                                        Find and fight image theft with Pixsy's advanced image 
                                        monitoring and copyright protection. Flickr Pros get 1K 
                                        monitored images and 10 takedown notices.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                    <div className="pro_subbox3">
                            <div className="pro_subbox4">
                                <div className="pro_subimage">
                                    <img src={Topic8} width='100%' alt="" />
                                </div>
                                <div className="pro_subcontent">
                                    <div >
                                        <span className="pro_subcontenttitle">Adobe</span>
                                    </div>
                                    <div className="pro_subcontentwording">
                                        Flickr Pros get two complimentary months ($20 value)
                                        of Adobe Creative Cloud Photography plan, the powerful 
                                        package of editing tools including Adobe...
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pro_subbox3">
                            <div className="pro_subbox4">
                                <div className="pro_subimage">
                                    <img src={Topic9} width='100%' alt="" />
                                </div>
                                <div className="pro_subcontent">
                                    <div >
                                        <span className="pro_subcontenttitle">Capture One</span>
                                    </div>
                                    <div className="pro_subcontentwording">
                                        Capture One photo editing software has everything 
                                        you need to edit big projects and create amazing images. 
                                        Choose between a subscription or...
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pro_subbox3">
                            <div className="pro_subbox4">
                                <div className="pro_subimage">
                                    <img src={Topic10} width='100%' alt="" />
                                </div>
                                <div className="pro_subcontent">
                                    <div >
                                        <span className="pro_subcontenttitle">Priime</span>
                                    </div>
                                    <div className="pro_subcontentwording">
                                        Get 20% off Priime's Lightroom presets bundle, 
                                        with 13 presents based on film aesthetics, and more 
                                        than 100 total variations.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* *************************7 Topics************************* */}

                {/* *************************Welcome slide 2************************* */}
                <div className="pro_welcome2">
                    <img src={Endbackground} width='100%' className="pro_welcomeimage2" alt="" />
                    <div className="pro_welcomecontent2">
                        <div className="pro_welcometitle2"><b className="pro_welcometitleb2">flickr</b> pro</div>
                        <div className="pro_welcomeslogan2">Upgrade everything you do with Flickr.</div>
                        <button onClick={()=>setproplans(1)} className="pro_welcomebutton2">Get Started</button>
                    </div>
                </div>
                {/* *************************Welcome slide 2************************* */}
                <div className="pro_faq">FAQ</div>

                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="pro_faqcontent">
                            <div className="pro_faqcontenttitle">
                                What is Flickr Pro?
                            </div>
                            <div className="pro_faqcontentwording">
                                Flickr Pro is a paid membership that gives you an enhanced experience 
                                across Flickr and includes powerful tools for managing your photos.
                            </div>
                        </div>
                        <div className="pro_faqcontent">
                            <div className="pro_faqcontenttitle">
                                Can I promote my business?
                            </div>
                            <div className="pro_faqcontentwording">
                                If you are a Flickr Pro member, you can use Flickr to promote 
                                your photography business, your products, your photography classes, 
                                etc. You can link directly to a shopping cart, checkout page, or 
                                pricing pages on other sites, and you can list prices for your images 
                                in your Flickr photo descriptions. Learn more about
                                <a href=""> commercial activity on Flickr.</a> 
                            </div>
                        </div>
                        <div className="pro_faqcontent">
                            <div className="pro_faqcontenttitle">
                                More questions?
                            </div>
                            <div className="pro_faqcontentwording">
                                Please visit the <a href="">Flickr Help Center</a> for more information
                                or to connect with an agent.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="pro_faqcontent">
                            <div className="pro_faqcontenttitle">
                                Where can I view or change my subscription?
                            </div>
                            <div className="pro_faqcontentwording">
                                You can check your subscription status and change your
                                 Flickr Pro membership at any time in
                                 <a href=""> Account Settings</a>. Your new subscription will 
                                 take effect once your current subscription ends.
                            </div>
                        </div>
                        <div className="pro_faqcontent">
                            <div className="pro_faqcontenttitle">
                                What if I want to cancel my subscription?
                            </div>
                            <div className="pro_faqcontentwording">
                                You can cancel your Flickr Pro subscription at any time. 
                                Your Flickr Pro benefits will remain active for the rest 
                                of your billing cycle. Refunds and credits aren't issued 
                                for partial billing periods. Learn more about
                                <a href=""> billing and cancellations here.</a> 
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            :proplans===1?
            <div className="pro_3plans" >
                <img src={plans} width='100%' className="pro_plansimage" alt="" />
                <div className="pro_planscontent">
                    <button onClick={()=>setproplans(0)} className="pro_planscontentbutton">Back</button>
                    <div className="pro_planswrittencontent">
                        <div className="pro_planstitle"><b className="pro_planstitleb">flickr</b> pro</div>
                        <div className="pro_plansslogan">Choose your Flickr experience</div>
                        <div className="pro_planssmall">Change your plan or cancel anytime</div>
                    </div>
                    <div className="row pro_plans">
                        <div className="col-md-4 col-12 order-md-2 order-1">
                            <div className="pro_plansannual">
                                <div className="pro_plansbest">BEST VALUE</div>
                                <img src={Prologo} width='55%' className="pro_plansbadge" alt="" />
                                <div className="pro_plansannualtitle">Annual Plan</div>
                                <div className="pro_plansannualwording">
                                    Get unlimited storage, ad-free, with advanced statistics, 
                                    worry-free backup via the desktop Auto-Uploadr, and exclusive 
                                    discounts from Adobe, Blurb, SmugMug, and Priime.
                                </div>
                                <div className="pro_plansannualprice">$5.99/month*</div>
                                <div className="pro_plansannualcomment">* Billed annually. *</div>
                                <div className="pro_plansannualbuttondiv" >
                                    <a href="/account/upgrade/pro/pro-annual">
                                        <button className="pro_plansannualbutton">Select</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 order-md-1 order-2">
                            <br /><br /><br />
                            <div className="pro_plansannual">
                                <img src={Prologo} width='55%' className="pro_plansbadge" alt="" />
                                <div className="pro_plansannualtitle">Monthly Plan</div>
                                <div className="pro_plansannualwording">
                                    Get unlimited storage ad-free, plus get advanced statistics, 
                                    and worry-free backup with the desktop Auto-Uploadr.
                                </div>
                                <div className="pro_plansannualprice">$7.99/month</div>
                                <div className="pro_plansannualbuttondiv" >
                                    <a href="/account/upgrade/pro/pro-monthly">
                                        <button className="pro_plansannualbutton2">Select</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 order-md-3 order-3">
                            <br /><br /><br />
                            <div className="pro_plansannual">
                                <img src={Prologo} width='55%' className="pro_plansbadge" alt="" />
                                <div className="pro_plansannualtitle">3-month Pro</div>
                                <div className="pro_plansannualwording">
                                    Get unlimited storage ad-free, plus get advanced statistics, 
                                    and worry-free backup with the desktop Auto-Uploadr.
                                </div>
                                <div className="pro_plansannualprice2">$21.99 /3 months</div>
                                <div className="pro_plansannualbuttondiv" >
                                    <a href="/account/upgrade/pro/pro-3month">
                                        <button className="pro_plansannualbutton2">Select</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="pro_planslastphrase">Each Flickr Pro subscription is 
                    auto-renewing and non-refundable. <a className="pro_lasta" href="">Learn more.</a> </div>
                </div>

            </div>
            :null
            }
            <Footer/>
        </div>
        


     );
}
 
export default Getpro;
