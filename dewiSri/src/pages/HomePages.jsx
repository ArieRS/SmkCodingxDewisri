import React, { Component } from 'react'
import Intro from '../component/main/Intro'
import Pricing from '../component/main/Pricing'
import KebutuhanTanam from '../component/main/KebutuhanTanam'
import JurnalHarian from '../component/main/JurnalHarian'
import CatatanPertanian from '../component/main/CatatanPertanian'
import Other from '../component/main/Other'
import { LOGIN_END, GET_JOURNAL_BY_DATE, GET_PLANTING_NEEDS, ADD_JOURNAL } from '../system/Strings'
import { postFunction, responseData, getDataFunction } from '../models/Model'
import moment from 'moment';
import Header from '../component/Header';

export default class HomePages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: localStorage.getItem('auth'),
            userData: [],
            journalDataByDate: [],
            bibitData: [],
            bbmData: [],
            pupukData: [],
            pestisidaData: [],
            date: '',
            index: 0,
            currentDate: "",
            dateFormat: "",
            dateIsoFormat: ''
        }
        this.method = {
            getCurrentDate: this.getCurrentDate.bind(this),
            dateDecrement: this.dateDecrement.bind(this),
            dateIncrement: this.dateIncrement.bind(this),
            slideBefore: this.slideBefore.bind(this),
            slideNext: this.slideNext.bind(this)
        }
    }

    async componentWillMount() {
        await this.getUserData();
        await this.getCurrentDate();
    }

    async getUserData() {
        var data = new FormData()

        data.append('phone', localStorage.getItem('phone'))
        data.append('password', localStorage.getItem('password'))

        await postFunction(data, LOGIN_END).then(() => {
            if (responseData.status == 200) {
                // console.log("success");
                this.setState({
                    userData: responseData.data,
                    journalData: responseData.data.journalList
                }, () => console.log('userData: ' + this.state.userData._id))

            } else {
                alert(responseData.message)
            }
        })

    }

    getCurrentDate() {
        var newDateFormat = moment().format('L');
        var currentDate = moment().format('LL');
        var isoDate = moment().format('D-M-Y');
        this.setState({
            currentDate: currentDate,
            dateFormat: newDateFormat,
            dateIsoFormat: isoDate
        }, () => this.getPlantByDate())
    }

    dateDecrement(d) {
        var newDateFormat = moment(d, "MM-DD-YYYY").subtract('days', 1).format('L');
        var newDate = moment(d, "MM-DD-YYYY").subtract('days', 1);
        var isoDate = moment(d, "MM-DD-YYYY").subtract('days', 1).format('D-M-Y');
        // console.log("current date state : " + d);
        this.setState({
            currentDate: newDate.format('LL'),
            dateFormat: newDateFormat,
            dateIsoFormat: isoDate
        }, () => this.getPlantByDate({ inputDate: isoDate }))

    }

    dateIncrement(d) {
        var newDateFormat = moment(d, "MM-DD-YYYY").add('days', 1).format('L');
        var newDate = moment(d, "MM-DD-YYYY").add('days', 1);
        var isoDate = moment(d, "MM-DD-YYYY").add('days', 1).format('D-M-Y');
        // console.log("current date state : " + d);
        this.setState({
            currentDate: newDate.format('LL'),
            dateFormat: newDateFormat,
            dateIsoFormat: isoDate
        }, () => this.getPlantByDate({ inputDate: isoDate }))
    }

    async getPlantByDate(params) {
        var data = new FormData();
        data.append('owner_userId', this.state.userData._id);

        if (params != null || params != undefined) {

            if (params.inputDate != null || params.inputDate != undefined) {
                data.append('inputDate', params.inputDate)
            }
        }
        // inputDate != null || inputDate != undefined ? data.append('inputDate', inputDate) : '';

        var query = GET_JOURNAL_BY_DATE + this.state.userData._id + '/' + this.state.dateIsoFormat;

        console.log(query);
        await getDataFunction(query).then(() => {
            if (responseData.status == 200) {

                if (responseData.data == undefined || responseData.data == null || responseData.data.length == 0) {
                    postFunction(data, ADD_JOURNAL).then(() => {
                        // alert(responseData.status)
                        // alert(ADD_JOURNAL)
                        window.location.reload()
                    })
                } {
                    this.setState({
                        journalDataByDate: responseData.data,

                    }, async () => {
                        // console.log("dataaaaa: "+ this.state.journalDataByDate);
                        // console.log(query);
                        if (this.state.journalDataByDate.length != 0) {
                            if (this.state.journalDataByDate[0].plantList.length != 0) {
                                if (params != null || params != undefined) {
                                    if (params.index != null || params.index != undefined) {
                                        await this.getPlantingNeeds(this.state.journalDataByDate[0].plantList[params.index]._id)
                                    }
                                }
                                await this.getPlantingNeeds(this.state.journalDataByDate[0].plantList[0]._id)
                            }
                            console.log('getPlant : ' + this.state.journalDataByDate[0].plantList.length);
                        }
                    })
                }
            } else {
                alert("galgagal")
            }
        })
    }

    async getPlantingNeeds(idPlant) {
        var query = GET_PLANTING_NEEDS + idPlant;
        console.log(query);
        await getDataFunction(query).then(() => {
            if (responseData.status == 200) {
                if (responseData.data != undefined) {
                    if (responseData.data.length != 0)
                    this.setState({
                        bibitData: responseData.data[0]._idBibit,
                        bbmData: responseData.data[0]._idBBMList,
                        pupukData: responseData.data[0]._idPupukList,
                        pestisidaData: responseData.data[0]._idPestisidaList,
                    }, () => {
                        console.log("dataaaaa: " + this.state.pupukData); console.log(query)
                    })
                }
                console.log(responseData.data);
            } else {
                alert("galgagal")
            }
        })
    }


    slideNext() {
        const el = document.querySelector('.panel-tanaman #rincian-table');
        const ukuran = document.querySelectorAll('.panel-tanaman #rincian-table .table-card');

        this.setState({
            position: this.state.position + 100, index: this.state.index + 1
        }, () => {
            this.getPlantByDate({ index: this.state.index })
        })
        el.style.top = `-${this.state.position}px`;
        console.log(`position: ${this.state.index}`)
    }

    slideBefore() {
        const el = document.querySelector('.panel-tanaman #rincian-table');
        const ukuran = document.querySelectorAll('.panel-tanaman #rincian-table .table-card');
        this.setState({
            position: this.state.position - 100, index: this.state.index - 1
        }, () => {
            this.getPlantByDate({ index: this.state.index })
        })
        el.style.top = `-${this.state.position}px`;
        console.log(`position: ${this.state.index}`)
    }


    render() {
        return (
            <div>

                {
                    this.state.isLogin && this.state.journalDataByDate.length != 0 ?
                        <>
                            <div className="container-fluid bg-dark" style={{ width: '100vw', height: '50vh' }}>
                                <Header state={this.state} method={this.method}></Header>
                            </div>
                            <main id="main" className='mt-5'>
                                {/* <Navigation state={this.state} method={this.method} /> */}
                                {
                                    this.state.journalDataByDate.length != 0 && this.state.journalDataByDate[0].plantList.length != 0 ?
                                        <>
                                            {/* <Navigation state={this.state} method={this.method} /> */}
                                            {/* <Tanaman state={this.state} method={this.method} /> */}
                                            <KebutuhanTanam state={this.state} method={this.method} />
                                            <JurnalHarian state={this.state} method={this.method} />
                                            <CatatanPertanian />
                                            <Other />
                                            <Pricing />
                                        </>
                                        :

                                        <div className="container-fluid" style={{ width: '100vw', height: '50vh' }}>
                                            <h1 className='text-dark text-center'>Tanaman masih kosong, silahkan tambah tanaman</h1>
                                        </div>
                                }
                            </main>
                        </>
                        :
                        <div>
                            <Header state={this.state} method={this.method}></Header>
                            <Intro></Intro>
                        </div>
                }
            </div>
        )
    }
}
