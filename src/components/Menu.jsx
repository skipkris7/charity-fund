import React from 'react';
import {Link, NavLink} from "react-router-dom";

export class Menu extends React.Component{
    render(){
        return(
            // eslint-disable-next-line react/jsx-no-duplicate-props
            <header id="header" id="home" style={{background:'black'}}>
                <div className="container main-menu">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <Link to="index.html"><img src="img/logo.png" alt="" title=""/></Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><Link to="index.html">Главная</Link></li>
                                <li><Link to="about.html">О нас</Link></li>
                                <li><Link to="cats.html">Кошки</Link></li>
                                <li><Link to="dogs.html">Собаки</Link></li>
                                <li><Link to="volunteer.html">Помочь</Link></li>
                                <li className="menu-has-children"><Link to="">Полезные статьи</Link></li>
                                <li><Link to="contact.html">Контакты</Link></li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admin">Кабинет</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}