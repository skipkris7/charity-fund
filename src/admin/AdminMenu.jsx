import React from 'react';
import {NavLink} from "react-router-dom";


export class AdminMenu extends React.Component {
    constructor (props){
        super (props);
    }
    render() {
        return (
            <div className="container">
                <nav className="nav flex-column">
                    <h1>{this.props.h1}</h1>
                    <h5>
                        <NavLink className="nav-link" to="admin/addCat">Добавить кошку</NavLink>
                        <NavLink className="nav-link" to="admin/addDog">Добавить собаку</NavLink>
                        <NavLink className="nav-link" to="admin/addPost">Добавить статью</NavLink>
                    </h5>
                </nav>
            </div>
        )
    }
}