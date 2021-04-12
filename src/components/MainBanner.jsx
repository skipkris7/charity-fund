import React from 'react';
import carusel1 from './img/carusel/carusel1.png';
import carusel2 from './img/carusel/carusel2.png';
import carusel3 from './img/carusel/carusel3.png';
import carusel4 from './img/carusel/carusel4.png';
import carusel5 from './img/carusel/carusel5.png';
import carusel6 from './img/carusel/carusel6.png';
import carusel7 from './img/carusel/carusel7.png';
import carusel8 from './img/carusel/carusel8.png';
import carusel9 from './img/carusel/carusel9.png';
import carusel10 from './img/carusel/carusel10.png';
import carusel11 from './img/carusel/carusel11.png';
import carusel12 from './img/carusel/carusel12.png';
import {Link} from "react-router-dom";

export class MainBanner extends React.Component{
    render(){
        return(
            <section className="image-carusel-area">
                <div className="container mt-40">
                    <div className="row">
                        <div className="active-image-carusel">
                            <div className="single-image-carusel">
                               <Link to='/gallery'><img className="img-fluid" src={carusel1} style={{height:'300px'}} alt="cat"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel2} style={{height:'300px'}} alt="dog"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel3} style={{height:'300px'}} alt="cat"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel4} style={{height:'300px'}} alt="dog"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel5} style={{height:'300px'}} alt="cat"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel6} style={{height:'300px'}} alt="dog"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel7} style={{height:'300px'}} alt="cat"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel8} style={{height:'300px'}} alt="dog"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel9} style={{height:'300px'}} alt="cat"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel10} style={{height:'300px'}} alt="dog"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel11} style={{height:'300px'}} alt="cat"/></Link>
                            </div>
                            <div className="single-image-carusel">
                                <Link to='/gallery'><img className="img-fluid" src={carusel12} style={{height:'300px'}} alt="dog"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}