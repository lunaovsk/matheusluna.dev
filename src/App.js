import './App.css';
import Header from './components/Header/Header.js';
import Hero from './pages/hero/Hero1.js';
import Skill from './pages/skill/Skills.js';
import CardProjects from './pages/portfolio/CardProjects.js';
import { cardTech } from './components/Card/Cards.js';
import { cardProject } from './components/Card/CardsPortfolio.js';
import {SectionSkill, SectionProject, SectionContact, SectionCertification} from './components/Title/SectionTitle.js'
import Contact from './pages/Contact/Contact.js'
import { fields } from './components/Input/InputText.js';
import Footer from './components/Footer/Footer.js';
import Certification from './pages/Certification/Certification.js'
import { listInfo } from './components/Accordion/AccordionInfo.js';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      
      <Skill
        title={SectionSkill.title}
        paragraph={SectionSkill.paragraph}
        cards={cardTech}
      />
      
      <CardProjects
        title={SectionProject.title}
        paragraph={SectionProject.paragraph}
        cardProject={cardProject}
      />

      <Certification
        title={SectionCertification.title}
        paragraph={SectionCertification.paragraph}
        listInfo={listInfo}
      />

      <Contact
        title={SectionContact.title}
        paragraph={SectionContact.paragraph}
        fields={fields}
      />
      <Footer/>
    </>
  );
}

export default App;