import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Doctors from './components/Doctors.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ServicePage from './components/ServicePage.jsx'

function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  )
}
