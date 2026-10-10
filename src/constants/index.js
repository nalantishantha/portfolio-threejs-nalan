export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 5,
    name: 'Skills',
    href: '#skills',
  },
  /* {
    id: 6,
    name: 'Testimonials',
    href: '#testimonials',
  }, */
  {
    id: 7,
    name: 'Contact',
    href: '#contact',
  },
];

export const blogArticles = [
  {
    id: 1,
    title: 'The Future of Web Development',
    desc: 'Exploring how modern frameworks and tools are shaping the next generation of fast, responsive, and dynamic web applications. We will dive into React, Next.js, and how server components are changing the landscape of frontend development. This includes a look at edge computing and decentralized web hosting.',
    img: '/assets/terminal.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Building AI Agents with React',
    desc: 'A deep dive into integrating large language models and autonomous agents directly into React applications to create smart user interfaces. Learn how to manage agent state, handle streaming responses, and build intuitive chat interfaces that rival native desktop applications in performance and usability.',
    img: '/assets/project-logo1.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Mastering Three.js for Portfolios',
    desc: 'Learn how to leverage WebGL and React Three Fiber to build stunning, interactive 3D experiences that run seamlessly in the browser. From loading custom GLTF models to applying complex shaders and lighting, this article covers everything you need to know to make your portfolio stand out.',
    img: '/assets/project-logo2.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Optimizing React Performance',
    desc: 'Discover advanced techniques for optimizing your React applications. We cover memoization, code splitting, lazy loading, and how to effectively use the React Profiler to identify and eliminate rendering bottlenecks in complex enterprise applications.',
    img: '/assets/project-logo3.png',
    link: '#',
  }
];

export const myProjects = [
  {
    id: 1,
    title: 'TourMateAI - AI Travel Companion',
    desc: 'TourMateAI is a comprehensive web application designed to give tourists personalized, context-aware travel assistance. It leverages advanced AI capabilities to provide recommendations based on location, weather, and time, alongside a conversational RAG chatbot, a multi-agent itinerary planner, and landmark image recognition.',
    subdesc:
      'Built with React, Python Flask, Google Gemini, LangGraph, and TensorFlow, TourMateAI uses a modern three-tier architecture to deliver a personalized travel experience.',
    href: '',
    texture: '/assets/TourmateAI.mp4',
    logo: '/assets/tourmateai_logo_colored.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
      {
        id: 3,
        name: 'LangGraph',
        path: '/assets/langgraph-color.svg',
      },
      {
        id: 4,
        name: 'TensorFlow',
        path: '/assets/TensorFlow.svg',
      },
    ],
  },
  {
    id: 2,
    title: 'BloxLogicAI - Supply Chain AI & Blockchain',
    desc: 'BloxLogicAI is a lightweight, Python-based web application designed to bring advanced intelligence and transparency to the tea supply chain. By integrating Machine Learning and Blockchain technology, the platform empowers stakeholders to make data-driven decisions.',
    subdesc:
      'Built with Streamlit, Facebook Prophet, Scikit-Learn (Isolation Forest), Pandas, and a custom Python SHA-256 hash chain, BloxLogicAI features role-based portals for forecasting, anomaly detection, and blockchain traceability.',
    href: '',
    texture: '/assets/BloxlogicAI.mp4',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍃</text></svg>',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Streamlit',
        path: '/assets/streamlit-seeklogo.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
      {
        id: 3,
        name: 'Scikit-Learn',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
      },
      {
        id: 4,
        name: 'Pandas',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'Medical Chatbot - AI Health Assistant',
    desc: 'The Medical Chatbot is an intelligent, conversational AI health assistant. It provides reliable medical information and first-aid advice by referencing a dedicated medical knowledge base using a Retrieval-Augmented Generation (RAG) approach.',
    subdesc:
      'Built with Python Flask, OpenAI GPT-4o, LangChain, HuggingFace embeddings, and Pinecone vector database. It features persistent chat memory, multi-session management, and a premium dark-mode UI.',
    href: '',
    texture: '/assets/Medical-Chatbot.mp4',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🩺</text></svg>',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Flask',
        path: '/assets/flask.svg',
      },
      {
        id: 2,
        name: 'LangChain',
        path: '/assets/langchain-color.svg',
      },
      {
        id: 3,
        name: 'OpenAI',
        path: '/assets/openai.svg',
      },
      {
        id: 4,
        name: 'HuggingFace',
        path: '/assets/huggingface.svg',
      },
      {
        id: 5,
        name: 'Pinecone',
        path: '/assets/pinecone-mono.svg',
      },
    ],
  },
  {
    id: 4,
    title: 'Free-Write | Reader-Focused Social Storytelling Platform',
    desc: 'This project was born as our 2nd-year undergraduate project at the University of Colombo School of Computing. Created as a solution for story branching.',
    subdesc:
      'The goal of Free-Write is to provide a safe platform where readers can create their narratives for existing (within the platform) stories. As objectives, we look forward to creating Free-Write as a platform where users can read/publish/purchase books as well as create a bridge between cover designers, publishers and authors.',
    href: '',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/logo white.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      },
      {
        id: 4,
        name: 'MySQL',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Acentura',
    pos: 'AI/ML Intern',
    duration: '2026 Aug - Present',
    title: "Working on Research & Development of AI agents, and designing and implementing an SDD framework for internal use.",
    icon: '/assets/acentura.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Sezenta',
    pos: 'Software Engineer Intern',
    duration: '2025 Dec - 2026 Jun',
    title: "Completed a 6-month software engineering internship where I contributed to developing software solutions and gained valuable hands-on industry experience.",
    icon: '/assets/sezenta.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'University of Colombo School of Computing',
    pos: 'BSc in Computer Science',
    duration: '2023 - 2026',
    title: "Pursuing my Bachelor of Science degree in Computer Science, building a strong foundation in software engineering, algorithms, and modern computing technologies.",
    icon: '/assets/ucsc.png',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'Kingswood College Kandy',
    pos: 'Advanced Level Student',
    duration: '2013 - 2022',
    title: "Completed my A/Ls in the physical science stream, achieving excellent results with 3 'A' passes, which laid the groundwork for my career in tech.",
    icon: '/assets/school.png',
    animation: 'salute',
  },
];

export const mySkills = [
  { id: 1, name: 'HTML', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { id: 2, name: 'CSS', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { id: 3, name: 'JavaScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { id: 4, name: 'TypeScript', category: 'Frontend', icon: '/assets/typescript-svgrepo-com.svg' },
  { id: 5, name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { id: 6, name: 'Next.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { id: 7, name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { id: 8, name: 'NestJS', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
  { id: 9, name: 'Python', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { id: 10, name: 'FastAPI', category: 'Backend', icon: '/assets/FastAPI.svg' },
  { id: 11, name: 'SQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { id: 12, name: 'PostgreSQL', category: 'Database', icon: '/assets/postgresql-icon.svg' },
  { id: 13, name: 'MongoDB', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { id: 14, name: 'NumPy', category: 'AI/ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
  { id: 15, name: 'Pandas', category: 'AI/ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
  { id: 16, name: 'Scikit-learn', category: 'AI/ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
  { id: 17, name: 'LangChain', category: 'AI/ML', icon: '/assets/langchain-color.svg' },
  { id: 18, name: 'LangGraph', category: 'AI/ML', icon: '/assets/langgraph-color.svg' },
  { id: 19, name: 'n8n', category: 'AI/ML', icon: '/assets/n8n-color.svg' },
  { id: 20, name: 'TensorFlow', category: 'AI/ML', icon: '/assets/TensorFlow.svg' },
  { id: 21, name: 'MCP', category: 'AI/ML', icon: '/assets/Mcp Server.svg' },
  { id: 22, name: 'Docker', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { id: 23, name: 'Postman', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { id: 24, name: 'GitHub', category: 'Tools', icon: '/assets/github-svgrepo-com.svg' },
  { id: 25, name: 'AWS', category: 'Cloud', icon: '/assets/icons8-aws-logo.svg' },
  { id: 26, name: 'Azure', category: 'Cloud', icon: '/assets/azure-color.svg' },
  { id: 27, name: 'Azure Databricks', category: 'Cloud', icon: '/assets/azure-databricks.svg' },
  { id: 28, name: 'Azure Data Factory', category: 'Cloud', icon: '/assets/data-factories.svg' },
];
