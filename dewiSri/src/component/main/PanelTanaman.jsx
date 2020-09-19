import React, { Component } from 'react'

export default class PanelTanaman extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="tanaman-wrapper">
                    <div className="item tanaman">
                        <h2>Tanaman</h2>
                        <h1>{this.props.tanaman}</h1>
                    </div>
                    <div className="item komoditas">
                        <h2>Komoditas</h2>
                        <h1>{this.props.komoditas}</h1>
                    </div>
                    <div className="item hari">
                        <h2>Hari</h2>
                        <h1>{this.props.hari}</h1>
                    </div>
                </div>
            </div>
        )
    }
}
