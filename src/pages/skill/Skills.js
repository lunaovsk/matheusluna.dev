import Card from '../../components/Card/Card';
import './Skills.css';
import Title from '../../components/Title/Title.js';

const Skill = ({title, paragraph, cards}) => {
    return (
    <section className='skill' id='habilidades'>
        <Title title={title} paragraph={paragraph}/>
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