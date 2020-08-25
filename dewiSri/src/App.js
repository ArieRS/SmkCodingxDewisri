import React from 'react';
import './App.css';
import Header from './component/Header';
import Section from './component/main/Section';
import Main from './component/Main';
import { MainApp } from './system/Router';


export default class App extends React.Component {
  render() {
    // const MyApp = MainApp(false);
    // return <MyApp />
    
    return MainApp(false)
  }
}

