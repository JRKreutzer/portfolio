import { useState } from 'react'
import './services.css'
import { ReactComponent as Certificate } from '../../assets/certificate.svg'
import { ReactComponent as Aprendendo } from '../../assets/learning.svg'
import { ReactComponent as Future } from '../../assets/future.svg'
import { ReactComponent as Calendar } from '../../assets/calendar.svg'
import { cursosAndamento, cursosConcluidos, cursosFuturos } from '../../constants'

const Services = () => {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section id="services" className="services section">
            <h2 className="section__title">Formações</h2>
            <span className="section__subtitle">Minha jornada educacional</span>
            <div className="services__container container grid">
                <div className="services__content">


                    <div>
                        <Certificate className='services__icon' />
                        <h3 className="services__title">
                            Formações <br /> Concluídas
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>Veja Mais<i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Formações Concluídas</h3>
                            <p className="services__modal-description">
                                Até o presente momento, obtive certificações em cinco programas de formação oferecidos pela plataforma educacional Alura, totalizando um acervo de 32 cursos concluídos. Adicionalmente, adquiri uma certificação por meio da plataforma Udemy, além de outra proveniente da Coursera, ministrada pela renomada Universidade de São Paulo (USP).
                            </p>
                            <ul className="services__modal-services grid">

                                {
                                    cursosConcluidos.map((curso, i) => (
                                        <li key={i} className='services__modal-service'>
                                                <p className='services__modal-info'>
                                                    {curso.nome}
                                                </p>
                                            <a href={curso.certificado} className='services__modal-link' target='_blank' rel='noreferrer'>
                                                <Certificate className='services__modal-svg' />
                                            </a>
                                        </li>
                                    ))
                                }
                               
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <Aprendendo className='services__icon' />
                        <h3 className="services__title">
                            Formações <br /> Em Andamento
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Veja Mais <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState === 2 ? 'services__modal services__modal  active-modal' : 'services__modal services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Formações em Andamento</h3>
                            <p className="services__modal-description">
                                Com o intuito de alinhar-me com as demandas do mercado atual, estou atualmente dedicado a aprimorar minhas habilidades em TypeScript, visando otimizar minhas aplicações desenvolvidas em React.  
                            </p>
                            <a  className="services__modal-link" href={cursosAndamento[0].link} target='_blank' rel='noreferrer'>
                                <h4 className="services__modal-title">{cursosAndamento[0].nome}</h4>
                            </a>
                            <h4 className="services__modal-subtitle">Cursos</h4>
                            <ul className="services__modal-services grid">

                                {
                                    cursosAndamento[0].cursos.map((curso, i) => (
                                                <li key={i} className="services__modal-service--progress">
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p className="services__modal-info">
                                                        {curso}
                                                    </p>
                                                </li>
                                            ))
                                }
    
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <Future className='services__icon' />
                        <h3 className="services__title">
                            Formações <br /> Futuras 
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>Veja Mais <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Formações Futuras</h3>
                            <p className="services__modal-description">
                                Os próximos estágios da minha trajetória profissional no desenvolvimento front-end incluem a aquisição de habilidades no framework Next.js e na estrutura de estilos CSS Tailwind. Quanto ao desenvolvimento back-end, estou planejando completar uma formação em APIs utilizando Node.js e Express.
                            </p>
                            <ul className="services__modal-services grid">
                                
                            {
                                    cursosFuturos.map((curso, i) => (
                                        curso.nome.map((item, i) => (
                                            <li key={i} className='services__modal-service'>
                                                    <p className='services__modal-info'>
                                                        {item}
                                                    </p>
                                                <a href={curso.link[i]} className='services__modal-link' target='_blank' rel='noreferrer'>
                                                    <Calendar className='services__modal-svg' />
                                                </a>
                                            </li>
                                        ))
                                    ))
                            }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services