import React, { Component } from 'react'
import About from './About'
import Features from './Features'
import AdvanceFeatures from './AdvanceFeatures'
import CallToAction from './CallToAction'
import MoreFeatures from './MoreFeatures'
import Clients from './Clients'
import Princing from './Princing'
import Faq from './Faq'
import Team from './Team'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'

export default class Main extends Component {
    render() {
        return (
            <main id="main">
                <About />
                <Features />
                <AdvanceFeatures />
                <CallToAction />
                <MoreFeatures />
                <Clients />
                <Princing />
                <Faq />
                <Team />
                <Gallery />
                <Contact />
                <Footer />
            </main>
        )
    }
}
