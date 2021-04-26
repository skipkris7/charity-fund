import React from 'react';
import {host} from "../config";

export class OnePost extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
        }
    }

    componentDidMount() {
        const formData = new FormData();
       formData.append('id', window.location.pathname.split('/')[2]);
        //formData.append("id", this.props.match.params.id);

        fetch(host + "/getPost", {
            method: "POST",
            body: formData
        })
        .then (response => response.json())
            .then (result => {
                console.log(result);
                this.setState ({
                    title: result.title,
                    text: result.text,
                })
            })
    }

    render() {
        return(
            <section className="top-category-widget-area pt-90 pb-90 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-cat-widget">
                                <div className="content relative">
                                    <div className="overlay overlay-bg"></div>
                                    <a href="#" target="_blank">
                                        <div className="thumb">
                                            <img className="content-image img-fluid d-block mx-auto"
                                                 src="img/blog/cat-widget1.jpg" alt=""/>
                                        </div>
                                        <div className="content-details">
                                            <h4 className="content-title mx-auto text-uppercase">Social life</h4>
                                            <span></span>
                                            <p>Enjoy your social life together</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-cat-widget">
                                <div className="content relative">
                                    <div className="overlay overlay-bg"></div>
                                    <a href="#" target="_blank">
                                        <div className="thumb">
                                            <img className="content-image img-fluid d-block mx-auto"
                                                 src="img/blog/cat-widget2.jpg" alt=""/>
                                        </div>
                                        <div className="content-details">
                                            <h4 className="content-title mx-auto text-uppercase">Politics</h4>
                                            <span></span>
                                            <p>Be a part of politics</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-cat-widget">
                                <div className="content relative">
                                    <div className="overlay overlay-bg"></div>
                                    <a href="#" target="_blank">
                                        <div className="thumb">
                                            <img className="content-image img-fluid d-block mx-auto"
                                                 src="img/blog/cat-widget3.jpg" alt=""/>
                                        </div>
                                        <div className="content-details">
                                            <h4 className="content-title mx-auto text-uppercase">Food</h4>
                                            <span></span>
                                            <p>Let the food be finished</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <h3 class="text-center">
                                {this.state.title}
                            </h3>
                            <p class="text-center">
                                {this.state.text}
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}