import React, { Component } from 'react'
import moment from 'moment';
export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: "",
            dateFormat: ""
        }
        this.monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
    }
    componentWillMount() {
        // var date = new Date()
        this.getCurrentDate()
    }

    getCurrentDate() {
        // var today = date;
        // var dd = String(today.getDate()).padStart(2, '0');
        // var mm = today.getMonth();
        // var yyyy = today.getFullYear();

        // var newToday = dd + ', ' + this.monthNames[mm] + ' ' + yyyy;
        // var newDateFormat = dd + "." + mm + "." + yyyy;
        // this.setState({
        //     currentDate: newToday,
        //     dateFormat: newDateFormat
        // })
        var newDateFormat = moment().format('L');
        var currentDate = moment().format('LL');
        this.setState({
            currentDate: currentDate,
            dateFormat: newDateFormat
        }, console.log("date: " + newDateFormat))
    }

    dateDecrement(d) {
        // var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        // var newDate = new Date(d.replace(pattern, '$3-$2-$1'));
        // // var  = new Date(d);
        // var dd = newDate.setDate(newDate.getDate() - 1);
        // var mm = newDate.getMonth();
        // var yyyy = newDate.getFullYear();

        // var result = dd + ', ' + this.monthNames[mm] + ' ' + yyyy;
        // var newDate = new Date("" + yyyy + "/" + mm + "/" + dd + "");
        // this.setState({
        //     currentDate: result,
        //     dateFormat: newDate
        // })
        // var newDate = moment(d, "MM-DD-YYYY");
        // console.log("current date state : " + newDate.format('LL'));
        var newDateFormat = moment(d,"MM-DD-YYYY").subtract('days', 1).format('L');
        var newDate = moment(d, "MM-DD-YYYY").subtract('days', 1);
        console.log("current date state : " + d);
        this.setState({
            currentDate: newDate.format('LL'),
            dateFormat: newDateFormat
        })
    }

    dateIncrement(d) {
        var newDateFormat = moment(d,"MM-DD-YYYY").add('days', 1).format('L');
        var newDate = moment(d, "MM-DD-YYYY").add('days', 1);
        console.log("current date state : " + d);
        this.setState({
            currentDate: newDate.format('LL'),
            dateFormat: newDateFormat
        })
    }

    render() {
        return (
            <nav className="navigation-panel mt-5" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <button className="btn btn-light rounded-pill">
                    <a href="#" className="text-dark">Go Premium</a>
                </button>
                <a onClick={() => this.dateDecrement(this.state.dateFormat)}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                </a>

                <span><b>{this.state.currentDate}</b></span>
                <a onClick={() => this.dateIncrement(this.state.dateFormat)}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </a>

                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                </svg>
            </nav>
        )
    }
}
