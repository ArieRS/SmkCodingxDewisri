import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section id="home" className="video-hero" style={{height: '700px', backgroundImage: 'url(images/cover_img_1.jpg)',  backgroundSize: 'cover', backgroundPosition: 'center center',backgroundAttachment:'fixed'}} data-section="home">
                <div className="overlay"></div>
                    <a className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=vqqt5p0q-eU',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a> 
                    <div className="display-t text-center">
                        <div className="display-tc">
                            <div className="container">
                                <div className="col-md-12 col-md-offset-0">
                                    <div className="animate-box">
                                        <h2>Take on your biggest projects and goals</h2>
                                        <p>with Unapp's high quality features</p>
                                        <p><a href="gallery.html" className="btn btn-primary btn-lg btn-custom">Get premium</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}
