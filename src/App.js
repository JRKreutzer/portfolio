import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
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
      </main>
    </>
  )
}

export default App;
