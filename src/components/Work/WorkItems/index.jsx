const WorkItems = ({item}) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt={item.title} className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <div className="work__button">
                <a href={item.path} target="_blank" rel="noreferrer" className="work__button-link">
                    Site <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.github} target="_blank" rel="noreferrer" className="work__button-link">
                    Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </div>
        </div>
    )
}

export default WorkItems