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
                    <h5>
                        <NavLink className="nav-link" to="admin/AddCat">Добавить кошку</NavLink>
                        <NavLink className="nav-link" to="admin/AddDog">Добавить собаку</NavLink>
                        <NavLink className="nav-link" to="admin/AddPost">Добавить статью</NavLink>
                    </h5>
                </nav>
            </div>
        )
    }
}