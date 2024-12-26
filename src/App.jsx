import { useEffect, useState } from 'react';
import MobileWarning from './components/MobileWarning';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
    smoothMobile: false, // Disable smooth scrolling on mobile devices if needed
    // Add other Locomotive Scroll options here
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileWarning />;
  }

  return (
    <div className="w-screen min-h-screen bg-zinc-900 overflow-hidden data-scroll-container">
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
