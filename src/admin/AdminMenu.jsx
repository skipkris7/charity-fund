import React from "react";
import {NavLink} from "react-router-dom";


export class AdminMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        return (
            <section className="Volunteer-form-area section-gap">
                <div className="container">
                    <nav className="nav flex-column">
                        <h5>
                            <NavLink className="nav-link" to="AddCat">Добавить кошку</NavLink>
                            <NavLink className="nav-link" to="AddDog">Добавить собаку</NavLink>
                            <NavLink className="nav-link" to="AddPost">Добавить статью</NavLink>
                        </h5>
                    </nav>
                </div>
            </section>
        )
    }
}