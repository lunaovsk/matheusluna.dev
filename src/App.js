import './App.css';
import Header from './components/Header/Header.js';
import Hero from './pages/hero/Hero1.js';
import Skill from './pages/skill/Skills.js';
import CardProjects from './pages/portfolio/CardProjects.js';
import { sectionTech, cardTech } from './components/Card/Cards.js';
import { sectionPortfolio, cardProject } from './components/Card/CardsPortfolio.js';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      
      <Skill
        title={sectionTech.title}
        paragraph={sectionTech.paragraph}
        cards={cardTech}
      />
      
      <CardProjects
        title={sectionPortfolio.title}
        paragraph={sectionPortfolio.paragraph}
        cardProject={cardProject}
      />
    </>
  );
}

export default App;