import React from 'react';
import {host} from "../config";

export class OneCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
            id: '',
            photo1:'',
        }
    }

    componentDidMount() {
        console.log("Компонет OneCat отрисован");
        const formData = new FormData();
        formData.append("id", this.props.match.params.id);
        fetch(host+"/getCat", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    name: result.nickname,
                    text: result.text,
                    photo_1: result.photo_1,
                });
            })
    }

    render() {
        return (
            <div className="cat-list-area section-gap " style={{backgroundImage:"url(https://thumbs.dreamstime.com/b/pets-seamless-pattern-23238387.jpg)"}}>
                <div className="container" style={{height:100}}>
                    <h2 class="text-center" style={{color:"#8c0494",fontFamily:"Georgia"}}>{this.state.nickname}<br/></h2>
                </div>
                <div className="container text-center shadow-sm bg-white rounded lh-lg">
                    <p style={{fontSize:20, color: "#3c3c3c", lineHeight: 1.8, fontFamily: "Georgia"}}>{this.state.text}</p>
                </div>
                <div className="col-md-12 text-center">
                    <img src={host+this.state.photo_1} alt="cat" className="img-fluid img-thumbnail rounded" />
                </div>
            </div>

        )
    }
}