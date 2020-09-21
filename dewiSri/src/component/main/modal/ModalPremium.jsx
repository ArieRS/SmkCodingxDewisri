import React, { Component } from 'react';

export default function ModalPremium({ handleClose, show, children, state, method, uang, koin, title }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div id="modal" className={showHideClassName}>
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
                            <div id="modal-content" className="content" style={{ padding: '10px 0' }}>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
