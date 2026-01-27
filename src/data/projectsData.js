// ==========================================
// PROJECTS DATA
// Remplace ces données par tes vrais projets
// ==========================================

export const projectsData = [
  {
    id: 1,
    title: "TaskFlow - Gestionnaire de tâches",
    description: "Application de gestion de tâches avec authentification locale, filtres avancés et persistance des données. Interface moderne et intuitive avec drag & drop.",
    badge: "Front-End",
    badgeType: "primary",
    technologies: ["React", "JavaScript", "CSS Modules", "LocalStorage", "React Router"],
    note: null,
    github: "https://github.com/votre-username/taskflow",
    demo: "https://taskflow-demo.netlify.app",
    icon: "📋",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    title: "WeatherApp - Météo en temps réel",
    description: "Application météo connectée à une API externe. Recherche par ville, affichage des prévisions et sauvegarde des favoris. Première expérience avec les appels API.",
    badge: "Front-End + API",
    badgeType: "primary",
    technologies: ["React", "JavaScript", "REST API", "Axios", "CSS"],
    note: "💡 Back-End : Intégration API tierce (OpenWeather API). Objectif pédagogique : comprendre les échanges client-serveur.",
    github: "https://github.com/votre-username/weather-app",
    demo: "https://weather-app-demo.netlify.app",
    icon: "🌤️",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 3,
    title: "BlogHub - Blog avec API",
    description: "Blog simple avec API REST maison. Création, lecture et suppression d'articles. Première application full-stack complète réalisée en autonomie.",
    badge: "Full-Stack",
    badgeType: "learning",
    technologies: ["React", "Node.js", "Express", "JavaScript", "REST API"],
    note: "⚙️ Back-End : API Node.js/Express (niveau débutant). CRUD basique, routes RESTful, données en mémoire. Code disponible sur GitHub avec README détaillé.",
    github: "https://github.com/votre-username/blog-hub",
    demo: "https://blog-hub-demo.netlify.app",
    icon: "📝",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 4,
    title: "Portfolio Restaurant",
    description: "Site vitrine pour restaurant fictif. Focus sur le design, l'accessibilité et les performances. HTML/CSS pur pour démontrer la maîtrise des fondamentaux.",
    badge: "Front-End",
    badgeType: "primary",
    technologies: ["HTML5", "CSS3", "JavaScript Vanilla", "Responsive Design"],
    note: null,
    github: "https://github.com/votre-username/restaurant-portfolio",
    demo: "https://restaurant-demo.netlify.app",
    icon: "🍽️",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  }
];

// Fonction helper pour obtenir un projet par ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

// Fonction helper pour filtrer les projets par badge
export const getProjectsByBadge = (badgeType) => {
  return projectsData.filter(project => project.badgeType === badgeType);
};
