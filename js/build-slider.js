/**
 * INTERACTIVE "THE BUILD" PROCESS STAGE
 * Inspired by Metic Studio's "From a line to a button"
 */
class BuildProcessSlider {
  constructor() {
    this.currentStep = 0;
    this.stages = window.PortfolioConfig ? window.PortfolioConfig.buildStages : [];
    
    this.stageTitle = document.getElementById('build-stage-title');
    this.stageDesc = document.getElementById('build-stage-desc');
    this.stageStepNum = document.getElementById('build-stage-step');
    this.stageTotalNum = document.getElementById('build-stage-total');
    this.stagePercent = document.getElementById('build-progress-percent');
    this.stageCanvas = document.getElementById('build-canvas-container');
    this.dotsContainer = document.getElementById('build-step-dots');
    this.prevBtn = document.getElementById('build-prev-btn');
    this.nextBtn = document.getElementById('build-next-btn');

    this.init();
  }

  init() {
    if (!this.stages || this.stages.length === 0) return;

    this.renderDots();
    this.updateStage(0);

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.next();
      });
    }

    // Keyboard navigation when build section is visible
    window.addEventListener('keydown', (e) => {
      const buildSection = document.getElementById('the-build');
      if (!buildSection) return;
      const rect = buildSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (inView && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        if (e.key === 'ArrowRight') this.next();
        if (e.key === 'ArrowLeft') this.prev();
      }
    });
  }

  renderDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    
    this.stages.forEach((stage, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `build-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Stage ${stage.step}: ${stage.title}`);
      dot.setAttribute('title', stage.title);
      dot.addEventListener('click', () => {
        this.updateStage(idx);
      });
      this.dotsContainer.appendChild(dot);
    });
  }

  next() {
    if (this.currentStep < this.stages.length - 1) {
      this.updateStage(this.currentStep + 1);
    } else {
      this.updateStage(0);
    }
  }

  prev() {
    if (this.currentStep > 0) {
      this.updateStage(this.currentStep - 1);
    } else {
      this.updateStage(this.stages.length - 1);
    }
  }

  updateStage(index) {
    this.currentStep = index;
    const stage = this.stages[index];
    if (!stage) return;

    if (window.soundEngine) {
      window.soundEngine.playTick();
    }

    // Update text
    if (this.stageTitle) this.stageTitle.textContent = stage.title;
    if (this.stageDesc) this.stageDesc.textContent = stage.description;
    if (this.stageStepNum) this.stageStepNum.textContent = stage.step;
    if (this.stageTotalNum) this.stageTotalNum.textContent = stage.total;
    
    // Progress calculation
    const pct = Math.round(((index + 1) / this.stages.length) * 100);
    if (this.stagePercent) {
      this.stagePercent.textContent = `${String(pct).padStart(3, '0')}%`;
    }

    // Update dots
    if (this.dotsContainer) {
      const dots = this.dotsContainer.querySelectorAll('.build-dot');
      dots.forEach((dot, dIdx) => {
        if (dIdx === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    // Update visual canvas
    this.renderStageVisual(stage.previewType, stage);
  }

  renderStageVisual(type, stage) {
    if (!this.stageCanvas) return;

    let html = '';

    switch (type) {
      case 'grid':
        html = `
          <div class="build-art grid-art">
            <div class="art-grid-lines">
              ${Array.from({ length: 12 }).map((_, i) => `<div class="col-line"><span class="col-tag">COL ${i + 1}</span></div>`).join('')}
            </div>
            <div class="art-badge">[Grid: 12 Columns / 24px Gutter / Swiss Baseline]</div>
          </div>
        `;
        break;

      case 'wireframe':
        html = `
          <div class="build-art wireframe-art">
            <div class="wf-nav">
              <div class="wf-box w-20"></div>
              <div class="wf-box w-32"></div>
            </div>
            <div class="wf-hero">
              <div class="wf-headline"></div>
              <div class="wf-subhead"></div>
              <div class="wf-cta"></div>
            </div>
            <div class="wf-cards">
              <div class="wf-card"></div>
              <div class="wf-card"></div>
            </div>
            <div class="art-badge">[Hierarchy: Visual Weight & Reading Flow]</div>
          </div>
        `;
        break;

      case 'typography':
        html = `
          <div class="build-art type-art">
            <div class="type-specimen">
              <span class="type-char">Aa</span>
              <div class="type-meta">
                <div class="type-name">Space Grotesk + JetBrains Mono</div>
                <div class="type-rule">Optical Size: 700 Display / Tracking: -0.03em</div>
                <div class="type-rule">Measure: 30 chars/line lead / 65 chars body</div>
              </div>
            </div>
            <div class="art-badge">[Typography: Optical Kerning & Micro-Proportions]</div>
          </div>
        `;
        break;

      case 'palette':
        html = `
          <div class="build-art palette-art">
            <div class="swatches">
              <div class="swatch-item bg-swatch-paper">
                <span>PAPER</span>
                <code>#F4F4F2</code>
              </div>
              <div class="swatch-item bg-swatch-ink">
                <span>INK</span>
                <code>#111110</code>
              </div>
              <div class="swatch-item bg-swatch-accent">
                <span>VERMILION</span>
                <code>#EB3A22</code>
              </div>
            </div>
            <div class="art-badge">[Color Mathematics: Contrast Ratio 15.8:1 WCAG AAA]</div>
          </div>
        `;
        break;

      case 'architecture':
        html = `
          <div class="build-art arch-art">
            <div class="arch-flow">
              <div class="arch-node">Client (Edge SPA)</div>
              <div class="arch-arrow">⇄</div>
              <div class="arch-node">Cloudflare Worker</div>
              <div class="arch-arrow">⇄</div>
              <div class="arch-node">REST / KV Cache</div>
            </div>
            <div class="arch-metrics">
              <span>RTT: 18ms</span>
              <span>TLS 1.3</span>
              <span>HTTP/3 QUIC</span>
            </div>
            <div class="art-badge">[System Topology: Global Anycast Routing]</div>
          </div>
        `;
        break;

      case 'code':
        html = `
          <div class="build-art code-art">
            <div class="code-terminal">
              <div class="term-header">
                <span class="term-dot dot-red"></span>
                <span class="term-dot dot-yellow"></span>
                <span class="term-dot dot-green"></span>
                <span class="term-filename">portfolio.core.ts — Zero Bloat</span>
              </div>
              <pre class="term-body"><code><span class="tok-kw">export const</span> <span class="tok-fn">createSystem</span> = (): <span class="tok-type">Engine</span> => {
  <span class="tok-comment">// Pure, readable, hand-crafted architecture</span>
  <span class="tok-kw">const</span> pipeline = <span class="tok-fn">optimizeRenderLoop</span>({
    targetFps: <span class="tok-num">60</span>,
    hydrationTime: <span class="tok-num">12</span>, <span class="tok-comment">/* ms */</span>
    coreWebVitals: <span class="tok-str">"AAA"</span>
  });
  <span class="tok-kw">return</span> pipeline.<span class="tok-fn">mount</span>();
};</code></pre>
            </div>
            <div class="art-badge">[Clean Source: Modular ESNext / 0% Runtime Overhead]</div>
          </div>
        `;
        break;

      case 'deploy':
        html = `
          <div class="build-art deploy-art">
            <div class="edge-map">
              <div class="edge-pulse-core">
                <div class="radar-circle"></div>
                <div class="radar-dot"></div>
              </div>
              <div class="edge-nodes">
                <span class="node-pin" style="top:25%; left:30%;">MNL</span>
                <span class="node-pin" style="top:32%; left:58%;">TYO</span>
                <span class="node-pin" style="top:40%; left:22%;">SIN</span>
                <span class="node-pin" style="top:28%; left:80%;">SFO</span>
                <span class="node-pin" style="top:60%; left:45%;">SYD</span>
              </div>
            </div>
            <div class="deploy-status">
              <span class="status-indicator live"></span>
              <span>Cloudflare Pages: Deployed to 300+ Edge Data Centers</span>
            </div>
            <div class="art-badge">[Edge Delivery: Instant Brotli Compression & SSL]</div>
          </div>
        `;
        break;

      case 'launch':
      default:
        html = `
          <div class="build-art launch-art">
            <div class="launch-card">
              <div class="launch-label">YOUR PROJECT STARTS HERE</div>
              <h4 class="launch-title">Built with precision. Delivered on time.</h4>
              <a href="#contact" class="btn btn-primary" data-cursor="hover">
                <span>Start a Project</span>
                <span class="btn-dot">
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg>
                </span>
              </a>
            </div>
            <div class="art-badge">[Final State: Interactive, Resilient, Production-Ready]</div>
          </div>
        `;
        break;
    }

    this.stageCanvas.innerHTML = html;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.buildProcessSlider = new BuildProcessSlider();
});
