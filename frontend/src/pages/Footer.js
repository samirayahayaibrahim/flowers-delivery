const Footer = () => {
    return ( 
        <div className="footer">
                <div className="remind">
                    <p className="remind-dis">Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
                    <input type="" ></input>
                    <button>Remind</button>
                </div>
                <div className="con">
                    <h4>Contact Us</h4>
                    <span className="conhead">Address</span>
                    <p className="condes">15/4 Khreshchatyk Street, Kyiv </p>
                    <span className="conhead">Phone</span>
                    <p className="condes">+380980099777</p>
                    <span className="conhead">General Enquiry:</span>
                    <p className="condes">Kiev.Florist.Studio@gmail.com</p>
                    <h4>Follow Us</h4>
                    <div className="socio">
                        <img className="social-link" src="" alt=""></img>
                        <img className="social-link" src="" alt=""></img>
                        <img className="social-link" src="" alt=""></img>
                        <img className="social-link" src="" alt=""></img>
                        <img className="social-link" src="" alt=""></img>
                    </div>
                </div>
                <div className="list">
                    <h4>Shop</h4>
                    <ul>
                        <li>All Products</li>
                        <li>Fresh Flowers</li>
                        <li>Dried Flowers</li>
                        <li>Live Plants</li>
                        <li>Designer Vases</li>
                        <li>Aroma Candles</li>
                        <li>Freshener Diffuser</li>
                    </ul>
                    <h4>Service</h4>
                    <ul>
                        <li>Flower Subcription</li>
                        <li>Wedding & Event Decor</li>
                    </ul>
                </div>
                <div className="story">
                    <h4>About Us</h4>
                    <p>Our story</p>
                    <p>Blog</p>
                    <ul>
                        <li>Shipping & returns</li>
                        <li>Terms & conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
            </div>
    );
}

export default Footer;