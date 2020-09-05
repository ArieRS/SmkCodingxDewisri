import React, { Component } from 'react'
import Section from '../component/main/Section'
import Main from '../component/Main'

export default class HomePages extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: localStorage.getItem('auth')
        }
    }

    render() {
        return (
            <div>
                <Section></Section>
                {/* {
                    this.state.isLogin ? 
                    <Main />
                    :
                    <div/>
                } */}
                <Main/>
            </div>
        )
    }
}
