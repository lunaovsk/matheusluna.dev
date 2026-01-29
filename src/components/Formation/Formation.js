import './Formation.css'

const Formation = ({icon, title, subtitle, deadline, paragraph, skills}) => {
    return (
        <div className="container-card-formation">
            <div className='title-formation-icon'>{icon}</div>
            <div className='container-formation'>
                <h2 className="title-formation">{title}</h2>
                <h3 className="title-formation2">{subtitle}</h3>
                <p className="deadline-formation">{deadline}</p>
                <p className="paragraph-formation">{paragraph}</p>
                <div className="container-formation-span">
                    {skills.map((skill, index) => (
                        <span className="skill-item" key={index}>
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-text">{skill.label}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Formation;