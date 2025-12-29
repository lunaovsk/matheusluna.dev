import { useState } from "react";
import Title from "../../components/Title/Title.js"
import Accordion from "../../components/Accordion/Accordion.js"
import './Certification.css'


const Certification = ({ title, paragraph, listInfo }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) setExpandedIndex(null);
    else setExpandedIndex(index);
  };

  return (
    <section className="certification" id="formacao">
      <Title title={title} paragraph={paragraph} />
      <div className="container-certification">
        {listInfo.map((a, index) => (
          <Accordion
            key={index}
            icon={a.icon}
            title={a.title}
            description={a.description}
            variant={a.variant}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Certification;