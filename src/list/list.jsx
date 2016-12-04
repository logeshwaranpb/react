import React, { Component } from 'react';
import _ from 'lodash';
import './list.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [{
                firstname: 'Employee',
                lastname: '1',
                id: '100001',
                email: 'employee1@test.com',
                address: 'address',
                gender: 'male',
                username: 'employee1',
                password: 'password'
            }, {
                firstname: 'Employee',
                lastname: '2',
                id: '100002',
                email: 'employee2@test.com',
                address: 'address',
                gender: 'female',
                username: 'employee2',
                password: 'password'
            }]
        };
    }

    render() {
        var rows = [];
        _.each(this.state.employees, (value, index) => {
            rows.push(
                <tr key={value.id}>
                    <td className="center-align">1</td>
                    <td>Employee 1</td>
                    <td className="center-align">100001</td>
                    <td>employee1@test.com</td>
                    <td className="center-align">
                        <a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Edit"><i className="material-icons">mode_edit</i></a>
                        <a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Delete"><i className="material-icons">delete</i></a>
                    </td>
                </tr>
            );
        });
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
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default List;
