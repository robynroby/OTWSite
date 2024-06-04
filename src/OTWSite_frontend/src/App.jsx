import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Roadmap from './components/Roadmap';
import Socials from './components/Socials';
import Tokenomics from './components/Tokenomics';

function App() {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, target } = e;
    const { offsetLeft, offsetWidth } = target;
    const centerX = offsetLeft + offsetWidth / 2;
    const rotationAngle = (clientX - centerX) / offsetWidth * 4320;
    setRotation(rotationAngle);
  };

  return (
    <div className="App"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation(0)}>
      <Header />
      <img
        src="logo.png"
        alt="Meme"
        className="meme-image"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <Socials />
      <HeroSection />
      <Roadmap />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
