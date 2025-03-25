import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Skills from './components/Skills';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About />
    <hr />
    <Skills/>
    <hr />
    <Projects />
    <Contact />
    </>
  )
}

export default App
