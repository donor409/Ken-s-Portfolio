/**
 * INTERACTIVE PROJECT SCOPE & TIMELINE ESTIMATOR
 * Enables visitors to customize project parameters and calculate timelines & architecture.
 */
class ProjectEstimator {
  constructor() {
    this.container = document.getElementById('project-estimator-app');
    this.resultTimeline = document.getElementById('est-timeline-val');
    this.resultStack = document.getElementById('est-stack-val');
    this.resultTier = document.getElementById('est-tier-val');
    this.applyToFormBtn = document.getElementById('est-apply-btn');

    this.state = {
      projectType: 'webapp',
      scope: 'medium',
      features: ['edge', 'responsive'],
      speed: 'standard'
    };

    this.init();
  }

  init() {
    if (!this.container) return;

    // Listen to changes in estimator inputs
    this.container.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
      input.addEventListener('change', () => {
        this.updateState();
        this.recalculate();
        if (window.soundEngine) {
          window.soundEngine.playTick();
        }
      });
    });

    if (this.applyToFormBtn) {
      this.applyToFormBtn.addEventListener('click', () => {
        this.applyToContactForm();
      });
    }

    this.recalculate();
  }

  updateState() {
    // Project Type
    const typeRadio = this.container.querySelector('input[name="est-type"]:checked');
    if (typeRadio) this.state.projectType = typeRadio.value;

    // Scope
    const scopeRadio = this.container.querySelector('input[name="est-scope"]:checked');
    if (scopeRadio) this.state.scope = scopeRadio.value;

    // Features
    const checkedFeatures = [];
    this.container.querySelectorAll('input[name="est-features"]:checked').forEach(cb => {
      checkedFeatures.push(cb.value);
    });
    this.state.features = checkedFeatures;

    // Speed
    const speedRadio = this.container.querySelector('input[name="est-speed"]:checked');
    if (speedRadio) this.state.speed = speedRadio.value;
  }

  recalculate() {
    let baseWeeks = 3;
    let stack = 'TypeScript + Vanilla ES + Tailwind';
    let tier = 'Standard Bespoke';

    // Type factors
    if (this.state.projectType === 'webapp') {
      baseWeeks = 4;
      stack = 'React / Next.js + Node.js + Edge API';
      tier = 'Full-Stack Application';
    } else if (this.state.projectType === 'portfolio') {
      baseWeeks = 2;
      stack = 'Semantic HTML5 + Custom CSS + WebGL';
      tier = 'High-End Studio Presence';
    } else if (this.state.projectType === 'systems') {
      baseWeeks = 4.5;
      stack = 'Go / Node + PostgreSQL + Cloudflare';
      tier = 'Resilient Microservices';
    } else if (this.state.projectType === 'design-system') {
      baseWeeks = 3.5;
      stack = 'Tokens + WCAG AAA + Storybook';
      tier = 'Enterprise Token Library';
    }

    // Scope factors
    if (this.state.scope === 'small') {
      baseWeeks -= 0.5;
    } else if (this.state.scope === 'large') {
      baseWeeks += 2;
      tier += ' (Extended Scope)';
    }

    // Features factors
    baseWeeks += this.state.features.length * 0.4;

    // Speed adjustments
    if (this.state.speed === 'accelerated') {
      baseWeeks = Math.max(1.5, baseWeeks * 0.7);
      tier += ' [Priority Sprint]';
    }

    const calculatedWeeks = Math.round(baseWeeks * 10) / 10;

    if (this.resultTimeline) {
      this.resultTimeline.textContent = `${calculatedWeeks} - ${Math.round((calculatedWeeks + 1) * 10) / 10} Weeks`;
    }
    if (this.resultStack) {
      this.resultStack.textContent = stack;
    }
    if (this.resultTier) {
      this.resultTier.textContent = tier;
    }
  }

  applyToContactForm() {
    const messageInput = document.getElementById('contact-message');
    const contactSection = document.getElementById('contact');
    
    if (messageInput) {
      const typeLabels = {
        webapp: 'Custom Web Application',
        portfolio: 'High-Performance Brand/Portfolio',
        systems: 'Backend & Cloud Systems',
        'design-system': 'Design System & Component Library'
      };

      const scopeLabels = {
        small: 'Focused MVP (1-3 Key Views)',
        medium: 'Comprehensive Architecture (4-7 Views)',
        large: 'Full Enterprise Platform'
      };

      const summary = `Hi Ken, I'd like to consult on a project:
- Type: ${typeLabels[this.state.projectType] || this.state.projectType}
- Scope: ${scopeLabels[this.state.scope] || this.state.scope}
- Features: ${this.state.features.join(', ') || 'Standard Core'}
- Timeline target: ~${this.resultTimeline ? this.resultTimeline.textContent : 'Flexible'}

Let's discuss details and next steps!`;

      messageInput.value = summary;
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      if (window.soundEngine) {
        window.soundEngine.playSuccess();
      }

      if (window.showAppToast) {
        window.showAppToast('Project scope applied to message form below!');
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.projectEstimator = new ProjectEstimator();
});
