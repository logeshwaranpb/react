import React, { Component } from 'react';
import { Link } from 'react-router';
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import _ from 'lodash';
import axios from 'axios';
import Notifications, { notify } from 'react-notify-toast';
import './employee.css';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    mixins = [LinkedStateMixin]
    getInitialState() {
    return {firstname: ''};
  }

    componentDidMount() {
        let id = this.props.params.id;
        if (id) {
            axios.get(`/api/employee/` + id).then(res => {
                this.setState(res.data);
            }).catch(err => {
                notify.show('Unable to fetch the details for the selected Employee!', 'error', 2000);
            });
        }
    }

    componentWillUnmount() {
        this.setState({});
    }

    render() {
        return (
            <div className="col s12 m12">
                <Notifications />
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">
                            <span>Employee Details</span>
                        </div>
                        <form className="col s12">
                            <div className="col s12">
                                <div className="input-field">
                                    <input id="firstname" type="text" className="validate" valueLink={this.linkState('firstname')} />
                                    <label htmlFor="firstname">First Name</label>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="input-field">
                                    <input id="lastname" type="text" className="validate" value={this.state.lastname} />
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="input-field">
                                    <input id="username" type="text" className="validate" value={this.state.username} />
                                    <label htmlFor="username">Username</label>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="input-field">
                                    <input id="password" type="password" className="validate" value={this.state.password} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="input-field">
                                    <input id="email" type="email" className="validate" value={this.state.email} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="input-field">
                                    <textarea id="address" className="materialize-textarea" value={this.state.address}></textarea>
                                    <label htmlFor="address">Address</label>
                                </div>
                            </div>
                            <div className="col s12 right-align">
                                <Link to="/employees" className="btn waves-effect waves-light">Cancel</Link>
                                <button className="btn waves-effect waves-light" ng-click="save()">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Employee;
