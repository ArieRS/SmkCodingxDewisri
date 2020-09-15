import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class MainPage extends Component {
    render() {
        return (
            <div>
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
