import React, { Component } from 'react'
import Calendar from 'react-calendar';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Header2 from '../component/Header2';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header2 />
                <div className="container-fluid" style={{ marginTop:100 }}>
                    <div className="container-sm">
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
