import React from 'react';
import {Link, NavLink} from 'react-router-dom';


export class Cats extends React.Component {
    render(){
        return (
            <section className="cat-list-area section-gap">
                <div className="container">
                    <div className="text-center">
                        <h1>Сегодня <br /> </h1>
                        <h2>в Благотворительном фонде "Буду Рядом" ждут хозяина:</h2>
                        <br />
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/bond&jinks/abond&jinks.png" alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Бонд и Джинкс</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/villi/avilli.png"  alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Вилли</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/dayday/adayday.png" alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">ДайДай</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/mushka/amushka.png"  alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Мушка</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/chivas/achivas.png" alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Чивас</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/fund-logo/logo1.png"  alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <div className="text">...</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/fund-logo/logo1.png"  alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <div className="text">...</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/fund-logo/logo1.png"  alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <div className="text">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}