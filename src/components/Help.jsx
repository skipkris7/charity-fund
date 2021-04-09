import React from 'react';

export class Help extends React.Component{
    render(){
        return(
            <section className="Volunteer-form-area section-gap">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-9">
                            <div className="title text-center">
                                <h1 className="mb-20">Want to help? Become a Volunteer</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <form className="col-lg-9">
                            <div className="form-group">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Address">Address</label>
                                <input type="text" className="form-control mb-20" placeholder="Your Address"/>
                                    <input type="text" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-row">
                                <div className="col-6 mb-30">
                                    <label htmlFor="City">City</label>
                                    <div className="select-option" id="service-select">
									<select>
										<option data-display="Select City">Select City</option>
										<option value="1">Dhaka</option>
                                        <option value="2">Dinajpur</option>
                                        <option value="3">Gazipur</option>
                                        <option value="4">Bogra</option>
                                        <option value="5">Feni</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-6 mb-30">
                                    <label htmlFor="state">State</label>
                                    <div className="select-option" id="service-select">
                                    <select>
                                        <option data-display="Select State">Select State</option>
                                        <option value="1">State One</option>
                                        <option value="2">State Two</option>
                                        <option value="3">State Three</option>
                                        <option value="4">State Four</option>
                                        <option value="5">State Five</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-6 mb-30">
                                    <label htmlFor="Country">Country</label>
                                    <div className="select-option" id="service-select">
                                        <select>
                                            <option data-display="Select Country">Select Country</option>
                                            <option value="1">Bangladesh</option>
                                            <option value="2">London</option>
                                            <option value="3">India</option>
                                            <option value="4">Nepal</option>
                                            <option value="5">Uganda</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 mb-30">
                                    <label htmlFor="postal-code">Postal code</label>
                                    <input type="text" className="form-control" placeholder="Postal Code"/>
                                </div>
                                <div className="col-6 mb-30">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Email Address"/>
                                </div>
                                <div className="col-6 mb-30">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="phone" className="form-control" placeholder="Phone Number"/>
                                </div>
                            </div>

                            <fieldset className="form-group">
                                <label htmlFor="day">Which days you can be volunteer?</label>
                                <div className="form-group ">
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio1" value="option1"/> Monday
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option2"/> Tuesday
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio3" value="option3"/> Wednesday
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option4"/> Thursday
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option5"/> Friday
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option6"/> Saturday
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option6"/> Sunday
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="form-group">
                                <label htmlFor="note">Volunteer Note</label>
                                <textarea className="form-control" id="exampleTextarea" rows="5" placeholder="Write message"></textarea>
                            </div>
                            <button type="submit" className="primary-btn float-right">Send Request</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}