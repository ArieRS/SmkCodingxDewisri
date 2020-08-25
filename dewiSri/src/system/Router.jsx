import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../component/Header';
import HomePages from '../pages/HomePages';
import Footer from '../component/Footer';
import MainPage from '../pages/MainPage';


export const MainApp = (auth) => {
    return (
        <div>
            <Header></Header>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePages} />
                    <Route exact path="/main" component={MainPage} />
                    <Route exact path="/coba" component={MainPage} />
                </Switch>
            </Router>
            <Footer></Footer>
        </div>
    )
}
