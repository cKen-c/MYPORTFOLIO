// Traductions
const texts = {
  FR: {
    nav: {
      quisuisje: "Qui suis-je ?",
      langages: "Langages / Outils",
      parcours: "Parcours",
      veilles: "Veilles",
      projets: "Projets",
      infos: "Infos",
    },
    // tu peux ajouter d'autres sections ici
  },
  EN: {
    nav: {
      quisuisje: "About me",
      langages: "Languages / Tools",
      parcours: "Background",
      veilles: "Tech Watch",
      projets: "Projects",
      infos: "Infos",
    },
  }
};

// Sélection des boutons
const frBtn = document.getElementById('fr-btn');
const enBtn = document.getElementById('en-btn');

// Fonction pour mettre à jour le texte
function setLanguage(lang) {
  const nav = texts[lang].nav;

  document.getElementById('nav-quisuisje').textContent = nav.quisuisje;
  document.getElementById('nav-langages').textContent = nav.langages;
  document.getElementById('nav-parcours').textContent = nav.parcours;
  document.getElementById('nav-veilles').textContent = nav.veilles;
  document.getElementById('nav-projets').textContent = nav.projets;
  document.getElementById('nav-infos').textContent = nav.infos;

  // Ici tu peux aussi changer le texte des sections si besoin
}

// Événements sur les boutons
frBtn.addEventListener('click', () => setLanguage('FR'));
enBtn.addEventListener('click', () => setLanguage('EN'));

const translations = {
  fr: {
    qui: "Qui suis-je ?",
    qui_txt: "Je m'appelle Kenneth Cakpo, étudiant en BTS Services Informatiques aux Organisations Options SLAM (Solutions Logicielles et Applications Métiers), futur développeur passionné par la création de solutions technologiques innovantes et le numérique. J'ai développé des compétences en développement web, gestion de projets et administration système. Curieux, adaptable et doté d'un esprit d'équipe, je m'efforce toujours d'atteindre mes objectifs tout en cultivant la confiance en moi et une bonne gestion de la pression. Je rêve de devenir un ingénieur en Software Engineering et de contribuer à des projets d'envergure.",
    lang: "Langages / Outils",
    lang_txt: "Parmi ces langages et outils, certains font déjà partie de mon quotidien et j'en maîtrise l'utilisation, tandis que d'autres sont en cours d'apprentissage. Je m'efforce de progresser constamment pour enrichir mes compétences et devenir plus polyvalent dans mes projets.",
    parcours: "Parcours",
    parcours_txt: "Après un cursus orienté informatique et développement web, j'ai travaillé sur divers projets qui m'ont permis de renforcer mes compétences techniques et créatives.",
    veilles: "Veilles",
    veilles_txt: "La veille technologique est une activité de surveillance continue qui permet de suivre les avancées et les innovations dans le domaine de l’informatique et du développement web. Elle a pour objectif de détecter les nouvelles tendances, outils et pratiques afin d’anticiper les évolutions, d’améliorer ses compétences et de rester compétitif dans un secteur en constante évolution. Pour cela, j’utilise différents moyens comme les flux RSS, les réseaux sociaux comme LinkedIn et Twitter/X, des Youtubeurs comme",
    projets: "Projets",
    projets_txt: "Portfolio, applications web interactives, petits jeux et expérimentations avec JavaScript et React. Chaque projet est l'occasion de repousser mes limites et d'apprendre.",
    infos: "Infos",
    infos_txt1: "Le BTS SIO (Services Informatiques aux Organisations) est un diplôme français de niveau Bac+2 qui forme des professionnels capables de concevoir, développer et gérer des solutions informatiques adaptées aux besoins des entreprises.",
    infos_txt2: "Ce BTS propose deux options : <span class='font-bold'>SLAM</span> (Solutions Logicielles et Applications Métiers), axée sur le développement d’applications et de logiciels, et <span class='font-bold'>SISR</span> (Solutions d’Infrastructure, Systèmes et Réseaux), centrée sur l’administration des systèmes et des réseaux informatiques.",
    infos_txt3: "<span class='font-bold'>Débouchés SLAM :</span> développeur web, développeur d’applications mobiles, intégrateur logiciel.<br><span class='font-bold'>Débouchés SISR :</span> administrateur système et réseau, technicien support, consultant en infrastructures informatiques.",
    copyright: "© 2025 Kenneth Cakpo."
  },

  en: {
    qui: "About Me",
    qui_txt: "My name is Kenneth Cakpo, a student in BTS Services Informatiques aux Organisations, SLAM option (Software Solutions and Business Applications), and a future developer passionate about creating innovative technological solutions and digital projects. I have developed skills in web development, project management, and system administration. Curious, adaptable, and a team player, I always strive to achieve my goals while cultivating self-confidence and good stress management. My dream is to become a Software Engineering professional and contribute to major projects.",
    lang: "Languages / Tools",
    lang_txt: "Among these languages and tools, some are already part of my daily routine and I master their use, while others are still being learned. I constantly strive to improve my skills and become more versatile in my projects.",
    parcours: "Background",
    parcours_txt: "After a curriculum focused on IT and web development, I worked on various projects that helped me strengthen my technical and creative skills.",
    veilles: "Tech Watch",
    veilles_txt: "Technology monitoring is a continuous monitoring activity that allows you to stay abreast of advances and innovations in the field of IT and web development. Its goal is to detect new trends, new tools, and new practices in order to anticipate developments, improve your skills, and remain competitive in a constantly evolving sector. To do this, I use various tools such as RSS feeds, social networks like LinkedIn and Twitter/X, and YouTubers like",
    projets: "Projects",
    projets_txt: "Portfolio, interactive web apps, small games, and experiments with JavaScript and React. Each project is an opportunity to push my limits and learn.",
    infos: "Infos",
    infos_txt1: "The BTS SIO (IT Services for Organizations) is a French two-year degree that trains professionals to design, develop, and manage IT solutions tailored to business needs.",
    infos_txt2: "This BTS offers two options: <span class='font-bold'>SLAM</span> (Software Solutions and Business Applications), focused on application and software development, and <span class='font-bold'>SISR</span> (Infrastructure, Systems, and Networks Solutions), focused on system and network administration.",
    infos_txt3: "<span class='font-bold'>SLAM careers:</span> web developer, mobile app developer, software integrator.<br><span class='font-bold'>SISR careers:</span> system and network administrator, support technician, IT infrastructure consultant.",
    copyright: "© 2025 Kenneth Cakpo."
  }
};

// Fonction pour changer la langue
function setLang(lang) {

    // Gestion du bouton actif
  const frBtn = document.getElementById("fr-btn");
  const enBtn = document.getElementById("en-btn");

  if (lang === "fr") {
    frBtn.classList.add("text-red-600");
    enBtn.classList.remove("text-red-600");
  } else {
    enBtn.classList.add("text-red-600");
    frBtn.classList.remove("text-red-600");
  }
  
  document.getElementById("quisuisje-title").textContent = translations[lang].qui;
  document.getElementById("quisuisje-txt").textContent = translations[lang].qui_txt;
  document.getElementById("langages-title").textContent = translations[lang].lang;
  document.getElementById("langages-txt").textContent = translations[lang].lang_txt;
  document.getElementById("parcours-title").textContent = translations[lang].parcours;
  document.getElementById("parcours-txt").textContent = translations[lang].parcours_txt;
  document.getElementById("veilles-title").textContent = translations[lang].veilles;
  document.getElementById("veilles-txt").textContent = translations[lang].veilles_txt;
  document.getElementById("projets-title").textContent = translations[lang].projets;
  document.getElementById("projets-txt").textContent = translations[lang].projets_txt;
  document.getElementById("infos-title").textContent = translations[lang].infos;
  document.getElementById("infos-txt1").innerHTML = translations[lang].infos_txt1;
  document.getElementById("infos-txt2").innerHTML = translations[lang].infos_txt2;
  document.getElementById("infos-txt3").innerHTML = translations[lang].infos_txt3;
  document.getElementById("copyright-txt").innerHTML = translations[lang].copyright;
}

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// === SECTIONS À SUIVRE ===
const sections = [
  { id: "quisuisje", nav: "nav-quisuisje" },
  { id: "langages", nav: "nav-langages" },
  { id: "parcours", nav: "nav-parcours" },
  { id: "veilles", nav: "nav-veilles" },
  { id: "projets", nav: "nav-projets" },
  { id: "infos", nav: "nav-infos" }
];

let activeNav = null;

// === MET À JOUR LE BOUTON ACTIF ===
function setActiveNav(activeNavId) {
  activeNav = activeNavId;
  sections.forEach(s => {
    const link = document.getElementById(s.nav);
    if (!link) return;

    if (s.nav === activeNavId) {
      link.classList.add("bg-red-600", "text-white");
      link.classList.remove("text-black");
    } else {
      link.classList.remove("bg-red-600", "text-white");
      link.classList.add("text-black");
    }
  });
}

// === DÉTECTE LA SECTION VISIBLE ===
function onScroll() {
  let currentNav = sections[0].nav;

  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (!el) continue;

    const rect = el.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentNav = section.nav;
      break;
    }
  }

  setActiveNav(currentNav);
}

// === GÈRE LE HOVER (SURVOL) ===
function addHoverEffect() {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
      // survol → rouge temporaire
      link.classList.add("bg-red-600", "text-white");
    });

    link.addEventListener("mouseleave", () => {
      // si ce n’est pas le lien actif, il redevient normal
      const isActive = link.id === activeNav;
      if (!isActive) {
        link.classList.remove("bg-red-600", "text-white");
        link.classList.add("text-black");
      }
    });
  });
}

// === SCROLL DOUX SUR CLIQUE ===
function setupSmoothScroll() {
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const href = this.getAttribute("href").replace("#", "");
      const navId = sections.find(s => s.id === href)?.nav;
      if (navId) {
        setTimeout(() => setActiveNav(navId), 300);
      }
    });
  });
}

// === INITIALISATION ===
window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onScroll);
document.addEventListener("DOMContentLoaded", () => {
  addHoverEffect();
  setupSmoothScroll();
  onScroll();
});
