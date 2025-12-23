import Card from '../../components/Card/Card';
import './Skills.css';

const Skill = ({title, paragraph, cards}) => {
    return (
    <section className='service' id='habilidades'>
        <div className='container-header-service'>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
        <div className='container-card'>
            {cards.map((card, index) => (
            <Card
            key={index}
            icon={card.icon}
            name={card.name}
            description={card.description}
            tech={card.tech}/>
            ))}
        </div>
    </section>
    )
}

export default Skill;