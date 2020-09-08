import React, { Component } from 'react'

export default class CatatanPertanian extends Component {
    showModal() {
        const modalTitle = document.querySelector('#staticBackdropPanen .modal-title');
        const modalContent = document.querySelector('#staticBackdropPanen .modal-body');
        const modalFooter = document.querySelector('#staticBackdropPanen .modal-footer');

        modalContent.innerHTML = `
        <form>
            <div class="form-group">
                <label for="#tanggalPanen">Tanggal Panen</label>
                <input type="date" class="form-control" id="tanggalPanen" aria-describedby="tanggalPenen">
            </div>
            <div class="form-group">
                <label for="#hargaPasar">Harga Pasar</label>
                <input type="number" class="form-control" id="hargaPasar" aria-describedby="hargaPasar">
            </div>
            <div class="form-group">
                <label for="#hasilPanen">Hasil Panen</label>
                <input type="number" class="form-control" id="hasilPanen" aria-describedby="hasilPanen">
            </div>
        </form>
        `

        modalFooter.innerHTML = `
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-custom">Tambah Data</button>
        `
    }

    render() {
        return (
            <section id="content">
                <div className="card-catatan-pertanian">
                    <div className="section-header">
                        <h3 className="section-title">Hasil Panen</h3>
                        <span className="section-divider"></span>
                    </div>
                    <button className="btn-get-started mt-2" data-toggle="modal" data-target="#staticBackdropPanen" onClick={this.showModal}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                        <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                    </button>
                    <a href="#" className="btn-get-started mt-3">Download Data</a>
                </div>
            </section>
        )
    }
}