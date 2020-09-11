import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Coba from './Coba';

export default class Modal extends Component {

    slide() {
        ReactDOM.render(<Coba />, document.getElementById('modal-content'));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <div className="card money">
                            <img src="../../assets/img/icon/rupiah.svg" alt=""/>
                            <h2>{this.props.uang}</h2>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card coin">
                            <img src="../../assets/img/icon/coin.svg" alt=""/>
                            <h2>90 koin</h2>
                            <span>Koin anda: {this.props.koin} koin</span>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-custom mx-2" onClick={this.slide}>Lanjut</button>
                    <button className="btn btn-secondary">Kembali</button>
                </div>
            </div>
        )
    }
}
