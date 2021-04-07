import React from 'react';

export class MainPage extends React.Component{
    render(){
        return(
            <section className="callto-top-area section-gap">
                <div className="container">
                    <div className="row justify-content-between callto-top-wrap pt-40 pb-40">
                        <div className="col-lg-8 callto-top-left">
                            <h1>Please select your favourite pet</h1>
                        </div>
                        <div className="col-lg-4 callto-top-right">
                            <a href="#" className="primary-btn">Fill Adoption Form</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}