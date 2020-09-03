import React, {Component} from 'react'

export default class KebutuhanTaman extends Component {
    showDetail(nama) {
        const modalTitle = document.querySelector('#staticBackdropKebutuhanTanam .modal-title');
        const modalContent = document.querySelector('#staticBackdropKebutuhanTanam .modal-body');
        const modalFooter = document.querySelector('#staticBackdropKebutuhanTanam .modal-footer');
        modalTitle.innerHTML = nama;
        modalContent.innerHTML = `
            <div class="form">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="form-group">
                        <label for="tanggal">Tanggal</label>
                        <input type="date" name="tanggal" class="form-control" id="tanggal" placeholder="Tanggal" />
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <label for="jumlah">Jumlah</label>
                        <input type="jumlah" class="form-control" name="jumlah" id="jumlah" placeholder="Jumlah" />
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <label for="harga">Harga</label>
                        <input type="Number" class="form-control" name="harga" id="harga" placeholder="Harga" />
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <label for="keterangan">Keterangan</label>
                        <textarea class="form-control" id="keterangan" name="keterangan" rows="5" data-rule="required" placeholder="Keterangan"></textarea>
                        <div class="validate"></div>
                    </div>
                </form>
            </div>
        `
    }

    render() {
        return (
            <section id="pricing" className="container">
                <div className="card-kebutuhan-tanam my-3">
                    <div className="section-header">
                        <h3 className="section-title">Kebutuhan Tanam</h3>
                        <span className="section-divider"></span>
                    </div>
                    <a href="#" className="btn-get-started">Download Data</a>
                    <div className="container">
                        <nav className="nav-fill">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-link active" id="nav-bibit-tab" data-toggle="tab" href="#nav-bibit" role="tab" aria-controls="nav-bibit" aria-selected="true">bibit</a>
                                <a className="nav-link" id="nav-pupuk-tab" data-toggle="tab" href="#nav-pupuk" role="tab" aria-controls="nav-pupuk" aria-selected="false">pupuk</a>
                                <a className="nav-link" id="nav-bbm-tab" data-toggle="tab" href="#nav-bbm" role="tab" aria-controls="nav-bbm" aria-selected="false">bbm</a>
                                <a className="nav-link" id="nav-pestisida-tab" data-toggle="tab" href="#nav-pestisida" role="tab" aria-controls="nav-pestisida" aria-selected="false">pestisida</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">   
                            <div className="tab-pane fade show active" id="nav-bibit" role="tabpanel" aria-labelledby="nav-bibit-tab">
                                <button className="btn-get-started mt-2"  data-toggle="modal" data-target="#staticBackdropKebutuhanTanam" onClick={this.showDetail.bind(this, 'bibit')}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade" id="nav-pupuk" role="tabpanel" aria-labelledby="nav-pupuk-tab">
                            <button className="btn-get-started mt-2"  data-toggle="modal" data-target="#staticBackdropKebutuhanTanam" onClick={this.showDetail.bind(this, 'pupuk')}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade " id="nav-bbm" role="tabpanel" aria-labelledby="nav-mmb-tab">
                            <button className="btn-get-started mt-2"  data-toggle="modal" data-target="#staticBackdropKebutuhanTanam" onClick={this.showDetail.bind(this, 'bbm')}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade" id="nav-pestisida" role="tabpanel" aria-labelledby="nav-pestisida-tab">
                            <button className="btn-get-started mt-2" data-toggle="modal" data-target="#staticBackdropKebutuhanTanam" onClick={this.showDetail.bind(this, 'pestisida')}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
