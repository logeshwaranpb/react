import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Logeshwaran Periyasamy</h5>
                            <p className="grey-text text-lighten-4">About Me</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Track me @</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Gmaill</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Linkldin</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2016 Logi, All rights reserved.
				<a className="grey-text text-lighten-4 right" href="#!"></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
