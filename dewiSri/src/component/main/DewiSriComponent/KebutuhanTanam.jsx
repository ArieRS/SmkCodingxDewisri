import React, { Component } from 'react'

export default class KebutuhanTaman extends Component {
    showDetail(nama) {
        const modalTitle = document.querySelector('.modal-title');
        const modalBody = document.querySelector('.modal-body');
        
        modalTitle.innerHTML = nama;
        modalBody.innerHTML = `
            <div className="form-group">
                <label for="tanggal">Tanggal</label>
                <input type="date" className="form-control" id="tanggal">
            </div>
            <div className="form-group">
                <label for="jumlah">Jumlah (/kg)</label>
                <input type="number" className="form-control" id="jumlah">
            </div>
            <div className="form-group">
                <label for="harga">Harga</label>
                <input type="number" className="form-control" id="harga">
            </div>
            <div className="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea className="form-control" id="keterangan" rows="3"></textarea>
            </div>
        `
    }

    render() {
        return (
            <div className="card-kebutuhan-tanam my-3">
                <h2>Kebutuhan Tanam</h2>
                <button type="button" className="btn btn-outline-success">Download Data</button>
                <table border="1" className="table-custom mt-3">
                    <thead>
                        <tr>
                            <td>Bibit</td>
                            <td>Pupuk</td>
                            <td>Air</td>
                            <td>Pestisida</td>
                            <td>Lain - Lain</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}} onClick={this.showDetail.bind(this, 'bibit')}>
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                </svg>
                            </td>
                            <td>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}} onClick={this.showDetail.bind(this, 'pupuk')}>
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                </svg>
                            </td>
                            <td>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}} onClick={this.showDetail.bind(this, 'air')}>
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                </svg>
                            </td>
                            <td>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}} onClick={this.showDetail.bind(this, 'pestisida')}>
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                </svg>
                            </td>
                            <td>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}} onClick={this.showDetail.bind(this, 'lain-lain')}>
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}