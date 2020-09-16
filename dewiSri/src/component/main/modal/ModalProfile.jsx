import React, { Component } from 'react'

export default class ModalProfile extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="user-photo text-center">
                        <svg width="15em" height="15em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
        )
    }
}
