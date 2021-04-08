import React from 'react';

export class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-area">
                <div className="container">
                    <div className="row pt-120 pb-80">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h6>About Us</h6>
                                <p>
                                    Few would argue that, despite the advanc ements off eminism over the past three
                                    decades, women still face a double standard when it comes to their behavior. While
                                    men’s borderline-inappropriate behavior. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h6>Useful Links</h6>
                                <div className="row">
                                    <ul className="col footer-nav">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Service</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Case Study</a></li>
                                    </ul>
                                    <ul className="col footer-nav">
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">Contact Us</h6>
                                <ul className="list-contact">
                                    <li className="flex-row d-flex">
                                        <div className="icon">
                                            <span className="lnr lnr-home"></span>
                                        </div>
                                        <div className="detail">
                                            <h4>Binghamton, New York</h4>
                                            <p>
                                                4343 Hinkle Deegan Lake Road
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex-row d-flex">
                                        <div className="icon">
                                            <span className="lnr lnr-phone-handset"></span>
                                        </div>
                                        <div className="detail">
                                            <h4>00 (953) 9865 562</h4>
                                            <p>
                                                Mon to Fri 9am to 6 pm
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex-row d-flex">
                                        <div className="icon">
                                            <span className="lnr lnr-envelope"></span>
                                        </div>
                                        <div className="detail">
                                            <h4>support@colorlib.com</h4>
                                            <p>
                                                Send us your query anytime!
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-text">
                    <div className="container">
                        <div className="row footer-bottom d-flex justify-content-between">
                            <p className="col-lg-8 col-sm-6 footer-text m-0 text-white">
                                Copyright &copy;
                                All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                    aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                            <div className="col-lg-4 col-sm-6 footer-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}