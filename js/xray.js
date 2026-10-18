/**
 * METIC-STYLE X-RAY BLUEPRINT INSPECTOR
 * Reveals architectural grid, measurement callouts, design rationale, and component specs.
 */
class XRayInspector {
  constructor() {
    this.isActive = false;
    this.storageKey = 'donor-portfolio-xray';
    this.toggleBtn = document.getElementById('xray-toggle');
    this.navStatus = document.getElementById('nav-xray-status');
    
    // Check saved state
    try {
      this.isActive = localStorage.getItem(this.storageKey) === 'true';
    } catch (e) {
      this.isActive = false;
    }

    this.init();
  }

  init() {
    if (this.isActive) {
      document.body.classList.add('xray-active');
      this.updateButtonState(true);
    }

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    // Keyboard shortcut: Press 'X' to toggle X-Ray mode
    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'x' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        this.toggle();
      }
    });
  }

  toggle() {
    this.isActive = !this.isActive;
    
    if (this.isActive) {
      document.body.classList.add('xray-active');
      this.updateButtonState(true);
      if (window.soundEngine) {
        window.soundEngine.playXRay();
      }
      this.showToast('X-Ray Blueprint mode activated. Grid and specs exposed.');
    } else {
      document.body.classList.remove('xray-active');
      this.updateButtonState(false);
      if (window.soundEngine) {
        window.soundEngine.playSwitch(false);
      }
      this.showToast('X-Ray Blueprint mode turned off.');
    }

    try {
      localStorage.setItem(this.storageKey, this.isActive ? 'true' : 'false');
    } catch (e) {}
  }

  updateButtonState(active) {
    if (this.toggleBtn) {
      this.toggleBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
      if (active) {
        this.toggleBtn.classList.add('active');
      } else {
        this.toggleBtn.classList.remove('active');
      }
    }
    if (this.navStatus) {
      this.navStatus.style.display = active ? 'inline-flex' : 'none';
    }
  }

  showToast(message) {
    if (window.showAppToast) {
      window.showAppToast(message);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.xrayInspector = new XRayInspector();
});
