import React from 'react';

export class Header extends React.Component{
    render(){
        return(
            <section className="banner-area relative" id="home">
                <div className="container">
                    <div className="overlay overlay-bg"></div>
                    <div className="row fullscreen d-flex align-items-center justify-content-start">
                        <div className="banner-content col-lg-8 col-md-12">
                            <h1 className="text-uppercase">
                                Adopt Us. <br/>
                                We need your help.
                            </h1>
                            <p className="text-white sub-head">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
                                or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                            </p>
                            <a href="#" className="primary-btn header-btn text-uppercase">Find a pet to adopt</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}