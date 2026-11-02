import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Goal from "./components/OurGoal";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  
useLayoutEffect(() => {
  const previousPosition = Number(
    sessionStorage.getItem('atlas-refresh-scroll') || 0
  );

  sessionStorage.removeItem('atlas-refresh-scroll');

  if (previousPosition > 0) {
    // Restore previous position after React renders
    window.scrollTo(0, previousPosition);

    // Start smooth scrolling after restoration
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    });
  }
}, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Services />
        <div id="gallery">
          <Gallery />
        </div>
        <Packages />
        <Goal />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
