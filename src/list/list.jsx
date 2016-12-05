import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import './list.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        axios.get(`employees`).then(res => {
            this.setState({ employees: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    componentWillUnmount() {
        this.setState({ employees: [] });
    }

    remove(id) {
        axios.delete(`employee/` + id).then(res => {
            this.setState({ employees: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <main>
                <div className="container">
                    <h5>
                        <span>Employee Details</span>
                        <a className="btn-floating waves-effect waves-light right"><i className="small material-icons">add</i></a>
                    </h5>
                    <table className="employee-table striped highlight responsive-table">
                        <thead>
                            <tr>
                                <th className="center-align" data-field="sno">##</th>
                                <th data-field="name">Name</th>
                                <th className="center-align" data-field="id">ID</th>
                                <th data-field="email">Email</th>
                                <th className="center-align" data-field="action">Action</th>
                            </tr>
                        </thead>
                        <tbody>{this.state.employees.map((employee, index) => {
                            return (<tr key={employee.id}>
                                <td className="center-align">{index + 1}</td>
                                <td>{employee.firstname} {employee.lastname}</td>
                                <td className="center-align">{employee.id}</td>
                                <td>{employee.email}</td>
                                <td className="center-align">
                                    <a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Edit"><i className="material-icons">mode_edit</i></a>
                                    <a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Delete" id={employee.id} onClick={(e) => this.remove(employee.id)}><i className="material-icons">delete</i></a>
                                </td>
                            </tr>);
                        })}</tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default List;
