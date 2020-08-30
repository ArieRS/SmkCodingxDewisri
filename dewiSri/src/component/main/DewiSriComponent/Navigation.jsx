import React, { Component } from 'react'
// import moment from 'moment';
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

    render() {
        return (
            <div className="container">
                <nav className="navigation-panel mt-5 px-4 rounded-pill" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <a class="btn btn-light rounded-pill" >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg> <span class="d-none d-md-inline text-success">Get Premium</span>
                    </a>
                    <div className="w-50 d-flex justify-content-between">
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
                    </div>


                    <ul class="navbar-nav">
                        <li class="nav-item d-inline">

                            <i className="fa fa-user-circle fa-2x"></i>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                {/* <img class="float-left" src="img/users/kolyan.jpg" alt="" /> */}
                                <p>Username</p>
                                <p class="float-left">Name</p>
                                <p>Surname</p>
                                <p>Status</p>
                                <div class="dropdown-divider"></div>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <a class="btn btn-secondary" href="#">Open Profile</a>
                                    <a class="btn btn-danger" href="#">Exit</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
