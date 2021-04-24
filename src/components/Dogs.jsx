import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {host} from "../config"

function Div(props){
    return <div className="col-lg-3 col-md-6">
                <div className="single-cat-list" style={{borderStyle:"solid"}}>
                    <NavLink to={"/OneDog/"+props.id}>
                        <p style={{fontSize:30,textAlign:"center",color:"black",fontFamily:"cursive"}}>{props.nickname}</p>
                        <img src={props.photo_1} alt="" style={{width:250,height:355}}/>
                    </NavLink>
                </div>
         </div>

}

export class Dogs extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch(host + "/getDogs")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let rows = [];
                for (let i = 0; i < result.length; i++) {
                    rows.push(<Div
                        key={i}
                        index={i+1}
                        id = {result[i].id}
                        nickname={result[i].nickname}
                        photo_1={result[i].photo_1}
                    />)
                }
                this.setState({
                    posts: rows
                })
            })
    }

    render() {
        console.log("Компонет PostList рисуется");
        return  <div className="cat-list-area section-gap" style={{backgroundImage:"url(https://image.freepik.com/free-vector/cute-paw-footprint-seamless-pattern-background_42349-767.jpg)"}}>>
                    <div className="container">
                            <div className="row">
                                    {this.state.posts}
                            </div>
                    </div>
                </div>
    }
}