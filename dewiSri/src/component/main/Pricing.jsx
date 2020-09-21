import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ModalPremium from './modal/ModalPremium';
import ModalPricing from './modal/ModalPricing';



const Modal = ({ handleClose, show, children, state, method }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="col-md-12" style={{height: '100vh', marginTop: 0, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Jadi Premium</h5>
                        <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form">
                            <form className="php-email-form">
                            <div className="container">
                                <div className="row my-3">
                                    <div className="col">
                                        <div className="card money" >
                                            <img src="../../assets/img/icon/rupiah.svg" alt=""/>
                                            <h3>Rp. {state.priceMoney}</h3>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card coin" >
                                            <img src="../../assets/img/icon/coin.svg" alt=""/>
                                            <h3>{state.priceCoins} koin</h3>
                                            <h3>Koin anda: {state.myCoins} koin</h3>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                            <div className="container-fluid align-right">
                                <ul>
                                    <li>Anda dapat batalkan langganan kapan saja</li>
                                    <li>Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                    <li>Pembayaran berikutnya tanggal 17 September 2020</li>
                                </ul>
                                
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

export default class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            
            priceMoney: 0,
            priceCoins: 0
        }
        this.showModal = this.showModal.bind(this);
        this.method = {

        }
    }

    showModal(money) {
        this.setState({
            showModal: !this.state.showModal,
            priceMoney: money
        })
        // ReactDOM.render(<ModalPricing uang={money}/>, document.getElementById('modal-content'))
    }

    render() {
        return (
            <div id="premium">
                <Modal show={this.state.showModal} title="Plant It Premium" state={this.state} handleClose={this.showModal.bind(this, 'hide')} uang={this.state.money} />
                <section id="content" className="section-bg">
                    <div className="section-header-content">
                        <div className="foto-petani">
                            <h1 className="section-title-content">Plant It Premium</h1>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img src="../../assets/img/petani/1.jpg" alt="" srcset=""/>
                                </div>
                                <div className="col-sm-3">
                                    <img src="../../assets/img/petani/2.jpg" alt="" srcset=""/>
                                </div>
                                <div className="col-sm-3">
                                    <img src="../../assets/img/petani/3.jpg" alt="" srcset=""/>
                                </div>
                                <div className="col-sm-3">
                                    <img src="../../assets/img/petani/4.jpg" alt="" srcset=""/>
                                </div>
                            </div>
                        </div>
                        <span className="section-divider"></span>
                    </div>
                    <div className="container mt-3">
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-lg-4 column">
                                    <div id="content" className="box wow fadeInLeft">
                                        <h3>Rencana 1</h3>
                                        <h4><sup>RP</sup>29.999<span>/ bulan</span></h4>
                                        <ul>
                                        <li><i className="ion-android-checkmark-circle"></i> Anda dapat batalkan langganan kapan saja</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Pembayaran berikutnya tanggal <b>17 September 2020</b> </li>
                                    </ul>
                                        <a className="btn-get-started" onClick={() => this.showModal("29.999")}>Beli</a>
                                    </div>
                                </div>
    
                                <div className="col-lg-4">
                                    <div id="content" className="box featured wow fadeInUp">
                                    <h3>Rencana 2</h3>
                                    <h4><sup>RP</sup>85.000<span>/ bulan</span></h4>
                                    <ul>
                                        <li><i className="ion-android-checkmark-circle"></i> Anda dapat batalkan langganan kapan saja</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Pembayaran berikutnya tanggal <b>17 September 2020</b> </li>
                                    </ul>
                                    <a className="btn-get-started" onClick={this.showModal.bind(this, "85.000")}>Beli</a>
                                    </div>
                                </div>
    
                                <div className="col-lg-4">
                                    <div id="content" className="box wow fadeInRight">
                                    <h3>Rencana 3</h3>
                                    <h4><sup>RP</sup>320.000<span>/ bulan</span></h4>
                                    <ul>
                                        <li><i className="ion-android-checkmark-circle"></i> Anda dapat batalkan langganan kapan saja</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Pembayaran berikutnya tanggal <b>17 September 2020</b> </li>
                                    </ul>
                                    <a className="btn-get-started" onClick={this.showModal.bind(this, "320.000")}>Beli</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 mx-auto">
                                    <div id="content" className="box wow fadeInRight">
                                    <h3>Rencana 4</h3>
                                    <h4><sup>RP</sup>1.800.000<span>/ selamanya</span></h4>
                                    <ul>
                                        <li><i className="ion-android-checkmark-circle"></i> Anda dapat batalkan langganan kapan saja</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Pembayaran berikutnya tanggal <b>17 September 2020</b> </li>
                                    </ul>
                                    <a  className="btn-get-started" onClick={this.showModal.bind(this, "1.800.000")}>Beli</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
