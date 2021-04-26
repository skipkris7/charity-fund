import React from 'react';
import {host} from "../config";
import {Link} from "react-router-dom"

function WritePost(blog) {
    return (
        <div>
            {/*  <Link to={`/OnePost/${blog.id}`}> */}
                <Link to={`/post/${blog.id}`}>
                <h3>{blog.title}</h3>
                <p>{blog.text}</p>
            </Link>
        </div>
    )
}
export class Articles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            indiv: []
        }
    }

    componentDidMount() {
        console.log("add");
        fetch(host+"/getPosts")
            .then(result=> {
                return result.json()
            }).then(
                result=>{
                    let postsindiv = [];
                    for(let i = 0; i < result.length; i++){
                        postsindiv.push(<WritePost
                            id = {result[i].id}
                            title = {result[i].title}
                            text = {result[i].text}
                        />);
                       //console.log(postsindiv[i]);
                    }
                    this.setState({
                        indiv: postsindiv
                    })
            })
    }

    render(){
        return(
            <section className="post-content-area single-post-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post row">
                                <div className="col-lg-12">
                                    <div className="feature-img">
                                        <img className="img-fluid" src="img/blog/feature-img1.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {this.state.indiv}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}