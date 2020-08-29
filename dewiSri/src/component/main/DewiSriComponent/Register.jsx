import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <body style={{ background: 'linear-gradient(45deg, #1de099, #1dc8cd)', width: '100vw', height: '100vh' }}>
                <div className="d-flex " style={{width: '50vw'}}>
                    <form style={{width: '100%',}}>
                        <h2>Register</h2>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="form-group">
                            <label for="confirmpassword">Confirm Password</label>
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
