import React, { Component } from 'react'


const Modal = ({ handleClose, show, children, state, method }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="col-md-12">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Tambah data</h5>
                  <button type="button" class="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="#tanggalPanen">Tanggal Panen</label>
                            <input type="date" class="form-control" id="tanggalPanen" aria-describedby="tanggalPenen"/>
                        </div>
                        <div class="form-group">
                            <label for="#hargaPasar">Harga Pasar</label>
                            <input type="number" class="form-control" placeholder="Harga Pasar (Kg)" id="hargaPasar" aria-describedby="hargaPasar" />
                        </div>
                        <div class="form-group">
                            <label for="#hargaPasar">Harga Pasar</label>
                            <input type="number" class="form-control" placeholder="Harga Pasar (Kg)" id="hargaPasar" aria-describedby="hargaPasar" />
                        </div>
                        <div class="form-group">
                            <label for="#hasilPanen">Hasil Panen (Kwintal)</label>
                            <input type="number" class="form-control" placeholder="Hasil Panen (Kwintal)" id="hasilPanen" aria-describedby="hasilPanen" />
                        </div>
                    </form>                
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                  <button type="button" onClick={() => method.addData({type: state.type})} class="btn btn-custom">Tambah Data</button>
                </div>
              </div>
            </div>
        </section>
      </div>
    );
};

export default class CatatanPertanian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.modalShowHide = this.modalShowHide.bind(this)
    }

    modalShowHide() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <section id="content" className="my-5">
                <Modal show={this.state.showModal} state={this.state} handleClose={this.modalShowHide} />
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
                        <table class="table table-bordered table-striped">
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
                        <button className="btn-get-started mt-2" data-toggle="modal" data-target="#staticBackdropPanen" onClick={this.modalShowHide}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                        </button>
                        <a href="#" className="btn-get-started mt-3">Download Data</a>
                    </div>
                </div>
            </section>
        )
    }
}