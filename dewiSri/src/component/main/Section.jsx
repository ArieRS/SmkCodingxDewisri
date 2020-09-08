import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        return (
            <section id="intro">
                <div className="intro-text">
                    <h2>Selamat Datang di Dewisri</h2>
                    <p>Plant Your Future</p>
                    <a href="/login" className="btn-get-started scrollto">Start</a>
                </div>
            </section>
        )
    }
}
