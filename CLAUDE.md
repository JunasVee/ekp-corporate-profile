@AGENTS.md

# EKP Corporate Digital Profile

## Project Overview
Corporate website for **PT Energi Konstruksi Prima Nusantara (EKP)** — an EPC company serving Indonesia's energy industry.
Target: setara Petrofac, Saipem, McDermott, Worley — Professional, premium, corporate-grade.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (uses `@import "tailwindcss"`, no config file — theming via `@theme` in globals.css)
- `lucide-react` for icons

## Brand Colors (defined in `app/globals.css` @theme block)
| Token | Value | Usage |
|-------|-------|-------|
| `ekp-red` | `#CC1A27` | Primary accent, buttons, highlights |
| `ekp-red-dark` | `#a81520` | Hover state for red |
| `ekp-navy` | `#0C1A2E` | Dark sections, navbar bg, footer |
| `ekp-navy-light` | `#162238` | Subtle dark hover |
| `ekp-gold` | `#F4A012` | Secondary accent, "POWERING FUTURE" text |
| `ekp-light` | `#F4F6F8` | Light section backgrounds |

Use as: `bg-ekp-red`, `text-ekp-navy`, `border-ekp-gold`, etc.

## File Structure
```
app/
├── _components/
│   ├── Navbar.tsx          (client - sticky, dropdown, mobile menu)
│   ├── Footer.tsx          (server - links, contact, message form)
│   └── home/
│       ├── HeroSection.tsx        (client - 3-slide auto-advance hero)
│       ├── AboutPreview.tsx       (server)
│       ├── BusinessSectors.tsx    (server - 8 service grid)
│       ├── StatsSection.tsx       (client - IntersectionObserver fade-in)
│       ├── ProjectsSlider.tsx     (client - horizontal scroll slider)
│       ├── WhyEKPSection.tsx      (server - 6 card grid)
│       ├── ClientsSection.tsx     (server - CSS marquee loop)
│       └── NewsSection.tsx        (server)
├── _lib/
│   └── data.ts             (ALL static content — edit this for real data)
├── about/page.tsx
├── services/page.tsx
├── industries/page.tsx
├── projects/page.tsx + [id]/page.tsx
├── capabilities/page.tsx
├── sustainability/page.tsx
├── career/page.tsx
├── news/page.tsx
├── contact/page.tsx
├── globals.css
├── layout.tsx
└── page.tsx (home — assembles all sections)
```

## Images Required
All image placeholders use CSS gradients. Replace with real images:

| What | Path | Notes |
|------|------|-------|
| Hero slides | `public/images/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` | Oil refinery, pipeline drone, renewable plant |
| About section | `public/images/about-ekp.jpg` | Company building or construction site overview |
| EKP Logo | `public/images/logo-ekp.png` | Full logo with tagline |
| Project images | `public/images/projects/{project-id}.jpg` | One per project (see data.ts for IDs) |
| Client logos | `public/images/clients/{client-id}.png` | Transparent PNG preferred |
| News images | `public/images/news/{1,2,3}.jpg` | One per news article |

## Data File
All content lives in `app/_lib/data.ts`:
- `navItems` — navigation with dropdowns
- `heroSlides` — 3 hero slides
- `services` — 8 business sectors
- `stats` — 5 key metrics
- `projects` — 6 projects (add more as needed)
- `whyItems` — 6 Why EKP values
- `clients` — 8 clients
- `newsItems` — 3 news articles
- `contactInfo` — address, phone, email

## GitHub
Repo: https://github.com/JunasVee/ekp-corporate-profile
Remote: `origin` — https://github.com/JunasVee/ekp-corporate-profile.git

## Future Features (Premium)
- Interactive Indonesia project map (pin per project location)
- Animated timeline company history
- Download center (PDF, certificates)
- Multi-language (ID/EN) — language switcher in Navbar already UI-ready
- Dark mode
- Career portal with CV upload
