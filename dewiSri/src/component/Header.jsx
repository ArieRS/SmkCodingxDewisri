import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: localStorage.getItem('auth')
    }
    this.method = {
      logout: this._logout.bind(this)
    }
  }

  componentWillMount(){
    // console.log(this.props.isLogin);
  }

  _logout(){
    localStorage.removeItem('auth');
    localStorage.removeItem('userData');
    alert(localStorage.getItem("auth"));
  }

  render() {
    return (
      <header id="header" className="header-transparent bg-transparent">
        <div className="container">
          <div id="logo" className="pull-left">
            <a href="/" className="scrollto"><img src="../assets/img/icon/logo_putih.png" alt=""/></a>
            <h1 style={{display: "inline-block", color: 'white'}}>DEWISRI</h1>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="/">Beranda</a></li>
              {
                this.state.isLogin ?
                <> 
                <li><a href="/main">Calendar</a></li>
                <li><a href="#">Catatan Pertanian</a></li>
                <li><a onClick={() => this.method.logout()} href="">Logout</a></li>
                </>
                :
                <li><a href="/login">Login</a></li>

              }
              {/* <li><a href="/login">Login</a></li> */}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
