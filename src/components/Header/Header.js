import { BiCodeAlt } from "react-icons/bi";
import Button from '../Button/Buttons';
import { buttonContactA, buttonHeader } from '../../config/buttonConfig';
import { useScroll } from '../../utils/useScroll';
import MobileMenu from './Menu';
import './Header.css';

function Header() {
    const { toSection } = useScroll();

    return (
        <header className="header">
            <div className="container-header">
                <BiCodeAlt className="code-icon" />
                <a href="#sobre">Matheus Luna</a>
            </div>
           
            <nav className="desktop-nav">
                {buttonHeader.map((btn, index) => (
                    <Button
                        key={index}
                        text={btn.text}
                        variant={btn.variant}
                        onClick={() => toSection(btn.target)}
                    />
                ))}
                <Button
                    text={buttonContactA.text}
                    variant={buttonContactA.variant}
                    onClick={() => toSection(buttonContactA.target)}
                />
            </nav>
            
            <MobileMenu />
        </header>
    );
}

export default Header;
