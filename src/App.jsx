import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Section from './Components/Section.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section title="MacBook Air" subtitle="Lean. Mean. M3 machine." image="/image.png" bgColor="bg-white" textColor="text-black" />
      <Section title="Watch Series 10" subtitle="Smarter. Brighter. Better." image="/watch-apple.png" bgColor="bg-[#f5f5f7]" textColor="text-black" />
      <Footer />
    </>
  )
}
export default App
