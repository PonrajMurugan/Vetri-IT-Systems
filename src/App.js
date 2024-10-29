import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Nav-bar/navbar';
import Banner from './Components/Banner/banner';
import Vis from './Components/Vetri-Systems/vis';
import About from './Components/About-us/about';
import StickyIcons from './Components/Sticky/sticky';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutPage from './Components/About-us/about-page';






function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,  
      once: true,     
      offset: 120,     
    });
  }, []);

  return (

    <Router>
    <div className="">

     <Navbar />
      <StickyIcons />
    <Routes>

    <Route path="/" element={
            <>
            <Banner />
            <Vis/>
            <About />
         
            </>
          } />

          <Route path="/about-us" element={<AboutPage/>} />








    </Routes>
    <Footer />
    
    </div>
    </Router>
  );
}

export default App;
