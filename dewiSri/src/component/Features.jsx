import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <section id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <div className="section-header wow fadeIn" data-wow-duration="1s">
                            <h3 className="section-title">Product Featuress</h3>
                            <span className="section-divider"></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 features-img">
                            <img src="assets/img/product-features.png" alt="" className="wow fadeInLeft" />
                        </div>
                        <div className="col-lg-8 col-md-7 ">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 box wow fadeInRight">
                                    <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident clarida perendo.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.1s">
                                    <div className="icon"><i className="ion-ios-flask-outline"></i></div>
                                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata noble dynala mark.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="icon"><i className="ion-social-buffer-outline"></i></div>
                                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur teleca starter sinode park ledo.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
                                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dinoun trade capsule.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
