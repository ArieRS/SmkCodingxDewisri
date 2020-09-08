import React, { Component } from 'react'

export default class Tanaman extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.method = {

        }
    }

    coba() {
        const el = document.querySelector('.panel-tanaman #rincian-table');
        console.log(el)
        el.style.top = '-100px';
    }

    componentWillMount(){
        // console.log(this.props.state.currentDate);
    }

    render() {
        return (
            <div className="container">
                <div className="panel-tanaman mt-3">
                    <div id="rincian-table">
                        <div className="table-card">
                            <table>
                                <tr>
                                    <th>Tanaman1</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> */}
                                    <td>Tanaman</td>
                                </tr>
                                <tr>
                                    <th>Komoditas</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                                    <td>Komoditas</td>
                                </tr>
                                <tr>
                                    <th>Hari Ke</th>
                                    <td>:</td>
                                    <td>110</td>
                                </tr>
                            </table>
                        </div>
                        <div className="table-card">
                            <table>
                                <tr>
                                    <th>Tanaman2</th>
                                    <td>:</td>
                                    {/* { <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> } */}
                                    <td>Tanaman</td>
                                </tr>
                                <tr>
                                    <th>Komoditas</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                                    <td>Komoditas</td>
                                </tr>
                                <tr>
                                    <th>Hari Ke</th>
                                    <td>:</td>
                                    <td>110</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div id="button" className="btn-right" >
                        <svg viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={this.coba}>
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
