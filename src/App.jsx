import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { IconWhatsApp } from './components/ui'
import { waLink } from './utils'
import { services } from './content'

export default function App() {
  const [serviceTab, setServiceTab] = useState(services.tabs[0].id)

  return (
    <>
      <a className="skip-link" href="#services">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero onPickTab={setServiceTab} />
        <Stats />
        <Services activeTab={serviceTab} onTabChange={setServiceTab} />
        <Work />
        <Process />
        <Clients />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />

      <a
        className="wa-fab"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <IconWhatsApp />
      </a>
    </>
  )
}
