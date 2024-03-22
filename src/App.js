import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </>
  )
}

export default App;
