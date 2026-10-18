/**
 * METIC-STYLE PRECISION CURSOR & MAGNETIC PHYSICS
 */
class PrecisionCursor {
  constructor() {
    this.cursor = document.querySelector('.custom-cursor');
    this.ring = document.querySelector('.custom-cursor-ring');
    this.badge = document.querySelector('.custom-cursor-badge');
    
    this.mouse = { x: -100, y: -100 };
    this.pos = { x: -100, y: -100 };
    this.ringPos = { x: -100, y: -100 };
    this.target = null;
    this.active = false;

    // Only run if not touch device
    if (window.matchMedia('(pointer: fine)').matches) {
      this.init();
    }
  }

  init() {
    if (!this.cursor || !this.ring) return;

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      if (!this.active) {
        this.active = true;
        this.cursor.style.opacity = '1';
        this.ring.style.opacity = '1';
      }
    });

    window.addEventListener('mouseleave', () => {
      this.active = false;
      this.cursor.style.opacity = '0';
      this.ring.style.opacity = '0';
    });

    // Delegate hover listeners
    this.setupHoverListeners();

    // Render loop
    this.render();
  }

  setupHoverListeners() {
    document.addEventListener('mouseover', (e) => {
      const interactive = e.target.closest('a, button, [data-cursor], .interactive-card, input, select, textarea');
      if (interactive) {
        const cursorType = interactive.getAttribute('data-cursor') || 'hover';
        this.setCursorState(cursorType, interactive);
        if (window.soundEngine) {
          window.soundEngine.playTick();
        }
      }
    });

    document.addEventListener('mouseout', (e) => {
      const interactive = e.target.closest('a, button, [data-cursor], .interactive-card, input, select, textarea');
      if (interactive) {
        this.resetCursorState();
      }
    });

    document.addEventListener('mousedown', () => {
      if (this.ring) this.ring.classList.add('cursor-pressed');
      if (window.soundEngine) {
        window.soundEngine.playClick();
      }
    });

    document.addEventListener('mouseup', () => {
      if (this.ring) this.ring.classList.remove('cursor-pressed');
    });
  }

  setCursorState(type, el) {
    if (!this.ring) return;
    this.ring.className = 'custom-cursor-ring active';
    this.ring.classList.add(`state-${type}`);

    if (this.badge) {
      const customLabel = el.getAttribute('data-cursor-label');
      if (customLabel) {
        this.badge.textContent = customLabel;
        this.badge.style.opacity = '1';
      } else if (type === 'view') {
        this.badge.textContent = 'EXPLORE';
        this.badge.style.opacity = '1';
      } else if (type === 'copy') {
        this.badge.textContent = 'COPY';
        this.badge.style.opacity = '1';
      } else {
        this.badge.style.opacity = '0';
      }
    }
  }

  resetCursorState() {
    if (!this.ring) return;
    this.ring.className = 'custom-cursor-ring';
    if (this.badge) {
      this.badge.style.opacity = '0';
    }
  }

  render() {
    // Lerp dot
    this.pos.x += (this.mouse.x - this.pos.x) * 0.75;
    this.pos.y += (this.mouse.y - this.pos.y) * 0.75;

    // Lerp ring (softer delay)
    this.ringPos.x += (this.mouse.x - this.ringPos.x) * 0.22;
    this.ringPos.y += (this.mouse.y - this.ringPos.y) * 0.22;

    if (this.cursor) {
      this.cursor.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0)`;
    }
    if (this.ring) {
      this.ring.style.transform = `translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0)`;
    }

    requestAnimationFrame(() => this.render());
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.precisionCursor = new PrecisionCursor();
});
