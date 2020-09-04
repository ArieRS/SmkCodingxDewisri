import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <header id="header" className="header-transparent bg-transparent">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1><a href="/" className="scrollto">Dewisri</a></h1>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="/">Beranda</a></li>
              <li><a href="/main">Calendar</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Catatan Pertanian</a></li>
<<<<<<< HEAD
              <li><a href="/login">Login</a></li>
=======
              {
                this.props.isLogin === false ? 
                <li><a href="/login">Login</a></li>
                :
                <li><a href="/logout">Logout</a></li>

              }
              {/* <li><a href="/login">Login</a></li> */}
              <li>
                <div className="menu-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
>>>>>>> 87d5a924bdfd72e78021f04fc8615a160cb07f20
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
