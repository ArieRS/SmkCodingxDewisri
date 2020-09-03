import React, { Component } from 'react'
import { postFunction, responseData } from '../../../models/Model';
import { LOGIN_END } from '../../../system/Strings';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            password: "",
            conformPassword: ""
        }
    }

    changeState(state, value) {
        this.setState({
            [state]: value.target.value
        })
    }

    registerFunction = async () => {
        var data = new FormData();
        if(this.state.password === this.state.conformPassword) {
            data.append('email', this.state.phone);
            data.append('password', this.state.password);
            await postFunction(data, LOGIN_END).then(() => {
                if(responseData.status == 200) {
                    console.log("Berhasil Register");
                    this.props.history.push('/')
                } else {
                    alert(responseData.message)
                }
            })
        }
        
    }

    render() {
        return (
            <body style={{ background: 'linear-gradient(45deg, #1de099, #1dc8cd)', width: '100vw', height: '100vh' }}>
                <div className="form-container d-flex">
                    <form className="form-auth">
                        <h2>Register</h2>
                        <div className="form-group">
                            <label for="telephone">Nomer Telepon</label>
                            <input type="number" className="form-control" id="telephone" aria-describedby="nomerTelepon" onChange={(text) => this.changeState('phone', text)}/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={(text) => this.changeState('password', text)} />
                        </div>
                        <div className="form-group">
                            <label for="confirmpassword">Ketik Ulang Password</label>
                            <input type="password" className="form-control" id="confirmpassword" onChange={(text) => this.changeState('conformPassword', text)} />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Setujui Persyaratan</label>
                        </div>
                        <small className="d-block mb-3">Jika sudah memiliki akun silahkan <a href="/login">login</a>!!</small>
                        <button type="submit" className="btn btn-success" onClick={() => this.registerFunction()}>Submit</button>
                    </form>
                </div>
            </body>
        )
    }
}
