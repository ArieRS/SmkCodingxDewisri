import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../component/Header';
import HomePages from '../pages/HomePages';
import Footer from '../component/Footer';
import MainPage from '../pages/MainPage';
import Table from '../pages/TableDownload';
import Login from '../component/main/Login';
import Register from '../component/main/Register';
import Profile from '../component/main/Profile';
import Admin from '../admin/AdminPanel';

export const MainApp = (auth) => {
    return (
        <div>
            {/* <Profile /> */}
            
            {/* <Header isLogin={auth}></Header> */}
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <HomePages isLogin={auth}></HomePages>} />
                    <Route exact path="/main" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/table" component={Table} />
                </Switch>
            </Router>
            <Footer></Footer>
            { auth === false ? <Footer></Footer> : <div></div> }
        </div>
    )
}