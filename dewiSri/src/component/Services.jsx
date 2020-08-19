import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div className="colorlib-services colorlib-bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services">
                                <span className="icon">
                                    <i className="icon-browser"></i>
                                </span>
                                <div className="desc">
                                    <h3>Create your own template</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services">
                                <span className="icon">
                                    <i className="icon-download"></i>
                                </span>
                                <div className="desc">
                                    <h3>Automatic Backup Data</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services">
                                <span className="icon">
                                    <i className="icon-layers"></i>
                                </span>
                                <div className="desc">
                                    <h3>Page Builder</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
