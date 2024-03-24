import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import { LinkProvider } from './context/LinkContext';

const App = () => {
  return (
    <>
      <LinkProvider>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </LinkProvider>
    </>
  )
}

export default App;
