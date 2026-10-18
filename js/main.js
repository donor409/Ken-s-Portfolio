/**
 * KEN'S PORTFOLIO - MAIN INTERACTIVE ENGINE
 * Swiss Editorial & Metic Studio Aesthetic
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.PortfolioConfig || {};

  // 1. Toast System
  const toastEl = document.getElementById('app-toast');
  window.showAppToast = function (message, duration = 3200) {
    if (!toastEl) return;
    toastEl.querySelector('.toast-msg').textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, duration);
  };

  // 2. Sound Toggle
  const soundBtn = document.getElementById('sound-toggle');
  const soundBars = document.querySelector('.sound-bars');
  
  function updateSoundUI(isOn) {
    if (soundBars) {
      if (isOn) {
        soundBars.classList.add('is-on');
        soundBtn.setAttribute('title', 'Sound is ON (Click to mute)');
        soundBtn.setAttribute('aria-pressed', 'true');
      } else {
        soundBars.classList.remove('is-on');
        soundBtn.setAttribute('title', 'Sound is OFF (Click to unmute)');
        soundBtn.setAttribute('aria-pressed', 'false');
      }
    }
  }

  if (soundBtn && window.soundEngine) {
    updateSoundUI(window.soundEngine.enabled);
    soundBtn.addEventListener('click', () => {
      const state = window.soundEngine.toggle();
      updateSoundUI(state);
      window.showAppToast(state ? 'Interactive sound effects enabled.' : 'Sound muted.');
    });
  }

  // 3. Theme Toggle (Light / Dark)
  const themeToggle = document.getElementById('theme-toggle');
  const themeInputs = document.querySelectorAll('input[name="site-theme"]');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('ken-portfolio-theme', theme);
    } catch (e) {}

    // Update radio inputs in menu
    themeInputs.forEach(input => {
      input.checked = input.value === theme;
    });

    if (window.soundEngine) {
      window.soundEngine.playSwitch(theme === 'dark');
    }
  }

  // Initialize theme
  const savedTheme = localStorage.getItem('ken-portfolio-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
      window.showAppToast(`Switched to ${next} theme.`);
    });
  }

  themeInputs.forEach(input => {
    input.addEventListener('change', () => {
      setTheme(input.value);
    });
  });

  // 4. Mobile Menu Navigation (Metic Circle Reveal)
  const menuBtn = document.getElementById('menu-toggle');
  const menuDialog = document.getElementById('main-menu-dialog');
  const closeMenuBtn = document.getElementById('menu-close-btn');

  function openMenu() {
    if (!menuDialog) return;
    menuDialog.classList.add('is-open');
    menuDialog.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    if (window.soundEngine) window.soundEngine.playTick();
  }

  function closeMenu() {
    if (!menuDialog) return;
    menuDialog.classList.remove('is-open');
    menuDialog.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    if (window.soundEngine) window.soundEngine.playTick();
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);

  if (menuDialog) {
    menuDialog.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  // 5. Scroll Progress Bar in Navigation
  const navProgress = document.querySelector('.nav-progress-bar');
  const scrollMeasure = document.getElementById('nav-scroll-measure');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      if (navProgress) {
        navProgress.style.width = `${progress}%`;
      }
      if (scrollMeasure) {
        scrollMeasure.textContent = `${Math.round(progress)}%`;
      }
    }
  }, { passive: true });

  // 6. Projects Filter & Dynamic Rendering
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-pill');

  function renderProjects(filter = 'all') {
    if (!projectsGrid || !config.projects) return;

    const filtered = filter === 'all' 
      ? config.projects 
      : config.projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

    projectsGrid.innerHTML = filtered.map((project, idx) => `
      <article class="project-card interactive-card" data-project-id="${project.id}" data-cursor="view" data-cursor-label="EXPLORE">
        <div class="project-card-header">
          <div class="project-meta-row">
            <span class="project-cat">${project.category}</span>
            <span class="project-year">${project.year}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
        </div>

        <div class="project-stats-grid">
          ${project.stats.map(s => `
            <div class="stat-cell">
              <span class="stat-label">${s.label}</span>
              <span class="stat-val">${s.value}</span>
            </div>
          `).join('')}
        </div>

        <div class="project-footer">
          <div class="project-tags">
            ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <button type="button" class="view-project-btn" data-project-id="${project.id}" aria-label="View details for ${project.title}">
            <span class="sr-only">View</span>
            <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
            </svg>
          </button>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards
    projectsGrid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = card.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
      if (window.soundEngine) window.soundEngine.playTick();
    });
  });

  renderProjects('all');

  // 7. Project Modal Drawer
  const projectModal = document.getElementById('project-modal');
  const projectModalContent = document.getElementById('project-modal-body');
  const projectModalClose = document.getElementById('project-modal-close');

  function openProjectModal(id) {
    if (!projectModal || !projectModalContent) return;
    const project = (config.projects || []).find(p => p.id === id);
    if (!project) return;

    projectModalContent.innerHTML = `
      <div class="modal-detail">
        <div class="modal-meta-top">
          <span class="measure text-accent">${project.category}</span>
          <span class="measure">${project.year}</span>
        </div>
        <h2 class="display-3 modal-title">${project.title}</h2>
        <p class="lead modal-summary">${project.summary}</p>
        
        <div class="modal-section">
          <h4 class="measure">Architecture & Execution</h4>
          <p class="modal-desc">${project.description}</p>
        </div>

        <div class="modal-section">
          <h4 class="measure">Key Performance Metrics</h4>
          <div class="modal-stats-grid">
            ${project.stats.map(s => `
              <div class="modal-stat-box">
                <div class="stat-val">${s.value}</div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="modal-section">
          <h4 class="measure">Technology & Standards</h4>
          <div class="modal-tags">
            ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
        </div>

        <div class="modal-actions">
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-cursor="hover">
            <span>Explore Repository</span>
            <span class="btn-dot">
              <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg>
            </span>
          </a>
          <button type="button" class="btn btn-secondary modal-close-action" data-cursor="hover">Close Case Study</button>
        </div>
      </div>
    `;

    projectModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Hook internal close action
    const internalClose = projectModalContent.querySelector('.modal-close-action');
    if (internalClose) {
      internalClose.addEventListener('click', closeProjectModal);
    }

    if (window.soundEngine) window.soundEngine.playTick();
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (window.soundEngine) window.soundEngine.playTick();
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // 8. Copy Email to Clipboard
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = config.profile.email || 'ken.developer.pro@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          window.showAppToast(`Copied ${email} to clipboard!`);
          if (window.soundEngine) window.soundEngine.playSuccess();
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });
  });

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    window.showAppToast(`Copied ${text} to clipboard!`);
    if (window.soundEngine) window.soundEngine.playSuccess();
  }

  // 9. Contact Form Simulation
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#contact-name').value;
      const email = contactForm.querySelector('#contact-email').value;
      const message = contactForm.querySelector('#contact-message').value;

      if (!name || !email || !message) {
        window.showAppToast('Please complete all required fields.');
        return;
      }

      // Generate mailto link for direct sending
      const subject = encodeURIComponent(`Project Inquiry from ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:${config.profile.email}?subject=${subject}&body=${body}`;

      window.location.href = mailtoUrl;

      window.showAppToast('Opening your email client... Thank you!');
      if (window.soundEngine) window.soundEngine.playSuccess();
      contactForm.reset();
    });
  }

  // 10. Coordinates live jitter simulation for architectural authenticity
  const coordDisplay = document.querySelector('.live-coords');
  if (coordDisplay) {
    setInterval(() => {
      const baseLat = 14.5995;
      const baseLng = 120.9842;
      const jitterLat = (baseLat + (Math.random() - 0.5) * 0.0004).toFixed(4);
      const jitterLng = (baseLng + (Math.random() - 0.5) * 0.0004).toFixed(4);
      coordDisplay.textContent = `${jitterLat}° N, ${jitterLng}° E`;
    }, 4500);
  }
});
