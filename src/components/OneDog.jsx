import React from 'react';
import {Link} from "react-router-dom";


export class OneDog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
            id: '',
            photo:''
        }
    }

    componentDidMount() {
        console.log("Компонет Post отрисован");
        const formData = new FormData();
        formData.append('id',this.props.match.params.id);
        fetch("http://v90355zw.beget.tech/php12/getDog.php", {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    id:result.id,
                    name: result.name,
                    text: result.text,
                    photo: result.photo
                });
            })
    }

    render() {
        return (<div className="container-fluid" style={{backgroundImage:"url(https://image.freepik.com/free-vector/cute-paw-footprint-seamless-pattern-background_42349-767.jpg)"}}>
                    <div className="container-fluid">
                        <p>name</p>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"/>

                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"/>

                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"/>

                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={this.state.photo} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={this.state.photo} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={this.state.photo} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            Предыдущий
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">

                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Следующий</span>
                        </button>
                    </div>
                    <div>
                        <p>{this.state.text}</p>
                    </div>
                </div>
            </div>

        )
    }
}