import React, { Component } from 'react';

export default function Modal({handleClose, show, children, state, method, uang, koin, title}) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div id="modal" className={showHideClassName}>
            <section className="col-md-12">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="staticBackdropLabel">{title}</h2>
                            <button type="button" className="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div id="modal-content" className="content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
