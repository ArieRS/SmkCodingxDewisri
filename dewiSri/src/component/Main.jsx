import React, { Component } from 'react'
import Pricing from './main/Pricing'
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
                <Navigation />
                <Tanaman />
                <KebutuhanTanam />
                <JurnalHarian />
                <CatatanPertanian />
                <Other />
                <Pricing />
            </main>
        )
    }
}
