import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-lg-4 col-md-4">
                            <div className="contact-about">
                            <h3>Avilon</h3>
                            <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                            <div className="social-links">
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="info">
                            <div>
                                <i className="ion-ios-location-outline"></i>
                                <p>A108 Adam Street<br />New York, NY 535022</p>
                            </div>

                            <div>
                                <i className="ion-ios-email-outline"></i>
                                <p>info@example.com</p>
                            </div>

                            <div>
                                <i className="ion-ios-telephone-outline"></i>
                                <p>+1 5589 55488 55s</p>
                            </div>

                            </div>
                        </div>

                        <div className="col-lg-5 col-md-8">
                            <div className="form">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="form-row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate"></div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
