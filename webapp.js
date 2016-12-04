import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const root = `${__dirname}/public`;
app.use(express.static(root));

var employees = [{
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
}, {
    firstname: 'Employee',
    lastname: '3',
    id: '100003',
    email: 'employee3@test.com',
    address: 'address',
    gender: 'male',
    username: 'employee3',
    password: 'password'
}];

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/employees', (req, res) => {
    res.json(employees);
});

app.post('/employee', (req, res) => {
    req.body.id = +(_.maxBy(employees, 'id').id || '100000') + 1 + '';
    employees.unshift(req.body);
    res.json(employees);
});

app.post('/employee/:id', (req, res) => {
    employees.splice(_.indexOf(employees, _.find(employees, { id: req.params.id })), 1);
    employees.unshift(req.body);
    res.json(employees);
});

app.delete('/employee/:id', (req, res) => {
    _.remove(employees, { id: req.params.id });
    res.json(employees);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
