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
                                <img src="img/cats/bond&jinks/Bond&Jinks6.jpg" style={{height: 280}} alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Бонд и Джинкс</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/villi/villi1.jpeg" style={{height: 280}} alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Вилли</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/dayday/DSC_0738.jpg" style={{height: 280}} alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">ДайДай</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/monya/monya18.jpeg" style={{height: 280}} alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Моня</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/mushka/mushka4.jpeg" style={{height: 280}} alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Мушка</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/cats/chivas/chivas2.jpeg" style={{height: 280}} alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <Link to="/onecat" className="primary-btn text-uppercase mb-5">выбрать</Link>
                                    <div className="text">Чивас</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/fund-logo/logo1.png" style={{height: 100}} alt="" className="img-fluid"/>
                                <div className="overlay">
                                    <div className="text">...</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat-list">
                                <img src="img/fund-logo/logo1.png" style={{height: 100}} alt="" className="img-fluid"/>
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