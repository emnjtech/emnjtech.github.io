import './index.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import React from 'react'
import TopNav from './TopNav';
import About from './aboutme'
import Message from './Message'
import Designs from './designs'
import Projects from './projects';
import Footer from './Footer';


import Hero from './Hero';

function App() {
  return (
    <div>
      <div className=" h-[1500px] md:h-[inherit] w-full bg-[url('https://i.ibb.co/wcT26nY/emjnph.jpg')] md:bg-[url('https://i.ibb.co/zrGQxNC/emn.jpg')] bg-cover bg-no-repeat">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <TopNav />
                <Hero />
                <Footer />
              
            </>} />
          <Route path="/aboutme" element={
            <>
              <TopNav />
                <About />
                <Footer />
            </>} />
          <Route path="/designs" element={
            <>
              <TopNav />
                <Designs />
                <Footer />
            </>} />
          <Route path="/projects" element={
            <>
              <TopNav />
                <Projects />
                <Footer />
            </>} />
          <Route path="/message" element={
            <>
              <TopNav />
                <Message />
                
            </>} />

        </Routes>

      </BrowserRouter>
   
      </div>
      
      </div>
  );
}

export default App;
