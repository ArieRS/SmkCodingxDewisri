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
                    <a href="#" className="btn-get-started">Download Data</a>
                    <div className="container">
                        <nav className="nav-fill">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-link active" id="nav-bibit-tab" data-toggle="tab" href="#nav-bibit" role="tab" aria-controls="nav-bibit" aria-selected="true">bibit</a>
                                <a className="nav-link" id="nav-pupuk-tab" data-toggle="tab" href="#nav-pupuk" role="tab" aria-controls="nav-pupuk" aria-selected="false">pupuk</a>
                                <a className="nav-link" id="nav-bbm-tab" data-toggle="tab" href="#nav-bbm" role="tab" aria-controls="nav-bbm" aria-selected="false">bbm</a>
                                <a className="nav-link" id="nav-pestisida-tab" data-toggle="tab" href="#nav-pestisida" role="tab" aria-controls="nav-pestisida" aria-selected="false">pestisida</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">   
                            <div className="tab-pane fade show active" id="nav-bibit" role="tabpanel" aria-labelledby="nav-bibit-tab">
                                <button className="btn-get-started mt-2"  data-toggle="modal" data-target="#staticBackdropKebutuhanTanam" onClick={this.showDetail.bind(this, 'bibit')}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade" id="nav-pupuk" role="tabpanel" aria-labelledby="nav-pupuk-tab">
                            <button className="btn-get-started mt-2"  data-toggle="modal" data-target="#staticBackdropKebutuhanTanam" onClick={this.showDetail.bind(this, 'pupuk')}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade " id="nav-bbm" role="tabpanel" aria-labelledby="nav-mmb-tab">
                            <button className="btn-get-started mt-2"  data-toggle="modal" data-target="#staticBackdropKebutuhanTanam" onClick={this.showDetail.bind(this, 'bbm')}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                            <div className="tab-pane fade" id="nav-pestisida" role="tabpanel" aria-labelledby="nav-pestisida-tab">
                            <button className="btn-get-started mt-2" data-toggle="modal" data-target="#staticBackdropKebutuhanTanam" onClick={this.showDetail.bind(this, 'pestisida')}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
