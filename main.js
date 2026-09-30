/**
 * Main Application Logic for R.M. Nishant Suman's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize Canvas
  initParticleCanvas();

  // Initialize Dynamic Typing
  initTypingEffect();

  // Apply Profile Images
  applyProfileImage();

  // Populate Dynamic Sections
  renderExperiences();
  renderSkills();
  renderProjects('all');
  renderAchievements();
  renderMentorship();

  // Setup Event Listeners & Interactions
  setupNavScrollSpy();
  setupThemeToggle();
  setupFilterButtons();
  setupScrollReveal();
  setupContactForm();
  setupBackToTop();
  setupMobileMenu();
});

/* -------------------------------------------------------------
 * 1. Interactive Particle & Neural/Drone Constellation Canvas
 * ------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 14000), 75);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.size = Math.random() * 2 + 1;
      this.isDroneNode = Math.random() > 0.85; // special drone waypoint node
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        }
      }
    }

    draw() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.isDroneNode ? this.size * 1.6 : this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.isDroneNode 
        ? (isDark ? '#06b6d4' : '#0284c7') 
        : (isDark ? 'rgba(139, 92, 246, 0.6)' : 'rgba(124, 58, 237, 0.4)');
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const opacity = (1 - dist / 120) * (isDark ? 0.18 : 0.12);
          ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Connect with mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          const opacity = (1 - dist / mouse.radius) * 0.3;
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* -------------------------------------------------------------
 * 2. Dynamic Typing Effect
 * ------------------------------------------------------------- */
function initTypingEffect() {
  const target = document.getElementById('dynamic-roles');
  if (!target) return;

  const roles = PORTFOLIO_DATA.personal.roles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      delay = 40;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      delay = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      delay = 2000; // Pause at full text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* -------------------------------------------------------------
 * 3. Render Experience & Timeline
 * ------------------------------------------------------------- */
function renderExperiences() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experiences.map((exp, idx) => `
    <div class="relative pl-8 md:pl-12 pb-10 group">
      <!-- Dot indicator -->
      <div class="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
        <div class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
      </div>
      
      <div class="glass-card p-6 md:p-8 rounded-2xl relative">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span class="radar-badge">${exp.type}</span>
          <span class="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40">${exp.period}</span>
        </div>

        <h3 class="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">${exp.role}</h3>
        <h4 class="text-base font-semibold text-slate-300 mb-4 flex items-center gap-2">
          <i data-lucide="building-2" class="w-4 h-4 text-cyan-400"></i> ${exp.company}
        </h4>

        <p class="text-slate-400 text-sm md:text-base leading-relaxed mb-4">${exp.description}</p>

        <ul class="space-y-2 mb-5">
          ${exp.highlights.map(h => `
            <li class="flex items-start gap-2 text-xs md:text-sm text-slate-300">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>

        <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
          ${exp.tags.map(tag => `
            <span class="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60">${tag}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* -------------------------------------------------------------
 * 4. Render Skills Matrix
 * ------------------------------------------------------------- */
function renderSkills() {
  const skillCategories = [
    { title: "Artificial Intelligence & ML", key: "ai_ml", icon: "brain-circuit" },
    { title: "Drone & UAV Autonomous Systems", key: "drone_tech", icon: "navigation" },
    { title: "IoT & Embedded Hardware", key: "iot_embedded", icon: "cpu" },
    { title: "Tools, Stack & Leadership", key: "tools_leadership", icon: "terminal" }
  ];

  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = skillCategories.map(cat => `
    <div class="glass-card p-6 md:p-7 rounded-2xl flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-white">${cat.title}</h3>
        </div>

        <div class="space-y-4">
          ${PORTFOLIO_DATA.skills[cat.key].map(skill => `
            <div>
              <div class="flex justify-between text-xs md:text-sm font-medium mb-1.5">
                <span class="text-slate-200">${skill.name}</span>
                <span class="font-mono text-cyan-400">${skill.level}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" data-level="${skill.level}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
  animateSkillBars();
}

function animateSkillBars() {
  const fills = document.querySelectorAll('.skill-bar-fill');
  fills.forEach(fill => {
    const level = fill.getAttribute('data-level');
    setTimeout(() => {
      fill.style.width = `${level}%`;
    }, 200);
  });
}

/* -------------------------------------------------------------
 * 5. Render Projects & Interactive Filter
 * ------------------------------------------------------------- */
function renderProjects(category = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = category === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(proj => `
    <div class="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-400 transition-all duration-300">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            ${proj.badge}
          </span>
          <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
            <i data-lucide="${proj.imageIcon || 'code-2'}" class="w-4 h-4"></i>
          </div>
        </div>

        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">${proj.title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-5">${proj.shortDesc}</p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${proj.tech.map(t => `
            <span class="text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">${t}</span>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/60 flex items-center justify-between">
        <button onclick="openProjectModal('${proj.id}')" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer">
          <span>View Architecture & Specs</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
        <span class="text-xs text-slate-500 font-mono">#${proj.category}</span>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function setupFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

/* -------------------------------------------------------------
 * 6. Project Details Modal
 * ------------------------------------------------------------- */
window.openProjectModal = function(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-content-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="flex items-start justify-between gap-4 mb-4">
      <div>
        <span class="radar-badge mb-2">${proj.badge}</span>
        <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">${proj.title}</h2>
      </div>
      <button onclick="closeProjectModal()" class="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-6">${proj.shortDesc}</p>

    <div class="mb-6">
      <h4 class="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-3">Key Features & Engineering Highlights</h4>
      <div class="space-y-2.5">
        ${proj.features.map(f => `
          <div class="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
            <span>${f}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="mb-6">
      <h4 class="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2">Technology Stack</h4>
      <div class="flex flex-wrap gap-2">
        ${proj.tech.map(t => `
          <span class="text-xs font-mono px-3 py-1 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">${t}</span>
        `).join('')}
      </div>
    </div>

    <div class="flex items-center gap-3 pt-4 border-t border-slate-800">
      <a href="${proj.github}" target="_blank" rel="noopener" class="flex-1 text-center py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all">
        <i data-lucide="github" class="w-4 h-4"></i> Repository / Details
      </a>
      <button onclick="closeProjectModal()" class="py-2.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-all">
        Close
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
};

/* -------------------------------------------------------------
 * 7. Render Achievements & Awards
 * ------------------------------------------------------------- */
function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
    <div class="glass-card p-6 rounded-2xl flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
        <i data-lucide="${ach.icon}" class="w-6 h-6"></i>
      </div>
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-1">
          <h3 class="text-base md:text-lg font-bold text-white">${ach.title}</h3>
          <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/50">${ach.badge}</span>
        </div>
        <p class="text-xs text-cyan-400 font-mono mb-2">${ach.organization}</p>
        <p class="text-slate-400 text-xs md:text-sm leading-relaxed">${ach.description}</p>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* -------------------------------------------------------------
 * 8. Render Mentorship & Workshops Hub
 * ------------------------------------------------------------- */
function renderMentorship() {
  const container = document.getElementById('workshops-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.mentorship.topics.map(topic => `
    <div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-full border border-cyan-800/40">
            ${topic.audience}
          </span>
          <i data-lucide="book-open" class="w-4 h-4 text-slate-500"></i>
        </div>
        <h4 class="text-base md:text-lg font-bold text-white mb-2">${topic.title}</h4>
        <p class="text-slate-400 text-xs md:text-sm leading-relaxed mb-4">${topic.description}</p>
      </div>

      <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
        <span class="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Practical Hands-on
        </span>
        <a href="#contact" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300">Invite for Session &rarr;</a>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* -------------------------------------------------------------
 * 9. Smooth Nav & Scroll Spy
 * ------------------------------------------------------------- */
function setupNavScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------
 * 10. Dark / Light Theme Toggle
 * ------------------------------------------------------------- */
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('rmn-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rmn-theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
  if (window.lucide) window.lucide.createIcons();
}

/* -------------------------------------------------------------
 * 11. Scroll Reveal Animations
 * ------------------------------------------------------------- */
function setupScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
 * 12. Contact Form Interactivity
 * ------------------------------------------------------------- */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status-msg');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Sending message...`;
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      form.reset();
      
      if (statusMsg) {
        statusMsg.classList.remove('hidden');
        statusMsg.innerHTML = `
          <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2">
            <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-400"></i>
            <span>Thank you! Your message has been received. Nishant will get in touch shortly!</span>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          statusMsg.classList.add('hidden');
        }, 6000);
      }
    }, 1200);
  });
}

/* -------------------------------------------------------------
 * 13. Back to Top Button
 * ------------------------------------------------------------- */
function setupBackToTop() {
  const fab = document.getElementById('back-to-top');
  if (!fab) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      fab.classList.add('visible');
    } else {
      fab.classList.remove('visible');
    }
  });

  fab.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------
 * 14. Mobile Navigation Menu
 * ------------------------------------------------------------- */
function setupMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/* -------------------------------------------------------------
 * 15. Apply Profile Image from PORTFOLIO_DATA
 * ------------------------------------------------------------- */
function applyProfileImage() {
  if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.personal) return;
  const imageSrc = PORTFOLIO_DATA.personal.profileImage;
  if (!imageSrc) return;

  const heroImg = document.querySelector('.hero-avatar-img');
  if (heroImg) {
    heroImg.src = imageSrc;
  }

  const aboutImg = document.querySelector('.profile-cyber-img');
  if (aboutImg) {
    aboutImg.src = imageSrc;
  }
}

