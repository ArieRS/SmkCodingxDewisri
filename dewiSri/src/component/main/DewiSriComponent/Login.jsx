import React, { Component } from 'react'
import { LOGIN_END } from '../../../system/Strings';
import { responseData, postFunction } from '../../../models/Model';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            password: "",

        }
    }

    changeState(state, value) {
        this.setState({
            [state]: value.target.value
        })
    }

    componentWillMount() {
        // this.loginFunction();
    }

    loginFunction = async (e) => {
        e.preventDefault()
        var data = new FormData()

        data.append('phone', this.state.phone)
        data.append('password', this.state.password)

        await postFunction(data, LOGIN_END).then(() => {
            if (responseData.status == 200) {
                console.log("success");
                alert(responseData.message)
                localStorage.setItem("auth", true);
                localStorage.setItem("userData", responseData.data.toString())
                this.props.history.push("/");
                console.log(localStorage.getItem("auth"));
                console.log(responseData.data);
            } else {
                alert(responseData.message)
            }
        })

    }

    render() {
        return (
            <body style={{ background: 'linear-gradient(45deg, #1de099, #1dc8cd)', width: '100vw', height: '100vh' }}>
                <div className="form-container d-flex">
                    <form className="form-auth" onSubmit={this.loginFunction.bind(this)}>
                        <h2>Login</h2>
                        <div className="form-group">
                            <label for="number">Nomer Telepon</label>
                            <input onChange={(text) => this.changeState("phone", text)} className="form-control" id="number" aria-describedby="telephone" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" onChange={(text) => this.changeState("password", text)} className="form-control" id="password" />
                        </div>
                        <small className="d-block mb-3">Jika anda belum memiliki akun silahkan <a href="/register">buat akun</a>!!</small>
                        <button onClick={this.loginFunction.bind(this)} className="btn btn-success">Submit</button>
                    </form>
                </div>
            </body>
        )
    }
}