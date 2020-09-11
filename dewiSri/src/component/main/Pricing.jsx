import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Coba from './Coba';
import ModalPricing from './ModalPricing'

// const Modal = ({ handleClose, show, children, state, method }) => {
//     const showHideClassName = show ? "modal display-block" : "modal display-none";


//     state = {
//         isCoinActive: true,
//         isMoneyActive: false
//     }

//     const click = (type) => {
//         const money = document.querySelector('.card.money');
//         const coin = document.querySelector('.card.coin');
//         if (type === 'money') {
//             state.isMoneyActive = true;
//             state.isCoinActive = false;
//             money.style.backgroundColor = 'red';
//             coin.style.backgroundColor = 'white'
//         } else {
//             state.isMoneyActive = false;
//             state.isCoinActive = true;
//             money.style.backgroundColor = 'white';
//             coin.style.backgroundColor = 'red';
//         }
//     }
    
//     const slide = (type) => {
//         console.log(document.getElementById("modal-content"))
//         ReactDOM.render(<Coba />, document.getElementById("modal-content"))
//     } 
// };

export default class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.showModal = this.showModal.bind(this)
    }

    showModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <section id="content" className="section-bg">
                <ModalPricing show={this.state.showModal} state={this.state} handleClose={this.showModal} />
                <div className="section-header-content">
                    <div className="foto-petani">
                        {/* <img src="../../assets/img/petani/petani.jpg" alt=""/> */}
                        {/* <img src="../../assets/img/petani/petani2.jpg" alt=""/>
                        <img src="../../assets/img/petani/petani3.jpg" alt=""/>
                        <img src="../../assets/img/petani/petani4.jpg" alt=""/> */}
                        <h1 className="section-title-content">Plant It Premium</h1>
                    </div>
                    <span className="section-divider"></span>
                </div>
                <div className="container mt-3">
                    <div className="container">
                        <div className="row">
                            <table className="table-striped table-content">
                                <thead className="table-header">
                                    <tr>
                                        <td>Fitur</td>
                                        <td>Gratis</td>
                                        <td>Premium</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Analisis Keuntungan Bersih</td>
                                        <td>-</td>
                                        <td><img src="assets/img/leaf.svg" alt=""/></td>
                                    </tr>
                                    <tr>
                                        <td>Download Jurnal</td>
                                        <td>-</td>
                                        <td><img src="assets/img/leaf.svg" alt=""/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row btn-content">
                            <button className="btn btn-dark" data-toggle="modal" onClick={this.showModal}>Rp29.999,-/bulan</button>
                            <button className="btn btn-dark">Rp85.000,_/musim</button>
                            <button className="btn btn-dark">Rp320.000,_/tahun</button>
                            <button className="btn btn-dark">Rp1.800.000,_/selamanya</button>
                            <button id="btn-not" className="btn btn-dark">Nanti Dulu</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
