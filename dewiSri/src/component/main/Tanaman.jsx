import React, { Component } from 'react'
import PanelTanaman from './PanelTanaman';

export default class Tanaman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0
        }
    }

    render() {
        return (
            <div className="container">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
                    <div class="carousel-inner">
                        {
                            this.props.state.journalDataByDate[0].plantList.map((e, index) => {
                                return (
                                    <div class={index == 0 ? "carousel-item active" : "carousel-item"}>
                                        <PanelTanaman
                                            tanaman={this.props.state.journalDataByDate[0].plantList[index].comodity}
                                            komoditas={this.props.state.journalDataByDate[0].plantList[index].variety}
                                            hari="100"
                                        />
                                    </div>
                                )
                            })
                        }
                        {/* <div class="carousel-item active">
                            <PanelTanaman tanaman="kentang" komoditas="granola jerman" hari="100" />
                        </div>
                        <div className="carousel-item">
                            <PanelTanaman tanaman="wortel" komoditas="granola jerman" hari="100" />
                        </div>
                        <div class="carousel-item">
                            <PanelTanaman tanaman="kentang" komoditas="granola jerman" hari="100" />
                        </div> */}
                    </div>
                    <div className="button-wrapper mt-4 float-right">
                        {
                            this.props.state.index == 0 ?
                                <a aria-disabled={true} class="btn btn-custom" >
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </a>
                                :

                                <a onClick={() => this.props.method.changeState('index', this.props.state.index - 1)} class="btn btn-custom mr-4" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </a>

                        }
                        {
                            this.props.state.index+1 == this.props.state.journalDataByDate[0].plantList.length
                                ?

                                <a aria-disabled={true} class="btn btn-custom mx-3" >
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </a>
                                :

                                <a onClick={() => this.props.method.changeState('index', this.props.state.index + 1)} class="btn btn-custom mx-3" href="#carouselExampleControls" role="button" data-slide="next">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
