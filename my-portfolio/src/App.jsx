import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ComingSoon from './components/ComingSoon';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <Hero/>
    <About />
    {/* <hr />
    <Skills/>
    <hr />
    <Projects /> */}
    <Contact/>
    <ComingSoon/>
    <Footer />
    </div>
  )
}

export default App
