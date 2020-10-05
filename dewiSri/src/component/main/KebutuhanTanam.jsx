import React, {Component} from 'react'
import { API_ADDRESS, ADD_BIBIT, ADD_PESTISIDA, ADD_PUPUK, ADD_BBM } from '../../system/Strings';
import { postFunction, responseData } from '../../models/Model';

const Modal = ({ handleClose, show, children, state, method }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="col-md-12" style={{height: '100vh', marginTop: 0, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Tambah data</h5>
                  <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <div className="form">
                        <form className="php-email-form">
                            <div className="form-group">
                                <label for="tanggal">Tanggal</label>
                                <input type="date" name="tanggal" onChange={(text) => method.changeState('dateInput',text)} className="form-control" id="tanggal" placeholder="Tanggal" required={true}/>
                                <div className="invalid-feedback">
                                    Tanggal tidak boleh kosong
                                </div>
                            </div>
                            {
                                state.type == 'bbm' 
                                ? 
                                <div className="form-group">
                                    <label for="jumlah">Durasi Diesel (Menit)</label>
                                    <input type="number" onChange={(text) => method.changeState('quantity',text)} className="form-control" name="jumlah" id="jumlah" placeholder="Durasi" required={true}/>
                                    <div className="invalid-feedback">
                                        Durasi tidak boleh kosong
                                    </div>
                                </div>
                                :
                                <div className="form-group">
                                    <label for="jumlah">Jumlah (kg)</label>
                                    <input type="number" onChange={(text) => method.changeState('quantity',text)} className="form-control" name="jumlah" id="jumlah" placeholder="jumlah (Kg)" required={true}/>
                                    <div className="invalid-feedback">
                                        Jumlah tidak boleh kosong
                                    </div>
                                </div>
                            }
                            <div className="form-group">
                                <label for="harga">Harga {state.type == 'bbm'  ? 'Bahan Bakar' : ''}</label>
                                <input type="Number" className="form-control"  onChange={(text) => method.changeState('price',text)} name="harga" id="harga" placeholder="Harga" required={true}/>
                                <div className="invalid-feedback">
                                    Harga tidak boleh kosong
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="keterangan">Keterangan</label>
                                <textarea className="form-control" id="keterangan" onChange={(text) => method.changeState('keterangan',text)} name="keterangan" rows="5" data-rule="required" placeholder="Keterangan" required={true}></textarea>
                                <div className="invalid-feedback">
                                    Keterangan tidak boleh kosong
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                  <button type="button" onClick={() => method.addData({type: state.type})} className="btn btn-custom">Tambah Data</button>
                </div>
              </div>
            </div>
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
            type: 'bibit',
            error: false
        }
        this.method = {
            changeState: this._changeState.bind(this),
            testAlert: this._testAlert.bind(this),
            addData: this._addData.bind(this),
            validate: this._validate.bind(this),
            clear: this._clear.bind(this)
        }
        this.modalShowHide = this.modalShowHide.bind(this)
    }
    
    _clear() {
        document.querySelector('#tanggal').classList.remove('is-invalid');
        document.querySelector('#jumlah').classList.remove('is-invalid');
        document.querySelector('#harga').classList.remove('is-invalid');
        document.querySelector('#keterangan').classList.remove('is-invalid');
    }

    _validate() {
        if (this.state.dateInput === '') {
            this.setState({error: true})
            document.querySelector('#tanggal').classList.add('is-invalid');
            return false;
        } 
        
        if (this.state.quantity === '') {
            this.setState({error: true})
            document.querySelector('#jumlah').classList.add('is-invalid');
            return false;
        }
        
        if (this.state.price === '') {
            this.setState({error: true})
            document.querySelector('#harga').classList.add('is-invalid');
            return false;
        }
        
        if (this.state.keterangan === '') {
            this.setState({error: true})
            document.querySelector('#keterangan').classList.add('is-invalid');
            return false;
        }

        return true;
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
        if (this._validate()) {
            this._clear()
            var data = new FormData()
            // var dataNonBBM = (
            //     data.append('date_input', this.state.dateInput),
            //     data.append('quantity', this.state.quantity),
            //     data.append('price', this.state.price),
            //     data.append('keterangan', this.state.keterangan),
            //     data.append('owner_plantingNeedsId',this.props.state.journalDataByDate[0].plantList[0].plantingNeeds)
            // )
            // var dataBBM = (
            //     data.append('date_input', this.state.dateInput),
            //     data.append('diesel_duration', this.state.quantity),
            //     data.append('price', this.state.price),
            //     data.append('keterangan', this.state.keterangan),
            //     data.append('owner_plantingNeedsId',this.props.state.journalDataByDate[0].plantList[0].plantingNeeds)
            // )
            if (type === 'bibit') {
                var insertType = ADD_BIBIT
                data.append('date_input', this.state.dateInput)
                data.append('quantity', this.state.quantity)
                data.append('price', this.state.price)
                data.append('keterangan', this.state.keterangan)
                data.append('owner_plantingNeedsId',this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds)
            } else if (type === 'pupuk') {
                var insertType = ADD_PUPUK
                data.append('date_input', this.state.dateInput)
                data.append('quantity', this.state.quantity)
                data.append('price', this.state.price)
                data.append('keterangan', this.state.keterangan)
                data.append('owner_plantingNeedsId',this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds)
            }else if (type === 'pestisida') {
                var insertType = ADD_PESTISIDA
                data.append('date_input', this.state.dateInput)
                data.append('quantity', this.state.quantity)
                data.append('price', this.state.price)
                data.append('keterangan', this.state.keterangan)
                data.append('owner_plantingNeedsId',this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds)
            }else if (type === 'bbm') {
                var insertType = ADD_BBM
                data.append('date_input', this.state.dateInput)
                data.append('diesel_duration', this.state.quantity)
                data.append('price', this.state.price)
                data.append('keterangan', this.state.keterangan)
                data.append('owner_plantingNeedsId',this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds)
            }

            await postFunction(data, insertType).then(() => {
                if (responseData.status == 200) {
                    console.log("success");
                    alert("Sukses menambah "+type)
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

    modalShowHide(){
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <div id="kebutuhanTanam" className="mt-5">
                <section id="content">
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
                                    <a className="nav-link" id="nav-pupuk-tab" onClick={() => this.setState({type: 'pupuk'})}  data-toggle="tab" href="#nav-pupuk" role="tab" aria-controls="nav-pupuk" aria-selected="false"><span>Pupuk</span></a>
                                    <a className="nav-link" id="nav-bbm-tab" data-toggle="tab" onClick={() => this.setState({type: 'bbm'})}  href="#nav-bbm" role="tab" aria-controls="nav-bbm" aria-selected="false">BBM</a>
                                    <a className="nav-link" id="nav-pestisida-tab" data-toggle="tab" onClick={() => this.setState({type: 'pestisida'})} href="#nav-pestisida" role="tab" aria-controls="nav-pestisida" aria-selected="false">Pestisida</a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">   
                                <div className="tab-pane fade show active" id="nav-bibit" role="tabpanel" aria-labelledby="nav-bibit-tab">
                                  <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Tanggal Input</th>
                                            <th scope="col">Jumlah</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBibit.map((item, index) => {
                                                return(
                                                    <tr>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBibit[index].date_input}</td>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBibit[index].quantity}</td>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBibit[index].price}</td>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBibit[index].keterangan}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                    <button className="btn-get-started mt-1" onClick={this.modalShowHide}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                        </svg>
                                        <span className="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                    </button>
                                    
                                </div>
                                <div className="tab-pane fade" id="nav-pupuk" role="tabpanel" aria-labelledby="nav-pupuk-tab">
    
                                    {/* <EnhancedTable tab="Pupuk"/> */}
                                    <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Tanggal Input</th>
                                            <th scope="col">Jumlah</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPupukList.map((item, index) => {
                                                return(
                                                    <tr>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPupukList[index].date_input}</td>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPupukList[index].quantity}</td>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPupukList[index].price}</td>
                                                        <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPupukList[index].keterangan}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    </table>
                                    <button className="btn-get-started mt-3"  onClick={this.modalShowHide}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                        </svg>
                                        <span className="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                    </button>
                                </div>
                                <div className="tab-pane fade " id="nav-bbm" role="tabpanel" aria-labelledby="nav-mmb-tab">
                                  {/* <EnhancedTable tab="BBM" /> */}
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Tanggal Input</th>
                                                <th scope="col">Jumlah</th>
                                                <th scope="col">Harga</th>
                                                <th scope="col">Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBBMList.map((item, index) => {
                                                    return(
                                                        <tr>
                                                            <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBBMList[index].date_input}</td>
                                                            <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBBMList[index].diesel_duration}</td>
                                                            <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBBMList[index].price}</td>
                                                            <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idBBMList[index].keterangan}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <button className="btn-get-started mt-3"  onClick={this.modalShowHide}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                        </svg>
                                        <span className="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                    </button>
                                </div>
                                <div className="tab-pane fade" id="nav-pestisida" role="tabpanel" aria-labelledby="nav-pestisida-tab">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Tanggal Input</th>
                                                <th scope="col">Jumlah</th>
                                                <th scope="col">Harga</th>
                                                <th scope="col">Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPestisidaList.map((item, index) => {
                                                    return(
                                                        <tr>
                                                            <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPestisidaList[index].date_input}</td>
                                                            <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPestisidaList[index].quantity}</td>
                                                            <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPestisidaList[index].price}</td>
                                                            <td>{this.props.state.journalDataByDate[0].plantList[this.props.state.index].plantingNeeds._idPestisidaList[index].keterangan}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <button className="btn-get-started mt-3" onClick={this.modalShowHide}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                        </svg>
                                        <span className="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}