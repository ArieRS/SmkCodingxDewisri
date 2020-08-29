import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../component/Header';
import HomePages from '../pages/HomePages';
import Footer from '../component/Footer';
import MainPage from '../pages/MainPage';
import Login from '../component/main/DewiSriComponent/Login';
import Register from '../component/main/DewiSriComponent/Register';
import { register } from '../serviceWorker';


export const MainApp = (auth) => {
    return (
        <div>
            <Header></Header>       
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePages} />
                    <Route exact path="/main" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
            {
                auth == false ?     
                <Footer></Footer>
                :
                <div></div>
            }
        </div>
    )
}
