import { Modal } from '@material-ui/core';
import React, { Component } from 'react'

const ModalSaran = ({ handleClose, show, children, state, method }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="col-md-12">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="staticBackdropLabel">Saran Tanggapan</h2>
                <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                    <div class="form-group">
                        <label for="saran">Saran</label>
                        <textarea class="form-control" id="saran" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="tagggapan">Tanggapan</label>
                        <textarea class="form-control" id="tagggapan" rows="3"></textarea>
                    </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                <button type="button" className="btn btn-custom">Kirim</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalSaran: false
        }
        this.showModalSaran = this.showModalSaran.bind(this);
    }

    showModalSaran() {
        this.setState({
            showModalSaran: !this.state.showModalSaran
        })    
    }

    render() {
        return (
            <div className="profile-sidebar">
                <ModalSaran show={this.state.showModalSaran} state={this.state} handleClose={this.showModalSaran.bind(this)} />
                <div className="profile" style={{borderBottom: '1px solid white'}}>
                    <div className="user-photo">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                        </svg>
                    </div>
                    <div className="user-detail">
                        <h2>Ulum</h2>
                        <h3>Free Member</h3>
                        <p>Pria 50thn</p>
                        <p>2 Komoditas
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill ml-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" style={{cursor: 'pointer'}}/>
                            </svg>
                        </p>
                    </div>
                    <div className="clear"></div>           
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li><a href="#premium">Ganti Ke Premium</a></li>
                        <li><a href="#">150 Koin <button className="btn btn-light ml-1">Tukar koin</button></a></li>
                        <li><a href="#">Tambah Komoditas Baru</a></li>
                        <li><a href="#" onClick={this.showModalSaran}>Saran dan tanggapan</a></li>
                    </ul>
                </nav>
                <div className="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}
