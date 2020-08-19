import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div className="colorlib-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                            <h2>Collaborate with your design team in a new way</h2>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box">
                            <span className="play"><a href="https://vimeo.com/channels/staffpicks/93951774" className="pulse popup-vimeo"><i className="icon-play3"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
