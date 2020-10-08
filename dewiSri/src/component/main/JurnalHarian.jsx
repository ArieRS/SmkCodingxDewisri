import React, { Component } from 'react'
import { ADD_DAILY_JOURNAL } from '../../system/Strings';
import { postFunction, responseData } from '../../models/Model';


const Modal = ({ handleClose, show, children, state, method }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="col-md-12" style={{height: '100vh', marginTop: 0, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Tambah Jurnal Harian</h5>
                  <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form className="php-email-form">
                        <div className="form-group">
                            <label for="kegiatan">Kegiatan</label>
                            <textarea className="form-control" id="kegiatan" onChange={(text) => method.changeState('activity',text)} name="activity" rows="5" data-rule="required" placeholder="Kegiatan" required={true}></textarea>
                            <div className="invalid-feedback">
                                Kegiatan tidak boleh kosong
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="permasalahan">Permasalahan</label>
                            <textarea className="form-control" id="permasalahan" onChange={(text) => method.changeState('problem',text)} name="keterangan" rows="5" data-rule="required" placeholder="Permasalahan" required={true}></textarea>
                            <div className="invalid-feedback">
                                Permasalahan tidak boleh kosong
                            </div>
                        </div>
                    </form>
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


export default class JurnalHarian extends Component {
    constructor(props){
        super(props);
        this.state = {
            dateInput: '',
            showModal: false,
            activity: '',
            problem: ''
        }
        this.method = {
            modalShowHide: this.modalShowHide.bind(this),
            changeState: this._changeState.bind(this),
            addData: this._addData.bind(this),
        }
        this.modalShowHide = this.modalShowHide.bind(this)
    }

    _clear() {
        document.querySelector('#kegiatan').classList.remove('is-invalid');
        document.querySelector('#permasalahan').classList.remove('is-invalid');
    }
    
    _validate() {
        if (this.state.activity === '') {
            document.querySelector('#kegiatan').classList.add('is-invalid');
            return false;
        } 
        
        if (this.state.problem === '') {
            document.querySelector('#permasalahan').classList.add('is-invalid');
            return false;
        }

        return true;
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
            <div id="jurnalHarian" className="container mt-5">
                <section id="content" className="card-jurnal-harian">
                    <Modal show={this.state.showModal} state={this.state} method={this.method} handleClose={this.modalShowHide}></Modal>
                    <div className="section-header">
                        <h3 className="section-title">Jurnal Harian</h3>
                        <h2 className="text-center">{this.props.state.currentDate}</h2>
                        <span className="section-divider"></span>
                    </div>
    
                    <div className="my-3">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr className="table-header">
                                    <th>Tanggal Input</th>
                                    <th>Kegiatan</th>
                                    <th>Permasalahan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>10 - 10 - 2010</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, maiores.</td>
                                </tr>
                                <tr>
                                    <td>10 - 10 - 2010</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, maiores.</td>
                                </tr>
                                <tr>
                                    <td>10 - 10 - 2010</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, maiores.</td>
                                </tr> */}
                                {(() => {
                                    if (this.props.state.journalDataByDate[0].dailyJournal != null || this.props.state.journalDataByDate[0].dailyJournal != undefined) {
                                        let data = this.props.state.journalDataByDate[0].dailyJournal  ;
                                        return(
                                            <tr>
                                                <td>{data.inputDate}</td>
                                                <td>{data.activity}</td>
                                                <td>{data.problem}</td>
                                            </tr>
                                        )
                                    }
                                    
                                })()}
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade show active" id="nav-bibit" role="tabpanel" aria-labelledby="nav-bibit-tab">
                        <button className="btn-get-started mt-3" onClick={this.modalShowHide}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <span className="d-none d-md-inline text-light ml-1">Tambah Data</span>
                        </button>
                    </div>
                </section>
            </div>
        )
    }
}
