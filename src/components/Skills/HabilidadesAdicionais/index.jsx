import { skillsAdicionaisGerais, skillsAdicionaisPessoais } from '../../../constants'

const HabilidadesAdicionais = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Habilidades e Competências Adicionais</h3>

        <div className="skills__box">
            <div className="skills__group">
                {
                    skillsAdicionaisGerais.map((skill, i) => (
                            <div key={i} className="skills__data">
                                <i className='bx bx-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">{skill.nome}</h3>
                                </div>
                            </div>
                    ))
                }
            </div>
            <div className="skills__group">
                {
                    skillsAdicionaisPessoais.map((skill, i) => (
                            <div key={i} className="skills__data">
                                <i className='bx bx-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">{skill.nome}</h3>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
)
}

export default HabilidadesAdicionais