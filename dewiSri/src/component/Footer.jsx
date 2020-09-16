import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-lg-left text-center">
                            <div className="copyright">
                                &copy; Copyright <strong>SMK Coding</strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>  and Edit By SMK Coding
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
