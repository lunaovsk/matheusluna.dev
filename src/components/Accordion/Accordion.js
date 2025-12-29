import './Accordion.css'

const Accordion = ({ icon, title, description, variant, isExpanded, onToggle }) => {
  return (
    <div className={`accordion ${variant} ${isExpanded ? "expanded" : ""}`}>
      <div className="accordion-header" onClick={onToggle}>

        <h3 className={`accordion-title ${variant} ${isExpanded ? "expanded" : ""}`}>{icon}{title}</h3>
        <span className='container-expanded'>{isExpanded ? "-" : "+"}</span>
      </div>
        {isExpanded && (
          <ul className={`accordion-body ${variant} ${isExpanded ? "expanded" : ""}`}>
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default Accordion;