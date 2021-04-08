import React from 'react';
import {Link} from "react-router-dom";

export class Menu extends React.Component{
    render(){
        return(
            <header id="header" id="home">
                <div className="container main-menu">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <Link to="index.html"><img src="img/logo.png" alt="" title=""/></Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><Link to="index.html">Home</Link></li>
                                <li><Link to="about.html">About Us</Link></li>
                                <li><Link to="cats.html">Cats</Link></li>
                                <li><Link to="dogs.html">Dogs</Link></li>
                                <li><Link to="volunteer.html">Volunteer</Link></li>
                                <li className="menu-has-children"><Link to="">Blog</Link>
                                    <ul>
                                        <li><Link to="blog-home.html">Blog Home</Link></li>
                                        <li><Link to="blog-single.html">Blog Single</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="contact.html">Contact</Link></li>
                                <li className="menu-has-children"><Link to="">Dropdown</Link>
                                    <ul>
                                        <li><Link to="elements.html">Elements</Link></li>
                                        <li><Link to="#">Item</Link></li>
                                        <li className="menu-has-children"><Link to="">Level 2</Link>
                                            <ul>
                                                <li><Link to="#">Item 1</Link></li>
                                                <li><Link to="#">Item 2</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}