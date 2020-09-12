import React, { Component } from 'react'
import Section from '../component/main/Section'
import Main from '../component/Main'

import Pricing from '../component/main/Pricing'
import Navigation from '../component/main/Navigation'
import Tanaman from '../component/main/DewiSriComponent/Tanaman'
import KebutuhanTanam from '../component/main/KebutuhanTanam'
import JurnalHarian from '../component/main/JurnalHarian'
import CatatanPertanian from '../component/main/CatatanPertanian'
import Other from '../component/main/Other'
import { LOGIN_END, GET_JOURNAL_BY_DATE, GET_PLANTING_NEEDS, ADD_JOURNAL } from '../system/Strings'
import { postFunction, responseData, getDataFunction } from '../models/Model'
import moment from 'moment';
import Header2 from '../component/Header2'

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
        await this.getUserData();
        await this.getCurrentDate();
    }

    async getUserData(){
        var data = new FormData()

        data.append('phone', localStorage.getItem('phone'))
        data.append('password', localStorage.getItem('password'))

        await postFunction(data, LOGIN_END).then(() => {
            if (responseData.status == 200) {
                // console.log("success");
                this.setState({
                    userData: responseData.data,
                    journalData: responseData.data.journalList
                },() => console.log('userData: '+this.state.userData._id))
                
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
        var isoDate = moment(d, "MM-DD-YYYY").subtract('days', 1).format('D-M-Y');
        // console.log("current date state : " + d);
        this.setState({
            currentDate: newDate.format('LL'),
            dateFormat: newDateFormat,
            dateIsoFormat: isoDate
        },() => this.getPlantByDate(isoDate))

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
        },() => this.getPlantByDate(isoDate))
    }

    async getPlantByDate(inputDate){
        var data = new FormData();
        data.append('owner_userId', this.state.userData._id);
        
        if (inputDate != null || inputDate != undefined) {
            data.append('inputDate', inputDate)
        }
        // inputDate != null || inputDate != undefined ? data.append('inputDate', inputDate) : '';
        
        var query = GET_JOURNAL_BY_DATE+this.state.userData._id+'/'+this.state.dateIsoFormat;

        console.log(query);
        await getDataFunction(query).then(() => {
            if (responseData.status == 200) {
                
                if (responseData.data == undefined || responseData.data == null || responseData.data.length == 0) {
                    postFunction(data, ADD_JOURNAL).then(() => {
                        // alert(responseData.status)
                        // alert(ADD_JOURNAL)
                        window.location.reload()
                    })
                }{
                    this.setState({
                    journalDataByDate: responseData.data,

                    },() => {
                        // console.log("dataaaaa: "+ this.state.journalDataByDate);
                        // console.log(query);
                        if (this.state.journalDataByDate.length != 0) {   
                            this.getPlantingNeeds(this.state.journalDataByDate[0].plantList[0]._id)
                        }
                    })
                }
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
                if(responseData.data.length != 0) 
                    this.setState({
                        bibitData: responseData.data[0]._idBibit,
                        bbmData: responseData.data[0]._idBBMList,
                        pupukData: responseData.data[0]._idPupukList,
                        pestisidaData: responseData.data[0]._idPestisidaList,
                    },() => {/*console.log("dataaaaa: "+ this.state.pupukData);console.log(query)*/})
                
                
            }else{
                alert("galgagal")
            }
        })
    }

    render() {
        return (
            <div>
                {
                    // this.state.isLogin ? <></> : <Section></Section> 
                }
                <Section></Section> 
                {
                    this.state.isLogin ? 
                    <main id="main" className='mt-5'>

                        <Navigation state={this.state} method={this.method} />

                        {
                            this.state.journalDataByDate.length != 0 ? 
                            <>
                                {/* <Navigation state={this.state} method={this.method} /> */}
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
                        
                    </main>
                    :
                    <div/>
                    }
            </div>
        )
    }
}
