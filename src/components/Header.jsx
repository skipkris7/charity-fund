import React from 'react';
import {NavLink} from "react-router-dom";

export class Header extends React.Component{
    render(){
        return(
            <section className="banner-area relative" id="home">
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-start">
                        <div className="banner-content col-lg-8 col-md-5">
                            <h1 className="text">ПОМОГАЕМ ПРОСТО ПОМОГАТЬ.</h1>
                            <h3 className="fund">Благотворительный фонд "БУДУ РЯДОМ".</h3>
                            <p className="text-white sub-head">
                                Создан объединить неравнодушных людей для оказания помощи бездомным животным.
                            </p>
                            <NavLink to="/gallery" className="primary-btn header-btn text-uppercase btn-secondary">Выбрать друга</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}