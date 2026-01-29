const Card  = ({icon, name, description, tech}) => {
    return (
        <div className='container-cards'>
            <div className='container-cards-titles'>
                <div className='icon'>{icon}</div>
                <h2 className='title-tech'>{name}</h2>
            </div>
            <p className='container-description'>{description}</p>
            <div className='container-tags'>
                {tech.map((t, index) => (
                <span key={index} className='tags'>{t}</span>
                ))}
            </div>
        </div>
    )
}
export default Card;