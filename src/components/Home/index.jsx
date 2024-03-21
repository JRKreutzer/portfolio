import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'
import './home.css'

const Home = () => {
    return (
      <main className='main'>
        <section id='home' className='home section'>
          <div className="home__container container grid">
            <div className="home__content grid">
              <Social />
              <div className='home__img'></div>
              <Data />
            </div>
            <ScrollDown />
          </div>
        </section>
      </main>
    )
}

export default Home