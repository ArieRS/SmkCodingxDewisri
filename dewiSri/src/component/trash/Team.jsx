import React, { Component } from 'react'

export default class Team extends Component {
    render() {
        return (
            <section id="team" className="section-bg">
                <div className="container">
                    <div className="section-header">
                        <h3 className="section-title">Our Team</h3>
                        <span className="section-divider"></span>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
                    <div className="row wow fadeInUp">
                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                            <div className="pic"><img src="assets/img/team/team-1.jpg" alt="" /></div>
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                            <div className="social">
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-google-plus"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                            <div className="pic"><img src="assets/img/team/team-2.jpg" alt="" /></div>
                            <h4>Sarah Jhinson</h4>
                            <span>Product Manager</span>
                            <div className="social">
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-google-plus"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                            <div className="pic"><img src="assets/img/team/team-3.jpg" alt="" /></div>
                            <h4>William Anderson</h4>
                            <span>CTO</span>
                            <div className="social">
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-google-plus"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                            <div className="pic"><img src="assets/img/team/team-4.jpg" alt="" /></div>
                            <h4>Amanda Jepson</h4>
                            <span>Accountant</span>
                            <div className="social">
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-google-plus"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}
