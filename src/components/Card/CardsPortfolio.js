import abraceRNImg from '../../assets/img/projects/DashboardAbraceRN.jpeg';
import APIAbraceRNImg from '../../assets/img/projects/APIAbraceRN.jpeg';

export const cardProject = [
    {   
        id: "abrace-front",
        img: abraceRNImg,
        name: "Dashboard Administrativo Abrace RN (front)",
        description: "  Sistema de gestão de estoque para ONG Abrace um RN, com dashboard intuitivo, cadastro inteligente de itens por categoria e monitoramento em tempo real.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        linkDemo: "https://lunaovsk.github.io/abraceRN-front/",
        linkGit: "https://github.com/lunaovsk/abraceRN-front"
    },
    {
        id: "abrace-back",
        img: APIAbraceRNImg, 
        name: "Abrace RN – API REST de Gestão de Estoque",
        description: "API para gestão de estoque da ONG Abrace um RN, com cadastro inteligente de itens, validações por categoria e sistema de soma automática de quantidades.",
        tech: ["Java 21","Spring Boot","REST API","JPA/Hibernate","MySQL","Flyway","Swagger"],
        linkDemo: "noLink",
        linkGit: "https://github.com/lunaovsk/abraceRN-back" 
    },
    {
        img: "", 
        name: "ScreenSound – API REST com Autenticação JWT",
        description: "API REST em Java com Spring Boot para gerenciamento de usuários, playlists e mídias, utilizando autenticação JWT, Spring Security, endpoints protegidos, exclusão lógica e arquitetura REST bem definida.",
        tech: ["Java 21", "Spring Boot 3", "Spring Security (JWT)", "Stateless Authentication", "Spring Data JPA", "MySQL", "Flyway", "RESTful API"],
        linkDemo: "noLink",
        linkGit: "https://github.com/lunaovsk/ScreenSound" 
    }
]