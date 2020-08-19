import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div className="colorlib-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                            <h2>News from our Blog</h2>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 animate-box">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p className="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                                <p className="author-wrap"><a href="#" className="author-img" style={{backgroundImage: 'url(images/person1.jpg)'}}></a> <a href="#" className="author">by Dave Miller</a></p>
                            </article>
                        </div>
                        <div className="col-md-4 animate-box">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p className="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                                <p className="author-wrap"><a href="#" className="author-img" style={{backgroundImage: 'url(images/person2.jpg)'}}></a> <a href="#" className="author">by Dave Miller</a></p>
                            </article>
                        </div>
                        <div className="col-md-4 animate-box">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p className="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                                <p className="author-wrap"><a href="#" className="author-img" style={{backgroundImage: 'url(images/person3.jpg)'}}></a> <a href="#" className="author">by Dave Miller</a></p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
