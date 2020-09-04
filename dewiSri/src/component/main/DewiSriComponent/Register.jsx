import React, { Component } from 'react'
import { postFunction, responseData } from '../../../models/Model';
import { REGISTER_END } from '../../../system/Strings';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            password: "",
            confirmPassword: ""
        }
    }

    changeState(state, value) {
        this.setState({
            [state]: value.target.value
        })
    }

    registerFunction = async (e) => {
        e.preventDefault();
        var data = new FormData();
        if(this.state.password === this.state.confirmPassword) {
            data.append('phone', this.state.phone);
            data.append('password', this.state.password);
            await postFunction(data, REGISTER_END).then(() => {
                if(responseData.status == 200) {
                    alert(responseData.message)

                    this.props.history.push('/login')
                } else {
                    alert(responseData.message)
                }
            })
        }else{
            alert("Password tidak sama")
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
                            <input type="password" className="form-control" id="confirmpassword" onChange={(text) => this.changeState('confirmPassword', text)} />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Setujui Persyaratan</label>
                        </div>
                        <small className="d-block mb-3">Jika sudah memiliki akun silahkan <a href="/login">login</a>!!</small>
                        <button className="btn btn-success" onClick={this.registerFunction.bind(this)}>Submit</button>
                    </form>
                </div>
            </body>
        )
    }
}
