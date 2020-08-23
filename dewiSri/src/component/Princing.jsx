import React, { Component } from 'react'

export default class Princing extends Component {
    render() {
        return (
            <section id="pricing" className="section-bg">
                <div className="container">
                    <div className="section-header">
                        <h3 className="section-title">Pricing</h3>
                        <span className="section-divider"></span>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="box wow fadeInLeft">
                            <h3>Free</h3>
                            <h4><sup>$</sup>0<span> month</span></h4>
                            <ul>
                                <li><i className="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                                <li><i className="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                                <li><i className="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                                <li><i className="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                                <li><i className="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="box featured wow fadeInUp">
                                <h3>Business</h3>
                                <h4><sup>$</sup>29<span> month</span></h4>
                                <ul>
                                    <li><i className="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                                    <li><i className="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                                    <li><i className="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="box wow fadeInRight">
                                <h3>Developer</h3>
                                <h4><sup>$</sup>49<span> month</span></h4>
                                <ul>
                                    <li><i className="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                                    <li><i className="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                                    <li><i className="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
