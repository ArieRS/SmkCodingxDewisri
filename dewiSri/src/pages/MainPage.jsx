import React, { Component } from 'react'
import Calendar from 'react-calendar';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class MainPage extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "#fff", marginTop:100 }}>
                <div className="container-sm">
                    
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                    />
                </div>
            </div>


        )
    }
}
