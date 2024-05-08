import { testimonial1Img, testimonial2Img, testimonial3Img } from "../utils";
import { academiaImg, aluraBooksImg, aluraBooksJSImg, aluraMidiImg, aluraPlayImg, aluraPlusImg, bookClubImg, brainwaveImg, cineTagImg, contextAPIImg, culturamaImg, fokusImg, numeroSecretoImg, numeroSecretoVozImg, spaceAppImg, aluraStudiesImg, aluroniRouterImg, amigoSecretoJestImg } from "../utils";

export const links = [
    {
        name: "Home",
        classe: 'uil uil-estate',
        path: '#home',
        active: true
    },
    {
        name: "Sobre",
        classe: 'uil uil-user',
        path: '#about',
        active: false
    },
    {
        name: "Habilidades",
        classe: 'uil uil-file-alt',
        path: '#skills',
        active: false
    },
    {
        name: "Formações",
        classe: 'uil uil-briefcase-alt',
        path: '#services',
        active: false
    },
    {
        name: "Portfólio",
        classe: 'uil uil-scenery',
        path: '#portfolio',
        active: false
    },
    {
        name: "Contato",
        classe: 'uil uil-message',
        path: '#contact',
        active: false
    },
    
]

export const socials = [
    {
        classe: ['uil uil-instagram', 'bx bxl-instagram'],
        path: 'https://www.instagram.com/jr.kreutzer/',
    },
    {
        classe: ['uil uil-github-alt', 'bx bxl-github'],
        path: 'https://github.com/JRKreutzer',
    },
    {
        classe: ['uil uil-linkedin-alt', 'bx bxl-linkedin'],
        path: 'https://www.linkedin.com/in/josé-rodolfo-kreutzer-614372173/',
    }
]

export const about = [
    {
        titulo: 'Experiência',
        valor: ['Recém-formado'],
        icon: 'bx bx-award'
    },
    {
        titulo: 'Concluídos',
        valor: ['20 + Projetos', '32 + Cursos'],
        icon: 'bx bx-briefcase-alt'
    },
    {
        titulo: 'Andamento',
        valor: ['8 Projetos','1 Formação'],
        icon: 'bx bxs-graduation'
    }
]

export const skillsFrontBasic = [
    {
        nome: 'HTML',
        nivel: 'Intermediário',
    },
    {
        nome: 'CSS',
        nivel: 'Intermediário',
    },
    {
        nome: 'JavaScript',
        nivel: 'Intermediário',
    }
]

export const skillsFrontAdvanced = [
    {
        nome: 'TypeScript',
        nivel: 'Básico',
    },
    {
        nome: 'Git / Github',
        nivel: 'Básico',
    },
    {
        nome: 'React JS',
        nivel: 'Intermediário',
    },
    {
        nome: 'Context API',
        nivel: 'Básico',
    },
]

export const skillsBackFront = [
    {
        nome: 'Node JS',
        nivel: 'Básico',
    },
    {
        nome: 'MySQL',
        nivel: 'Intermediário',
    },
    {
        nome: 'MongoDB',
        nivel: 'Básico',
    },
    {
        nome: 'Express JS',
        nivel: 'Básico',
    },
]

export const skillsBackLang = [
    {
        nome: 'Python',
        nivel: 'Intermediário',
    },
    {
        nome: 'C',
        nivel: 'Básico',
    },
    {
        nome: 'C++',
        nivel: 'Básico',
    },
    {
        nome: 'C#',
        nivel: 'Básico',
    },
    {
        nome: 'Java',
        nivel: 'Básico',
    }
]

export const skillsAdicionaisPessoais = [
    {
        nome: 'Criatividade',
    },
    {
        nome: 'Aprendizado Rápido',
    },
    {
        nome: 'Adaptabilidade',
    },
    {
        nome: 'Resolução de Problemas',
    }
]

export const skillsAdicionaisGerais = [
    {
        nome: 'Fluência em Inglês',
    },
    {
        nome: 'Comunicação Eficaz',
    },
    {
        nome: 'Trabalho em Equipe',
    },
    {
        nome: 'Gestão de Tempo',
    }
]

export const cursosConcluidos = [
    {
        nome: 'Formação A partir do zero: iniciante em programação',
		certificado: 'https://cursos.alura.com.br/degree/certificate/c834bf13-822a-4c5f-9267-80837e911e57?lang=pt_BR'
	},
	{
        nome: 'Formação A partir do zero: HTML e CSS para projetos web',
		certificado: 'https://cursos.alura.com.br/degree/certificate/6eab8905-2da6-4069-a2c4-b8b1b13e0146?lang=pt_BR'
	},
	{
        nome: 'Formação Aprenda a programar em JavaScript com foco no back-end',
		certificado: 'https://cursos.alura.com.br/degree/certificate/4336c68b-d850-43ac-af2b-02f89b54de91?lang=pt_BR'
	},
	{
        nome: 'Formação Desenvolva aplicações Web com JavaScript',
		certificado: 'https://cursos.alura.com.br/degree/certificate/377b26b8-b424-4db5-ae0a-8753f8b3e182?lang=pt_BR'
	},
	{
        nome: 'Formação Explore React com JavaScript',
		certificado: 'https://cursos.alura.com.br/degree/certificate/0447ddc7-b1c4-48fa-9ef5-3a82b2041e74?lang=pt_BR'
	},
	{
		nome: 'Algoritmos e Lógica de Programação',
		certificado: 'http://ude.my/UC-a50efaf6-a215-4056-bba2-23194c3907cf'
	},
	{
        nome: 'Introdução à Ciência da Computação com Python',
		certificado: 'https://coursera.org/share/c923d68036c9a1f0de68299109728b21'
	}
]

export const cursosAndamento = [
    {
        nome: 'Formação Gerencie aplicações React com Typescript',
		cursos: ['React: escrevendo com Typescript','React: estilize componentes com Styled Components e manipule arquivos estáticos', 'React: conhecendo a biblioteca React Router', 'React: integrando seu projeto React com APIs', 'HTTP: entendendo a web por baixo dos panos', 'React: gerenciando estado com Recoil', 'React: testando os seus componentes', 'React: otimizando a performance'],
		link: 'https://www.alura.com.br/formacao-react-ts'
	}	
]

export const cursosFuturos = [
    {
        nome: ['Melhore sua aplicação React com o Next.js', 'Next.js e Tailwind: construindo um design system', 'Next.js 14: desenvolvendo aplicações robustas com alta produtividade', 'APIs com Node.js e Express'],
		link: ['https://cursos.alura.com.br/formacao-next-js?preRequirementFrom=react-nextjs-fullstack', 'https://cursos.alura.com.br/formacao-next-js-tailwind-design-system', 'https://cursos.alura.com.br/formacao-next-js-14-aplicacoes-robustas-alta-produtividade', 'https://cursos.alura.com.br/formacao-node-js-express'],
	}	
];

export const portfolio = [
    {
        id: 1,
        image: academiaImg,
        title: 'Academia',
        category: ['React', 'JavaScript'],
        path: 'https://portfolio-academia.vercel.app',
        github: 'https://github.com/JRKreutzer/portfolio-academia'
    },
    {
        id: 2,
        image: brainwaveImg,
        title: 'Brainwave',
        category: ['React', 'JavaScript', 'Tailwind'],
        path: 'https://brainwave-tailwind.vercel.app',
        github: 'https://github.com/JRKreutzer/brainwave-tailwind'
    },
    {
        id: 3,
        image: cineTagImg,
        title: 'Cine Tag',
        category: ['React', 'JavaScript', 'ContextAPI', 'useParams', 'FetchAPI'],
        path: 'https://cinetag-pi-ten.vercel.app',
        github: 'https://github.com/JRKreutzer/cinetag'
    },
    {
        id: 4,
        image: contextAPIImg,
        title: 'ContextAPI',
        category: ['React', 'JavaScript', 'ContextAPI', 'useReducer', 'UseMemo'],
        path: 'https://context-api-ten-kappa.vercel.app',
        github: 'https://github.com/JRKreutzer/context-api'
    },
    {
        id: 5,
        image: spaceAppImg,
        title: 'Space App',
        category: ['React', 'JavaScript', 'Styled-Components'],
        path: 'https://space-app-tau-ashen.vercel.app',
        github: 'https://github.com/JRKreutzer/space-app'
    },
    {
        id: 6,
        image: bookClubImg,
        title: 'Book Club',
        category: ['React', 'JavaScript'],
        path: 'https://book-club-peach.vercel.app',
        github: 'https://github.com/JRKreutzer/book-club'
    },
    {
        id: 7,
        image: aluroniRouterImg,
        title: 'Aluroni Router',
        category: ['TypeScript', 'React', 'React Router Dom'],
        path: 'https://aluroni-router-jrk.vercel.app',
        github: 'https://github.com/JRKreutzer/aluroni-router'
    },
    {
        id: 8,
        image: aluraBooksImg, 
        title: 'Alura Books',
        category: ['Mobile First', 'HTML', 'CSS', 'SwiperJS'],
        path: 'https://alura-books-blue-rho.vercel.app',
        github: 'https://github.com/JRKreutzer/alura-books'
    },
    {
        id: 9,
        image: aluraPlusImg,
        title: 'Alura Plus',
        category: ['HTML', 'CSS'],
        path: 'https://alura-plus-azure-five.vercel.app',
        github: 'https://github.com/JRKreutzer/alura-plus'
    },
    {
        id: 10,
        image: numeroSecretoImg,
        title: 'Número Secreto',
        category: ['JavaScript'],
        path: 'https://jogo-do-numero-secreto-omega.vercel.app',
        github: 'https://github.com/JRKreutzer/jogo-do-numero-secreto'
    },
    {
        id: 11,
        image: aluraBooksJSImg,
        title: 'Alura Books JS',
        category: ['JavaScript', 'FetchAPI'],
        path: 'https://alura-books-js-ten.vercel.app',
        github: 'https://github.com/JRKreutzer/alura-books-js'
    },
    {
        id: 12,
        image: aluraMidiImg,
        title: 'Alura Midi',
        category: ['JavaScript'],
        path: 'https://aluramidi-ebon.vercel.app',
        github: 'https://github.com/JRKreutzer/aluramidi'
    },
    {
        id: 13,
        image: aluraPlayImg,
        title: 'Alura Play',
        category: ['JavaScript', 'FetchAPI', 'Node.js', 'Json-server'],
        path: 'https://alura-play-coral.vercel.app',
        github: 'https://github.com/JRKreutzer/alura-play'
    },
    {
        id: 14,
        image: culturamaImg,
        title: 'Culturama',
        category: ['HTML', 'CSS'],
        path: 'https://culturama-eight-alpha.vercel.app',
        github: 'https://github.com/JRKreutzer/culturama'
    },
    {
        id: 15,
        image: fokusImg,
        title: 'Fokus',
        category: ['JavaScript', 'localStorage'],
        path: 'https://fokus-six-mu.vercel.app',
        github: 'https://github.com/JRKreutzer/fokus'
    },
    {
        id: 16,
        image: aluraStudiesImg,
        title: 'Alura Studies',
        category: ['React', 'TypeScript'],
        path: 'https://alura-studies-wheat.vercel.app',
        github: 'https://github.com/JRKreutzer/alura-studies'
    },
    {
        id: 17,
        image: numeroSecretoVozImg,
        title: 'Número Secreto com Voz',
        category: ['JavaScript', 'Web Speech API'],
        path: 'https://jogo-numero-secreto-reconhecimento-cbmk90aiy.vercel.app',
        github: 'https://github.com/JRKreutzer/jogo-numero-secreto-reconhecimento-voz'
    },
    {
        id: 18,
        image: amigoSecretoJestImg,
        title: 'Testes com Jest',
        category: ['Jest', 'TypeScript', 'React', 'React Router Dom', 'Recoil'],
        path: 'https://amigo-secreto-jest-eight.vercel.app',
        github: 'https://github.com/JRKreutzer/react-ts-testes-jest'
    }
]

export const portfolioNav = [
    {
        name: 'All'
    },
    {
        name: 'React'
    },
    {
        name: 'JavaScript'
    },
    {
        name: 'TypeScript'
    },
    {
        name: 'Jest'
    },
    {
        name: 'React Router Dom'
    },
    {
        name: 'Recoil'
    },
    {
        name: 'Tailwind'
    },
    {
        name: 'ContextAPI'
    },
    {
        name: 'useParams'
    },
    {
        name: 'FetchAPI'
    },
    {
        name: 'UseReducer'
    },
    {
        name: 'UseMemo'
    },
    {
        name: 'Styled-Components'
    },
    {
        name: 'Web Speech API'
    },
    {
        name: 'Mobile First'
    },
    {
        name: 'HTML'
    },
    {
        name: 'CSS'
    },
    {
        name: 'SwiperJS'
    },
    {
        name: 'Node.js'
    },
    {
        name: 'Json-server'
    },
    {
        name: 'localStorage'
    },
]

export const testimoniais = [
    {
        id: 1,
        image: testimonial1Img,
        title: 'Jhon Doe',
        description: 'A really good job, all aspects of the project were followed step by step and with good results.'
    },
    {
        id: 2,
        image: testimonial2Img,
        title: 'Harry Clinton',
        description: 'A really good job, all aspects of the project were followed step by step and with good results.'
    },
    {
        id: 3,
        image: testimonial3Img,
        title: 'Sara Cill',
        description: 'A really good job, all aspects of the project were followed step by step and with good results.'
    }
]

export const contact = [
    {
        icon: 'bx bx-mail-send',
        title: 'Email',
        data: 'jose.kreutzer@gmail.com',
        ref: 'mailto:jose.kreutzer@gmail.com',
        text: 'Me mande um email'
    },
    {
        icon: 'bx bxl-whatsapp',
        title: 'Whatsapp',
        data: '49 99979-6363',
        ref: 'https://api.whatsapp.com/send?phone=5549999796363&text=Olá, podemos conversar?',
        text: 'Me mande um whats'
    },
    {
        icon: 'bx bxl-messenger',
        title: 'Messenger',
        data: 'user.fb123',
        ref: 'https://m.me/100054464409147',
        text: 'Me mande um messenger'
    }
]