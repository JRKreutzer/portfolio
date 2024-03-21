import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App;
