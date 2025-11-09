import Nav from './Components/Navbar'
import Hero from './Components/Hero'
import Section from './Components/Section'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Section title="MacBook Air" subtitle="Lean. Mean. M3 machine." image="/image.png" bgColor="bg-white" textColor="text-black" />
      <Section title="Watch Series 10" subtitle="Smarter. Brighter. Better." image="/watch-apple.png" bgColor="bg-[#f5f5f7]" textColor="text-black" />
      <Footer />
    </>
  )
}
export default App
