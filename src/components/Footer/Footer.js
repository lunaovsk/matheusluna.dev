import './Footer.css'
import { useScroll } from '../../utils/useScroll.js';
import { BiCodeAlt } from "react-icons/bi";
import Button from "../Button/Buttons.js";
import Social from "../Social/Social.js";
import { socialInfo } from "../Social/SocialInfo.js";
import { buttonFooter } from '../../config/buttonConfig.js'; 



const Footer = () => {
    const {toSection} = useScroll();
    return (
        <footer>
            <div className='container-footer'>
                <div className="container-part1">
                    <div className='container-logo'>
                        <BiCodeAlt className="code-icon-footer"/>
                        <h1 className='title-footer'>Matheus Luna</h1>   
                    </div>      
                    <p className='paragraph-footer'>Desenvolvedor Back-End com base em Full Stack, criando soluções web modernas e eficientes.</p>
                </div>
                <div className="container-linksRapidos container-part2">
                    <h2 className='title-footer'>Links Rápidos</h2>
                    {buttonFooter.map((btn, index) =>
                        <Button
                            key={index}
                            text={btn.text}
                            variant={btn.variant}
                            onClick={() => toSection(btn.target)}
                        />
                    )} 
                </div>
                <div className="container-redesSociais container-part3">
                    <h3 className='title-footer'>Redes Sociais</h3>
                    <div className='container-rede-footer'>
                        {socialInfo.map((a, index) => (
                            <Social
                                key={index}
                                icon={a.icon}
                                link={a.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-part4">
                <p className='container-copyright'>© 2025 Matheus Luna. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;