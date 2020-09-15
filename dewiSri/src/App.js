import React from 'react';
import './App.css';
import { MainApp } from './system/Router';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: localStorage.getItem('auth')
    }
  }
  componentWillMount(){
    this.isLogin();
  }

  isLogin(){
    var authLocalStorage = localStorage.getItem('auth');
    this.setState({
      isLogin: authLocalStorage
    })
    // console.log("ndekApp:" +this.state.isLogin);
    // console.log("ndekApp:" +authLocalStorage);
  }

  render() {
    // const MyApp = MainApp(false);
    // return <MyApp />
    return MainApp(this.state.isLogin)
  }
}