import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ModalSyarat from './ModalSyarat';

export default class ModalPricing extends Component {
    slide(uang) {
        ReactDOM.render(<ModalSyarat uang={uang} />, document.getElementById('modal-content'));
    }

    click(selection) {
        // const money = document.querySelector('.money');
        // const coin = document.que
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card money" onClick={this.click.bind(this, '.money')}>
                                <img src="../../assets/img/icon/rupiah.svg" alt=""/>
                                <h2>{this.props.uang}</h2>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card coin" onClick={this.click.bind(this, '.coin')}>
                                <img src="../../assets/img/icon/coin.svg" alt=""/>
                                <h2>90 koin</h2>
                                <h2>Koin anda: {this.props.koin} koin</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer mt-4">
                    <button className="btn btn-custom mx-2" onClick={this.slide.bind(this, this.props.uang)}>Lanjut</button>
                </div>
            </div>
        )
    }
}
