import React, { Component } from 'react'

export default class CatatanPertanian extends Component {
    render() {
        return (
            <section id="pricing">
                <div className="card-catatan-pertanian">
                <div className="container">
                        <nav className="nav-fill">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-link active" id="nav-tanggal-panen-tab" data-toggle="tab" href="#nav-tanggal-panen" role="tab" aria-controls="nav-tanggal-panen" aria-selected="true">Tanggal Panen</a>
                                <a className="nav-link" id="nav-hasil-panen-tab" data-toggle="tab" href="#nav-hasil-panen" role="tab" aria-controls="nav-hasil-panen" aria-selected="false">Hasil Panen</a>
                                <a className="nav-link" id="nav-harga-pasar-tab" data-toggle="tab" href="#nav-harga-pasar" role="tab" aria-controls="nav-harga-pasar" aria-selected="false">Harga Pasar</a>
                                <a className="nav-link" id="nav-keuntungan-bersih-tab" data-toggle="tab" href="#nav-keuntungan-bersih" role="tab" aria-controls="nav-keuntungan-bersih" aria-selected="false">Keuntungan Bersih</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">   
                            <div className="tab-pane fade show active" id="nav-tanggal-panen" role="tabpanel" aria-labelledby="nav-tanggal-panen-tab">
                                <p>tanggal panen</p>
                            </div>
                            <div className="tab-pane fade" id="nav-hasil-panen" role="tabpanel" aria-labelledby="nav-hasil-panen-tab">
                                <p>hasil panen</p>
                            </div>
                            <div className="tab-pane fade" id="nav-harga-pasar" role="tabpanel" aria-labelledby="nav-harga-pasar-tab">
                                <p>harga pasar</p>
                            </div>
                            <div className="tab-pane fade " id="nav-keuntungan-bersih" role="tabpanel" aria-labelledby="nav-keuntungan-bersih-tab">
                                <p>keuntungan bersih</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn-get-started mt-3">Download Data</a>
                </div>
            </section>
        )
    }
}
