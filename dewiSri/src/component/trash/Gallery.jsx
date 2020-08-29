import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <section id="gallery">
                <div className="container-fluid">
                    <div className="section-header">
                        <h3 className="section-title">Gallery</h3>
                        <span className="section-divider"></span>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item wow fadeInUp">
                                <a href="assets/img/gallery/gallery-1.jpg" data-gall="portfolioGallery" className="venobox">
                                    <img src="assets/img/gallery/gallery-1.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item wow fadeInUp">
                                <a href="assets/img/gallery/gallery-2.jpg" data-gall="portfolioGallery" className="venobox">
                                    <img src="assets/img/gallery/gallery-2.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item wow fadeInUp">
                                <a href="assets/img/gallery/gallery-3.jpg" data-gall="portfolioGallery" className="venobox">
                                    <img src="assets/img/gallery/gallery-3.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item wow fadeInUp">
                                <a href="assets/img/gallery/gallery-4.jpg" data-gall="portfolioGallery" className="venobox">
                                    <img src="assets/img/gallery/gallery-4.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item wow fadeInUp">
                                <a href="assets/img/gallery/gallery-5.jpg" data-gall="portfolioGallery" className="venobox">
                                    <img src="assets/img/gallery/gallery-5.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item wow fadeInUp">
                                <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="venobox">
                                    <img src="assets/img/gallery/gallery-6.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
