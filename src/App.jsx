import React, { Component } from 'react';
import './App.css';
import Header from './header/header.jsx';
import List from './list/list.jsx';
import Footer from './footer/footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <List />
                <Footer />
            </div>
        );
    }
}

export default App;
