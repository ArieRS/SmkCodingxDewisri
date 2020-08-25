import React, { Component } from 'react'
import About from './main/About'
import Features from './main/Features'
import AdvanceFeatures from './main/AdvanceFeatures'
import CallToAction from './main/CallToAction'
import MoreFeatures from './main/MoreFeatures'
import Clients from './main/Clients'
import Princing from './main/Princing'
import Faq from './main/Faq'
import Team from './main/Team'
import Gallery from './main/Gallery'
import Contact from './main/Contact'
import Navigation from './main/DewiSriComponent/Navigation'
import Tanaman from './main/DewiSriComponent/Tanaman'
import KebutuhanTanam from './main/DewiSriComponent/KebutuhanTanam'
import JurnalHarian from './main/DewiSriComponent/JurnalHarian'
import CatatanPertanian from './main/DewiSriComponent/CatatanPertanian'
import Other from './main/DewiSriComponent/Other'

export default class Main extends Component {
    render() {
        return (
            <main id="main">
                <div className="container dewisri">
                    <Navigation />
                    <Tanaman />
                    <KebutuhanTanam />
                    <JurnalHarian />
                    <CatatanPertanian />
                    <Other />
                </div>
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
            </main>
        )
    }
}
