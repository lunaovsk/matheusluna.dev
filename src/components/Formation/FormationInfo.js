import { FiDatabase, FiBookOpen, FiLayers } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";

export const infoF = [
    {
        icon: <RiGraduationCapLine/>,
        title: "Sistemas de Informação",
        subtitle: "UNIFACISA",
        deadline: "Previsão de conclusão: 2028",
        paragraph: "Formação focada em desenvolver competências técnicas e estratégicas para criar soluções tecnológicas robustas e escaláveis, com ênfase em boas práticas de desenvolvimento e arquitetura de software.",
        skills: [
            { icon: <BiCodeAlt />, label: "Desenvolvimento de sistemas" },
            { icon: <FiLayers />, label: "Engenharia de software" },
            { icon: <FiDatabase />, label: "Banco de dados" },
            { icon: <FiBookOpen />, label: "Arquitetura de aplicações" }
        ]
    }
]