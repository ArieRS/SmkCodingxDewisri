import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="colorlib-footer">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col-md-3 colorlib-widget">
                            <h4>About unapp</h4>
                            <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            {/* <p> */}
                                <ul className="colorlib-social-icons">
                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                    <li><a href="#"><i className="icon-dribbble"></i></a></li>
                                </ul>
                            {/* </p> */}
                        </div>
                        <div className="col-md-3 colorlib-widget">
                            <h4>Information</h4>
                            {/* <p> */}
                                <ul className="colorlib-footer-links">
                                    <li><a href="#"><i className="icon-check"></i> Home</a></li>
                                    <li><a href="#"><i className="icon-check"></i> Gallery</a></li>
                                    <li><a href="#"><i className="icon-check"></i> About</a></li>
                                    <li><a href="#"><i className="icon-check"></i> Blog</a></li>
                                    <li><a href="#"><i className="icon-check"></i> Contact</a></li>
                                    <li><a href="#"><i className="icon-check"></i> Privacy</a></li>
                                </ul>
                            {/* </p> */}
                        </div>

                        <div className="col-md-3 colorlib-widget">
                            <h4>Recent Blog</h4>
                            <div className="f-blog">
                                <a href="blog.html" className="blog-img" style={{backgroundImage: 'url(images/blog-1.jpg)'}}>
                                </a>
                                <div className="desc">
                                    <h2><a href="blog.html">Photoshoot Technique</a></h2>
                                    <p className="admin"><span>30 March 2018</span></p>
                                </div>
                            </div>
                            <div className="f-blog">
                                <a href="blog.html" className="blog-img" style={{backgroundImage: 'url(images/blog-2.jpg)'}}>
                                </a>
                                <div className="desc">
                                    <h2><a href="blog.html">Camera Lens Shoot</a></h2>
                                    <p className="admin"><span>30 March 2018</span></p>
                                </div>
                            </div>
                            <div className="f-blog">
                                <a href="blog.html" className="blog-img" style={{backgroundImage: 'url(images/blog-3.jpg)'}}>
                                </a>
                                <div className="desc">
                                    <h2><a href="blog.html">Imahe the biggest photography studio</a></h2>
                                    <p className="admin"><span>30 March 2018</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 colorlib-widget">
                            <h4>Contact Info</h4>
                            <ul className="colorlib-footer-links">
                                <li>291 South 21th Street, <br /> Suite 721 New York NY 10016</li>
                                <li><a href="tel://1234567920"><i className="icon-phone"></i> + 1235 2355 98</a></li>
                                <li><a href="mailto:info@yoursite.com"><i className="icon-envelope"></i> info@yoursite.com</a></li>
                                <li><a href="#"><i className="icon-location4"></i> yourwebsite.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>
    {new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a><br></br> 
                                    Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a>, <a href="http://pexels.com/" target="_blank">Pexels</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
