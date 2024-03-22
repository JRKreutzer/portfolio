import { skillsBackFront, skillsBackLang } from "../../../constants"

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Desenvolvedor Back-end</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {
                        skillsBackFront.map((skill, i) => (
                                <div key={i} className="skills__data">
                                    <i className='bx bx-badge-check'></i>
                                    <div>
                                        <h3 className="skills__name">{skill.nome}</h3>
                                        <span className="skills__level">{skill.nivel}</span>
                                    </div>
                                </div>
                        ))
                    }
                </div>
                <div className="skills__group">
                    {
                        skillsBackLang.map((skill, i) => (
                                <div key={i} className="skills__data">
                                    <i className='bx bx-badge-check'></i>
                                    <div>
                                        <h3 className="skills__name">{skill.nome}</h3>
                                        <span className="skills__level">{skill.nivel}</span>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Backend