/* ==========================================================================
   HIGHERIT INTERACTION CONTROLLER (MAIN.JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initEcosystem();
  initCounterObserver();
  initIndustrySelector();
  initSmoothScroll();
});

/* --- 1. Sticky Navbar & Active Section Tracking --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link update
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --- 2. Mobile Menu Toggle --- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    toggleBtn.classList.toggle('active');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggleBtn.classList.remove('active');
    });
  });
}

/* --- 3. Interactive Ecosystem Diagram --- */
function initEcosystem() {
  const nodes = document.querySelectorAll('.orbit-node');
  const core = document.querySelector('.ecosystem-core');

  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const nodeName = node.dataset.node || 'Feature';
      if (core) {
        core.style.transform = 'scale(1.08)';
        core.style.boxShadow = '0 0 50px rgba(255, 122, 0, 0.6)';
      }
    });

    node.addEventListener('mouseleave', () => {
      if (core) {
        core.style.transform = 'scale(1)';
        core.style.boxShadow = '0 0 40px rgba(11, 99, 246, 0.4)';
      }
    });
  });
}

/* --- 4. Animated Numerical Counter --- */
function initCounterObserver() {
  const counterElements = document.querySelectorAll('.counter-value');
  if (!counterElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.dataset.target, 10);
          const duration = 2000;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + '+';
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current) + '+';
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const numbersSection = document.getElementById('numbers');
  if (numbersSection) {
    observer.observe(numbersSection);
  }
}

/* --- 5. Interactive Industry Selector --- */
function initIndustrySelector() {
  const industryCards = document.querySelectorAll('.industry-card');
  industryCards.forEach(card => {
    card.addEventListener('click', () => {
      industryCards.forEach(c => c.style.borderColor = 'var(--border-light)');
      card.style.borderColor = 'var(--brand-orange)';
    });
  });
}

/* --- 6. Smooth Scrolling for Nav Links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
