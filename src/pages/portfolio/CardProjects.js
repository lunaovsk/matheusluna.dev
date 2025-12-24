import CardPortfolio from '../../components/Card/CardPortfolio.js';
import './cardProject.css';
import Title from '../../components/Title/Title.js';

const CardProjects = ({title, paragraph, cardProject}) => {
    return (
        <section className='project' id='portfolio'>
            <Title title={title} paragraph={paragraph}/>
            <div className='container-projects'>
                {cardProject.map((p, index) => (
                    <CardPortfolio
                        key={index}
                        id={p.id}
                        img={p.img}
                        name={p.name}
                        description={p.description}
                        tech={p.tech}
                        linkDemo={p.linkDemo}
                        linkGit={p.linkGit}
                    />
                ))}
            </div>
        </section>
    )
}

export default CardProjects;