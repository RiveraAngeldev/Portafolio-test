AOS.init();

const languageToggle = document.getElementById('language-toggle');
const translatableElements = document.querySelectorAll('[data-translate]');

const translations = {
  es: {
    pageTitle: "Rivera, Angel - Portafolio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    resume: "Currículum",
    heroSubtitle: "Desarrollador Frontend | Ingeniero en Software",
    heroText: "Apasionado por el aprendizaje continuo y los retos del desarrollo web.",
    contactMe: "Contáctame",
    aboutText: `Soy estudiante de Ingeniería en Software con experiencia en desarrollo frontend utilizando tecnologías como
      HTML, CSS y JavaScript. Me apasiona crear interfaces atractivas y funcionales, así como afrontar retos complejos en programación.
      También tengo experiencia en C++ y en la recreación de videojuegos con OpenFrameworks.`,
    todoDescription: "Aplicación para gestionar tareas, diseñada con HTML, CSS y JavaScript.",
    zeldaTitle: "Videojuego en C++",
    zeldaDescription: "Un juego desarrollado en C++ utilizando OpenFrameworks, con animaciones, sonidos y puntajes dinámicos.",
    ukikuDescription: "Clon funcional desarrollado con HTML, CSS y JavaScript, que recrea la experiencia de navegación y organización de contenido de la popular aplicación Ukiku.",
    viewGithub: "Ver en GitHub",
    resumeText: "Puedes ver mi currículum a continuación.",
    resumeButton: "Resume",
    contactText: "¿Tienes un proyecto en mente? Contáctame.",
    sendEmail: "Enviar correo",
    footerCopyright: "© 2024 Rivera, Angel. Todos los derechos reservados."
  },
  en: {
    pageTitle: "Rivera, Angel - Portfolio",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
    heroSubtitle: "Frontend Developer | Software Engineer",
    heroText: "Passionate about continuous learning and web development challenges.",
    contactMe: "Contact Me",
    aboutText: `I am a Software Engineering student with experience in frontend development using technologies such as
      HTML, CSS and JavaScript. I’m passionate about creating attractive and functional interfaces and solving complex programming challenges.
      I also have experience in C++ and recreating video games using OpenFrameworks.`,
    todoDescription: "Task management app built with HTML, CSS and JavaScript.",
    zeldaTitle: "C++ Video Game",
    zeldaDescription: "A game developed in C++ using OpenFrameworks, featuring animations, sound, and dynamic scoring.",
    ukikuDescription: "Functional clone built with HTML, CSS, and JavaScript that recreates the navigation and content layout of the popular Ukiku app.",
    viewGithub: "View on GitHub",
    resumeText: "You can view my resume below.",
    resumeButton: "Resume",
    contactText: "Have a project in mind? Contact me.",
    sendEmail: "Send Email",
    footerCopyright: "© 2024 Rivera, Angel. All rights reserved."
  }
};

let currentLanguage = 'es';

function updateTranslations() {
  document.title = translations[currentLanguage].pageTitle;

  translatableElements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  languageToggle.textContent = currentLanguage.toUpperCase();
}

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  updateTranslations();
});

document.addEventListener('DOMContentLoaded', updateTranslations);
