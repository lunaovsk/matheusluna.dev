import CardPortfolio from '../../components/Card/CardPortfolio.js';
import './cardProject.css';

const CardProjects = ({title, paragraph, cardProject}) => {
    return (
        <section className='project' id='portfolio'>
            <div className='container-header-project'>
                <h1 className='title-card-project'>{title}</h1>
                <p className='paragraph-card-project'>{paragraph}</p>
            </div>
            <div className='container-projects'>
                {cardProject.map((p, index) => (
                    <CardPortfolio
                        key={index}
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