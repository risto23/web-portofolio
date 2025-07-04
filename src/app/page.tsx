import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <BackToTop />
        
      </main>
    </>
  )
}
