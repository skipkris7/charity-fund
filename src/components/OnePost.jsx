import React from 'react';
import {host} from "../config";

export class OnePost extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
        }
    }

    componentDidMount() {
        const formData = new FormData();
        //formData.append('id', window.location.pathname.split('/')[2]);
        formData.append("id", this.props.match.params.id);
        console.log(this.props.match.params.id);
        fetch(host + "/getPost", {
            method: "POST",
            body: formData
        })
        .then (response => response.json())
            .then (result => {
                console.log(result);
                this.setState ({
                    title: result.title,
                    text: result.text,
                })
            })
    }

    render() {
        return(
            <section className="top-category-widget-area pt-90 pb-90 ">
                <div className="container">
                    <div className="row">
                        <div class="text-center">

                            <h3 class="text-center">
                                {this.state.title}
                            </h3>
                            <p class="excert">
                                {this.state.text}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}