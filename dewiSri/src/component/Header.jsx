import React, { Component } from 'react'
import moment from "moment";
import { postFunction, responseData } from '../models/Model';
import { ADD_PLANT } from '../system/Strings';
// import Modal from './main/modal/Modal';
import ModalProfile from './main/modal/ModalProfile';
import Profile from './main/Profile';

const ModalTanaman = ({ handleClose, show, children, state, method }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="col-md-12" style={{height: '100vh', marginTop: 0, backgroundColor:'rgba(0,0,0,0.5)'}}>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Tambah Tanaman</h5>
              <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form">
                <form className="php-email-form">
                  <div className="form-group">
                    <label for="tanggal">Tanggal Mulai Tanam</label>
                    <input type="date" name="tanggal" onChange={(text) => method.changeState('startDate', text)} className="form-control" id="tanggal" placeholder="Tanggal" required={true} />
                    <div className="invalid-feedback">
                      Tanggal tidak boleh kosong
                      </div>
                  </div>
                  <div className="form-group">
                    <label for="komoditas">Komoditas</label>
                    <select class="form-control" id="komoditas" onChange={(selected) => method.changeState('comodity', selected)}>
                      <option disabled selected>Pilih Komoditas</option>
                      <option value="cabai">Cabai</option>
                      <option value="kentang">Kentang</option>
                      <option value="kubis">Kubis</option>
                      <option value="wortel">Wortel</option>
                      <option value="sawi">Sawi</option>
                      <option value="tomat">Tomat</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="varietas">Varietas</label>
                    <input className="form-control" onChange={(text) => method.changeState('variety', text)} name="varietas" id="varietas" placeholder="Varietas" required={true} />
                    <div className="invalid-feedback">
                      Varietas tidak boleh kosong
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
              <button type="button" onClick={() => method.addData()} className="btn btn-custom">Tambah Data</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: "",
      dateFormat: "",
      isLogin: localStorage.getItem('auth'),
      position: 100,
      showModalTanaman: false,
      showModalProfile: false,
      startDate: '',
      variety: '',
      comodity: '',
      error: false
    }
    this.slideBefore = this.slideBefore.bind(this);
    this.slideNext = this.slideNext.bind(this);
    this.monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    this.method = {
      logout: this._logout.bind(this),
      addData: this._addData.bind(this),
      changeState: this._changeState.bind(this),
      testAlert: this._testAlert.bind(this),
      _clear: this._clear.bind(this),
      _validate: this._validate.bind(this)
    }
    this.showModalTanaman = this.showModalTanaman.bind(this);
    this.showModalProfile = this.showModalProfile.bind(this);
  }

  slideNext() {
    const el = document.querySelector('.panel-tanaman #rincian-table');
    const ukuran = document.querySelectorAll('.panel-tanaman #rincian-table .table-card');
    this.setState({ position: this.state.position + 100 })
    el.style.top = `-${this.state.position}px`;
  }

  slideBefore() {
    const el = document.querySelector('.panel-tanaman #rincian-table');
    const ukuran = document.querySelectorAll('.panel-tanaman #rincian-table .table-card');
    this.setState({ position: this.state.position - 100 })
    el.style.top = `-${this.state.position}px`;
  }

  componentWillMount() {
    this.getCurrentDate();
    console.log('josawisadaks: ' + this.props.state.journalDataByDate.length);
  }

  getCurrentDate() {
    var newDateFormat = moment().format('L');
    var currentDate = moment().format('LL');
    this.setState({
      currentDate: currentDate,
      dateFormat: newDateFormat
    }, console.log("date: " + newDateFormat))
  }

  showModalTanaman() {
    this.setState({
      showModalTanaman: !this.state.showModalTanaman
    });
  }
  
  showModalProfile() {
    this.setState({
      showModalProfile: !this.state.showModalProfile
    });
  }

  _logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('userData');
    // alert(localStorage.getItem("auth"));
  }

  _changeState(state, value) {
    this.setState({
      [state]: value.target.value
    })
  }

  _testAlert() {
    alert(this.props.state.userData._id)
  }

  _validate() {
    if (this.state.startDate === '') {
      this.setState({ error: true })
      document.querySelector('#tanggal').classList.add('is-invalid');
      return false;
    }

    if (this.state.comodity === '') {
      this.setState({ error: true })
      document.querySelector('#komoditas').classList.add('is-invalid');
      return false;
    }

    if (this.state.variety === '') {
      this.setState({ error: true })
      document.querySelector('#varietas').classList.add('is-invalid');
      return false;
    }
    return true;
  }

  _clear() {
    document.querySelector('#tanggal').classList.remove('is-invalid');
    document.querySelector('#komoditas').classList.remove('is-invalid');
    document.querySelector('#varietas').classList.remove('is-invalid');
  }

  async _addData() {
    if (this._validate()) {
      this._clear()
      var newStartDate = moment(this.state.startDate).format("DD-M-YYYY")
      var data = new FormData()
      data.append("comodity", this.state.comodity)
      data.append("variety", this.state.variety)
      data.append("startDate", newStartDate)
      data.append("owner_userId", this.props.state.userData._id)

      await postFunction(data, ADD_PLANT).then(() => {
        if (responseData.status == 200) {
          console.log("success");
          alert("Sukses menambah tanaman")
          this.setState({
            showModal: !this.state.showModal,
          })
          window.location.reload(false)
        } else {
          alert(responseData.message)
        }
      })
    }
  }

  render() {
    return (
      <header id="header" className="header-transparent">
        <ModalProfile show={this.state.showModalProfile} method={this.method} state={this.state} handleClose={this.showModalProfile.bind(this, 'hide')} />
        <ModalTanaman show={this.state.showModalTanaman} method={this.method} state={this.state} handleClose={this.showModalTanaman.bind(this, 'hide')} />
        <div className="container">
          <div id="logo" className="">
            <a href="/" className="scrollto"><img src="../assets/img/icon/logo_putih.png" alt="" /></a>
            <h1 style={{ display: "inline-block", color: 'white' }}>DEWISRI</h1>
            <nav id="nav-menu-container" className="navigasi">
              <ul className="nav-menu">
                <li className="menu-active"><a href="/">Beranda</a></li>
                {
                  this.state.isLogin ?
                    <>
                      <li><a href="#kebutuhanTanam">Kebutuhan Tanam</a></li>
                      <li><a href="#jurnalHarian">Jurnal Harian</a></li>
                      <li><a href="#hasilPanen">Hasil Panen</a></li>
                      <li><a href="#premium">Premium</a></li>
                      <li><a onClick={() => this.method.logout()} href="">Logout</a></li>
                      <Profile state={this.props.state}/>
                    </>
                    :
                    <li><a href="/login">Login</a></li>
                }
              </ul>
            </nav>
          </div>
        </div>
        {
          this.state.isLogin ?
            <>
              <nav className="navigation-panel mt-0">
                <div className="container">
                  <a className="btn btn-light rounded-pill" href="#premium">
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
                    {
                      this.props.state.currentDate === this.state.currentDate ?
                        <a href="#" aria-disabled={true}>
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                          </svg>
                        </a>
                        :
                        <a onClick={() => this.props.method.dateIncrement(this.props.state.dateFormat)}>
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                          </svg>
                        </a>
                    }
                  </div>
                  <i className="fa fa-user-circle fa-2x" onClick={this.showModalProfile} style={{cursor: 'pointer'}}></i>
                </div>
              </nav>
            </>
            :
            <></>
        }
        {
          this.state.isLogin ?
            <section id="content">
              <div className="card-kebutuhan-tanam">
                <a href="#" className="btn-get-started" onClick={() => this.showModalTanaman()}>Tambah Tanaman</a>
              </div>
            </section>
            :
            <></>
        }
      </header>
    )
  }
}
