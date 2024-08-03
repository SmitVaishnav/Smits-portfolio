import React from 'react';
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
    smoothMobile: false, // Disable smooth scrolling on mobile devices if needed
    // Add other Locomotive Scroll options here
  });
  
  return (
    <div data-scroll-container className="w-screen bg-zinc-900">
      <Header />
      <div id="home">
        <LandingPage />
      </div>
      <div id="skills">
        <Marque />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-us">
        <Footer />
      </div>
    </div>
  );
}

export default App;



// import { useEffect, useRef } from "react";
// import Header from "./components/Header";
// import LandingPage from "./components/LandingPage";
// import Marque from "./components/Marque"
// import Projects from "./components/Projects";
// import Navmenu from "./components/Navmenu";
// import Footer from "./components/Footer";
// import LocomotiveScroll from "locomotive-scroll";
// import { BrowserRouter, Route, Routes } from "react-router-dom";


// function App() {

//   // useEffect(() => {
//   //   const cursor = document.querySelector('.blob');

//   //   const handleMouseMove = (e) => {
//   //     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
//   //   };

//   //   document.addEventListener('mousemove', handleMouseMove);

//   //   return () => {
//   //     document.removeEventListener('mousemove', handleMouseMove);
//   //   };
//   // }, []);

//   // const divRef = useRef(null);
//   // const cursorRef = useRef(null);

//   // useEffect(() => {
//   //   const handleMouseMove = (e) => {
//   //     if (cursorRef.current) {
//   //       cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
//   //     }
//   //   };

//   //   const handleMouseEnter = () => {
//   //     document.addEventListener('mousemove', handleMouseMove);
//   //   };

//   //   const handleMouseLeave = () => {
//   //     document.removeEventListener('mousemove', handleMouseMove);
//   //   };

//   //   const divElement = divRef.current;

//   //   if (divElement) {
//   //     divElement.addEventListener('mouseenter', handleMouseEnter);
//   //     divElement.addEventListener('mouseleave', handleMouseLeave);
//   //   }

//   //   return () => {
//   //     if (divElement) {
//   //       divElement.removeEventListener('mouseenter', handleMouseEnter);
//   //       divElement.removeEventListener('mouseleave', handleMouseLeave);
//   //     }
//   //   };
//   // }, []);

//   const locomotiveScroll = new LocomotiveScroll({
//     smooth: true,
//     smoothMobile: false, // Disable smooth scrolling on mobile devices if needed
//     // Add other Locomotive Scroll options here
//   });
  
//   return (

//     <div data-scroll-container className="w-screen  bg-zinc-900 ">
//       <Header />
//       <LandingPage />
//       {/* <div ref={cursorRef} > */}

//       <Marque/>
//       {/* </div> */}
//       <Projects/>
//       <Footer />

//     </div>

//   );
// }

// export default App;
