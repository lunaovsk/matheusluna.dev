import './Hero.css';
import Button from '../../components/Button/Buttons'; 
import { buttonHero } from '../../config/buttonConfig'; 
import { useScroll } from '../../utils/useScroll';
import { socialInfo } from '../../components/Social/SocialInfo.js';
import Social from '../../components/Social/Social.js';



function Hero () {
    const {toSection} = useScroll();
    return (
        <section className="hero" id="sobre">
            <div className="container-hero">
                <div className="container-apresentacao">
                    <h1>Olá, eu sou <strong>Matheus Luna</strong></h1>
                    <h2>Desenvolvedor Back-End Java</h2>
                    <p>
                        Desenvolvedor Back-End, atuo no desenvolvimento de APIs REST modernas, seguras e escaláveis com Java e Spring Boot, aplicando boas práticas de arquitetura, autenticação JWT e persistência com JPA. 
                        Possuo conhecimento em JavaScript, React, HTML e CSS para integração com o front-end 
                        e estudo Inteligência Artificial e integração com APIs da OpenAI, sempre buscando transformar ideias em soluções funcionais e reais.
                    </p>
                </div>
                <div className="container-links">
                    {buttonHero.map((btn, index) => (
                        <Button
                            key={index}
                            text={btn.text}
                            variant={btn.variant}
                            onClick={() => toSection(btn.target)}
                        />
                    ))}
                </div>
                <div className="container-redes">
                    {socialInfo.map((a, index) => (
                        <Social
                            key={index}
                            icon={a.icon}
                            link={a.link}
                        />
                    ))}
                </div>
            </div>
            <div className="container-img">
                <div class="blur-effect"></div>
                <img src="/img/imgHero.jpeg" className="hero-img"></img>
            </div>
        </section>
    );
}

export default Hero;