import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../component/Header';
import Header2 from '../component/Header2';
import HomePages from '../pages/HomePages';
import Footer from '../component/Footer';
import MainPage from '../pages/MainPage';
import Login from '../component/main/DewiSriComponent/Login';
import Register from '../component/main/DewiSriComponent/Register';
import Profile from '../component/main/DewiSriComponent/Profile';

export const MainApp = (auth) => {
    return (
        <div>
            <Profile />
            <Header></Header>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePages} />
                    <Route exact path="/main" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
            { auth === false ? <Footer></Footer> : <div></div> }
        </div>
    )
}