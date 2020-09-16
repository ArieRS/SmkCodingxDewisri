import React, { Component } from 'react'
import { postFunction, responseData } from '../../models/Model';
import { ADD_DAILY_JOURNAL } from '../../system/Strings';


const Modal = ({ handleClose, show, children, state, method }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="col-md-12">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Tambah Hasil Panen</h5>
                  <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="#tanggaPanen">Tanggal Panen</label>
                            <input type="date" name="tanggal" onChange={(text) => method.changeState('tanggalPanen',text)} className="form-control" id="tanggalPanen" placeholder="Tanggal" required={true}/>
                            <div className="invalid-feedback">
                                Tanggal tidak boleh kosong
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="#hargaPasar">Harga Pasar</label>
                            <input type="number" name="hargaPasar" onChange={(text) => method.changeState('hargaPasar',text)} className="form-control" id="hargaPasar" placeholder="Harga Pasar" required={true}/>
                            <div className="invalid-feedback">
                                Harga Pasar tidak boleh kosong
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="#hasilPanen">Hasil Panen (Kwintal)</label>
                            <input type="number" name="hasilPanen" onChange={(text) => method.changeState('hasilPanen',text)} className="form-control" id="hasilPanen" placeholder="Hasil Panen" required={true}/>
                            <div className="invalid-feedback">
                                Hasil Panen tidak boleh kosong
                            </div>
                        </div>
                    </form>                
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                  <button type="submit" onClick={() => method.addData({type: state.type})} className="btn btn-custom">Tambah Data</button>
                </div>
              </div>
            </div>
        </section>
      </div>
    );
  };



export default class CatatanPertanian extends Component {
    constructor(props){
        super(props);
        this.state = {
            tanggalPanen: '',
            showModal: false,
            hargaPasar: '',
            hasilPanen: ''
        }
        this.method = {
            modalShowHide: this.modalShowHide.bind(this),
            changeState: this._changeState.bind(this),
            addData: this._addData.bind(this),
        }
        this.modalShowHide = this.modalShowHide.bind(this)
    }

    _validate() {
        if (this.state.tanggalPanen === '') {
            document.querySelector('#tanggalPanen').classList.add('is-invalid');
            return false;
        } 
        
        if (this.state.hargaPasar === '') {
            document.querySelector('#hargaPasar').classList.add('is-invalid');
            return false;
        }
        
        if (this.state.hasilPanen === '') {
            document.querySelector('#hasilPanen').classList.add('is-invalid');
            return false;
        }
        return true;
    }

    _clear() {
        document.querySelector('#tanggalPanen').classList.remove('is-invalid');
        document.querySelector('#hargaPasar').classList.remove('is-invalid');
        document.querySelector('#hasilPanen').classList.remove('is-invalid');
    }

    modalShowHide(){
        this.setState({
            showModal: !this.state.showModal
        })
    }
    _changeState(state,value){
        this.setState({
            [state]: value.target.value
        })
    }

    async _addData(){
        if (this._validate()) {
            this._clear();
            var data = new FormData()
            data.append('activity', this.state.activity)
            data.append('problem', this.state.problem)
            data.append('owner_journalId',this.props.state.journalDataByDate[0]._id)
            data.append('owner_userId',this.props.state.userData._id)
            await postFunction(data, ADD_DAILY_JOURNAL).then(() => {
                if (responseData.status == 200) {
                    console.log("success");
                    alert("Sukses menambah jurnal harian")
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
            <div id="hasilPanen">
                <section id="content" className="my-5">
                    <Modal show={this.state.showModal} state={this.state} method={this.method} handleClose={this.modalShowHide}></Modal>    
                    <div className="container">
                        <div className="card-catatan-pertanian">
                            <div className="row">
                                <div className="col">
                                    <div className="section-header">
                                        <h3 className="section-title">Hasil Panen</h3>
                                        <span className="section-divider"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive-xl">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Tanggal Input</th>
                                            <th>Jumlah</th>
                                            <th>Harga Pasar (Kg)</th>
                                            <th>Keterangan</th>
                                            <th>Keuntungan Bersih</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10 - 8 - 2000</td>
                                            <td>100</td>
                                            <td>1.000.000</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, architecto?</td>
                                            <td><img className="icon-premium" src="../assets/img/icon/premium.svg" alt=""/></td>
                                        </tr>
                                        <tr>
                                            <td>10 - 8 - 2000</td>
                                            <td>100</td>
                                            <td>1.000.000</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, architecto?</td>
                                            <td><img className="icon-premium" src="../assets/img/icon/premium.svg" alt=""/></td>
                                        </tr>
                                        <tr>
                                            <td>10 - 8 - 2000</td>
                                            <td>100</td>
                                            <td>1.000.000</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, architecto?</td>
                                            <td><img className="icon-premium" src="../assets/img/icon/premium.svg" alt=""/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="btn-get-started mt-2" onClick={this.modalShowHide}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg>
                                <span className="d-none d-md-inline text-light ml-1">Tambah Data</span>
                            </button>
                            <a href="#" className="btn-get-started mt-3">Download Data</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}