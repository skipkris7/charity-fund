import React from 'react';
import {FaPaw} from "react-icons/fa";
import {Link,Redirect} from "react-router-dom";
import mood5 from "./img/mood5.jpeg";

export class Help extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            tel: "",
            car: "",
            attendant: "",
            photo: "",
            ambassador: "",
            foster: "",
            other: "",
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
        formData.append("car", this.state.car);
        formData.append("attendant", this.state.attendant);
        formData.append("photo", this.state.photo);
        formData.append("ambassador", this.state.ambassador);
        formData.append("foster", this.state.foster);
        formData.append("other", this.state.other);
        formData.append("comment", this.state.comment);
        fetch("http://skipkris7.beget.tech/fund/php/handlerVolunteer.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                    redirect: true
                })
            });
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }else{
            return(
                <section className="Volunteer-form-area section-gap">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <img src={mood5} height='280' alt="mood"/>
                            <div className="menu-content pb-10 col-lg-6">
                                <div className="title text-left">
                                    <h1>Как и чем можно помочь?</h1>
                                    <h5 className="text my-3"><FaPaw/> Стать волонтёром фонда</h5>
                                    <h5 className="text mb-3"><FaPaw/> Поддержать фонд финансово</h5>
                                    <h5 className="text mb-3"><FaPaw/> Привезти/передать/заказать через <Link to="/partners">партнёров</Link>: <br />корм, лекарства, лакомства, игрушки, амуницию, когтеточки, когтерезы, фурминаторы, лежаки, наполнители, одноразовые пелёнки, материалы для ремонта</h5>
                                    <h5 className="text mb-3"><FaPaw/> Взять кого-то из подопечных фонда на передержку - подарить временный дом до появления постоянного</h5>
                                </div>
                            </div>
                            <div className="menu-content pb-10 col-lg-11">
                                <div className="title text-center">
                                    <h3 className="text mt-4 mb-3">Сделать пожертвование</h3>
                                    <p style={{color:"black"}}>Все поступающие на содержание подопечных средства - это исключительно пожертвования неравнодушных людей. Никакой государственной поддержки у фонда нет. Как и нет спонсоров. Есть только мы с вами - те, кому не всё равно.
                                    </p>
                                    <p style={{color:"black"}}>
                                        РЕКВИЗИТЫ:<br />
                                        Наименование: ФОНД «БУДУ РЯДОМ»;<br />
                                        ИНН/КПП: 5047204538/504701001;<br />
                                        Счет (Р) – 40703810110050000171;<br />
                                        Банк получателя – Ф ТОЧКА БАНК КИВИ БАНК (АО) Город Москва;<br />
                                        Бик – 044525797; К/с – 30101810445250000797;
                                    </p>
                                    <h3 className="mt-4 mb-3">Стать волонтёром фонда</h3>
                                    <p style={{color:"black"}}>Фонду «Буду рядом» всегда очень нужны волонтёры – люди, которые на безвозмездной основе смогут помогать закрывать важные задачи, а именно:</p>
                                    <p>🚗 <b>автоволонтёры</b> – свозить животное к врачу, на фотосессию, выставку или другое публичные мероприятия с целью поиска дома. А также забрать с мероприятия и привезти благотворительную помощь: корма, подарки и т.д.;</p>
                                    <p>🤗 <b>сопровождающие</b> – сопровождать животное в дороге и на всех вышеперечисленных мероприятиях, при необходимости рассказывать про него заинтересовавшимся (конечно же, мы предварительно обеспечим вас всей необходимой информацией и будем на связи). Также часто нужна помощь руками представителю фонда во время мероприятий – иногда нам требуется ненадолго отойти, и не всегда это можно сделать с животным;</p>
                                    <p>📸 <b>фотографы</b> – не всегда есть возможность свозить животное в студию, а наличие красивых профессиональных фотографий в разы увеличивает шанс животного на домашнюю жизнь. Ничего, если вы только начинаете свой путь, наши модели с удовольствием станут частью вашего формирующегося портфолио;</p>
                                    <p>💬 <b>амбассадоры</b> – рассказывать на различных публичных мероприятиях о деятельности фонда и его подопечных, раздавать листовки. Всё расскажем, покажем, научим, листовки выдадим;</p>
                                    <p>🏡 <b>домашние передержки</b> – научить хвостов премудростям совместной жизни, бытовым навыкам и спокойному принятию особенностей городской среды: шумов машин, незнакомых людей и животных, мириады новых запахов.</p>
                                    <p>🐾 С нас: чуткое наставничество, готовность делиться опытом и знаниями, классное настроение и, конечно же, хвостатые антидепрессанты.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <h3 className="mb-20">Заполнить анкету волонтёра</h3>
                            <form onSubmit={this.handlerSubmit} className="col-lg-9">
                                <div className="form-group">
                                    <label htmlFor="first-name">Имя</label>
                                    <input value={this.state.name} onChange={this.handlerInput} name="name" type="text" className="form-control" placeholder="Имя" style={{width:"250px"}}/>
                                </div>
                                <div className="col-6 mb-10">
                                    <label htmlFor="email">Email</label>
                                    <input value={this.state.email} onChange={this.handlerInput} name="email" type="email" className="form-control" placeholder="Email" style={{width:"250px"}}/>
                                </div>
                                <div className="col-6 mb-30">
                                    <label htmlFor="phone">Телефон</label>
                                    <input value={this.state.tel} onChange={this.handlerInput} name="tel" type="tel" className="form-control" placeholder="+7(___)___-__-__" style={{width:"250px"}}/>
                                </div>
                                <fieldset className="form-group">
                                    <label htmlFor="day">Какой вид помощи Вам ближе?</label>
                                    <div className="form-group ">
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input value={this.state.car} onChange={this.handlerInput} name="car" className="form-check-input" type="checkbox" id="inlineRadio1" checked /> Автоволонтёр
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input value={this.state.attendant} onChange={this.handlerInput} name="attendant" className="form-check-input" type="checkbox" id="inlineRadio2" checked /> Сопровождающий
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input value={this.state.photo} onChange={this.handlerInput} name="photo" className="form-check-input" type="checkbox" id="inlineRadio3" checked /> Фотограф
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input value={this.state.ambassador} onChange={this.handlerInput} name="ambassador" className="form-check-input" type="checkbox" id="inlineRadio2" checked /> Амбассадор
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input value={this.state.foster} onChange={this.handlerInput} name="foster" className="form-check-input" type="checkbox" id="inlineRadio2" checked /> Передержка
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input value={this.state.other} onChange={this.handlerInput} name="other" className="form-check-input" type="checkbox" id="inlineRadio2" checked /> Другое
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="form-group">
                                    <label htmlFor="note">Комментарий</label>
                                    <textarea value={this.state.comment} onChange={this.handlerInput} name="comment" className="form-control" id="exampleTextarea" rows="5" placeholder="Введите сюда текст Вашего комментария" style={{width:"700px"}}/>
                                </div>
                                <div className="col-sm-3 d-flex ml-auto mr-50">
                                    <input type="submit" className="form-control btn primary-btn" style={{borderRadius:"40px", height:"50px"}} value="Отправить"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            )
        }
    }
}