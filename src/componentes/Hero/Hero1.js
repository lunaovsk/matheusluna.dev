import { MdOutlineEmail } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import './Hero.css'
import scrollToSection from '../../utils/scroll.js';

function Hero () {
    return (
        <section className="hero" id="sobre">
            <div className="container-hero">
                <div className="container-apresentacao">
                    <h1>Olá, eu sou <strong>Matheus Luna</strong></h1>
                    <h2>Desenvolvedor Full Stack em Formação</h2>
                    <p>
                        Desenvolvo APIs modernas, seguras e escaláveis com Java e Spring Boot. 
                        Tenho 1 ano de experiência com APIs RESTful e conhecimento em JavaScript, React, HTML e CSS 
                        para criar aplicações completas. Estudo também IA e integração com as APIs da OpenAI, 
                        sempre buscando transformar ideias em soluções eficientes e reais.
                    </p>
                </div>
                <div className="container-links">
                    <button onClick={() => scrollToSection('contato')} className="container-link-portfolio">Ver Portfólio</button>
                    <button onClick={() => scrollToSection('contato')} className="container-link-contato">Entrar em Contato</button>
                </div>
                <div className="container-redes">
                    <a href="https://github.com/lunaovsk"><FiGithub/></a>
                    <a href="https://www.linkedin.com/in/matheusbluna/"><FiLinkedin/></a>
                    <a href="mailto:matheusluna151634@gmail.com"><MdOutlineEmail/></a>
                </div>
            </div>
            <div className="container-img">
                <div class="blur-effect"></div>
                <img src="img/matheusluna (2).png" className="hero-img"></img>
            </div>
        </section>
    );
}

export default Hero;