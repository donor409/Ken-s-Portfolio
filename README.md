# donor. — Interactive Swiss Architectural Portfolio

Isang high-performance, interactive professional portfolio na ginawa sa **VS Code** para kay **Donor** na may disenyo at interaction patterns na inspirasyon ng **[metic.studio](https://metic.studio/en)** (Paper & Ink aesthetic, Swiss typography, X-Ray blueprint mode, tactile sound synthesizer, at interactive build stages), na 100% handang i-deploy sa **Cloudflare Pages** (`*.pages.dev`)

---

## ⚡ Mga Tampok na Katangian (Features)

1. **Metic Studio Editorial Design Language**:
   - **Paper & Ink Palette**: Warm architectural light mode (`#f4f4f2`) at deep ink dark mode (`#0c0c0b`) na may fiery vermilion accent (`#eb3a22`).
   - **Swiss Typography**: `Space Grotesk` para sa display headings, `Inter` para sa readability, at `JetBrains Mono` para sa micro-metrics at coordinates.
   - **Technical Metadata & Guidelines**: Coordinates readout (`14.5995° N, 120.9842° E`), 30-character read measure, baseline grid, at colophon.

2. **Signature X-Ray Blueprint Mode**:
   - Pindutin ang **X-Ray** button sa header navigation (o pindutin ang shortcut key na **`X`** sa iyong keyboard).
   - Lalabas ang architectural blueprint grid overlay, measurement callouts (`[H1: Display-1]`, `[Btn: Primary / 44px Touch]`, `[Grid: 12 Columns]`), at layout bounding boxes.

3. **Built-in Synthesizer Audio Controller (Web Audio API)**:
   - Walang mabibigat na panlabas na `.mp3` files; gumagamit ng native HTML5 `AudioContext` para sa tactile mechanical clicks, hover ticks, switch sounds, at copy chimes.
   - May animated equalizer bars sa header pill para madaling i-toggle (mute/unmute).

4. **Interactive "The Build" Process Stage ("From a line to a button")**:
   - 8-stage interactive visual walkthrough na nagpapakita kung paano ka gumawa ng software:
     `Grid & Rule` ➔ `Wireframe` ➔ `Typography` ➔ `Palette` ➔ `Architecture` ➔ `Clean Code` ➔ `Edge Deploy` ➔ `Production Launch`.
   - May real-time canvas visualizer at progress counter (`000%` hanggang `100%`).

5. **Interactive Project Scope & Timeline Estimator**:
   - Nagbibigay-daan sa mga kliyente o recruiter na pumili ng project archetype, scope, at specialized features.
   - Kusang kinakalkula ang estimated delivery window, architecture tier, at recommended tech stack, na may button para direktang i-populate sa contact form!

6. **Selected Projects Showcase & Case Study Drawer**:
   - Filterable projects ayon sa kategorya (`Full-Stack`, `Backend & Systems`, `Frontend Architecture`, `Creative Engineering`).
   - Interactive slide-over modal drawer na nagpapakita ng architecture details, latency stats, at repository links.

7. **One-Click Email Copy with Toast Feedback**:
   - Direct copy ng email address sa clipboard na may toast notification.

---

## 📁 Direktoryo ng Proyekto (File Structure)

```text
Ken's Portfolio/
├── index.html              # Pangunahing semantic HTML structure
├── _headers                # Cloudflare Pages security & caching headers
├── _routes.json            # Cloudflare Pages SPA & static routing rules
├── wrangler.toml           # Cloudflare Wrangler CLI configuration
├── package.json            # Scripts & project metadata
├── README.md               # Gabay sa paggamit at deployment
├── assets/
│   └── favicon.svg         # Minimalist SVG logo at favicon
├── css/
│   └── style.css           # Swiss design system, X-Ray mode, at dark/light themes
└── js/
    ├── config.js           # Centralized configuration (Profile, Projects, Tech, Experience)
    ├── audio.js            # Web Audio API synthesizer (clicks, ticks, chimes)
    ├── cursor.js           # Custom precision magnetic cursor follower
    ├── xray.js             # Metic-style X-Ray blueprint inspector
    ├── build-slider.js     # Interactive "The Build" process canvas
    ├── estimator.js        # Interactive Project Scope & Timeline Estimator
    └── main.js             # Project filters, drawer modals, themes, at contact form
```

---

## 🛠️ Paano Buksan at Gamitin sa VS Code

Walang kailangang kumplikadong build tools o npm packages para simulan!

1. **Buksan ang folder sa VS Code**:
   - Sa VS Code, pumunta sa `File` > `Open Folder...` at piliin ang:
     `c:\Users\maryg\OneDrive\Desktop\Ken's Portfolio`

2. **I-preview ang Website**:
   - **Opsyon A (Gamit ang Live Server)**:
     - I-install ang extension na **"Live Server"** (ni Ritwick Dey) sa VS Code.
     - Mag-right click sa `index.html` at pindutin ang **"Open with Live Server"**.
   - **Opsyon B (Direktang Browser)**:
     - I-double click lamang ang `index.html` para buksan sa Chrome, Edge, o Firefox!

3. **Paano I-customize ang Iyong Impormasyon**:
   - Buksan ang `js/config.js`. Dito mo madaling mababago:
     - `profile.fullName`, `profile.title`, `profile.lead`
     - `profile.email`, `profile.github`, `profile.linkedin`
     - Ang mga projects sa `projects: [...]`
     - Ang services sa `services: [...]`
     - Ang tech stack at experience timeline.

---

## 🚀 Paano I-deploy sa Cloudflare Pages (Tulad ng Ryan's Portfolio)

May **dalawang napakadaling paraan** para makuha ang iyong sariling `ken-portfolio.pages.dev` URL sa Cloudflare:

### Paraan 1: Direct Drag & Drop (Walang Git na kailangan, 1 minuto lang!)
1. Mag-sign up o mag-log in sa libreng account sa **[dash.cloudflare.com](https://dash.cloudflare.com/)**.
2. Sa kaliwang menu, pumunta sa **Compute (Workers) > Pages**.
3. Pindutin ang **"Create application"** ➔ piliin ang tab na **"Pages"** ➔ pindutin ang **"Upload assets"**.
4. Maglagay ng pangalan ng proyekto (hal. `ken-portfolio`).
5. I-drag at i-drop ang buong folder ng `Ken's Portfolio` papunta sa upload box sa browser.
6. Pindutin ang **"Deploy site"**.
7. **Tapos na!** Bibigyan ka kaagad ng Cloudflare ng live URL tulad ng:
   `https://ken-portfolio.pages.dev`

---

### Paraan 2: Gamit ang GitHub (Awtomatikong Deployment sa Bawat Commit)
1. Gumawa ng bagong repository sa iyong GitHub (hal. `kens-portfolio`).
2. I-push ang laman ng folder na ito sa GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial interactive swiss portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kens-portfolio.git
   git push -u origin main
   ```
3. Sa Cloudflare Dashboard, pumunta sa **Pages** ➔ **"Connect to Git"**.
4. Piliin ang iyong repository.
5. Sa **Build settings**:
   - **Framework preset**: `None`
   - **Build command**: *(iwanang blangko)*
   - **Build output directory**: `.` *(o iwanang root)*
6. Pindutin ang **"Save and Deploy"**.
7. Sa tuwing may babaguhin ka sa VS Code at mag-`git push`, awtomatikong mag-a-update ang iyong live website!

---

## ⌨️ Mga Keyboard Shortcuts sa Website
- **`X`**: I-toggle ang X-Ray Blueprint mode (naglalantad ng grid, alignment, at visual guidelines).
- **`ESC`**: Isara ang bukas na Main Menu o Case Study Drawer.
- **`Left / Right Arrow`**: Lumipat ng hakbang sa "The Build" process canvas.
