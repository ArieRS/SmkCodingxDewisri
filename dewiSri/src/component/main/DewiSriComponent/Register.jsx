import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <body style={{ background: 'linear-gradient(45deg, #1de099, #1dc8cd)', width: '100vw', height: '100vh' }}>
                <div className="form-container d-flex">
                    <form className="form">
                        <h2>Register</h2>
                        <div className="form-group">
                            <label for="telephone">Nomer Telepon</label>
                            <input type="number" className="form-control" id="telephone" aria-describedby="nomerTelepon" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="form-group">
                            <label for="confirmpassword">Ketik Ulang Password</label>
                            <input type="password" className="form-control" id="confirmpassword" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Setujui Persyaratan</label>
                        </div>
                        <small className="d-block mb-3">Jika sudah memiliki akun silahkan <a href="/login">login</a>!!</small>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </body>
        )
    }
}
