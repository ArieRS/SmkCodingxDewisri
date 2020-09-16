import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Modal from './Modal';
import ModalFinal from './ModalFinal';

export default class ModalSyarat extends Component {
    slide() {
        ReactDOM.render(<ModalFinal />, document.getElementById("modal-content"))
    }
    
    left(uang) {
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
                    {console.log(this.props)}
                    <button className="btn btn-custom mx-2" onClick={this.slide.bind(this, this.props.uang, this.props.handleClose)}>Lanjut</button>
                    <button className="btn btn-secondary" onClick={this.left.bind(this, this.props.uang)}>Kembali</button>
                </div>
            </div>
        )
    }
}
