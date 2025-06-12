import homePagestyle from "./homepagestyle.css";
import imghero from '../assets/img hero.png';
import snowfall from '../assets/snowfall.png';
import dry from '../assets/dry.png';
import shoppic from '../assets/shoppic.png';
import service from '../assets/service.png';
import aroma from '../assets/aroma.png';
import liveplant from '../assets/liveplant.png';
import freshner from '../assets/freshner.png';
import insta from '../assets/instagr.png';
import p from '../assets/p.png';
import fb from '../assets/face.png';
import twitter from '../assets/twitter.png';
import tele from '../assets/tele.png';
import google from '../assets/google.png';
import arrowrig from '../assets/arrow-right.png';
import arrowleft from '../assets/arrow-left.png';

const homePage = () => {
    return ( 
        <div className="homepage">
            <section className="one">
            <div className="luxe">
                <h2 className="homeheader">Kyiv <br/> LuxeBouquets®</h2>
                <p className="headerpara-one">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                <hr/>
                <div className="header-2">
                    <img src={imghero} className="hero" alt=''/>
                    <hr className="headerline"/>
                    <p className="headerpara-two">Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
                </div>
            </div>
            <div className="flowerType">
                <hr/>
                <div className="type">
                    <div className="picname">
                        <a href=""><p className="typename">Fresh Flowers</p></a>
                        <div className="links">
                            <a href=""><span className="shop">shop now</span></a>
                            <a href=""><img src={arrowrig} className="shoparrow" alt=""/></a>
                        </div>
                        
                    </div>
                    <img src={snowfall} className="image" alt=""/>
                </div>
                <hr/>
                <div className="type">
                    <img src={dry} className="img" alt=""/>
                    <div className="picname">
                        <a href=""><p className="typename">Dried Flowers</p></a>
                        <div className="links">
                            <a href=""><img src={arrowleft} className="shoparrow" alt=""/></a>
                            <a href=""><span className="shop">shop now</span></a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="type">
                    <div className="picname">
                        <a href=""><p className="typename">live plants</p></a>
                        <div className="links">
                            <a href=""><span className="shop">shop now</span></a>
                            <a href=""><img src={arrowrig} className="shoparrow" alt=""/></a>
                        </div>
                    </div>
                    <img src={liveplant} className="image" alt=""/>
                </div>
                <hr/>
                <div className="type">
                    <img src={aroma} className="img" alt=""/>
                    <div className="picname">
                        <a href=""><p className="typename">Aroma candles</p></a>
                        <div className="links">
                            <a href=""><img src={arrowleft} className="shoparrow" alt=""/></a>
                            <a href=""><span className="shop">shop now</span></a>
                        </div>
                        
                    </div>
                    
                </div>
                <hr/>
                <div className="type">
                    <div className="picname">
                        <a href=""><p className="typename">Freshners </p></a>
                        <div className="links">
                            <a href=""><span className="shop">shop now</span></a>
                            <a href=""><img src={arrowrig} className="shoparrow" alt=""/></a>
                        </div>
                        
                    </div>
                    <img src={freshner} className="image" alt=""/>
                </div>
                
            </div>
            </section>
            <hr className=""/>
        <section className="two">
            <div className="About">
                <div className="aboutus">
                    <h3 className="about">About us</h3>
                </div>
                    <hr className="line"/>
                    <div className="about-description">
                        <span className="abouthead">our story</span>
                        <h4>Kyiv LuxeBouquets</h4>
                        <p className="aboutparagraph">We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, 
                            plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
                        <div className="learn"><button className="learn">Learn more</button></div>
                    </div>
            </div>
        </section>
            <hr className=""/>
        <section className="three">
            <div className="whychooseus">
                <h3>WHY Choose Us ?</h3>
            </div>
                <hr className="line"/>
                <div className="chooseus">
                    <h4>Stylish bouquets by florists</h4>
                    <p className="us">At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
                    <hr className="line"/>
                    <h4>On-time delivery</h4>
                    <p className="us">Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
                    <hr className="line"/>
                    <h4>Safe payment</h4>
                    <p className="us">You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
                    <hr className="line"/>
                    <h4>Subscription by your needs</h4>
                    <p className="us">With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.</p>
                </div>
                
        </section>

        <section className="four">
            <div className="followus">
                    <img src={shoppic} className="shoppic" alt=""/>
                    <div className="follow">
                        <h4 className="uslink">Follow Us</h4>
                        <hr className="lines"/>
                        <span className="link">
                        <img className="social-link" src={insta} alt=""></img>
                        <img className="social-link" src={p} alt=""></img>
                        <img className="social-fb" src={fb} alt=""></img>
                        <img className="social-link" src={twitter} alt=""></img>
                        <img className="social-link" src={tele} alt=""></img>
                        </span>
                    </div>
            </div>
            
            <div className="contactus">
                    <hr className="linephone"/>
                <div className="contact">
                    <h3 className="contacthed">TO Contact us</h3>
                    <span className="contactpar">We will call you back</span><br/>
                    <div className="book"> <button className="btnone">+380 XX XXX XX XX</button><button className="btntwo">book a call </button></div>
                    <hr className="linephone"/>
                    <div className="phoneadd">
                        <div className="phone">
                            <h4>phone</h4>
                            <hr className="black"/>
                            <p>+380980099777</p>
                            <p>+380980099111</p>
                        </div>
                        <hr className="linemid"/>
                        <hr className="linein"/>
                        <div className="address">
                            <h4>Address</h4>
                            <hr className="black"/>
                            <p>opening hours: 8 to 11 p.m.</p>
                            <p>15/4 Khreshchatyk Street, Kyiv </p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            </section>
            <hr/>
            <section className="five">
                <h3>Our service</h3>
            <div className="ourservice">
                <div className="our">
                    <img src={service} className="shoppic"alt=""/>
                    </div>
                    <div className="subcription">
                        <span>service</span>
                        <h3>Flower Subcriptions</h3>
                        <p className="our-description">Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                        <button className="sub">Subscribe Now</button>
                    </div>
            </div>
            </section>
                <div className="event">
                    <span className="serve">service</span>
                    <h2>Wedding & Event Decor</h2>
                    <p className="team">Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                    <br/>
                    <span className="inquire">INQUIRE NOW</span>
                </div>
            <div className="ourClient">
                <img src={google} className="google" alt=""></img>
                <h5>Reviews</h5>
                <h2>Our Clients say</h2>
                <span>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</span>
                <h5>– Ronald Richards</h5>
                <button className="read">Read reviews</button>
            </div>
            
        </div>


    );
}

export default homePage;