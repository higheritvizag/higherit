/* ==========================================================================
   HIGHERIT INTERACTION CONTROLLER (MAIN.JS - SECOND PASS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initCounterObserver();
  initIndustryExplorer();
  initSmoothScroll();
});

/* --- 1. Sticky Navbar --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
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
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

/* --- 3. Animated Numerical Counter --- */
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
              counter.innerHTML = target + '<span>+</span>';
              clearInterval(timer);
            } else {
              counter.innerHTML = Math.floor(current) + '<span>+</span>';
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

/* --- 4. Interactive Industry Explorer --- */
const industryData = {
  healthcare: {
    title: 'Healthcare Digital Solutions',
    challenge: 'Challenge: Patient trust, fragmented appointment booking systems, and low online visibility for specialized medical treatments.',
    solution: 'HigherIT Solution: High-trust hospital portals, online appointment scheduling, SEO for medical treatments, and AI receptionist automation.'
  },
  realestate: {
    title: 'Real Estate Growth Infrastructure',
    challenge: 'Challenge: Managing plot inventories across channels, high lead acquisition costs, and delayed buyer follow-ups.',
    solution: 'HigherIT Solution: Interactive land plot CRM software, Meta & Google lead generation campaigns, and instant WhatsApp lead assignment.'
  },
  education: {
    title: 'Educational Institution Platforms',
    challenge: 'Challenge: Converting website visitors into student enrolments and streamlining fee/application processes.',
    solution: 'HigherIT Solution: Custom student portal applications, admission funnel ads, brand identity, and automated enquiry routing.'
  },
  retail: {
    title: 'Retail & E-commerce Scaling',
    challenge: 'Challenge: High cart abandonment, complex inventory sync across stores, and rising customer acquisition costs.',
    solution: 'HigherIT Solution: Omnichannel e-commerce web apps, custom POS billing integrations, performance marketing, and automated retargeting.'
  },
  hospitality: {
    title: 'Hospitality & Luxury Experiences',
    challenge: 'Challenge: Standing out in competitive markets and securing direct bookings without heavy third-party commissions.',
    solution: 'HigherIT Solution: High-conversion direct booking websites, CGI venue videos, social media brand identity, and Google Ads.'
  },
  services: {
    title: 'Professional Services Authority',
    challenge: 'Challenge: Differentiating firm expertise and generating high-retainer client opportunities consistently.',
    solution: 'HigherIT Solution: Thought-leadership web design, LinkedIn authority campaigns, CRM workflow setup, and SEO optimization.'
  },
  startups: {
    title: 'Startups & Technology Product Launch',
    challenge: 'Challenge: Taking an initial concept from MVP to market launch with fast validation and scalable tech.',
    solution: 'HigherIT Solution: Full-stack SaaS application development, product design systems, landing page engineering, and launch marketing.'
  }
};

function initIndustryExplorer() {
  const buttons = document.querySelectorAll('.ind-tab-btn');
  const titleEl = document.getElementById('indTitle');
  const challengeEl = document.getElementById('indChallenge');
  const solutionEl = document.getElementById('indSolution');

  if (!buttons.length || !titleEl) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const indKey = btn.dataset.ind;
      const data = industryData[indKey];

      if (data) {
        titleEl.textContent = data.title;
        challengeEl.textContent = data.challenge;
        solutionEl.textContent = data.solution;
      }
    });
  });
}

/* --- 5. Smooth Scroll --- */
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
