import React, { Component } from 'react'

export default class CatatanPertanian extends Component {
    render() {
        return (
            <section id="pricing">
                <div className="card-catatan-pertanian">
                    <div className="container">

                        <table border="1" className="table-custom">
                            <thead>
                                <tr className="table-success">
                                    <td>Tanggal Panen</td>
                                    <td>Hasil Panen</td>
                                    <td>Harga Pasar</td>
                                    <td>Keuntungan Bersih</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}}>
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                        </svg>
                                    </td>
                                    <td>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}}>
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                        </svg>
                                    </td>
                                    <td>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}}>
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                        </svg>
                                    </td>
                                    <td>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-award-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#" className="btn-get-started mt-3">Download Data</a>
                </div>
            </section>
        )
    }
}
