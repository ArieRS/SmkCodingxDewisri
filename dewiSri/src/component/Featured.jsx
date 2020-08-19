import React, { Component } from 'react'

export default class Featured extends Component {
    render() {
        return (
            <div className="colorlib-featured">
                <div className="row animate-box">
                    <div className="featured-wrap">
                        <div className="owl-carousel">
                            <div className="item">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="featured-entry">
                                        <img className="img-responsive" src="images/dashboard_full_1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="featured-entry">
                                        <img className="img-responsive" src="images/dashboard_full_2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="featured-entry">
                                        <img className="img-responsive" src="images/dashboard_full_3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
