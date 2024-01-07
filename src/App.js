import './index.css'
import styles from "./App.module.css"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Socials from './components/Socials/Socials';
import ContactForm from './components/Contact/ContactForm';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Socials />
    </div>
  );
}

export default App;
