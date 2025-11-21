import { BiCodeAlt } from "react-icons/bi";
import './Header.css'
import scrollToSection from '../../utils/scroll.js';
function Header () {
    return (
        <header className="header">
            <div className="container-header">
                <BiCodeAlt className="code-icon"/>
                <h1>Matheus Luna</h1>
            </div>
            <nav>
                <button onClick={() => scrollToSection('sobre')}>Sobre</button>
                <button onClick={() => scrollToSection('habilidades')}>Habilidades</button>
                <button onClick={() => scrollToSection('portfolio')}>Portfólio</button>
                <button onClick={() => scrollToSection('contato')} className="link-contato">Contato</button>
            </nav>
        </header>
    );

}

export default Header;