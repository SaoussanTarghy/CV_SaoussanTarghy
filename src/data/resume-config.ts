import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Saoussan Targhy',
    photoBackEmoji: '👩‍💻',
    title: {
      fr: 'Étudiante en Génie Informatique',
      en: 'Computer Engineering Student',
    },
    subtitle: {
      fr: 'Développement Web Full Stack',
      en: 'Full Stack Web Development',
    },
    location: 'Salé, Maroc',
  },
  seo: {
    title: 'Saoussan Targhy — Étudiante Génie Informatique',
    description: 'CV interactif de Saoussan Targhy, étudiante en Génie Informatique spécialisée en développement web full stack.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'saoussan-targhy', href: 'https://www.linkedin.com/in/saoussan-targhy-a60564331' },
    { type: 'email', label: 'saoussantarghi@gmail.com' },
    { type: 'phone', label: '+212 693 416 596' },
    { type: 'location', label: 'Salé, Maroc' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'Maternel', en: 'Native' } },
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Courant', en: 'Fluent' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Intermédiaire', en: 'Intermediate' } },
      ],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React.js' },
        { name: 'React Native' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Laravel' },
        { name: 'Flask' },
        { name: 'Java EE' },
        { name: 'Socket.io' },
        { name: 'PHP' },
      ],
    },
    {
      title: { fr: 'Langages', en: 'Languages' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'SQL' },
        { name: 'C' },
        { name: 'XML' },
        { name: 'XSLT' },
      ],
    },
    {
      title: { fr: 'Bases de données', en: 'Databases' },
      type: 'badges',
      items: [
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'SQLite' },
      ],
    },
    {
      title: { fr: 'Data Science & IA', en: 'Data Science & AI' },
      type: 'badges',
      items: [
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'scikit-learn', color: '#F7931E' },
        { name: 'TensorFlow' },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Figma' },
        { name: 'Canva' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'MVC/DAO, API REST, JWT, Architecture Full Stack', en: 'MVC/DAO, REST API, JWT, Full Stack Architecture' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Leadership · Communication · Travail en équipe · Prise de parole en public · Intégrité · Adaptabilité', en: 'Leadership · Communication · Teamwork · Public Speaking · Integrity · Adaptability' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'menpss',
      company: { fr: 'Direction Provinciale du M.E.N.P.S', en: 'Provincial Directorate of M.E.N.P.S' },
      role: { fr: 'Stagiaire Initiation', en: 'Internship' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '2024 – 2025', en: '2024 – 2025' },
      description: {
        fr: 'Stage d\'initiation au sein de la Direction Provinciale du Ministère de l\'Éducation à Chefchaouen.',
        en: 'Introductory internship at the Provincial Directorate of the Ministry of Education in Chefchaouen.',
      },
      techs: ['MASSIRH', 'INDIMAJ'],
      details: {
        context: {
          fr: 'Direction provinciale du Ministère de l\'Éducation Nationale, Chefchaouen, Maroc.',
          en: 'Provincial directorate of the Ministry of National Education, Chefchaouen, Morocco.',
        },
        tasks: {
          fr: [
            'Gestion des dossiers d\'allocations familiales via les systèmes MASSIRH et INDIMAJ',
            'Établissement des attestations de salaire, de travail et d\'absence de sanctions disciplinaires',
            'Saisie des fiches de notation individuelle pour la promotion de grade des enseignants',
          ],
          en: [
            'Management of family allowance files via MASSIRH and INDIMAJ systems',
            'Issuing salary, employment and disciplinary record certificates',
            'Entering individual evaluation forms for teacher grade promotion',
          ],
        },
        env: {
          fr: 'MASSIRH / INDIMAJ',
          en: 'MASSIRH / INDIMAJ',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'École Supérieure de Technologie de Salé — Université Mohammed V de Rabat', en: 'École Supérieure de Technologie de Salé — Mohammed V University of Rabat' },
      degree: { fr: 'DUT — Génie Informatique', en: 'DUT — Computer Engineering' },
      specialty: { fr: 'Développement Web Full Stack', en: 'Full Stack Web Development' },
      period: '2024 – en cours',
    },
    {
      school: { fr: 'Lycée — Maroc', en: 'High School — Morocco' },
      degree: { fr: 'Baccalauréat Sciences Physiques', en: 'Bachelor of Physical Sciences' },
      specialty: { fr: 'Mention Très Bien', en: 'With High Honours' },
      period: '2023 – 2024',
    },
  ],
  projects: [
    {
      id: 'robocare',
      title: { fr: 'RoboCare', en: 'RoboCare' },
      description: {
        fr: 'Application mobile de santé mentale avec chatbot IA (Groq), évaluations psychologiques GAD-7 et PHQ-9, authentification JWT et API REST.',
        en: 'Mental health mobile app with AI chatbot (Groq), GAD-7 and PHQ-9 psychological assessments, JWT authentication and REST API.',
      },
      techs: ['React Native', 'Node.js', 'SQL', 'JWT'],
    },
    {
      id: 'banking-app',
      title: { fr: 'Application Bancaire', en: 'Banking Application' },
      description: {
        fr: 'Application web bancaire avec gestion des comptes, virements, authentification multi-rôles et opérations CRUD sécurisées.',
        en: 'Web banking application with account management, transfers, multi-role authentication and secured CRUD operations.',
      },
      techs: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS'],
    },
    {
      id: 'chat-app',
      title: { fr: 'Messagerie Instantanée', en: 'Instant Messaging' },
      description: {
        fr: 'Application de chat en temps réel avec messagerie privée, gestion des contacts et authentification utilisateur.',
        en: 'Real-time chat application with private messaging, contact management and user authentication.',
      },
      techs: ['Node.js', 'Socket.io', 'React.js', 'MySQL'],
    },
    {
      id: 'academic-planning',
      title: { fr: 'Planification Académique', en: 'Academic Planning' },
      description: {
        fr: 'Application Java EE avec planification automatisée via EJB Timer, gestion des ressources et architecture MVC/DAO.',
        en: 'Java EE application with automated scheduling via EJB Timer, resource management and MVC/DAO architecture.',
      },
      techs: ['Java EE', 'MySQL'],
    },
    {
      id: 'simplex-solver',
      title: { fr: 'Solveur Simplex', en: 'Simplex Solver' },
      description: {
        fr: 'Application web pour la résolution de problèmes de programmation linéaire avec implémentation de l\'algorithme du simplexe.',
        en: 'Web application for solving linear programming problems with simplex algorithm implementation.',
      },
      techs: ['Python', 'Flask', 'NumPy'],
    },
  ],
  theme: { preset: 'minimal' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCE PROFESSIONNELLE', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS ACADÉMIQUES', en: 'ACADEMIC PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech. env.:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
