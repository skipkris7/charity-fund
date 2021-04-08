import React from 'react';

export class Cats extends React.Component {
    render() {
        return (
            <section className="cat-list-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/ct1.jpg" alt="" className="img-fluid"/>
                                    <div className="overlay">
                                        <div className="text">1</div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/ct2.jpg" alt="" className="img-fluid"/>
                                    <div className="overlay">
                                        <div className="text">2</div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/ct3.jpg" alt="" className="img-fluid"/>
                                    <div className="overlay">
                                        <div className="text">3</div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/ct4.jpg" alt="" className="img-fluid"/>
                                    <div className="overlay">
                                        <div className="text">4</div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/ct5.jpg" alt="" className="img-fluid"/>
                                    <div className="overlay">
                                        <div className="text">5</div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/ct6.jpg" alt="" className="img-fluid"/>
                                    <div className="overlay">
                                        <div className="text">6</div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/ct7.jpg" alt="" className="img-fluid"/>
                                    <div className="overlay">
                                        <div className="text">7</div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/ct8.jpg" alt="" className="img-fluid"/>
                                    <div className="overlay">
                                        <div className="text">8</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}