import React, { Component } from 'react'

export default class Header2 extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">

          <div id="logo" className="pull-left">
            <h1><a href="/" className="scrollto">Dewisri</a></h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="/">Beranda</a></li>
              <li><a href="/main">Calendar</a></li>
              <li><a href="">Catatan Pertanian</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
