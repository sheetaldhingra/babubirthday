import { useState } from 'react'
import './App.css';
import MagicalGate from './Components/MagicalGate';
import ParticlesBackground from "./Components/ParticlesBackground";
import FireworksEffect from './Components/FireworksEffect';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <FireworksEffect />
      <ParticlesBackground />
      <MagicalGate />
    </>
  );
}

export default App
