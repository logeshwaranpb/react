import React, { Component } from 'react';
import './App.css';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
