import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
        this.loginFunction();
    }

    loginFunction(){
        fetch("http://localhost:8080/auth/getAllUsers",{headers: {'Access-Control-Allow-Origin': '*'}}).then(response => response.json()).then(json => console.log(json))
    }
    render() {
        return (
            <body style={{ background: 'linear-gradient(45deg, #1de099, #1dc8cd)', width: '100vw', height: '100vh' }}>
                <div className="form-container d-flex">
                    <form className="form">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label for="number">Nomer Telepon</label>
                            <input type="number" className="form-control" id="number" aria-describedby="telephone" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" />
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
