import React, { Component } from 'react'

export default class Princing extends Component {
    render() {
        return (
            <div className="colorlib-pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                            <h2>Pricing</h2>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center animate-box">
                            <div className="pricing">
                                <h2 className="pricing-heading">Starter</h2>
                                <div className="price"><sup className="currency">$</sup>9<small>per month</small></div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="#" className="btn btn-primary">Select Plan</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center animate-box">
                            <div className="pricing">
                                <h2 className="pricing-heading">Basic</h2>
                                <div className="price"><sup className="currency">$</sup>27<small>per month</small></div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="#" className="btn btn-primary">Select Plan</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center animate-box">
                            <div className="pricing">
                                <h2 className="pricing-heading">Pro</h2>
                                <div className="price"><sup className="currency">$</sup>74<small>per month</small></div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="#" className="btn btn-primary">Select Plan</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center animate-box">
                            <div className="pricing">
                                <h2 className="pricing-heading">Unlimited</h2>
                                <div className="price"><sup className="currency">$</sup>140<small>per month</small></div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="#" className="btn btn-primary">Select Plan</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
