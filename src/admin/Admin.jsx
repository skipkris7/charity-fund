import React from 'react';
import {AdminMenu} from './AdminMenu'
import {Route, Switch} from "react-router-dom";
import {AddPost} from "./AddPost";


export class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        }
    }
    componentDidMount() {

    }

    render() {
        return(
            <section className="Volunteer-form-area section-gap">
                    <AdminMenu/>
                    <switch>
                        <Route path="/admin/addCat">
                            "Добавить кошку"
                        </Route>
                        <Route path="/admin/addDog">
                            "Добавить собаку"
                        </Route>
                        <Route path="/admin/addPost">
                            <AddPost changeH1={this.props}/>
                        </Route>
                    </switch>
            </section>

    )}
}

