import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { FiServer, FiDatabase } from "react-icons/fi";

export const cardTech = [
  {
    icon: <><VscChevronLeft /><VscChevronRight /></>,
    name: "Frontend Development",
    description: "Criação de interfaces modernas e responsivas",
    tech: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    icon: <FiServer />,
    name: "Backend Development",
    description: "APIs robustas e escaláveis",
    tech: ["Java", "Spring Boot", "Spring Security", "JPA", "MySQL", "APIs REST"]
  },
  {
    icon: <FiDatabase />,
    name: "Banco de Dados",
    description: "Modelagem e otimização de dados",
    tech: ["MySQL", "SQL Server", "SQLite", "SQL", "Modelagem relacional"]
  }
];




