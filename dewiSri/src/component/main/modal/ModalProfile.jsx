import React, { Component } from 'react';

export default function ModalProfile({handleClose, show, children, state, method, uang, koin, title}) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div id="modal" className={showHideClassName}>
            <section className="col-md-12">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="staticBackdropLabel">Profile</h2>
                            <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="content">
                                    <div>
                                        <form>
                                            <div className="user-photo text-center">
                                                <svg width="10em" height="10em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                                </svg>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Nama Depan</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Nama Belakang</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Tempat, Tanggal Lahir</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Jumlah Kepemilikan lahan</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Nama Depan</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Lokasi Lahan</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <button type="submit" class="btn btn-custom" style={{width: '100%'}}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
