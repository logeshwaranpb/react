import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import axios from 'axios';
import Notifications, { notify } from 'react-notify-toast';
import './employees.css';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        axios.get(`/api/employees`).then(res => {
            this.setState({ employees: res.data });
        }).catch(err => {
            notify.show('Unable to fetch Employees list!', 'error', 2000);
        });
    }

    componentWillUnmount() {
        this.setState({ employees: [] });
    }

    remove(id) {
        axios.delete(`/api/employee/` + id).then(res => {
            this.setState({ employees: res.data });
            notify.show('Deleted successfully!', 'success', 2000);
        }).catch(err => {
            notify.show('Request Failed!', 'error', 2000);
        });
    }

    render() {
        return (
            <div className="col s12 m12">
                <Notifications />
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">
                            <span>List of Employees</span>
                            <Link to="/employee" className="btn-floating waves-effect waves-light right"><i className="small material-icons">add</i></Link>
                        </div>
                        <table className="employee-table striped highlight responsive-table">
                            <thead>
                                <tr>
                                    <th className="center-align">##</th>
                                    <th>Name</th>
                                    <th className="center-align">ID</th>
                                    <th className="center-align">Gender</th>
                                    <th>Email</th>
                                    <th className="center-align">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.length === 0 ?
                                    <tr>
                                        <td colSpan="6">
                                            <div className="valign-wrapper">
                                                <div className="valign center">Data not available to show!</div>
                                            </div>
                                        </td>
                                    </tr> :
                                    this.state.employees.map((employee, index) => {
                                        return (<tr key={employee.id}>
                                            <td className="center-align">{index + 1}</td>
                                            <td>{employee.firstname} {employee.lastname}</td>
                                            <td className="center-align">{employee.id}</td>
                                            <td className="center-align">{employee.gender}</td>
                                            <td>{employee.email}</td>
                                            <td className="center-align">
                                                <Link to={'/employee/' + employee.id} className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Edit"><i className="material-icons">mode_edit</i></Link>
                                                <a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Delete" id={employee.id} onClick={(e) => this.remove(employee.id)}><i className="material-icons">delete</i></a>
                                            </td>
                                        </tr>);
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Employees;
