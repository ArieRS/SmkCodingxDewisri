import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <div id="colorlib-logo"><a href="index.html">Unapp</a></div>
                            </div>
                            <div className="col-md-10 text-right menu-1">
                                <ul>
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li className="has-dropdown">
                                        <a href="work.html">Works</a>
                                        <ul className="dropdown">
                                            <li><a href="work-grid.html">Works grid with text</a></li>
                                            <li><a href="work-grid-without-text.html">Works grid w/o text</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
