import { skillsFrontAdvanced, skillsFrontBasic } from "../../../constants"

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Desenvolvedor Front-end</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {
                        skillsFrontBasic.map((skill, i) => (
                                <div key={i} className="skills__data">
                                    <i class='bx bx-badge-check'></i>
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
                        skillsFrontAdvanced.map((skill, i) => (
                                <div key={i} className="skills__data">
                                    <i class='bx bx-badge-check'></i>
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

export default Frontend