import './App.css';

import AgricultureLanding from './Component/Hero';

import Testimonials from './Component/Testimonials';
import Footer from './Component/Footer';

import HeroSection from './Component/HeroSection';
import { StickyScrollRevealDemo } from './Component/Stickyscroll';
import Features from './Component/Features';




function App() {

  return (
    <>
       <div className='flex flex-col overflow-hidden'>
        <AgricultureLanding />
        <Features/>
       

        <StickyScrollRevealDemo />
        <HeroSection />

        {/* <ScrollEffect /> */}
        <Testimonials />
        <Footer />

             
       </div>
    </>
  )
}

export default App
