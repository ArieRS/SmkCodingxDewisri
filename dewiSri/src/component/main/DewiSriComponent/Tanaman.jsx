import React, { Component } from 'react'

export default class Tanaman extends Component {
    render() {
        return (
            <div className="container">
                <div className="panel-tanaman mt-3">
                    <table>
                        <tr>
                            <th>Tanaman</th>
                            <td>:</td>
                            <td>Kentang Besar</td>
                        </tr>
                        <tr>
                            <th>Komoditas</th>
                            <td>:</td>
                            <td>Granola Jerman</td>
                        </tr>
                        <tr>
                            <th>Hari Ke</th>
                            <td>:</td>
                            <td>110</td>
                        </tr>
                    </table>

                    <div className="btn-right">
                        <svg viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
