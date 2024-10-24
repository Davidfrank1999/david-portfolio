import NavBar from './Components/NavBar/NavBar.jsx'
import Hero from './Components/HeroSection/Hero.jsx'
import Skill from './Components/SkillSection/Skill.jsx'
import ProjectSection from './Components/Projects/ProjectSection.jsx'
import Contact from './Components/Contact/Contact.jsx'
import styles from './App.module.css'


import Footer from './Components/Footer/Footer.jsx'


function App() {


  return (
    <div className={styles.FullConatiner}>
      <NavBar />
      <section className={styles.Info}>
      <Hero />
      <Skill /> 
      <ProjectSection />
      <Contact />       
      </section>
      <Footer />
    </div>
  )
}

export default App
