import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section id="about" className="section-bg">
                <div className="container-fluid">
                    <div className="section-header">
                        <h3 className="section-title">About Us</h3>
                        <span className="section-divider"></span>
                        <p className="section-description">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br />
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 about-img wow fadeInLeft">
                        <img src="assets/img/about-img.jpg" alt="" />
                    </div>

                    <div className="col-lg-6 content wow fadeInRight">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elite storium paralate</h2>
                        <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <ul>
                            <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>

                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Libero justo laoreet sit amet cursus sit amet dictum sit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
