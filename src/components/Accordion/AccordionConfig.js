import { useState } from "react";

const Accordion = ({ icon, title, description, variant }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className={`accordion ${variant}`}>
      <div className="accordion-header" onClick={onToggle}>
        {icon}
        <h3>{title}</h3>
        <span>{isExpanded ? "-" : "+"}</span>
      </div>
      {isExpanded && (
        <ul className={`accordion-body ${variant}`}>
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;