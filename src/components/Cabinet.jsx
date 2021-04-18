import React from "react";
import {host} from "../config";

export class Cabinet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: "",
        }
    }
    componentDidMount() {
        fetch(host+"/php/getUser.php",{
            credentials: 'include'
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result !== "error"){
                    this.setState({
                        login: result.login,
                    })
                }
            });
    }

    render() {
        return (
            <div>
                <h1>Login: {this.state.login}</h1>
            </div>
        )
    }
}