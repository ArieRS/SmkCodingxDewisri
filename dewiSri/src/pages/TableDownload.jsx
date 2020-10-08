import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { JSONToHTMLTable } from '@kevincobain2000/json-to-html-table'

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default class TableDownload extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename= {this.props.state.journalDataByDate[0].plantList[this.props.state.index].variety}
                        sheet="tablexls"
                        buttonText="Download as XLS" />
                </div>
                <table className="table table-bordered table-condensed table-sm" id='table-to-xls' >
                    <td width="80%">
                        <JSONToHTMLTable data={this.props.state.journalDataByDate[0].plantList[this.props.state.index]} tableClassName="table table-sm" />
                    </td>
                </table>
            </div>
        )
    }
}
