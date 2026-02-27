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

// Ajoute la logique scroll spy pour le side nav mobile
const sideNavLinks = [
  { id: "side-nav-quisuisje", section: "quisuisje" },
  { id: "side-nav-langages", section: "langages" },
  { id: "side-nav-parcours", section: "parcours" },
  { id: "side-nav-veilles", section: "veilles" },
  { id: "side-nav-projets", section: "projets" },
  { id: "side-nav-infos", section: "infos" }
];

function setActiveSideNav(activeId) {
  sideNavLinks.forEach(link => {
    const el = document.getElementById(link.id);
    if (!el) return;
    if (link.id === activeId) {
      el.classList.add("bg-red-600", "text-white");
      el.classList.remove("text-black");
    } else {
      el.classList.remove("bg-red-600", "text-white");
      el.classList.add("text-black");
    }
  });
}

function onScrollSideNav() {
  let currentId = sideNavLinks[0].id;
  for (const link of sideNavLinks) {
    const sectionEl = document.getElementById(link.section);
    if (!sectionEl) continue;
    const rect = sectionEl.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentId = link.id;
      break;
    }
  }
  setActiveSideNav(currentId);
}

window.addEventListener("scroll", onScrollSideNav);
window.addEventListener("resize", onScrollSideNav);
document.addEventListener("DOMContentLoaded", onScrollSideNav);

// Ajoute la logique scroll spy pour la side scroll bar mobile
const sideScrollLinks = [
  { id: null, href: "#quisuisje", section: "quisuisje" },
  { id: null, href: "#langages", section: "langages" },
  { id: null, href: "#parcours", section: "parcours" },
  { id: null, href: "#veilles", section: "veilles" },
  { id: null, href: "#projets", section: "projets" },
  { id: null, href: "#infos", section: "infos" }
];

function setActiveSideScrollNav(activeIndex) {
  const nav = document.getElementById('side-scroll-nav');
  if (!nav) return;
  const links = nav.querySelectorAll('a');
  links.forEach((link, i) => {
    if (i === activeIndex) {
      link.classList.add("bg-red-600", "text-white");
      link.classList.remove("text-red-600", "bg-white", "bg-opacity-80");
    } else {
      link.classList.remove("bg-red-600", "text-white");
      link.classList.add("text-red-600", "bg-white", "bg-opacity-80");
    }
  });
}

function onScrollSideScrollNav() {
  let currentIndex = 0;
  for (let i = 0; i < sideScrollLinks.length; i++) {
    const sectionEl = document.getElementById(sideScrollLinks[i].section);
    if (!sectionEl) continue;
    const rect = sectionEl.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentIndex = i;
      break;
    }
  }
  setActiveSideScrollNav(currentIndex);
}

window.addEventListener("scroll", onScrollSideScrollNav);
window.addEventListener("resize", onScrollSideScrollNav);
document.addEventListener("DOMContentLoaded", onScrollSideScrollNav);

// Side scroll bar navigation : draggable + clickable
(function() {
  const sectionIds = [
    '#quisuisje',
    '#langages',
    '#parcours',
    '#veilles',
    '#projets',
    '#infos'
  ];
  const sections = sectionIds.map(id => document.querySelector(id));
  const indicator = document.getElementById('nav-indicator');
  const nav = document.getElementById('side-scroll-nav');
  let dragging = false, startY = 0, startTop = 0;
  function updateIndicator(activeIdx) {
    if (!nav || !indicator) return;
    const navRect = nav.getBoundingClientRect();
    const total = sections.length;
    const step = (navRect.height - 40) / (total - 1);
    indicator.style.top = (activeIdx * step) + 'px';
    indicator.dataset.idx = activeIdx;
  }
  function onScrollNav() {
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      if (s) {
        const rect = s.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.3) idx = i;
      }
    }
    updateIndicator(idx);
  }
  // Drag & drop
  indicator.addEventListener('pointerdown', function(e) {
    dragging = true;
    startY = e.clientY;
    startTop = parseInt(indicator.style.top) || 0;
    indicator.setPointerCapture(e.pointerId);
  });
  indicator.addEventListener('pointermove', function(e) {
    if (!dragging) return;
    const navRect = nav.getBoundingClientRect();
    const total = sections.length;
    const step = (navRect.height - 40) / (total - 1);
    let newTop = startTop + (e.clientY - startY);
    newTop = Math.max(0, Math.min(newTop, navRect.height - 40));
    indicator.style.top = newTop + 'px';
    const idx = Math.round(newTop / step);
    indicator.dataset.idx = idx;
  });
  indicator.addEventListener('pointerup', function(e) {
    dragging = false;
    const idx = parseInt(indicator.dataset.idx) || 0;
    const target = sections[idx];
    if (target) {
      window.scrollTo({ top: target.offsetTop - 40, behavior: 'smooth' });
    }
    onScrollNav();
  });
  indicator.addEventListener('click', function(e) {
    const idx = parseInt(indicator.dataset.idx) || 0;
    const target = sections[idx];
    if (target) {
      window.scrollTo({ top: target.offsetTop - 40, behavior: 'smooth' });
    }
  });
  window.addEventListener('scroll', onScrollNav);
  window.addEventListener('resize', onScrollNav);
  document.addEventListener('DOMContentLoaded', onScrollNav);
})();
