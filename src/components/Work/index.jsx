import Works from './Works'
import './work.css'

const Work = () => {
    return (
        <section id='portfolio' className="work section">
            <h2 className="section__title">Portfólio </h2>
            <span className="section__subtitle">Meus projetos mais recentes</span>

            <Works />
        </section>
    )
}

export default Work