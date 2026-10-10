export type Lang = "es" | "en";

type Segment = { text: string; strong?: boolean };

type SectionTitle = { pre: string; em: string; post?: string };

type Job = {
  period: string;
  role: string;
  company: string;
  desc: string;
};

type ProjectCopy = {
  badge: string;
  tag?: string;
  summary: string;
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
    themeToLightAria: string;
    themeToDarkAria: string;
  };
  hero: {
    tag: string;
    role: string;
    desc: string;
    scroll: string;
    figure: string;
  };
  about: {
    label: string;
    paragraphs: Segment[][];
    coreStack: string;
    alsoExperienced: string;
    mlLibraries: string;
  };
  projects: {
    label: string;
    title: SectionTitle;
    intro: string;
    liveSite: string;
    watchDemo: string;
    viewProject: string;
    closeAria: string;
    items: {
      rionegro: ProjectCopy;
      kkapp: ProjectCopy;
      colchoncito: ProjectCopy;
    };
  };
  marquee: string[];
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
    educationLabel: string;
    education: string[];
    certificationsLabel: string;
    certifications: string[];
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
      themeToLightAria: "Cambiar a tema claro",
      themeToDarkAria: "Cambiar a tema oscuro",
    },
    hero: {
      tag: "Disponible para nuevas oportunidades",
      role: "Desarrollador full-stack",
      desc: "Desarrollador full-stack de Córdoba, Argentina — construyendo productos digitales limpios, escalables y bellamente diseñados.",
      scroll: "Desplazá",
      figure: "FIG. 01 — TERRENO SINTÉTICO / LIMAY–NEUQUÉN",
    },
    about: {
      label: "Sobre mí",
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
          { text: "herramientas financieras.", strong: true },
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
      mlLibraries: "Librerías ML",
    },
    projects: {
      label: "Trabajos seleccionados",
      title: { pre: "Proyectos que ", em: "lancé." },
      intro: "Apps en producción, mapas y herramientas reales. Seguí bajando →",
      liveSite: "Sitio en vivo",
      watchDemo: "Ver demo",
      viewProject: "Ver proyecto",
      closeAria: "Cerrar",
      items: {
        rionegro: {
          badge: "Hidrología",
          tag: "Nuevo",
          summary:
            "Mapa satelital interactivo de la cuenca del Río Negro (ríos Limay y Neuquén) — tocá cualquiera de sus 8.016 tramos o navegá 25 subcuencas. Pipeline de datos propio con controles automáticos en cada paso.",
          desc: 'Mapa satelital interactivo de la cuenca del Río Negro, en la Patagonia argentina (ríos Limay y Neuquén). El diseño es oscuro y minimalista: solo se ve la red de ríos y una franja de tierra alrededor, con un control de "tierra visible". Tocá cualquiera de sus 8.016 tramos para ver su perfil (longitud, pendiente, orden de Strahler, caudal y regulación por represas) o navegá 25 subcuencas en hasta cuatro niveles. Armé mi propio pipeline de datos con DuckDB, GDAL y tippecanoe, con controles automáticos en cada paso: las áreas de las subcuencas deben sumar exactamente el área de la cuenca. Cada valor sale de un campo de la fuente; si no hay fuente, queda vacío, y los valores modelados de HydroATLAS están indicados como tales.',
        },
        kkapp: {
          badge: "App Web",
          summary:
            "Mapa colaborativo de baños públicos con horarios, costos y fotos. Diseñado y construido de punta a punta como único desarrollador: Next.js, API en NestJS con búsqueda geoespacial, roles y moderación. En producción en kkapp.es.",
          desc: "Encontrar un baño público limpio y disponible es un problema real en las ciudades. Como único desarrollador, diseñé y construí KKApp de punta a punta: un mapa colaborativo de baños con horarios, costos y fotos. Aposté por Next.js con TypeScript en el frontend y una API en NestJS con búsqueda geoespacial, autenticación por roles y un flujo de moderación donde los administradores aprueban cada baño enviado. Hoy está en producción en kkapp.es, recibiendo aportes de usuarios reales.",
        },
        colchoncito: {
          badge: "Finanzas",
          summary:
            "Tracker de finanzas personales para la realidad argentina de doble moneda — administrá tu dinero en pesos y dólares sin planillas.",
          desc: "Tracker de finanzas personales diseñado para la realidad argentina de doble moneda — administrá tu dinero en pesos y dólares sin planillas. Iniciá sesión con Google y tomá el control.",
        },
      },
    },
    marquee: ["Esquema", "Auth", "API", "Interfaz", "Deploy"],
    testimonials: {
      label: "Lo que dicen",
      title: { pre: "Clientes que ", em: "confían." },
      clientName: "Nombre del cliente",
      clientRole: "Cargo",
      quote:
        "Trabajar con Faustino fue una experiencia excelente. Entendió nuestras necesidades desde el primer momento y el resultado superó nuestras expectativas.",
    },
    experience: {
      label: "Carrera",
      title: { pre: "Dónde ", em: "trabajé." },
      jobs: [
        {
          period: "Mayo 2025 — Presente · Córdoba, AR",
          role: "Desarrollador Full-Stack Freelance",
          company: "",
          desc: "Diseño, desarrollo y despliegue de aplicaciones web en producción de punta a punta con Next.js, React, TypeScript, NestJS, Supabase y PostgreSQL en Vercel — KKApp, Colchoncito.",
        },
        {
          period: "Mayo 2023 — Mar 2024 · Remoto",
          role: "Desarrollador de Software para Entrenamiento de IA",
          company: "Scale AI",
          desc: "Revisión, corrección y mejora de código en Python, SQL, Java, Go y HTML para pipelines de entrenamiento de LLMs, evaluando velocidad, preparación y completitud.",
        },
        {
          period: "Ago 2022 — Feb 2023 · Remoto",
          role: "Ingeniero de Software Trainee",
          company: "Ensolvers",
          desc: "Desarrollo backend en Java y funcionalidades frontend en React; automatización de QA para el sitio del BID con Playwright y Cucumber JS.",
        },
        {
          period: "Jun 2022 — Ago 2022 · Neuquén, AR",
          role: "Desarrollador de Software, Programa NEST",
          company: "Patagonian Tech",
          desc: "Diseño y desarrollo de módulos backend reutilizables con NestJS, PostgreSQL, AWS y Docker para estandarizar los proyectos de la empresa.",
        },
        {
          period: "Nov 2021 — Ene 2022 · Neuquén, AR",
          role: "Ayudante de Cátedra, Bases de Datos",
          company: "Universidad Nacional del Comahue",
          desc: "Asistí a estudiantes con álgebra relacional, SQL y fundamentos de SGBD; corregí exámenes con devoluciones individuales.",
        },
      ],
      educationLabel: "Educación",
      education: [
        "Lic. en Ciencias de la Computación — Universidad Nacional del Comahue",
        "Ingeniería Ambiental (en curso) — Universidad Nacional de Córdoba",
      ],
      certificationsLabel: "Certificaciones",
      certifications: [
        "Desarrollo Profesional de Apps — Coderhouse",
        "Desarrollo de Apps con React Native — Patagonian Tech",
      ],
    },
    contact: {
      label: "Contacto",
      title: { pre: "Construyamos ", em: "algo." },
      intro:
        "Abierto a proyectos freelance y roles remotos — contame qué estás construyendo.",
    },
    footer: {
      copyright: "© 2026 Faustino Maggioni Duffy",
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
      themeToLightAria: "Switch to light theme",
      themeToDarkAria: "Switch to dark theme",
    },
    hero: {
      tag: "Available for new opportunities",
      role: "Full-stack developer",
      desc: "Full-stack developer from Córdoba, Argentina — building clean, scalable, beautifully designed digital products.",
      scroll: "Scroll",
      figure: "FIG. 01 — SYNTHETIC TERRAIN / LIMAY–NEUQUÉN",
    },
    about: {
      label: "About me",
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
          { text: "financial tools.", strong: true },
        ],
        [
          { text: "Based in " },
          { text: "Córdoba, Argentina", strong: true },
          { text: ". Available for remote work anywhere in the world." },
        ],
      ],
      coreStack: "Core stack",
      alsoExperienced: "Also experienced with",
      mlLibraries: "ML libraries",
    },
    projects: {
      label: "Selected work",
      title: { pre: "Projects I ", em: "shipped." },
      intro: "Production apps, maps and real tools. Keep scrolling →",
      liveSite: "Live site",
      watchDemo: "Watch demo",
      viewProject: "View project",
      closeAria: "Close",
      items: {
        rionegro: {
          badge: "Hydrology",
          tag: "New",
          summary:
            "Interactive satellite map of the Río Negro basin (Limay and Neuquén rivers) — tap any of 8,016 river reaches or drill into 25 sub-basins. Own data pipeline with automatic checks at every step.",
          desc: 'Interactive satellite map of the Río Negro basin in Argentine Patagonia (Limay and Neuquén rivers). The design is dark and minimal: only the river network and a strip of land around it are visible, with a "visible land" slider. Tap any of its 8,016 river reaches for a profile with length, gradient, Strahler order, discharge and dam regulation, or drill into 25 sub-basins across up to four levels. I built my own data pipeline with DuckDB, GDAL and tippecanoe, with automatic checks at every step: sub-basin areas must sum exactly to the basin area. Every value comes from a source field; if there\'s no source, it stays empty, and modeled HydroATLAS values are labeled as such.',
        },
        kkapp: {
          badge: "Web App",
          summary:
            "A collaborative map of public restrooms with hours, costs and photos. Designed and built end to end as sole developer — Next.js, a NestJS API with geospatial search, roles and moderation. Live at kkapp.es.",
          desc: "Finding a clean, available public restroom in a city is a real problem. As the sole developer, I designed and built KKApp end to end: a collaborative map of restrooms with opening hours, costs and photos. I chose Next.js with TypeScript for the frontend and a NestJS API with geospatial search, role-based authentication and a moderation flow where admins approve every submitted restroom. It's live in production at kkapp.es, receiving contributions from real users.",
        },
        colchoncito: {
          badge: "Finance",
          summary:
            "Personal finance tracker for Argentina's dual-currency reality — manage your money in pesos and dollars without spreadsheets.",
          desc: "Personal finance tracker designed for Argentina's dual-currency reality — manage your money in pesos and dollars without spreadsheets. Sign in with Google and take control.",
        },
      },
    },
    marquee: ["Schema", "Auth", "API", "Interface", "Deploy"],
    testimonials: {
      label: "What they say",
      title: { pre: "Clients who ", em: "trust." },
      clientName: "Client name",
      clientRole: "Role",
      quote:
        "Working with Faustino was an excellent experience. He understood our needs from day one and the result exceeded our expectations.",
    },
    experience: {
      label: "Career",
      title: { pre: "Where I've ", em: "worked." },
      jobs: [
        {
          period: "May 2025 — Present · Córdoba, AR",
          role: "Freelance Full-Stack Developer",
          company: "",
          desc: "Designing, building and deploying production web apps end-to-end with Next.js, React, TypeScript, NestJS, Supabase and PostgreSQL on Vercel — KKApp, Colchoncito.",
        },
        {
          period: "May 2023 — Mar 2024 · Remote",
          role: "Software Developer for AI Training",
          company: "Scale AI",
          desc: "Reviewed, corrected and improved Python, SQL, Java, Go and HTML for LLM training pipelines, evaluating speed, readiness and completeness.",
        },
        {
          period: "Aug 2022 — Feb 2023 · Remote",
          role: "Trainee Software Engineer",
          company: "Ensolvers",
          desc: "Backend development in Java and front-end features in React; automated QA for the IDB site with Playwright and Cucumber JS.",
        },
        {
          period: "Jun 2022 — Aug 2022 · Neuquén, AR",
          role: "Software Developer, NEST Program",
          company: "Patagonian Tech",
          desc: "Designed and developed reusable backend modules in NestJS, PostgreSQL, AWS and Docker to standardise company-wide projects.",
        },
        {
          period: "Nov 2021 — Jan 2022 · Neuquén, AR",
          role: "Assistant Professor, Databases",
          company: "National University of Comahue",
          desc: "Helped students with relational algebra, SQL and DBMS fundamentals; graded exams with individual feedback.",
        },
      ],
      educationLabel: "Education",
      education: [
        "B.Sc. Computer Science — National University of Comahue",
        "Environmental Engineering (in progress) — National University of Córdoba",
      ],
      certificationsLabel: "Certifications",
      certifications: [
        "Professional App Development — Coderhouse",
        "App Development with React Native — Patagonian Tech",
      ],
    },
    contact: {
      label: "Contact",
      title: { pre: "Let's build ", em: "something." },
      intro:
        "Open to freelance projects and remote roles — tell me what you're building.",
    },
    footer: {
      copyright: "© 2026 Faustino Maggioni Duffy",
      madeWith: "Made with care · Córdoba, Argentina",
    },
  },
};
