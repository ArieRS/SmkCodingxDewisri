import React, { Component } from 'react'
import { ADD_DAILY_JOURNAL } from '../../system/Strings';
import { postFunction, responseData } from '../../models/Model';


const Modal = ({ handleClose, show, children, state, method }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="col-md-12">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Tambah Jurnal Harian</h5>
                  <button type="button" class="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div class="form">
                        <form class="php-email-form">
                            {/* <div class="form-group">
                                <label for="tanggal">Tanggal</label>
                                <input type="date" name="tanggal" onChange={(text) => method.changeState('dateInput',text)} class="form-control" id="tanggal" placeholder="Tanggal" required={true}/>
                                <div class="validate"></div>
                            </div> */}
                            <div class="form-group">
                                <label for="keterangan">Kegiatan</label>
                                <textarea class="form-control" id="kegiatan" onChange={(text) => method.changeState('activity',text)} name="activity" rows="5" data-rule="required" placeholder="Kegiatan" required={true}></textarea>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group">
                                <label for="keterangan">Permasalahan</label>
                                <textarea class="form-control" id="Permasalahan" onChange={(text) => method.changeState('problem',text)} name="keterangan" rows="5" data-rule="required" placeholder="Permasalahan" required={true}></textarea>
                                <div class="validate"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                  <button type="button" onClick={() => method.addData()} class="btn btn-custom">Tambah Data</button>
                </div>
              </div>
            </div>
        
          <button onClick={handleClose}>close</button>
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

    render() {
        return (
            <div className="container mt-5">
                <section id="content" className="card-jurnal-harian">
                    <Modal show={this.state.showModal} state={this.state} method={this.method} handleClose={this.modalShowHide}></Modal>
                    <div className="section-header">
                        <h3 className="section-title">Jurnal Harian</h3>
                        <h2 className="text-center">{this.props.state.currentDate}</h2>
                        <span className="section-divider"></span>
                    </div>
    
                    <div className="tab-pane fade show active" id="nav-bibit" role="tabpanel" aria-labelledby="nav-bibit-tab">  
                        <a href="3" className="btn-get-started">Download Data</a>
                    </div>
                    <div className="my-3">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr className="table-header">
                                    <th>Tanggal Input</th>
                                    <th>Kegiatan</th>
                                    <th>Permasalahan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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
                                </tr>
                                {/* {(() => {
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
                                    
                                })()} */}
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade show active" id="nav-bibit" role="tabpanel" aria-labelledby="nav-bibit-tab">
                        <button className="btn-get-started mt-3" onClick={this.modalShowHide}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                        </button>
                    </div>
                </section>
            </div>
        )
    }
}
