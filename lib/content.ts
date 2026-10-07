import type { NavLink, SkillGroup, Project, ContactChannel } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#home", path: "home" },
  { label: "Sobre mí", href: "#about", path: "about-me" },
  { label: "Habilidades", href: "#skills", path: "skills" },
  { label: "Proyectos", href: "#projects", path: "projects" },
  { label: "Contacto", href: "#contact", path: "contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: "code",
    title: "Lenguajes",
    items: ["JS (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    icon: "layers",
    title: "Frameworks",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "Context API"],
  },
  {
    icon: "wrench",
    title: "Herramientas",
    items: ["Git & GitHub", "Vite", "Postman", "Figma", "Scrum"],
  },
];

export const projects: Project[] = [
  {
    id: "windbnb",
    title: "Windbnb",
    description:
      "Buscador de alojamientos inspirado en Airbnb, con enfoque en rendimiento y una interfaz fluida.",
    image: "/images/projects/windbnb.jpg",
    imageAlt:
      "Captura de pantalla de Windbnb, una aplicación de reservas de alojamiento con diseño minimalista en modo oscuro.",
    tags: ["Vanilla JS", "Vite", "Tailwind", "Vercel"],
    demoUrl: "https://windbnb-orcin-nu.vercel.app/",
    codeUrl: "https://github.com/Moroni-Capcha/Windbnb",
  },
  {
    id: "moodbeats",
    title: "Moodbeats",
    description:
      "Recomendador musical según tu estado de ánimo, integrando varias APIs REST para una experiencia auditiva personalizada.",
    image: "/images/projects/moodbeats.jpg",
    imageAlt:
      "Captura de pantalla de Moodbeats, una interfaz de streaming de música en modo oscuro con visualizaciones de datos.",
    tags: ["JavaScript", "REST APIs", "CSS3"],
    demoUrl: "https://moroni-capcha.github.io/moodbeats/",
    codeUrl: "https://github.com/Moroni-Capcha/moodbeats",
  },
  {
    id: "SGH-funval",
    title: "SGH-funval",
    description:
      'Plataforma de gestión académica con dashboards para estudiantes y administradores. Registro de horas, gestión de cursos, reportes y estadísticas.',
    image: "/images/projects/SGH-funval.jpg",
    imageAlt:
      "Dashboard de SGH-funval",
    tags: ["React 19", "Vite", "Tailwind CSS", "React Router DOM", "Axios", "Lucide React"],
    demoUrl: "https://sgh-funval.vercel.app/login",
    codeUrl: "https://github.com/Moroni-Capcha/SGH-funval",
    featured: true,
  },
  {
    id: "el-rico-sanguchon",
    title: "El Rico Sanguchón",
    description:
      "Kiosko táctil de autoservicio para un restaurante: catálogo, carrito, pago y ticket, con soporte de idiomas.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://el-rico-sanguchon.vercel.app",
    codeUrl: "https://github.com/Moroni-Capcha/el-rico-sanguchon",
  },
  {
    id: "galaxia-x3",
    title: "Galaxia X3",
    description:
      "Juego educativo espacial para practicar las tablas del 2 al 10, con modo solitario, duelos y batalla contra jefe.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demoUrl: "https://galaxia-x3.vercel.app",
    codeUrl: "https://github.com/Moroni-Capcha/Galaxia-X3",
  },
  {
    id: "sumas-razonando",
    title: "Sumas Razonando",
    description:
      "App educativa para razonar las sumas: guía paso a paso, árbol de descomposición, niveles de juego y hojas de práctica.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demoUrl: "https://sumas-razonando.vercel.app",
    codeUrl: "https://github.com/Moroni-Capcha/sumas-razonando",
  },
  {
    id: "cae-liahona",
    title: "CAE-LIAHONA",
    description:
      "Sitio institucional para una academia de asesoría educativa: servicios, nosotros, blog y contacto por WhatsApp.",
    tags: ["React", "Vite", "React Router", "Tailwind CSS"],
    demoUrl: "https://cae-liahona.vercel.app",
    codeUrl: "https://github.com/Moroni-Capcha/cae-liahona",
  },
];

export const contactChannels: ContactChannel[] = [
  { icon: "mail", label: "raulmoronicapchacadillo@gmail.com", href: "mailto:raulmoronicapchacadillo@gmail.com" },
  { icon: "briefcase", label: "LinkedIn Profile", href: "https://www.linkedin.com/in/ra%C3%BAl-moroni-capcha-cadillo-659a41341/" },
  { icon: "code", label: "GitHub Repositories", href: "https://github.com/Moroni-Capcha" },
];
