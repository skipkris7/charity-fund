import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Div(props){
    return <div className="col-lg-3 col-md-6">
                <div className="single-cat-list" style={{borderStyle:"solid"}}>
                    <NavLink to="/OneDog">
                        <p style={{fontSize:30,textAlign:"center",color:"black",fontFamily:"cursive"}}>{props.name}</p>
                        <img src={props.photo} alt="" style={{width:250,height:355}}/>
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
        fetch("http://v90355zw.beget.tech/php12/getDogs.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let rows = [];
                for (let i = 0; i < result.length; i++) {
                    rows.push(<Div
                        index={i+1}
                        name={result[i].name}
                        photo={result[i].photo}
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