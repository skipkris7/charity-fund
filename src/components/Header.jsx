import React from 'react';
import {Link} from "react-router-dom";

export class Header extends React.Component{
    render(){
        return(
            <section className="banner-area relative" id="home">
                <div className="container">
                    <div className="overlay overlay-bg"></div>
                    <div className="row fullscreen d-flex align-items-center justify-content-start">
                        <div className="banner-content col-lg-8 col-md-12">
                            <h1 className="text" >
                                ПОМОГАЕМ ПРОСТО ПОМОГАТЬ. </h1>
                            <h3 style={{color: "white"}}>Благотворительный фонд "БУДУ РЯДОМ".</h3>
                            <p className="text-white sub-head">
                                Создан объединить неравнодушных людей для оказания помощи бездомным животным.
                            </p>
                            <Link to="#" className="primary-btn header-btn text-uppercase">Find a pet to adopt</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}