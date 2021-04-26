import React from 'react';
import {Link} from "react-router-dom";
import {host} from "../config";


function Div(props){
    return (
        <div className="col-lg-4 col-md-6">
            <div className="info" >
                <Link to={`/OneCat/${props.id}`}>
                    <h3>
                        <p style={{fontSize:26,color:"#8c0494",fontFamily:"Georgia" }}>{props.nickname}</p>
                    </h3>
                    <img className="img-fluid img-thumbnail rounded" src={props.photo_1} alt="cat" style={{width:270,height:380}}/>
                </Link>
            </div>
        </div>
    )
}
export class Cats extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cats: []
        }
    }
    componentDidMount() {
        fetch(host+"/getCats")
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    cats: result.map(cats=>{
                        return <Div
                            key={cats.id}
                            id={cats.id}
                            nickname={cats.nickname}
                            text={cats.text}
                            photo_1={cats.photo_1}
                        />})
                })
            })
    }

    render() {
        return (
            <section className="cat-list-area section-gap"
                     style={{backgroundImage:"url(https://thumbs.dreamstime.com/b/pets-seamless-pattern-23238387.jpg)"}}>

                <div className="text-center shadow-sm bg-white rounded ">
                    <h1><p style={{fontSize:22,color:"#140395",fontFamily:"Georgia" }}>Сегодня <br />
                        в БЛАГОТВОРИТЕЛЬНОМ ФОНДЕ "БУДУ РЯДОМ" ждут хозяина:</p></h1>
                </div>
                <div className="container">
                    <br/>
                    <div className="single-cat-list" >
                        <div className="row">{host+this.state.cats}</div>
                    </div>
                </div>

            </section>
        )
    }
}