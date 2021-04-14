import React from 'react';
import {AdminMenu} from './AdminMenu'
import {Route, Switch} from "react-router-dom";
import {AddPost} from "./AddPost";
import {AddCat} from "./AddCat";


export class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: "",
        }
    }
    componentDidMount() {

    }

    render() {
        return(
            <section className="Volunteer-form-area section-gap">
                <AdminMenu/>
                <Switch>
                    <Route path="/admin/AddCat">
                        <AddCat/>
                    </Route>
                    <Route path="/admin/AddDog">
                        "Добавить собаку"
                    </Route>
                    <Route path="/admin/AddPost">
                        <AddPost page={this.props}/>
                    </Route>
                </Switch>
            </section>

    )}
}

