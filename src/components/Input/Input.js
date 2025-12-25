const Input = ({ label, type, placeholder, name }) => {
  return (
    <div className="container-input">
      <label className="inputLabel">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className={`inputForm ${type}`}
          required
          rows="5" 
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`inputForm ${type}`}
          required
        />
      )}
    </div>
  );
};

export default Input;