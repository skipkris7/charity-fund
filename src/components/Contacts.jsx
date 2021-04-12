import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import {BiEnvelope, FiPhone} from "react-icons/all";
import {FaInstagram} from "react-icons/fa";

export class Contacts extends React.Component{
    render(){
        return(
            <section className="contact-page-area section-gap">
                <div className="container mt-20">
                    <div className="row">
                        <div className="col-lg-4 d-flex flex-column address-wrap">
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <AiOutlineHome size='40' color='#FAB700'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div className="contact-details mt-3">
                                    <h5>г. Москва</h5>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <FiPhone size='40' color='#FAB700'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div className="contact-details mt-3">
                                    <h5>+7 (903) 186 86 69</h5>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <BiEnvelope size='40' color='#FAB700'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div className="contact-details mt-3">
                                    <h5>budu-ryadom@yandex.ru</h5>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <FaInstagram size='40' color='#FAB700'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div className="contact-details mt-3">
                                    <h5>@charityfund_budu_ryadom</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h2 className='massage mb-4'>Отправить сообщение</h2>
                            <form className="form-area " id="myForm" action="mail.php" method="post"
                                  className="contact-form text-right">
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <input name="name" placeholder="Введите имя" onFocus="this.placeholder = ''"
                                               onBlur="this.placeholder = 'Введите имя'"
                                               className="common-input mb-20 form-control" required="" type="text"/>

                                        <input name="email" placeholder="Email"
                                               pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                               onFocus="this.placeholder = ''"
                                               onBlur="this.placeholder = 'Email'"
                                               className="common-input mb-20 form-control" required="" type="email"/>

                                        <input name="subject" placeholder="Тема"
                                               onFocus="this.placeholder = ''"
                                               onBlur="this.placeholder = 'Тема'"
                                               className="common-input mb-20 form-control" required=""
                                               type="text"/>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <textarea className="common-textarea form-control" rows='6' name="message"
                                                  placeholder="Сообщение" onFocus="this.placeholder = ''"
                                                  onBlur="this.placeholder = 'Сообщение'" required=""/>
                                    </div>
                                    <div className="col-lg-12 d-flex justify-content-between">
                                        <div className="alert-msg" style={{textAlign: "left"}}> </div>
                                        <button className="genric-btn primary circle" style={{float: "right"}}>
                                            Отправить сообщение
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}