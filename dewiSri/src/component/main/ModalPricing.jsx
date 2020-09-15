import React, { Component } from 'react';
import Modal from './Modal'

export default function ModalPricing({handleClose, show, children, state, method, uang, koin}) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div id="modal-pricing" className={showHideClassName}>
            <section className="col-md-12">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="staticBackdropLabel">Plant It Premium</h2>
                            <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div id="modal-content" className="content">
                                    <Modal uang={uang} koin={koin}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
