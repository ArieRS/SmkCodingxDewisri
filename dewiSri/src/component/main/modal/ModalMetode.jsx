import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ModalSyarat from './ModalSyarat'

export default class ModalMetode extends Component {
    back(uang) {
        ReactDOM.render(<ModalSyarat uang={uang} />, document.getElementById("modal-content"))
    }
    render() {
        return (
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Tambah kartu kredit / debit
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Transfer Bank
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <div classNameName="row mt-5">
                                    <div classNameName="col-sm-4">
                                        <img src="../assets/img/icon/Bank Logo/bnilogo.png" alt=""/>
                                    </div>
                                    <div classNameName="col-sm-4">
                                        <img src="../assets/img/icon/Bank Logo/brilogo.png" alt=""/>
                                    </div>
                                    <div classNameName="col-sm-4">
                                        <img src="../assets/img/icon/Bank Logo/mandirilogo.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Pembayaran via E-Wallet
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                <div classNameName="row mt-5">
                                    <div classNameName="col-sm-4">
                                        <img src="../assets/img/icon/EWallet Logo/gopay.png" alt=""/>
                                    </div>
                                    <div classNameName="col-sm-4">
                                        <img src="../assets/img/icon/EWallet Logo/linkaja.png" alt=""/>
                                    </div>
                                    <div classNameName="col-sm-4">
                                        <img src="../assets/img/icon/EWallet Logo/ovo.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div classNameName="footer">
                    <button classNameName="btn btn-secondary" onClick={this.back.bind(this, this.props.uang)}>Kembali</button>
                </div>
            </div>
        )
    }
}
