import React, {Component} from 'react'

export default class KebutuhanTaman extends Component {
    showDetail(nama) {
        const modalTitle = document.querySelector('#staticBackdropKebutuhanTanam .modal-title');
        const modalContent = document.querySelector('#staticBackdropKebutuhanTanam .modal-body');
        const modalFooter = document.querySelector('#staticBackdropKebutuhanTanam .modal-footer');
        modalTitle.innerHTML = nama;
        modalContent.innerHTML = `
        <section id="contact">
            <div class="form">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="form-row">
                        <div class="form-group col-lg-6">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group col-lg-6">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                        </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                    <div class="text-center"><button type="submit" className="btn btn-primary" title="Send Message">Send Message</button></div>
                </form>
            </div>
        </section>
        `
        modalFooter.innerHTML = ``
    }

    render() {
        return (
            <section id="pricing" className="container">
                <div className="card-kebutuhan-tanam my-3">
                    <div className="section-header">
                        <h3 className="section-title">Kebutuhan Tanam</h3>
                        <span className="section-divider"></span>
                    </div>
                    <a href="#" className="button btn-get-started">Get Started</a>
                    <table border="1" className="table-custom mt-3">
                        <thead>
                            <tr className="table-success">
                                <td>Bibit</td>
                                <td>Pupuk</td>
                                <td>Air</td>
                                <td>Pestisida</td>
                                <td>Lain - Lain</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#staticBackdropKebutuhanTanam"
                                        style={
                                            {cursor: 'pointer'}
                                        }
                                        onClick={
                                            this.showDetail.bind(this, 'bibit')
                                    }>
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                    </svg>
                                </td>
                                <td>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#staticBackdropKebutuhanTanam"
                                        style={
                                            {cursor: 'pointer'}
                                        }
                                        onClick={
                                            this.showDetail.bind(this, 'pupuk')
                                    }>
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                    </svg>
                                </td>
                                <td>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#staticBackdropKebutuhanTanam"
                                        style={
                                            {cursor: 'pointer'}
                                        }
                                        onClick={
                                            this.showDetail.bind(this, 'air')
                                    }>
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                    </svg>
                                </td>
                                <td>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#staticBackdropKebutuhanTanam"
                                        style={
                                            {cursor: 'pointer'}
                                        }
                                        onClick={
                                            this.showDetail.bind(this, 'pestisida')
                                    }>
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                    </svg>
                                </td>
                                <td>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#staticBackdropKebutuhanTanam"
                                        style={
                                            {cursor: 'pointer'}
                                        }
                                        onClick={
                                            this.showDetail.bind(this, 'lain-lain')
                                    }>
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}
