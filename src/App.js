import './index.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import React from 'react'
import TopNav from './TopNav';
import About from './aboutme'
import Message from './Message'
import Designs from './designs'
import Projects from './projects';
import Footer from './Footer';
import PageNotFound from './PageNotFound';


import Hero from './Hero';

function App() {
  return (
    <div>
      <div className="w-full h-full md:h-[inherit] bg-[url('https://i.ibb.co/wcT26nY/emjnph.jpg')] md:bg-[url('https://i.ibb.co/zrGQxNC/emn.jpg')] bg-cover bg-no-repeat">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <TopNav />
                <Hero />
                <Footer />
              
              </>} />
            <Route path="*" element={
              <>
                
                <PageNotFound />
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
                <Footer />
            </>} />

        </Routes>

      </BrowserRouter>
   
      </div>
      
      </div>
  );
}

export default App;
