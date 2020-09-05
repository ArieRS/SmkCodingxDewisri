import React, { Component } from 'react'
import Section from '../component/main/Section'
import Main from '../component/Main'

import Pricing from '../component/main/Pricing'
import Navigation from '../component/main/DewiSriComponent/Navigation'
import Tanaman from '../component/main/DewiSriComponent/Tanaman'
import KebutuhanTanam from '../component/main/DewiSriComponent/KebutuhanTanam'
import JurnalHarian from '../component/main/DewiSriComponent/JurnalHarian'
import CatatanPertanian from '../component/main/DewiSriComponent/CatatanPertanian'
import Other from '../component/main/DewiSriComponent/Other'
import { LOGIN_END, GET_JOURNAL_BY_DATE, GET_PLANTING_NEEDS } from '../system/Strings'
import { postFunction, responseData, getDataFunction } from '../models/Model'
import moment from 'moment';

export default class HomePages extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: localStorage.getItem('auth'),
            userData: [],
            journalDataByDate: [],
            bibitData: [],
            bbmData: [],
            pupukData: [],
            pestisidaData: [],
            date:'',
            index: 0,
            currentDate: "",
            dateFormat: "",
            dateIsoFormat: ''
        }
        this.method = {
            getCurrentDate: this.getCurrentDate.bind(this),
            dateDecrement: this.dateDecrement.bind(this),
            dateIncrement: this.dateIncrement.bind(this),
        }
    }

    async componentWillMount(){
        this.getUserData();
        await this.getCurrentDate();
    }

    async getUserData(){
        var data = new FormData()

        data.append('phone', localStorage.getItem('phone'))
        data.append('password', localStorage.getItem('password'))

        await postFunction(data, LOGIN_END).then(() => {
            if (responseData.status == 200) {
                console.log("success");
                this.setState({
                    userData: responseData.data,
                    journalData: responseData.data.journalList
                },() => console.log('userData: '+this.state.userData.username))
                
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
        },() => this.getPlantByDate())
    }

    dateDecrement(d) {
        var newDateFormat = moment(d, "MM-DD-YYYY").subtract('days', 1).format('L');
        var newDate = moment(d, "MM-DD-YYYY").subtract('days', 1);
        console.log("current date state : " + d);
        this.setState({
            currentDate: newDate.format('LL'),
            dateFormat: newDateFormat
        })
    }

    dateIncrement(d) {
        var newDateFormat = moment(d, "MM-DD-YYYY").add('days', 1).format('L');
        var newDate = moment(d, "MM-DD-YYYY").add('days', 1);
        console.log("current date state : " + d);
        this.setState({
            currentDate: newDate.format('LL'),
            dateFormat: newDateFormat
        })
    }


    async getPlantByDate(){
        var query = GET_JOURNAL_BY_DATE+this.state.dateIsoFormat;
        console.log(query);
        await getDataFunction(query).then(() => {
            if (responseData.status == 200) {
                this.setState({
                    journalDataByDate: responseData.data,

                },() => {
                    console.log("dataaaaa: "+ this.state.journalDataByDate[0].dailyJournal.inputDate);
                    console.log(query);
                    this.getPlantingNeeds(this.state.journalDataByDate[0].plantList[0]._id)
                })
            }else{
                alert("galgagal")
            }
        })
    }

    async getPlantingNeeds(idPlant){
        var query = GET_PLANTING_NEEDS+idPlant;
        console.log(query);
        await getDataFunction(query).then(() => {
            if (responseData.status == 200) {
                this.setState({
                    bibitData: responseData.data[0]._idBibit,
                    bbmData: responseData.data[0]._idBBMList,
                    pupukData: responseData.data[0]._idPupukList,
                    pestisidaData: responseData.data[0]._idPestisidaList,
                },() => {console.log("dataaaaa: "+ this.state.pupukData);console.log(query)})
            }else{
                alert("galgagal")
            }
        })
    }

    render() {
        return (
            <div>
                <Section></Section>
                {
                    this.state.isLogin ? 
                    <main id="main">
                        {
                            this.state.bibitData.length != 0 ? 
                            <>
                                <Navigation state={this.state} method={this.method} />
                                <Tanaman state={this.state} method={this.method} />
                                <KebutuhanTanam state={this.state} method={this.method}/>
                                <JurnalHarian state={this.state} method={this.method}/>
                                <CatatanPertanian />
                                <Other />
                                <Pricing />
                            </>
                            :
                            <div></div>
                        }
                        {/* <Navigation state={this.state} method={this.method} />
                        <Tanaman state={this.state} method={this.method} />
                        <KebutuhanTanam />
                        <JurnalHarian />
                        <CatatanPertanian />
                        <Other />
                        <Pricing /> */}
                    </main>
                    :
                    <div/>
                    }
            </div>
        )
    }
}
