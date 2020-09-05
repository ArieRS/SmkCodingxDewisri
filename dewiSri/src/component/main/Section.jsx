import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        return (
            <section id="intro">

                <div className="intro-text">
                    <h2>Selamat Datang di Dewisri</h2>
                    <p>Plant Your Future</p>
                    <a href="/login" className="btn-get-started scrollto">Get Started</a>
                </div>

                {/* <div className="product-screens">

                    <div className="product-screen-1 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
                        <img src="assets/img/product-screen-1.png" alt="" />
                    </div>

                    <div className="product-screen-2 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.6s">
                        <img src="assets/img/product-screen-2.png" alt="" />
                    </div>

                    <div className="product-screen-3 wow fadeInUp" data-wow-duration="0.6s">
                        <img src="assets/img/product-screen-3.png" alt="" />
                    </div>

                </div> */}

            </section>
        )
    }
}
