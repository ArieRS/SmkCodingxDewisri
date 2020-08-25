import React, { Component } from 'react'

export default class Header extends Component {
<<<<<<< HEAD
    render() {
        return (
            <header id="header" className="header-transparent">
              <div className="container">
                <div id="logo" className="pull-left">
                  <h1><a href="index.html" className="scrollto">Avilon</a></h1>
                </div>
                <nav id="nav-menu-container">
                  <ul className="nav-menu">
                    <li className="menu-active"><a href="index.html">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li className="menu-has-children"><a href="">Drop Down</a>
                      <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="menu-has-children"><a href="#">Drop Down 2</a>
                          <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        <li><a href="#">Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
            </header>
        )
    }
=======
  render() {
    return (
      <header id="header" class="header-transparent">
        <div class="container">

          <div id="logo" class="pull-left">
            <h1><a href="/" class="scrollto">Avilon</a></h1>
          </div>

          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li class="menu-active"><a href="/">Home</a></li>
              <li><a href="/main">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li class="menu-has-children"><a href="">Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="menu-has-children"><a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
>>>>>>> 104b3b5357ceec9aaf2ca185643e08f714a0b6e4
}
