import { FiAward } from "react-icons/fi";

export const listInfo = [
    {
        icon: <FiAward/>,
        title: "Java & Backend",
        description: [
            "Java: aplicando a Orientação a Objetos;",
            "Persistência com JPA: Hibernate;", 
            "Spring Boot 3: desenvolva uma API Rest em Java/aplique boas práticas e proteja uma API Rest;", 
            "Java e JDBC: trabalhando com um banco de dados;",
            "Swagger: documentando suas APIs;",
            "Java e Spring Security;",
            "Java: consumindo API, gravando arquivos e lidando com erros;",
            "C#;",
            "PHP e MySQL."

        ],
        variant: "back"
    
    },
    {
        icon: <FiAward/>,
        title: "Banco de Dados",
        description: [
            "Microsoft SQL Server 2022",
            "SQLite Online", 
            "MySQL",
            "MySQL: executando Procedures"
        ],
        variant: "db"
    },
    {
        icon: <FiAward/>,
        title: "Front-end & Web",
        description: [
            "React: desenvolvendo com JavaScript", 
            "JavaScript: promises e async/await",
            "JavaScript: implementando CRUD com requisições HTTP",
            "JavaScript: construindo páginas dinâmicas",
            "HTML e CSS"
        ],
        variant: "front"
    }
]