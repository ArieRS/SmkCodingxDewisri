import React, { Component } from 'react'

export default class ModalFinal extends Component {
    render() {
        return (
            <div className="modal-final">
                <div className="row">
                    <div className="col">
                        <h1>SELAMAT!!</h1>
                        <h2>Anda telah berhasil menukarkan koin anda</h2>
                        <p>Sekarang anda dapat menikmati fitur premium selama 1 bulan kedepan</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="../../assets/img/icon/gift.svg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Terus isi jurnal dan kumpulkan koin agar dapat menikmati fitur premium kami</p>
                    </div>
                </div>
            </div>
        )
    }
}