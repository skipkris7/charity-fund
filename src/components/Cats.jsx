import React from 'react';
import {NavLink} from "react-router-dom";


function Div(props){
    return <div className="col-lg-3 col-md-6">
        <div className="single-cat-list" >
            <NavLink to="/OneCat">
                <h3><p style={{fontSize:18,color:"#8c0494",fontFamily:"Georgia" }}>{props.nickname}</p></h3>
                <img className="img-fluid" src={props.photo_1} alt="cat" style={{width:262,height:330}}/>
            </NavLink>
        </div>
    </div>
}
export class Cats extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    componentDidMount() {
        fetch('http://creatingws.beget.tech/php/getCats.php')
            .then(response=>response.json())
            .then(result=>{
                let rows = [];
                for (let i = 0; i < result.length; i++) {
                    rows.push(<Div
                        key={i}
                        index={i+1}
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
        return (
                <section className="cat-list-area section-gap" style={{backgroundImage:"url(https://image.freepik.com/free-vector/cute-paw-footprint-seamless-pattern-background_42349-767.jpg)"}}>>
                    <div className="text-center">
                        <h1><p style={{fontSize:22,color:"#140395",fontFamily:"Georgia" }}>Сегодня <br />
                        в Благотворительном фонде "БУДУ РЯДОМ" ждут хозяина:</p></h1>
                        <br />
                    </div>
                    <div className="container">
                        <div className="row">
                                <div className="single-cat-list" >
                                    <div className="row">{this.state.posts}</div>
                                </div>
                        </div>
                    </div>
                </section>
            )

    }
}