import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Advantages from './components/Advantages';
import Landing from './components/Landing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#e8eaf0] font-sans antialiased">
      <Hero />
      <AboutUs />
      <Features />
      <HowItWorks />
      <Advantages />
      <Landing />
      <Footer />
    </div>
  );
}
