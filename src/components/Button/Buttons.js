import './button.css';

export default function Button ({text, variant, onClick, type}) {
    return (
        <button className={`btn ${variant}`} type={`${type}`} onClick={onClick}>{text}</button>
    )
}