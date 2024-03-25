import { useState } from 'react'
import './qualification.css'
import { ReactComponent as Construction } from '../../assets/construction.svg'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1)

    return (
        <section id='qualification' className="section qualification">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha jornada pessoal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setToggleState(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Educacional
                    </div>

                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setToggleState(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Profissional
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">React com JavaScript</h3>
                                <span className="qualification__subtitle">Alura - Online</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Fevereiro 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Aplicações Web com JavaScript</h3>
                                <span className="qualification__subtitle">Alura - Online</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Janeiro 2024
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">JavaScript com foco no back-end</h3>
                                <span className="qualification__subtitle">Alura - Online</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Janeiro 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HTML e CSS Para projetos Web</h3>
                                <span className="qualification__subtitle">Alura - Online</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Novembro 2023
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Iniciante em Programação</h3>
                                <span className="qualification__subtitle">Alura - Online</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Outubro 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Algoritmos e Lógica de Programação</h3>
                                <span className="qualification__subtitle">Udemy - Online</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Novembro 2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Introdução à Ciência da Computação com Python</h3>
                                <span className="qualification__subtitle">USP - Online</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Outubro 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Análise e Desenvolvimento de Sistemas</h3>
                                <span className="qualification__subtitle">IFC - Fraiburgo</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2023
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                        <div className="qualification__data">
                            <div>
                                <Construction className="qualification__title-icon" />
                                <span className="qualification__subtitle">Em Contrução</span>
                                <div className="qualification__calendar">
                                    {/* <i className="uil uil-calendar-alt"></i> Presente */}
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification