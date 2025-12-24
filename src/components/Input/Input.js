const Input = ({ label, type, placeholder }) => {
  return (
    <div className="container-input">
      <label className="inputLabel">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`inputForm ${type}`}
        required
      />
    </div>
  );
};

export default Input;