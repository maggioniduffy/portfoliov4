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
    caseStudy: string;
    viewProject: string;
    closeAria: string;
    items: {
      rionegro: ProjectCopy;
      kkapp: ProjectCopy;
      colchoncito: ProjectCopy;
      things: ProjectCopy;
    };
  };
  caseStudy: {
    label: string;
    back: string;
    lede: string;
    links: { hub: string; rionegro: string; cordoba: string };
    problem: { label: string; title: SectionTitle; body: string[] };
    architecture: {
      label: string;
      title: SectionTitle;
      intro: string;
      flow: { name: string; desc: string }[];
      outro: string;
    };
    pipeline: { label: string; title: SectionTitle; body: string[] };
    guardrail: { label: string; title: SectionTitle; body: string[] };
    regions: { label: string; title: SectionTitle; body: string[] };
    stack: { label: string; title: SectionTitle; core: string; also: string };
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
    coffee: string;
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
      desc: "Desarrollador full-stack que construye productos web en producción de punta a punta con TypeScript, React, Next.js, NestJS y PostgreSQL. Apps geoespaciales y pipelines de datos. Remoto desde Argentina.",
      scroll: "Desplazá",
    },
    about: {
      label: "Sobre mí",
      paragraphs: [
        [
          {
            text: "Desarrollador full-stack con más de 3 años de experiencia construyendo y lanzando aplicaciones web en producción de punta a punta con TypeScript, React, Next.js, NestJS y PostgreSQL.",
          },
        ],
        [
          { text: "Me especializo en " },
          {
            text: "productos geoespaciales y pipelines de datos con validación automatizada",
            strong: true,
          },
          { text: "." },
        ],
        [
          { text: "Basado en " },
          { text: "Córdoba, Argentina", strong: true },
          {
            text: ", disponible para trabajo remoto en cualquier parte del mundo.",
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
      caseStudy: "Caso de estudio →",
      viewProject: "Ver proyecto",
      closeAria: "Cerrar",
      items: {
        rionegro: {
          badge: "Hidrología",
          tag: "Nuevo",
          summary: "Exploradores satelitales de cuencas fluviales argentinas sobre un código compartido: Río Negro (8.016 tramos de río, 25 subcuencas) y las cuencas de Córdoba. Pipeline de datos propio en TypeScript/DuckDB/GDAL con controles automáticos en cada paso; búsqueda en lenguaje natural donde un LLM elige ríos y métricas pero nunca escribe números.",
          desc: "Exploradores satelitales de cuencas fluviales argentinas sobre un código compartido: Río Negro (8.016 tramos de río, 25 subcuencas) y las cuencas de Córdoba. Pipeline de datos propio en TypeScript/DuckDB/GDAL con controles automáticos en cada paso; búsqueda en lenguaje natural donde un LLM elige ríos y métricas pero nunca escribe números.",
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
        things: {
          badge: "Productividad",
          tag: "Nuevo",
          summary:
            "Guardá cualquier cosa y encontrala de nuevo: links, archivos y notas, ordenados por formato, en colecciones y con búsqueda rápida.",
          desc: "Things es una app para guardar links, archivos y notas para más tarde. Todo se ordena por formato, se organiza en colecciones y se encuentra de nuevo con búsqueda rápida. Construida con Next.js 16, Supabase y Tailwind CSS v4, con tests de base de datos, unitarios y end-to-end con Playwright.",
        },
      },
    },
    caseStudy: {
      label: "Caso de estudio · Hidrología",
      back: "← Todos los proyectos",
      lede: "Exploradores satelitales de cuencas fluviales argentinas sobre un código compartido: Río Negro (8.016 tramos de río, 25 subcuencas) y las cuencas de Córdoba. Pipeline de datos propio en TypeScript/DuckDB/GDAL con controles automáticos en cada paso; búsqueda en lenguaje natural donde un LLM elige ríos y métricas pero nunca escribe números.",
      links: { hub: "Sitio en vivo", rionegro: "Río Negro", cordoba: "Córdoba" },
      problem: {
        label: "El problema",
        title: { pre: "Valores con ", em: "fuente." },
        body: [
          "Explorar cuencas fluviales sobre imágenes satelitales, con cada valor trazable hasta su fuente.",
          "Tocás un río, un tramo o una subcuenca y se abre un panel con sus métricas. El explorador del Río Negro cubre 8.016 tramos de río y 25 subcuencas.",
        ],
      },
      architecture: {
        label: "Arquitectura",
        title: { pre: "Sin backend ", em: "aparte." },
        intro: "La geometría y los metadatos viven separados y se encuentran en un id de feature. Así viaja un clic en el mapa:",
        flow: [
          {
            name: "PMTiles estáticos",
            desc: "La geometría de ríos y cuencas se sirve como tiles vectoriales PMTiles estáticos, que el navegador lee con requests HTTP Range.",
          },
          {
            name: "Id de feature",
            desc: "Cada feature de los tiles lleva un id que coincide con un documento en MongoDB, así que un clic sabe exactamente qué pedir.",
          },
          {
            name: "Route handlers en CDN",
            desc: "El clic llega a route handlers de Next.js cuyas respuestas quedan cacheadas en un CDN.",
          },
          {
            name: "MongoDB de solo lectura",
            desc: "Los metadatos viven en MongoDB y solo se leen desde Server Components y Route Handlers, con un usuario de base de datos de solo lectura.",
          },
        ],
        outro: "No hay un backend separado: la app de Next.js es todo el stack.",
      },
      pipeline: {
        label: "Pipeline de datos",
        title: { pre: "Controlado en cada ", em: "paso." },
        body: [
          "Los datos se construyen con un pipeline de pasos en TypeScript que usan DuckDB y tippecanoe.",
          "Cada paso escribe un report.json y corre controles automáticos.",
        ],
      },
      guardrail: {
        label: "Búsqueda con LLM",
        title: { pre: "El modelo nunca escribe ", em: "números." },
        body: [
          "Una caja de preguntas en lenguaje natural responde cosas como “¿Cuál es más largo, el Caleufú o el Agrio?”.",
          "El LLM solo elige los ríos y la medida. Los valores de la respuesta se leen de los datos y se muestran con su fuente y, cuando corresponde, con las advertencias sobre datos modelados.",
        ],
      },
      regions: {
        label: "Multi-región",
        title: { pre: "Un código, varias ", em: "cuencas." },
        body: [
          "Cada región es su propio explorador sobre un código compartido: el Río Negro en /rionegro y las cuencas de Córdoba en /cordoba.",
          "Las regiones se declaran en un registro con su propia configuración, textos y contenido, y comparten todos los componentes.",
        ],
      },
      stack: {
        label: "Stack",
        title: { pre: "Con qué está ", em: "hecho." },
        core: "Stack principal",
        also: "También",
      },
    },
    marquee: ["Esquema", "Auth", "API", "Interfaz", "Deploy"],
    testimonials: {
      label: "Lo que dicen",
      title: { pre: "Clientes que ", em: "confían." },
      clientName: "Fernando Garriga",
      clientRole: "Owner",
      quote:
        "Trabajar con Faustino fue una experiencia excelente. Entendió nuestras necesidades desde el primer momento y el resultado superó nuestras expectativas.",
    },
    experience: {
      label: "Carrera",
      title: { pre: "Dónde ", em: "trabajé." },
      jobs: [
        {
          period: "Mayo 2025 — Presente",
          role: "Desarrollador Full-Stack Freelance",
          company: "Independiente",
          desc: "Construí y lancé KKApp (kkapp.es) como único desarrollador: frontend en Next.js, API en NestJS/PostgreSQL con búsqueda geoespacial, acceso por roles y moderación de ubicaciones enviadas por usuarios; a cargo del modelado de datos, la autenticación, la UX y el despliegue en producción en Vercel.",
        },
        {
          period: "Mayo 2023 — Feb 2024 · Remoto",
          role: "Desarrollador de Software para Entrenamiento de IA",
          company: "Scale AI",
          desc: "Evalué y corregí código generado por IA en Python, SQL, Java, Go y HTML para pipelines de entrenamiento de LLMs, analizando corrección, rendimiento y completitud.",
        },
        {
          period: "Ago 2022 — Feb 2023",
          role: "Ayudante de Cátedra, Bases de Datos",
          company: "Universidad Nacional del Comahue",
          desc: "Acompañé a estudiantes en álgebra relacional, SQL y fundamentos de SGBD; corregí exámenes y di devoluciones individuales.",
        },
        {
          period: "Jun 2022 — Ago 2022 · Remoto",
          role: "Ingeniero de Software Trainee",
          company: "Ensolvers",
          desc: "Contribuí al desarrollo backend en Java y construí funcionalidades frontend con React.",
        },
        {
          period: "Nov 2021 — Ene 2022",
          role: "Desarrollador de Software, Programa NEST",
          company: "Patagonian Tech",
          desc: "Automaticé pruebas de QA para el sitio del BID con Playwright y Cucumber JS; diseñé y desarrollé módulos backend reutilizables con NestJS, PostgreSQL, AWS y Docker para estandarizar los proyectos de toda la empresa.",
        },
      ],
      educationLabel: "Educación",
      education: [
        "Analista Programador Universitario — Universidad Nacional del Comahue, 2019–2022",
        "Ingeniería Ambiental (en curso) — Universidad Nacional de Córdoba, 2023–presente",
        "Semestre con beca, Software — ITBA, 2022",
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
      coffee: "Invitame un cafecito ☕",
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
      role: "Full-stack software engineer",
      desc: "Full-stack engineer building production web products end to end with TypeScript, React, Next.js, NestJS and PostgreSQL. Geospatial apps and data pipelines. Remote from Argentina.",
      scroll: "Scroll",
    },
    about: {
      label: "About me",
      paragraphs: [
        [
          {
            text: "Full-stack engineer with 3+ years of experience building and shipping production web applications end to end with TypeScript, React, Next.js, NestJS and PostgreSQL.",
          },
        ],
        [
          { text: "I specialize in " },
          {
            text: "geospatial products and data pipelines with automated validation",
            strong: true,
          },
          { text: "." },
        ],
        [
          { text: "Based in " },
          { text: "Córdoba, Argentina", strong: true },
          { text: ", available for remote work worldwide." },
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
      caseStudy: "Case study →",
      viewProject: "View project",
      closeAria: "Close",
      items: {
        rionegro: {
          badge: "Hydrology",
          tag: "New",
          summary: "Satellite explorers of Argentine river basins on a shared codebase: Río Negro (8,016 river reaches, 25 sub-basins) and the Córdoba basins. Custom TypeScript/DuckDB/GDAL data pipeline with automated checks at every step; natural-language search where an LLM picks rivers and metrics but never writes numbers.",
          desc: "Satellite explorers of Argentine river basins on a shared codebase: Río Negro (8,016 river reaches, 25 sub-basins) and the Córdoba basins. Custom TypeScript/DuckDB/GDAL data pipeline with automated checks at every step; natural-language search where an LLM picks rivers and metrics but never writes numbers.",
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
        things: {
          badge: "Productivity",
          tag: "New",
          summary:
            "Save anything, find it again: links, files and notes, sorted by format, organised into collections and found with fast search.",
          desc: "Things is a save-for-later app for links, files and notes. Everything is sorted by format, organised into collections and found again with fast search. Built with Next.js 16, Supabase and Tailwind CSS v4, with database, unit and Playwright end-to-end tests.",
        },
      },
    },
    caseStudy: {
      label: "Case study · Hydrology",
      back: "← All projects",
      lede: "Satellite explorers of Argentine river basins on a shared codebase: Río Negro (8,016 river reaches, 25 sub-basins) and the Córdoba basins. Custom TypeScript/DuckDB/GDAL data pipeline with automated checks at every step; natural-language search where an LLM picks rivers and metrics but never writes numbers.",
      links: { hub: "Live site", rionegro: "Río Negro", cordoba: "Córdoba" },
      problem: {
        label: "The problem",
        title: { pre: "Values with a ", em: "source." },
        body: [
          "Explore river basins on satellite imagery, with every value traceable to its source.",
          "Tap a river, a reach or a sub-basin to open a panel with its metrics. The Río Negro explorer covers 8,016 river reaches and 25 sub-basins.",
        ],
      },
      architecture: {
        label: "Architecture",
        title: { pre: "No separate ", em: "backend." },
        intro: "Geometry and metadata live apart and meet on a feature id. This is the path of a click on the map:",
        flow: [
          {
            name: "Static PMTiles",
            desc: "River and basin geometry is served as static PMTiles vector tiles, which the browser reads with HTTP range requests.",
          },
          {
            name: "Feature id",
            desc: "Every feature in the tiles carries an id that matches a document in MongoDB, so a click knows exactly what to fetch.",
          },
          {
            name: "CDN-cached route handlers",
            desc: "The click reaches Next.js route handlers whose responses are cached on a CDN.",
          },
          {
            name: "Read-only MongoDB",
            desc: "Metadata lives in MongoDB and is read only from Server Components and Route Handlers, through a read-only database user.",
          },
        ],
        outro: "There is no separate backend: the Next.js app is the whole stack.",
      },
      pipeline: {
        label: "Data pipeline",
        title: { pre: "Checked at every ", em: "step." },
        body: [
          "The data is built by a pipeline of TypeScript steps that run DuckDB and tippecanoe.",
          "Each step writes a report.json and runs automated checks.",
        ],
      },
      guardrail: {
        label: "LLM search",
        title: { pre: "The model never writes ", em: "numbers." },
        body: [
          "A natural-language ask box answers questions like “Which is longer, Caleufú or Agrio?”.",
          "The LLM only picks the rivers and the measure. The values in the answer are read from the data and shown with their source and, where they apply, the caveats on modeled data.",
        ],
      },
      regions: {
        label: "Multi-region",
        title: { pre: "One codebase, many ", em: "basins." },
        body: [
          "Each region is its own explorer on a shared codebase: Río Negro at /rionegro and the Córdoba basins at /cordoba.",
          "Regions are declared in a registry with their own config, messages and content, and share every component.",
        ],
      },
      stack: {
        label: "Stack",
        title: { pre: "What it's ", em: "built with." },
        core: "Core stack",
        also: "Also",
      },
    },
    marquee: ["Schema", "Auth", "API", "Interface", "Deploy"],
    testimonials: {
      label: "What they say",
      title: { pre: "Clients who ", em: "trust." },
      clientName: "Fernando Garriga",
      clientRole: "Owner",
      quote:
        "Working with Faustino was an excellent experience. He understood our needs from day one and the result exceeded our expectations.",
    },
    experience: {
      label: "Career",
      title: { pre: "Where I've ", em: "worked." },
      jobs: [
        {
          period: "May 2025 — Present",
          role: "Freelance Full-Stack Developer",
          company: "Independent",
          desc: "Built and launched KKApp (kkapp.es) as sole developer: Next.js frontend, NestJS/PostgreSQL API with geospatial search, role-based access and moderation of user-submitted locations; owned data modeling, authentication, UX and production deployment on Vercel.",
        },
        {
          period: "May 2023 — Feb 2024 · Remote",
          role: "Software Developer for AI Training",
          company: "Scale AI",
          desc: "Evaluated and corrected AI-generated code in Python, SQL, Java, Go and HTML for LLM training pipelines, assessing correctness, performance and completeness.",
        },
        {
          period: "Aug 2022 — Feb 2023",
          role: "Teaching Assistant, Databases",
          company: "National University of Comahue",
          desc: "Supported students in relational algebra, SQL and DBMS fundamentals; graded exams and gave individual feedback.",
        },
        {
          period: "Jun 2022 — Aug 2022 · Remote",
          role: "Trainee Software Engineer",
          company: "Ensolvers",
          desc: "Contributed to backend development in Java and built frontend features with React.",
        },
        {
          period: "Nov 2021 — Jan 2022",
          role: "Software Developer, NEST Program",
          company: "Patagonian Tech",
          desc: "Automated QA testing for the IDB website with Playwright and Cucumber JS; designed and developed reusable backend modules in NestJS, PostgreSQL, AWS and Docker to standardize company-wide projects.",
        },
      ],
      educationLabel: "Education",
      education: [
        "Analista Programador Universitario (University Programming Analyst) — National University of Comahue, 2019–2022",
        "Environmental Engineering (in progress) — National University of Córdoba, 2023–present",
        "Scholarship semester, Software — ITBA, 2022",
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
      coffee: "Buy me a coffee ☕",
    },
  },
};
