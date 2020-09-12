import React, { Component } from 'react'

export default class Tanaman extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: 10
        }
        this.slide = this.slide.bind(this)
    }

    coba() {
        const el = document.querySelector('.panel-tanaman #rincian-table');
        const ukuran = document.querySelectorAll('.panel-tanaman #rincian-table .table-card').length;

        el.style.top = `-${this.state.position}px`;
        this.setState({position: this.state.position + 100})
    }

    componentWillMount(){
        // console.log(this.props.state.currentDate);
    }

    render() {
        return (
            // <div className="container">
                <div id="panel-tanaman" className="panel-tanaman mt-3">
                    <div id="rincian-table">

                        <div className="table-card">
                            <table>
                                <tr>
                                    <th>Tanaman</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> */}
                                    <td>Kentang Besar</td>
                                </tr>
                                <tr>
                                    <th>Komoditas</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                                    <td>Granola Jerman</td>
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
                                    <th>Tanaman</th>
                                    <td>:</td>
                                    {/* { <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> } */}
                                    <td>Wortel</td>
                                </tr>
                                <tr>
                                    <th>Komoditas</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                                    <td>Wortel Lokal</td>
                                </tr>
                                <tr>
                                    <th>Hari Ke</th>
                                    <td>:</td>
                                    <td>35</td>
                                </tr>
                            </table>
                        </div>
                        <div className="table-card">
                            <table>
                                <tr>
                                    <th>Tanaman3</th>
                                    <td>:</td>
                                    {/* { <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> } */}
                                    <td>Wortel</td>
                                </tr>
                                <tr>
                                    <th>Komoditas</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                                    <td>Wortel Lokal</td>
                                </tr>
                                <tr>
                                    <th>Hari Ke</th>
                                    <td>:</td>
                                    <td>35</td>
                                </tr>
                            </table>
                        </div>
                        <div className="table-card">
                            <table>
                                <tr>
                                    <th>Tanaman4</th>
                                    <td>:</td>
                                    {/* { <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> } */}
                                    <td>Wortel</td>
                                </tr>
                                <tr>
                                    <th>Komoditas</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                                    <td>Wortel Lokal</td>
                                </tr>
                                <tr>
                                    <th>Hari Ke</th>
                                    <td>:</td>
                                    <td>35</td>
                                </tr>
                            </table>
                        </div>
                        <div className="table-card">
                            <table>
                                <tr>
                                    <th>Tanaman5</th>
                                    <td>:</td>
                                    {/* { <td>{this.props.state.journalDataByDate[0].plantList[0].comodity}</td> } */}
                                    <td>Wortel</td>
                                </tr>
                                <tr>
                                    <th>Komoditas</th>
                                    <td>:</td>
                                    {/* <td>{this.props.state.journalDataByDate[0].plantList[0].variety}</td> */}
                                    <td>Wortel Lokal</td>
                                </tr>
                                <tr>
                                    <th>Hari Ke</th>
                                    <td>:</td>
                                    <td>35</td>
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
            // </div>
        )
    }
}
