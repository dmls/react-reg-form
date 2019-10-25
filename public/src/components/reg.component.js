import React from 'react';
import Form from './form.component';
import axios from 'axios';

export default class Registration extends Form {

    constructor(props) {
        super(props);
        this.postTarget = 'create-reg';
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row mb-4">
                    <div className="col text-center">
                        <h1>Header</h1>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col">Adipisicing quis non mollit enim nulla ullamco ullamco ex. Do dolore ut nostrud incididunt ad consectetur in dolore duis ut ullamco pariatur dolore duis. Nostrud amet sit cillum do reprehenderit quis sunt consequat reprehenderit.</div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input id="first_name" 
                            className="form-control" 
                            name="first_name" 
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input id="last_name" 
                            className="form-control" 
                            name="last_name" 
                            onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" 
                            className="form-control" 
                            name="email" 
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="email_confirm">Confirm Email</label>
                        <input id="email_confirm" 
                            className="form-control" 
                            name="email_confirm" 
                            onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col form-group">
                        <label htmlFor="address_1">Address</label>
                        <input id="address_1" 
                            className="form-control" 
                            name="address_1" 
                            onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col form-group">
                        <label htmlFor="address_2">Address 2 (Optional)</label>
                        <input id="address_2" 
                            className="form-control" 
                            name="address_2" 
                            onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="city">City</label>
                        <input id="city" 
                            className="form-control" 
                            name="city" 
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="state">State</label>
                        <select className="form-control" 
                            id="state" name="state" 
                            onChange={this.handleInputChange}>
                            <option value="">--</option>
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DC">District of Columbia</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                        </select>   
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="zip">Zip</label>
                        <input id="zip" 
                            className="form-control" 
                            name="zip" 
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" 
                            className="form-control" 
                            name="phone" 
                            onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-group form-check">
                            <input type="checkbox" 
                                className="form-check-input" 
                                id="optin_contact" 
                                name="optin_contact"
                                value="1" 
                                onChange={this.handleInputChange} />
                                
                            <label className="form-check-label" htmlFor="optin_contact">Exercitation irure reprehenderit enim incididunt culpa id tempor sint sit mollit dolor dolore. Laborum aliqua velit nisi dolore id proident minim.</label>
                        </div>
                    </div>
                </div>

                <div className="row text-center my-3">
                    <div className="col">
                        <button className="col-md-4 col-sm-12 btn btn-primary" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}