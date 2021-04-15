import React from 'react';
import {AdminMenu} from './AdminMenu'
import {Route, Switch} from "react-router-dom";
import {AddPost} from "./AddPost";
import {AddCat} from "./AddCat";


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
                <Switch>
                    <Route path="/admin/addCat">
                        <AddCat/>
                    </Route>
                    <Route path="/admin/addDog">
                        "Добавить собаку"
                    </Route>
                    <Route path="/admin/addPost">
                        <AddPost/>
                    </Route>
                </Switch>
            </section>

    )}
}

