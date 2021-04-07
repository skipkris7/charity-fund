import React from 'react';

export class AboutFund extends React.Component{
    render(){
        return(
            <section className="home-about-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 home-about-left no-padding">
                            <img src="img/about-img.jpg" alt=""/>
                        </div>
                        <div className="col-lg-6 home-about-right no-padding">
                            <h1>
                                Globally Connected
                                by Large Network
                            </h1>
                            <h5>We are here to listen from you deliver exellence</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit, sed do eiusmod tempor.
                            </p>
                            <a href="#" className="primary-btn text-uppercase">get details</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}