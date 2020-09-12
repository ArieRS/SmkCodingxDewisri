import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Coba2 from './Coba2';
import Modal from './Modal';
import ModalPricing from './ModalPricing';

export default class Coba extends Component {
    slide(uang) {
        console.log(uang)
        ReactDOM.render(<Coba2 uang={uang}/>, document.getElementById("modal-content"))
    }
    
    left(uang) {
        console.log(uang)
        ReactDOM.render(<Modal uang={uang} />, document.getElementById("modal-content"))
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
                    <button className="btn btn-custom mx-2" onClick={this.slide.bind(this, this.props.uang)}>Lanjut</button>
                    <button className="btn btn-secondary" onClick={this.left.bind(this, this.props.uang)}>Kembali</button>
                </div>
            </div>
        )
    }
}
