import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <body style={{ background: 'linear-gradient(45deg, #1de099, #1dc8cd)', width: '100vw', height: '100vh' }}>
                <div className="d-flex " style={{width: '50vw'}}>
                    <form style={{width: '100%',}}>
                        <h2>Login</h2>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Setujui Persyaratan</label>
                        </div>
                        <small className="d-block mb-3">Jika anda belum memiliki akun silahkan <a href="/register">buat akun</a>!!</small>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </body>
        )
    }
}
