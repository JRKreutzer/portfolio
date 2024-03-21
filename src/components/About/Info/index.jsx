import { about } from "../../../constants"

const Info = () => {
    return (
        <div className="about__info grid">
            {
                about.map((item, i) => (
                    <div key={i} className="about__box">
                        <i className={`${item.icon} about__icon`}></i>
                        <h3 className="about__title">{item.titulo}</h3>
                        <span className="about__subtitle">{item.valor[0]}</span><br/>
                        <span className="about__subtitle">{item.valor[1]}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Info