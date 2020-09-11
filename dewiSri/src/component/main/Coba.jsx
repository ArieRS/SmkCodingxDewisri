import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Coba2 from './Coba2';
import Modal from './Modal';
import ModalPricing from './ModalPricing';

export default class Coba extends Component {
    slide() {
        ReactDOM.render(<Coba2 />, document.getElementById("modal-content"))
    }
    
    left() {
        ReactDOM.render(<Modal />, document.getElementById("modal-content"))
    }

    render() {
        return (
            <div className="syarat">
                <ul>
                    <li>Anda dapat batalkan langganan kapan saja</li>
                    <li>Kami akan mengingatkan anda sebelum jatuh tempo pembayaran berikutnya</li>
                    <li>Pembayaran berikutnya tanggal 17 September 2020</li>
                </ul>
                <div className="footer">
                    <button className="btn btn-custom" onClick={this.slide}>Lanjut</button>
                    <button className="btn btn-secondary" onClick={this.left}>Kembali</button>
                </div>
            </div>
        )
    }
}
