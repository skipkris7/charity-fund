import React from 'react';
import {FaPaw} from "react-icons/fa";
import {Link} from "react-router-dom";
import mood5 from "./img/mood5.jpeg";
import {Redirect} from "react-router-dom";
import {host} from "../config";

export class Help extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            tel: "",
            car:"",
            attendant:"",
            photo:"",
            ambassador:"",
            foster:"",
            other:"",
            comment: "",
            redirect: false
        }
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handlerInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("tel", this.state.tel);
        formData.append("car",this.state.car);
        formData.append("attendant",this.state.attendant);
        formData.append("photo",this.state.photo);
        formData.append("ambassador",this.state.ambassador);
        formData.append("foster",this.state.foster);
        formData.append("other",this.state.other);
        formData.append("comment", this.state.comment);
        fetch(host+"/php/handlerVolunteer.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                    redirect: true
                })
            })
    }

    render(){
        const redirect = this.state.redirect;
        if(redirect){
            return <Redirect to="/" />
        }else{
            return(
                <section className="volunteer-form-area section-gap">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <img src={mood5} height='280' alt="mood"/>
                            <div className="menu-content pb-10 col-lg-6">
                                <div className="title text-left">
                                    <h1>?????? ?? ?????? ?????????? ?????????????</h1>
                                    <h5 className="text my-3"><FaPaw/> ?????????? ???????????????????? ??????????</h5>
                                    <h5 className="text mb-3"><FaPaw/> ???????????????????? ???????? ??????????????????</h5>
                                    <h5 className="text mb-3"><FaPaw/> ????????????????/????????????????/???????????????? ?????????? <Link to="/partners">??????????????????</Link>: <br />????????, ??????????????????, ??????????????????, ??????????????, ????????????????, ????????????????????, ??????????????????, ??????????????????????, ????????????, ??????????????????????, ?????????????????????? ??????????????, ?????????????????? ?????? ??????????????</h5>
                                    <h5 className="text mb-3"><FaPaw/> ?????????? ????????-???? ???? ???????????????????? ?????????? ???? ???????????????????? - ???????????????? ?????????????????? ?????? ???? ?????????????????? ??????????????????????</h5>
                                </div>
                            </div>
                            <div className="menu-content pb-10 col-lg-11">
                                <div className="title text-center">
                                    <h3 className="text mt-4 mb-3">?????????????? ??????????????????????????</h3>
                                    <p style={{color:"black"}}>?????? ?????????????????????? ???? ???????????????????? ???????????????????? ???????????????? - ?????? ?????????????????????????? ?????????????????????????? ?????????????????????????? ????????????. ???????????????? ???????????????????????????????? ?????????????????? ?? ?????????? ??????. ?????? ?? ?????? ??????????????????. ???????? ???????????? ???? ?? ???????? - ????, ???????? ???? ???????? ??????????.
                                    </p>
                                    <p style={{color:"black"}}>
                                        ??????????????????:<br />
                                        ????????????????????????: ???????? ?????????? ????????????;<br />
                                        ??????/??????: 5047204538/504701001;<br />
                                        ???????? (??) ??? 40703810110050000171;<br />
                                        ???????? ???????????????????? ??? ?? ?????????? ???????? ???????? ???????? (????) ?????????? ????????????;<br />
                                        ?????? ??? 044525797; ??/?? ??? 30101810445250000797;
                                    </p>
                                    <h3 className="mt-4 mb-3">?????????? ???????????????????? ??????????</h3>
                                    <p style={{color:"black"}}>?????????? ?????????? ???????????? ???????????? ?????????? ?????????? ?????????????????? ??? ????????, ?????????????? ???? ?????????????????????????? ???????????? ???????????? ???????????????? ?????????????????? ???????????? ????????????, ?? ????????????:</p>
                                    <p>???? <b>??????????????????????????</b> ??? ?????????????? ???????????????? ?? ??????????, ???? ????????????????????, ???????????????? ?????? ???????????? ?????????????????? ?????????????????????? ?? ?????????? ???????????? ????????. ?? ?????????? ?????????????? ?? ?????????????????????? ?? ???????????????? ?????????????????????????????????? ????????????: ??????????, ?????????????? ?? ??.??.;</p>
                                    <p>???? <b>????????????????????????????</b> ??? ???????????????????????? ???????????????? ?? ???????????? ?? ???? ???????? ?????????????????????????????????? ????????????????????????, ?????? ?????????????????????????? ???????????????????????? ?????? ???????? ???????????????????????????????????? (?????????????? ????, ???? ???????????????????????????? ?????????????????? ?????? ???????? ?????????????????????? ?????????????????????? ?? ?????????? ???? ??????????). ?????????? ?????????? ?????????? ???????????? ???????????? ?????????????????????????? ?????????? ???? ?????????? ?????????????????????? ??? ???????????? ?????? ?????????????????? ?????????????????? ????????????, ?? ???? ???????????? ?????? ?????????? ?????????????? ?? ????????????????;</p>
                                    <p>???? <b>??????????????????</b> ??? ???? ???????????? ???????? ?????????????????????? ?????????????? ???????????????? ?? ????????????, ?? ?????????????? ???????????????? ???????????????????????????????? ???????????????????? ?? ???????? ?????????????????????? ???????? ?????????????????? ???? ???????????????? ??????????. ????????????, ???????? ???? ???????????? ?????????????????? ???????? ????????, ???????? ???????????? ?? ?????????????????????????? ???????????? ???????????? ???????????? ???????????????????????????? ??????????????????;</p>
                                    <p>???? <b>??????????????????????</b> ??? ???????????????????????? ???? ?????????????????? ?????????????????? ???????????????????????? ?? ???????????????????????? ?????????? ?? ?????? ????????????????????, ?????????????????? ????????????????. ?????? ??????????????????, ??????????????, ????????????, ???????????????? ??????????????;</p>
                                    <p>???? <b>???????????????? ????????????????????</b> ??? ?????????????? ?????????????? ???????????????????????? ???????????????????? ??????????, ?????????????? ?????????????? ?? ???????????????????? ???????????????? ???????????????????????? ?????????????????? ??????????: ?????????? ??????????, ???????????????????? ?????????? ?? ????????????????, ?????????????? ?????????? ??????????????.</p>
                                    <p>???? ?? ??????: ???????????? ????????????????????????????, ???????????????????? ???????????????? ???????????? ?? ????????????????, ???????????????? ???????????????????? ??, ?????????????? ????, ?????????????????? ??????????????????????????????.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <h3 className="mb-3">?????????????????? ???????????? ??????????????????</h3>
                            <div className="container ml-50">
                                <form onSubmit={this.handlerSubmit} className="form-area">
                                    <div className="col-lg-9 form-group">
                                        <h6 className="name" style={{color:"black"}}>??????</h6>
                                        <input value={this.state.name} onChange={this.handlerInput} name="name" type="text" className="form-control" placeholder="??????" style={{width:"250px"}}/>
                                    </div>
                                    <div className="col-lg-9 form-group">
                                        <h6 className="email" style={{color:"black"}}>Email</h6>
                                        <input value={this.state.email} onChange={this.handlerInput} name="email" type="email" className="form-control" placeholder="Email" style={{width:"250px"}}/>
                                    </div>
                                    <div className="col-9 form-group">
                                        <h6 className="phone" style={{color:"black"}}>??????????????</h6>
                                        <input value={this.state.tel} onChange={this.handlerInput} name="tel" type="tel" className="form-control" placeholder="+7(___)___-__-__" style={{width:"250px"}}/>
                                    </div>
                                    <div className="col-lg-9 choice">
                                        <h6 className="help mt-3" style={{color:"black"}}>?????????? ?????? ???????????? ?????? ???????????</h6>
                                    </div>
                                        <div className="col-lg-9 form-check form-check-inline">
                                            <input value="Yes" onChange={this.handlerInput} name="car" className="form-check-input ml-3" type="checkbox" /> ????????????????????????&nbsp;&nbsp;
                                            <input value="Yes" onChange={this.handlerInput} name="attendant" className="form-check-input" type="checkbox" /> ????????????????????????????&nbsp;&nbsp;
                                            <input value="Yes" onChange={this.handlerInput} name="photo" className="form-check-input" type="checkbox" /> ????????????????&nbsp;&nbsp;
                                            <input value="Yes" onChange={this.handlerInput} name="ambassador" className="form-check-input" type="checkbox" /> ????????????????????&nbsp;&nbsp;
                                            <input value="Yes" onChange={this.handlerInput} name="foster" className="form-check-input" type="checkbox" /> ????????????????????&nbsp;&nbsp;
                                            <input value="Yes" onChange={this.handlerInput} name="other" className="form-check-input" type="checkbox" /> ????????????
                                        </div>
                                    <div className="form-group col-lg-9">
                                        <h6 className="note mt-3" style={{color:"black"}}>??????????????????????</h6>
                                        <textarea value={this.state.comment} onChange={this.handlerInput} name="comment" className="form-control" rows="5" placeholder="?????????????? ???????? ?????????? ???????????? ??????????????????????" style={{width:"700px"}}/>
                                    </div>
                                    <div className="col-sm-2 d-flex">
                                        <input type="submit" className="form-control btn primary-btn" style={{borderRadius:"40px", height:"50px"}} value="??????????????????"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}