import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
            <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/cover_img_1.jpg)'}} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-4 col-sm-4 text-center animate-box">
                                <div className="counter-entry">
                                    <span className="icon"><i className="flaticon-ribbon"></i></span>
                                    <div className="desc">
                                        <span className="colorlib-counter js-counter" data-from="0" data-to="1500" data-speed="5000" data-refresh-interval="50"></span>
                                        <span className="colorlib-counter-label">Of customers are satisfied with our professional support</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center animate-box">
                                <div className="counter-entry">
                                    <span className="icon"><i className="flaticon-church"></i></span>
                                    <div className="desc">
                                        <span className="colorlib-counter js-counter" data-from="0" data-to="500" data-speed="5000" data-refresh-interval="50"></span>
                                        <span className="colorlib-counter-label">Amazing preset options to be mixed and combined</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center animate-box">
                                <div className="counter-entry">
                                    <span className="icon"><i className="flaticon-dove"></i></span>
                                    <div className="desc">
                                        <span className="colorlib-counter js-counter" data-from="0" data-to="1200" data-speed="5000" data-refresh-interval="50"></span>
                                        <span className="colorlib-counter-label">Average response time on live chat support channel</span>
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
