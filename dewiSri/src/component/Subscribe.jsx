import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <div id="colorlib-subscribe" className="colorlib-subscribe" style={{backgroundImage: 'url(images/cover_img_1.jpg)'}} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center colorlib-heading animate-box">
                            <h2>Already trusted by over 10,000 users</h2>
                            <p>Subscribe to receive unapp tips from instructors right to your inbox.</p>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <form className="form-inline qbstp-header-subscribe">
                                        <div className="col-three-forth">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="email" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        <div className="col-one-third">
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary">Subscribe Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
