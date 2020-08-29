import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header id="header" class="header-transparent">
        <div class="container">

          <div id="logo" class="pull-left">
            <h1><a href="/" class="scrollto">Dewisri</a></h1>
          </div>

          <nav id="nav-menu-container">
            <ul class="nav-menu">

              <li class="menu-active"><a href="/">Home</a></li>
              <li><a href="/main">Calendar</a></li>
              <li class="menu-active"><a href="/">Beranda</a></li>
              <li><a href="/main">Tentang Kita</a></li>

              <li><a href="#features">Features</a></li>
              <li><a href="#kebutuhan-tanam">Kebutuhan Tanam</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
