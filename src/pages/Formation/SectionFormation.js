import Formation from "../../components/Formation/Formation.js"
import Title from "../../components/Title/Title.js"
import './SectionFormation.css'

const SectionFormation = ({title, paragraph, infoF}) => {
    return (
        <section className="section-formation" id="formacao"> 
            <Title title={title} paragraph={paragraph}/>
            <div>
                {infoF.map((i, index) => (
                    <Formation
                        key={index}
                        icon={i.icon}
                        title={i.title}
                        subtitle={i.subtitle}
                        deadline={i.deadline}
                        paragraph={i.paragraph}
                        skills={i.skills} 
                    />
                ))}
            </div>
        </section>
    )
}

export default SectionFormation;