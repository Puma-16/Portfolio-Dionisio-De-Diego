export interface Project {
    id: number
    title: string
    description: string
    category: 'fullstack' | 'frontend' | 'backend'
    technologies: { name: string; icon: string }[]
    githubUrl: string
    liveUrl: string
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description:
            'Plataforma de e-commerce moderna con carrito de compras, pasarela de pago integrada y panel de administración completo.',
        category: 'fullstack',
        technologies: [
            { name: 'React',      icon: '/icons/react.svg'      },
            { name: 'Next.js',    icon: '/icons/nextjs.svg'     },
            { name: 'TypeScript', icon: '/icons/typescript.svg' },
            { name: 'MySQL',      icon: '/icons/mysql.svg'      },
        ],
        githubUrl: 'https://github.com/Puma-16/ecommerce-platform',
        liveUrl:   'https://tu-ecommerce.vercel.app',
    },
    {
        id: 2,
        title: 'Task Management App',
        description:
            'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y sistema de notificaciones.',
        category: 'frontend',
        technologies: [
            { name: 'React',      icon: '/icons/react.svg'      },
            { name: 'TypeScript', icon: '/icons/typescript.svg' },
            { name: 'CSS3',       icon: '/icons/css3.svg'       },
        ],
        githubUrl: 'https://github.com/Puma-16/task-management',
        liveUrl:   'https://task-manager-demo.vercel.app',
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description:
            'Dashboard meteorológico interactivo con mapas, pronósticos detallados y visualización de datos en tiempo real.',
        category: 'frontend',
        technologies: [
            { name: 'React',      icon: '/icons/react.svg'      },
            { name: 'JavaScript', icon: '/icons/javascript.svg' },
            { name: 'CSS3',       icon: '/icons/css3.svg'       },
        ],
        githubUrl: 'https://github.com/Puma-16/weather-dashboard',
        liveUrl:   'https://weather-dash-demo.vercel.app',
    },
    {
        id: 4,
        title: 'Social Media API',
        description:
            'API RESTful para una red social con autenticación JWT, upload de imágenes y sistema de posts en tiempo real.',
        category: 'backend',
        technologies: [
            { name: 'Java',        icon: '/icons/java.svg'        },
            { name: 'Spring Boot', icon: '/icons/spring-boot.svg' },
            { name: 'MySQL',       icon: '/icons/mysql.svg'       },
        ],
        githubUrl: 'https://github.com/Puma-16/social-api',
        liveUrl:   'https://social-api-docs.vercel.app',
    },
    {
        id: 5,
        title: 'Portfolio Website',
        description:
            'Portfolio personal con animaciones Three.js, diseño responsive, estética terminal y optimizado para SEO.',
        category: 'frontend',
        technologies: [
            { name: 'Next.js',    icon: '/icons/nextjs.svg'     },
            { name: 'TypeScript', icon: '/icons/typescript.svg' },
            { name: 'React',      icon: '/icons/react.svg'      },
        ],
        githubUrl: 'https://github.com/Puma-16/portfolio',
        liveUrl:   'https://tu-portfolio.vercel.app',
    },
    {
        id: 6,
        title: 'Crypto Tracker',
        description:
            'Tracking de criptomonedas con gráficos interactivos, alertas de precio y portfolio personal.',
        category: 'frontend',
        technologies: [
            { name: 'React',      icon: '/icons/react.svg'      },
            { name: 'TypeScript', icon: '/icons/typescript.svg' },
            { name: 'JavaScript', icon: '/icons/javascript.svg' },
        ],
        githubUrl: 'https://github.com/Puma-16/crypto-tracker',
        liveUrl:   'https://crypto-tracker-demo.vercel.app',
    },
]