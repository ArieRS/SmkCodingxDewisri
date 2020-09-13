import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Coba from './Coba';
import ModalPricing from './ModalPricing'

export default class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            money: "0"
        }
        this.showModal = this.showModal.bind(this)
    }

    showModal(money) {
        this.setState({
            showModal: !this.state.showModal,
            money: money
        })
    }

    render() {
        return (
            <section id="content" className="section-bg">
                <ModalPricing show={this.state.showModal} state={this.state} handleClose={this.showModal.bind(this, 'hide')} uang={this.state.money} />
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
                        <div class="row mt-5">
                            <div class="col-lg-4 column">
                                <div id="content" class="box wow fadeInLeft">
                                    <h3>Rencana 1</h3>
                                    <h4><sup>RP</sup>29.999<span>/ bulan</span></h4>
                                    <ul>
                                    <li><i class="ion-android-checkmark-circle"></i> Anda dapat batalkan langganan kapan saja</li>
                                    <li><i class="ion-android-checkmark-circle"></i> Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                    <li><i class="ion-android-checkmark-circle"></i> Pembayaran berikutnya tanggal <b>17 September 2020</b> </li>
                                </ul>
                                    <a href="#" class="btn-get-started" onClick={this.showModal.bind(this, "22.999")}>Get Started</a>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div id="content" class="box featured wow fadeInUp">
                                <h3>Rencana 2</h3>
                                <h4><sup>RP</sup>85.000<span>/ bulan</span></h4>
                                <ul>
                                    <li><i class="ion-android-checkmark-circle"></i> Anda dapat batalkan langganan kapan saja</li>
                                    <li><i class="ion-android-checkmark-circle"></i> Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                    <li><i class="ion-android-checkmark-circle"></i> Pembayaran berikutnya tanggal <b>17 September 2020</b> </li>
                                </ul>
                                <a href="#" class="btn-get-started" onClick={this.showModal.bind(this, "22.999")}>Get Started</a>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div id="content" class="box wow fadeInRight">
                                <h3>Rencana 3</h3>
                                <h4><sup>RP</sup>320.000<span>/ bulan</span></h4>
                                <ul>
                                    <li><i class="ion-android-checkmark-circle"></i> Anda dapat batalkan langganan kapan saja</li>
                                    <li><i class="ion-android-checkmark-circle"></i> Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                    <li><i class="ion-android-checkmark-circle"></i> Pembayaran berikutnya tanggal <b>17 September 2020</b> </li>
                                </ul>
                                <a href="#" class="btn-get-started" onClick={this.showModal.bind(this, "22.999")}>Get Started</a>
                                </div>
                            </div>
                            <div class="col-lg-4 mx-auto">
                                <div id="content" class="box wow fadeInRight">
                                <h3>Rencana 4</h3>
                                <h4><sup>RP</sup>1.800.000<span>/ selamanya</span></h4>
                                <ul>
                                    <li><i class="ion-android-checkmark-circle"></i> Anda dapat batalkan langganan kapan saja</li>
                                    <li><i class="ion-android-checkmark-circle"></i> Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                                    <li><i class="ion-android-checkmark-circle"></i> Pembayaran berikutnya tanggal <b>17 September 2020</b> </li>
                                </ul>
                                <a href="#" class="btn-get-started" onClick={this.showModal.bind(this, "22.999")}>Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
