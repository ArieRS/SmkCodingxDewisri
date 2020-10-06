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
                        <h1 className="title">Tanaman</h1>
                        <h1>{this.props.tanaman}</h1>
                    </div>
                    <div className="item komoditas">
                        <h1 className="title">Komoditas</h1>
                        <h1>{this.props.komoditas}</h1>
                    </div>
                    <div className="item hari">
                        <h1 className="title">Hari</h1>
                        <h1>{this.props.hari}</h1>
                    </div>
                </div>
            </div>
        )
    }
}
