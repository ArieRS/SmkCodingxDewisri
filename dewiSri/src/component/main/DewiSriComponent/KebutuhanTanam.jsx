import React, {Component} from 'react'
import { API_ADDRESS, ADD_BIBIT, ADD_PESTISIDA, ADD_PUPUK } from '../../../system/Strings';
import { postFunction, responseData } from '../../../models/Model';
import EnhancedTable from './Table';

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
                <div class="form">
                <form class="php-email-form">
                    <div class="form-group">
                        <label for="tanggal">Tanggal</label>
                        <input type="date" name="tanggal" onChange={(text) => method.changeState('dateInput',text)} class="form-control" id="tanggal" placeholder="Tanggal" required={true}/>
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <label for="jumlah">Jumlah</label>
                        <input type="number" onChange={(text) => method.changeState('quantity',text)} class="form-control" name="jumlah" id="jumlah" placeholder="Jumlah" required={true}/>
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <label for="harga">Harga</label>
                        <input type="Number" class="form-control"  onChange={(text) => method.changeState('price',text)} name="harga" id="harga" placeholder="Harga" required={true}/>
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <label for="keterangan">Keterangan</label>
                        <textarea class="form-control" id="keterangan" onChange={(text) => method.changeState('keterangan',text)} name="keterangan" rows="5" data-rule="required" placeholder="Keterangan" required={true}></textarea>
                        <div class="validate"></div>
                    </div>
                </form>
            </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                  <button type="button" onClick={() => method.addData({type: state.type})} class="btn btn-custom">Tambah Data</button>
                </div>
              </div>
            </div>
        
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default class KebutuhanTaman extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            dateInput: '',
            quantity: '',
            price: '',
            keterangan: '',
            type: 'bibit'
        }
        this.method = {
            changeState: this._changeState.bind(this),
            testAlert: this._testAlert.bind(this),
            addData: this._addData.bind(this)
        }
        this.modalShowHide = this.modalShowHide.bind(this)
    }
    
    
    _changeState(state,value){
        this.setState({
            [state]: value.target.value
        })
    }

    _testAlert(){
        alert(this.state.type)
    }

    async _addData({e, type}){
        // alert(type);
        // e.preventDefault()
        
        var data = new FormData()
        var insertType = type === 'bibit' ? ADD_BIBIT : type === 'pupuk' ? ADD_PUPUK : ADD_PESTISIDA;
        
        data.append('date_input', this.state.dateInput)
        data.append('quantity', this.state.quantity)
        data.append('price', this.state.price)
        data.append('keterangan', this.state.keterangan)
        data.append('owner_plantingNeedsId','5f5275ffb83b1238bceb60f2')

        await postFunction(data, insertType).then(() => {
            if (responseData.status == 200) {
                console.log("success");
                alert("Sukses menambah "+type)
                this.setState({
                    showModal: !this.state.showModal,
                })
            } else {
                alert(responseData.message)
            }
        })

    }

    modalShowHide(){
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <section id="pricing" className="container">
                <Modal show={this.state.showModal} state={this.state} method={this.method} handleClose={this.modalShowHide}>

                </Modal>
                <div className="card-kebutuhan-tanam my-3">
                    <div className="section-header">
                        <h3 className="section-title">Kebutuhan Tanam</h3>
                        <span className="section-divider"></span>
                    </div>
                    <a href="#" className="btn-get-started">Download Data</a>
                    <div className="container mt-3">
                        <nav className="nav-fill mb-3">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-link active" id="nav-bibit-tab" onClick={() => this.setState({type: 'bibit'})} data-toggle="tab" href="#nav-bibit" role="tab" aria-controls="nav-bibit" aria-selected="true">Bibit</a>
                                <a className="nav-link" id="nav-pupuk-tab" onClick={() => this.setState({type: 'pupuk'})}  data-toggle="tab" href="#nav-pupuk" role="tab" aria-controls="nav-pupuk" aria-selected="false">Pupuk</a>
                                <a className="nav-link" id="nav-bbm-tab" data-toggle="tab" onClick={() => this.setState({type: 'bbm'})}  href="#nav-bbm" role="tab" aria-controls="nav-bbm" aria-selected="false">BBM</a>
                                <a className="nav-link" id="nav-pestisida-tab" data-toggle="tab" onClick={() => this.setState({type: 'pestisida'})} href="#nav-pestisida" role="tab" aria-controls="nav-pestisida" aria-selected="false">Pestisida</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">   
                            <div className="tab-pane fade show active" id="nav-bibit" role="tabpanel" aria-labelledby="nav-bibit-tab">
                              <EnhancedTable tab="Bibit"/>
                                <button className="btn-get-started mt-3" onClick={this.modalShowHide}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade" id="nav-pupuk" role="tabpanel" aria-labelledby="nav-pupuk-tab">
                              <EnhancedTable tab="Pupuk"/>
                            <button className="btn-get-started mt-3"  onClick={this.modalShowHide}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade " id="nav-bbm" role="tabpanel" aria-labelledby="nav-mmb-tab">
                              <EnhancedTable tab="Bbm" />
                            <button className="btn-get-started mt-3"  onClick={this.modalShowHide}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade" id="nav-pestisida" role="tabpanel" aria-labelledby="nav-pestisida-tab">
                              <EnhancedTable tab="Pestisida" />
                              <button className="btn-get-started mt-3" onClick={this.modalShowHide}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg>
                                <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}