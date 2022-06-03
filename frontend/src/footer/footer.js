

const Footer = () =>{
    return(

        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6 className="footer_title">About Kamray.pk</h6>
                            <p>An open courtyard in the heart of the hotel, with natural light seeping through glowing the ambiance with vibrance and warmth; Skylight offers a variety of flavors to its guests from locals to foreigners. Sip that cup of coffee, enjoy the diversity this courtyard has to offer.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6 className="footer_title">Navigation Links</h6>
                            <div className="row">
                                <div className="col-4">
                                    <ul className="list_style">
                                        <li><a href="/home">Home</a></li>
                                        <li><a href="/about">Contact</a></li>
                                        <li><a href="/rooms">Rooms</a></li>
                                        <li><a href="/profile">Profile</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list_style">
                                        <li><a href="/locations">Locations</a></li>
                                        <li><a href="/Vote">Review</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6 className="footer_title">Newsletter</h6>
                            <p>Subscribe for our new offers!</p>
                            <div id="mc_embed_signup">
                                <form target="_blank"
                                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                      method="get" className="subscribe_form relative">
                                    <div className="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Email Address" onFocus="this.placeholder = ''"
                                               onBlur="this.placeholder = 'Email Address '" required="" type="email"/>
                                            <button className="btn sub-btn"><span className="lnr lnr-location"></span>
                                            </button>
                                    </div>
                                    <div className="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget instafeed">
                            <h6 className="footer_title">InstaFeed</h6>
                            <ul className="list_style instafeed d-flex flex-wrap">
                                <li><img src="image/instagram/Image-01.jpg" alt=""/></li>
                                <li><img src="image/instagram/Image-02.jpg" alt=""/></li>
                                <li><img src="image/instagram/Image-03.jpg" alt=""/></li>
                                <li><img src="image/instagram/Image-04.jpg" alt=""/></li>
                                <li><img src="image/instagram/Image-05.jpg" alt=""/></li>
                                <li><img src="image/instagram/Image-06.jpg" alt=""/></li>
                                <li><img src="image/instagram/Image-07.jpg" alt=""/></li>
                                <li><img src="image/instagram/Image-08.jpg" alt=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border_line"></div>
                <div className="row footer-bottom d-flex justify-content-between align-items-center">
                    <p className="col-lg-3 col-sm-12 footer-text m-0">
                        Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script>
                        All rights reserved
                        </p>
                    <div className="col-lg-4 col-sm-12 footer-social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer