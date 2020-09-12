import React, { Component } from 'react'
import Pricing from './main/Pricing'
import Navigation from './main/Navigation'
import Tanaman from './main/Tanaman'
import KebutuhanTanam from './main/KebutuhanTanam'
import JurnalHarian from './main/JurnalHarian'
import CatatanPertanian from './main/CatatanPertanian'
import Other from './main/Other'

export default class Main extends Component {
    render() {
        return (
            <main id="main" className="container">
                <Navigation />
                <Tanaman />
                <KebutuhanTanam />
                <JurnalHarian />
                <CatatanPertanian />
                <Pricing />
            </main>
        )
    }
}
