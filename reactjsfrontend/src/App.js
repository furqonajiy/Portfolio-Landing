import React from 'react'
import './App.css'

import { AboutMe, Achievement, Experience, Footer, Header, Project } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <AboutMe />
      <Achievement />
      <Experience />
      <Project />
      <CTA />
      <Footer />
    </div>
  )
}

export default App;