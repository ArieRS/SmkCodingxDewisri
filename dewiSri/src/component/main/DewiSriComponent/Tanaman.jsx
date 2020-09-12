import React, { Component } from 'react'
import { responseData, postFunction } from '../../../models/Model';
import { ADD_PLANT } from '../../../system/Strings';


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
                                <label for="tanggal">Tanggal Mulai Tanam</label>
                                <input type="date" name="tanggal" onChange={(text) => method.changeState('startDate',text)} class="form-control" id="tanggal" placeholder="Tanggal" required={true}/>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Komoditas</label>
                                <select class="form-control" id="exampleFormControlSelect1" onChange={(text) => method.changeState('comodity',text)} required={true}>
                                    <option disabled selected>Pilih Komoditas</option>
                                    <option value="cabai">Cabai</option>
                                    <option value="wortel">Wortel</option>
                                    <option value="kentang">Kentang</option>
                                    <option value="kubis">Kubis</option>
                                    <option value="sawi">Sawi</option>
                                    <option value="tomat">Tomat</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="harga">Varietas</label>
                                <input type="text" class="form-control"  onChange={(text) => method.changeState('variety',text)}  placeholder="Varietas" required={true}/>
                                <div class="validate"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                  <button type="button" onClick={() => method.addData()} class="btn btn-custom">Tambah Tanaman</button>
                </div>
              </div>
            </div>
        
        </section>
      </div>
    );
  };

export default class Tanaman extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            startDate: '',
            comodity: '',
            variety: '',
            index: 0
        }
        this.method = {
            changeState: this._changeState.bind(this),
            testAlert: this._testAlert.bind(this),
            addData: this._addData.bind(this)
        }
        this.modalShowHide = this.modalShowHide.bind(this)
    }

    componentWillMount(){
        console.log(this.props.state.currentDate);
    }

    _changeState(state,value){
        this.setState({
            [state]: value.target.value
        })
    }

    modalShowHide(){
        this.setState({
            showModal: !this.state.showModal
        })
    }

    _testAlert(){
        alert(this.state.comodity)
    }

    async _addData(){
        
        var data = new FormData()
        
        data.append('startDate', this.state.startDate)
        data.append('comodity', this.state.comodity)
        data.append('variety', this.state.variety)
        data.append('owner_userId',this.props.state.userData._id)

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

    coba() {
        const el = document.querySelector('.panel-tanaman #rincian-table');
        console.log(el)
        el.style.top = '-100px';
    }

    render() {
        return (
            <div className="container">
                <Modal show={this.state.showModal} state={this.state} method={this.method} handleClose={this.modalShowHide}>

                </Modal>
                {
                    this.props.state.journalDataByDate[0].plantList != undefined 
                    ?
                    <div className="panel-tanaman mt-3">
                        <div id="rincian-table">
                        {
                                this.props.state.journalDataByDate[0].plantList.map((item, index) => {
                                    return(
                                        <>
                                            <div className="table-card">
                                                <table>
                                                    <tr>
                                                        <th>Tanaman {index + 1}</th>
                                                        <td>:</td>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[index].comodity}</td>
                                                        {/* <td>Tanaman</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th>Komoditas</th>
                                                        <td>:</td>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[index].variety}</td>
                                                        {/* <td>Komoditas</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th>Hari Ke</th>
                                                        <td>:</td>
                                                        <td>110</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div id="button" className="btn-right" >
                            <svg viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={this.coba}>
                                <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                    :
                    <></>
                }
                
                <section id="content" className="text-center">
                    <button className="btn-get-started mt-3" onClick={this.modalShowHide}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                        <span class="d-none d-md-inline text-light ml-1">Tambah Tanaman</span>
                    </button>    
                </section>
            </div>
        )
    }
}
