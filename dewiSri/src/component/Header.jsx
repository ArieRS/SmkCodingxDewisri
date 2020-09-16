import React, { Component } from 'react'
import moment from "moment";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: "",
      dateFormat: "",
      isLogin: localStorage.getItem('auth'),
      position: 100
    }
    this.slideBefore = this.slideBefore.bind(this);
    this.slideNext = this.slideNext.bind(this);
    this.monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    this.method = {
      logout: this._logout.bind(this)
    }
  }

  slideNext() {
    const el = document.querySelector('.panel-tanaman #rincian-table');
    const ukuran = document.querySelectorAll('.panel-tanaman #rincian-table .table-card');

    this.setState({ position: this.state.position + 100 })
    el.style.top = `-${this.state.position}px`;
    // if (this.state.position > (ukuran.length * 100)) {
    //     console.log('kelebihan')
    // } else {
    // }
    this.setState({ position: this.state.position + 100 })
    el.style.top = `-${this.state.position}px`;
    console.log(`position: ${this.state.position}`)
  }

  slideBefore() {
    const el = document.querySelector('.panel-tanaman #rincian-table');
    const ukuran = document.querySelectorAll('.panel-tanaman #rincian-table .table-card');
    // if (this.state.position < (ukuran.length * 100)) {
    //     console.log('kelebihan')
    // } else {
    // }
    this.setState({ position: this.state.position - 100 })
    el.style.top = `-${this.state.position}px`;
    console.log(`position: ${this.state.position}`)
  }

  componentWillMount() {
    this.getCurrentDate();
    // console.log(this.props.state.journalDataByDate);
  }

  getCurrentDate() {
    var newDateFormat = moment().format('L');
    var currentDate = moment().format('LL');
    this.setState({
      currentDate: currentDate,
      dateFormat: newDateFormat
    }, console.log("date: " + newDateFormat))
  }

  dateDecrement(d) {
    var newDateFormat = moment(d, "MM-DD-YYYY").subtract('days', 1).format('L');
    var newDate = moment(d, "MM-DD-YYYY").subtract('days', 1);
    console.log("current date state : " + d);
    this.setState({
      currentDate: newDate.format('LL'),
      dateFormat: newDateFormat
    })
  }

  dateIncrement(d) {
    var newDateFormat = moment(d, "MM-DD-YYYY").add('days', 1).format('L');
    var newDate = moment(d, "MM-DD-YYYY").add('days', 1);
    console.log("current date state : " + d);
    this.setState({
      currentDate: newDate.format('LL'),
      dateFormat: newDateFormat
    })
  }

  _logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('userData');
    alert(localStorage.getItem("auth"));
  }

  render() {
    return (
      <header id="header" className="header-transparent">
        <div className="container">
          <div id="logo" className="">
            <a href="/" className="scrollto"><img src="../assets/img/icon/logo_putih.png" alt="" /></a>
            <h1 style={{ display: "inline-block", color: 'white' }}>DEWISRI</h1>
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
        </div>
        {
          this.state.isLogin ?
            <>
              <nav className="navigation-panel mt-0">
                <div className="container">
                  <a className="btn btn-light rounded-pill" >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-award-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                    </svg> <span className="d-none d-md-inline text-success">Get Premium</span>
                  </a>
                  <div className="tanggal">
                    <a onClick={() => this.props.method.dateDecrement(this.props.state.dateFormat)}>
                      {/* <a href="#"> */}
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                      </svg>
                    </a>
                    <span><b>{this.props.state.currentDate}</b></span>
                    {/* <span><b>11 september 2020</b></span> */}
                    <a onClick={() => this.props.method.dateIncrement(this.props.state.dateFormat)}>
                      {/* <a href="#"> */}
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </a>
                  </div>
                  <i className="fa fa-user-circle fa-2x"></i>
                </div>
              </nav>
              <div id="panel-tanaman" className="panel-tanaman">
                <div className="container">
                  <div id="button" className="btn-left">
                    <img src="../../assets/img/icon/next.svg" alt="" onClick={this.slideBefore} />
                  </div>
                  <div id="rincian-table" className="table-wrapper">
                    {/* {
                      this.props.method.journalDataByDate.plantList.map(index => {
                        console.log(index);
                      })
                    } */}
                    <table className="table-card">
                      <tr>
                        <th>Tanaman2</th>
                        <td>:</td>
                        {/* <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> */}
                        <td>Kentang Besar</td>
                      </tr>
                      <tr>
                        <th>Komoditas</th>
                        <td>:</td>
                        {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                        <td>Granola Jerman</td>
                      </tr>
                      <tr>
                        <th>Hari Ke</th>
                        <td>:</td>
                        <td>110</td>
                      </tr>
                    </table>
                    <table className="table-card">
                      <tr>
                        <th>Tanaman3</th>
                        <td>:</td>
                        {/* <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> */}
                        <td>Kentang Besar</td>
                      </tr>
                      <tr>
                        <th>Komoditas</th>
                        <td>:</td>
                        {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                        <td>Granola Jerman</td>
                      </tr>
                      <tr>
                        <th>Hari Ke</th>
                        <td>:</td>
                        <td>110</td>
                      </tr>
                    </table>
                  </div>
                  <div id="button" className="btn-right">
                    <img src="../../assets/img/icon/next.svg" alt="" onClick={this.slideNext} />
                  </div>
                </div>
              </div>
            </>
            :
            <></>
        }

      </header>
    )
  }
}
