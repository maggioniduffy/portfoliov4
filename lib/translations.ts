export type Lang = "es" | "en";

type Segment = { text: string; strong?: boolean };

type SectionTitle = { pre: string; em: string; post?: string };

type Job = {
  period: string;
  role: string;
  company: string;
  desc: string;
};

type Translation = {
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
    testimonials: string;
    langToggleAria: string;
  };
  hero: {
    tag: string;
    desc: string;
    ctaProjects: string;
    ctaWork: string;
    scroll: string;
  };
  about: {
    label: string;
    title: SectionTitle;
    paragraphs: Segment[][];
    coreStack: string;
    alsoExperienced: string;
    education: string;
    degree: string;
    mlLibraries: string;
  };
  projects: {
    label: string;
    title: SectionTitle;
    liveSite: string;
    watchDemo: string;
    preview: string;
    closeAria: string;
    items: {
      kkapp: { badge: string; tag: string; desc: string };
      colchoncito: { badge: string; desc: string };
    };
  };
  testimonials: {
    label: string;
    title: SectionTitle;
    clientName: string;
    clientRole: string;
    quote: string;
  };
  experience: {
    label: string;
    title: SectionTitle;
    jobs: Job[];
  };
  contact: {
    label: string;
    title: SectionTitle;
    intro: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
};

export const translations: Record<Lang, Translation> = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      testimonials: "Testimonios",
      langToggleAria: "Cambiar idioma a inglés",
    },
    hero: {
      tag: "Disponible para nuevas oportunidades",
      desc: "Desarrollador full-stack de Córdoba, Argentina — construyendo productos digitales limpios, escalables y bellamente diseñados.",
      ctaProjects: "Ver proyectos",
      ctaWork: "Trabajemos juntos",
      scroll: "Desplazá para explorar",
    },
    about: {
      label: "Sobre mí",
      title: { pre: "Construyendo ", em: "software", post: "con propósito" },
      paragraphs: [
        [
          {
            text: "Soy un desarrollador full-stack apasionado, creativo y curioso, con ",
          },
          {
            text: "sólidos fundamentos y un ojo agudo para el diseño",
            strong: true,
          },
          {
            text: ". Me enfoco en producir software escalable que sigue las mejores prácticas — desde la arquitectura hasta el último píxel.",
          },
        ],
        [
          {
            text: "Con formación universitaria y autodidacta, me adapto rápidamente a distintos requisitos gracias a la amplitud de mi preparación. He desarrollado desde ",
          },
          { text: "plataformas de e-commerce", strong: true },
          { text: " y " },
          { text: "herramientas financieras", strong: true },
          { text: " hasta " },
          { text: "sistemas de entrenamiento de IA", strong: true },
          { text: "." },
        ],
        [
          { text: "Basado en " },
          { text: "Córdoba, Argentina", strong: true },
          {
            text: ". Disponible para trabajo remoto en cualquier parte del mundo.",
          },
        ],
      ],
      coreStack: "Stack principal",
      alsoExperienced: "También con experiencia en",
      education: "Educación",
      degree: "Lic. en Ciencias de la Computación - UNCO",
      mlLibraries: "Librerías ML",
    },
    projects: {
      label: "Trabajos seleccionados",
      title: { pre: "Proyectos que ", em: "lancé" },
      liveSite: "Sitio en vivo",
      watchDemo: "Ver demo",
      preview: "Vista previa",
      closeAria: "Cerrar",
      items: {
        kkapp: {
          badge: "App Web",
          tag: "Nuevo!",
          desc: "Encontrar un baño público limpio y disponible es un problema real en las ciudades. Como único desarrollador, diseñé y construí KKApp de punta a punta: un mapa colaborativo de baños con horarios, costos y fotos. Aposté por Next.js con TypeScript en el frontend y una API en NestJS con búsqueda geoespacial, autenticación por roles y un flujo de moderación donde los administradores aprueban cada baño enviado. Hoy está en producción en kkapp.es, recibiendo aportes de usuarios reales.",
        },
        colchoncito: {
          badge: "Finanzas",
          desc: "Tracker de finanzas personales diseñado para la realidad argentina de doble moneda — administrá tu dinero en pesos y dólares sin planillas. Iniciá sesión con Google y tomá el control.",
        },
      },
    },
    testimonials: {
      label: "Lo que dicen",
      title: { pre: "Clientes que ", em: "confían" },
      clientName: "Nombre del cliente",
      clientRole: "Cargo",
      quote:
        "Trabajar con Faustino fue una experiencia excelente. Entendió nuestras necesidades desde el primer momento y el resultado superó nuestras expectativas.",
    },
    experience: {
      label: "Carrera",
      title: { pre: "Dónde ", em: "trabajé" },
      jobs: [
        {
          period: "Mayo 2023 — Marzo 2024",
          role: "Desarrollador de Software para Entrenamiento de IA",
          company: "Scale AI",
          desc: "Evaluación, corrección y mejora de fragmentos de código en Python, SQL, Java, Go, HTML y más. Los criterios de evaluación incluían velocidad, legibilidad y completitud.",
        },
        {
          period: "Ago 2022 — Feb 2023 · Argentina",
          role: "Ayudante de Cátedra, Base de Datos",
          company: "Universidad Nacional del Comahue",
          desc: "Asistí a estudiantes en temas de álgebra relacional, SQL básico y SGBD. Corregí exámenes y brindé retroalimentación estructurada.",
        },
        {
          period: "Junio 2022 — Ago 2022",
          role: "Desarrollador de Software Trainee",
          company: "Ensolvers",
          desc: "Desarrollo backend en Java y desarrollo de funcionalidades frontend con React.js.",
        },
        {
          period: "Nov 2021 — Ene 2022",
          role: "Desarrollador de Software — Programa NEST",
          company: "Patagonian Tech",
          desc: "Automatización de QA para un sitio del BID con Playwright y Cucumber JS. Construcción de módulos backend compartidos y reutilizables con NestJS, Postgres, AWS y Docker.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: { pre: "Construyamos ", em: "algo" },
      intro:
        "Abierto a proyectos freelance y roles remotos — contame qué estás construyendo.",
    },
    footer: {
      copyright: "© 2025 Faustino Maggioni Duffy",
      madeWith: "Hecho con cuidado · Córdoba, Argentina",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      testimonials: "Testimonials",
      langToggleAria: "Switch language to Spanish",
    },
    hero: {
      tag: "Available for new opportunities",
      desc: "Full-stack developer from Córdoba, Argentina — building clean, scalable, beautifully designed digital products.",
      ctaProjects: "See projects",
      ctaWork: "Let's work together",
      scroll: "Scroll to explore",
    },
    about: {
      label: "About me",
      title: { pre: "Building ", em: "software", post: "with purpose" },
      paragraphs: [
        [
          {
            text: "I'm a passionate, creative and curious full-stack developer with ",
          },
          {
            text: "solid fundamentals and a sharp eye for design",
            strong: true,
          },
          {
            text: ". I focus on producing scalable software that follows best practices — from the architecture down to the last pixel.",
          },
        ],
        [
          {
            text: "With both university and self-taught training, I adapt quickly to different requirements thanks to the breadth of my background. I've built everything from ",
          },
          { text: "e-commerce platforms", strong: true },
          { text: " and " },
          { text: "financial tools", strong: true },
          { text: " to " },
          { text: "AI training systems", strong: true },
          { text: "." },
        ],
        [
          { text: "Based in " },
          { text: "Córdoba, Argentina", strong: true },
          { text: ". Available for remote work anywhere in the world." },
        ],
      ],
      coreStack: "Core stack",
      alsoExperienced: "Also experienced with",
      education: "Education",
      degree: "BSc in Computer Science - UNCO",
      mlLibraries: "ML libraries",
    },
    projects: {
      label: "Selected work",
      title: { pre: "Projects I ", em: "shipped" },
      liveSite: "Live site",
      watchDemo: "Watch demo",
      preview: "Preview",
      closeAria: "Close",
      items: {
        kkapp: {
          badge: "Web App",
          tag: "New!",
          desc: "Finding a clean, available public restroom in a city is a real problem. As the sole developer, I designed and built KKApp end to end: a collaborative map of restrooms with opening hours, costs and photos. I chose Next.js with TypeScript for the frontend and a NestJS API with geospatial search, role-based authentication and a moderation flow where admins approve every submitted restroom. It's live in production at kkapp.es, receiving contributions from real users.",
        },
        colchoncito: {
          badge: "Finance",
          desc: "Personal finance tracker designed for Argentina's dual-currency reality — manage your money in pesos and dollars without spreadsheets. Sign in with Google and take control.",
        },
      },
    },
    testimonials: {
      label: "What they say",
      title: { pre: "Clients who ", em: "trust" },
      clientName: "Client name",
      clientRole: "Role",
      quote:
        "Working with Faustino was an excellent experience. He understood our needs from day one and the result exceeded our expectations.",
    },
    experience: {
      label: "Career",
      title: { pre: "Where I've ", em: "worked" },
      jobs: [
        {
          period: "May 2023 — March 2024",
          role: "Software Developer for AI Training",
          company: "Scale AI",
          desc: "Evaluated, corrected and improved code snippets in Python, SQL, Java, Go, HTML and more. Evaluation criteria included speed, readability and completeness.",
        },
        {
          period: "Aug 2022 — Feb 2023 · Argentina",
          role: "Teaching Assistant, Databases",
          company: "Universidad Nacional del Comahue",
          desc: "Assisted students with relational algebra, basic SQL and DBMS topics. Graded exams and provided structured feedback.",
        },
        {
          period: "June 2022 — Aug 2022",
          role: "Trainee Software Developer",
          company: "Ensolvers",
          desc: "Backend development in Java and frontend feature development with React.js.",
        },
        {
          period: "Nov 2021 — Jan 2022",
          role: "Software Developer — NEST Program",
          company: "Patagonian Tech",
          desc: "QA automation for an IDB site using Playwright and Cucumber JS. Built shared, reusable backend modules with NestJS, Postgres, AWS and Docker.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: { pre: "Let's build ", em: "something" },
      intro:
        "Open to freelance projects and remote roles — tell me what you're building.",
    },
    footer: {
      copyright: "© 2025 Faustino Maggioni Duffy",
      madeWith: "Made with care · Córdoba, Argentina",
    },
  },
};
