import React from 'react';
import Navigation from './component/Navigation'
import Home from './component/Home'
import Featured from './component/Featured'
import Services from './component/Services'
import Intro from './component/Intro'
import WorkFeatured from './component/WorkFeatured'
import Counter from './component/Counter'
import Blog from './component/Blog'
import Subscribe from './component/Subscribe'
import Princing from './component/Princing'
import Footer from './component/Footer'
import './App.css';

function App() {
  return (
    <div id="page">
      <Navigation />
      <Home />
      <Featured />
      <Services />
      <Intro />
      <WorkFeatured />
      <Counter />
      <Blog />
      <Subscribe />
      <Princing />
      <Footer />
    </div>
  )
}

export default App;
