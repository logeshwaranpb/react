import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Employees from './employees/employees.jsx';
import Employee from './employee/employee.jsx';
import './css/icon.css';
import './css/materialize.css';
import './index.css';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component = {Employees} />
            <Route path="/employees" component={Employees} />
            <Route path="/employee" component={Employee} />
            <Route path="/employee/:id" component={Employee} />
        </Route>
    </Router>,
    document.getElementById('root')
);
