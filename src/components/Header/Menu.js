import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../Button/Buttons';
import { buttonHeader, buttonContactA } from '../../config/buttonConfig';
import { useScroll } from '../../utils/useScroll';
import './Header.css';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toSection } = useScroll();

    const handleNavClick = (target) => {
        toSection(target);
        setIsOpen(false);
    };

    return (
        <>
            <button 
                className="menu-toggle" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menu"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
                {buttonHeader.map((btn, index) => (
                    <Button
                        key={index}
                        text={btn.text}
                        variant="transparent"
                        onClick={() => handleNavClick(btn.target)}
                    />
                ))}

                <Button
                    text={buttonContactA.text}
                    variant="dark"
                    onClick={() => handleNavClick(buttonContactA.target)}
                />
            </div>
        </>
    );
};

export default MobileMenu;
