# CLAUDE.md — tiskae-next

This is the Next.js + TypeScript + SASS Modules migration of Ibrahim Adedokun's (Tiskae) personal portfolio.
The original project lives at `/Users/macbook/Desktop/tiskae/` and remains live/untouched.
Read source files from that path whenever you need to reference original markup, styles, or logic.

---

## Project Goal

Rebuild the existing static HTML/CSS/SASS/Vanilla JS portfolio into a modern stack:
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: SASS Modules (`.module.scss`) + a global SASS layer
- **Fonts**: `next/font/google` + `next/font/local` (Miama)
- **Images**: `next/image` for all raster images
- **Deployment**: Vercel (new project, separate from old site)

Zero tolerance for TypeScript errors. `next build` must pass clean.

---

## Original Project Stack

- Single `index.html` — fully hardcoded, one page, no framework
- SASS (7-1 pattern): `src/sass/` with `abstracts/`, `base/`, `components/`, `layout/`, `pages/`
- Vanilla JS: `src/js/script.js` (~80 lines, no imports)
- Build: node-sass + PostCSS + autoprefixer + live-server
- No routing, no API, no state management, no database

---

## Design System

### Color Variables (map directly to CSS custom properties in `globals.scss`)

```scss
// Original SASS variables → use these exact values
$color-primary: #082035;
$color-primary-light: #123450;
$color-secondary: #cfff70;
$color-secondary-light: #e4fcb6;
$color-white: #fff;
$color-black: #000;
$color-grey: #ccc;

$shadow-white: 0 0 10px rgba(255, 255, 255, 0.3);
$shadow-dark: 0 0 10px rgba(0, 0, 0, 0.3);
```

### Responsive Breakpoints

```scss
// Original mixin — preserve these exact values
@mixin respond($breakpoint) {
  @if $breakpoint == desktop    { @media (min-width: 75em) { @content; } }      // 1200px
  @if $breakpoint == tab-land   { @media (max-width: 62.5em) { @content; } }   // 1000px
  @if $breakpoint == tab-port   { @media (max-width: 42em) { @content; } }     // 672px
  @if $breakpoint == phone      { @media (max-width: 33em) { @content; } }     // 528px
}
```

### Fonts

- **Headings (h2, h3)**: `Milonga` — Google Font, cursive
- **Body**: `Open Sans` — Google Font, 400 & 700
- **Accent**: `Lora` — Google Font, 700
- **Brand name "Tiskae"**: `Miama` — custom font, file at `public/fonts/Miama.ttf`

Wire fonts in `app/layout.tsx` using `next/font/google` and `next/font/local`.

---

## Keyframe Animations (CRITICAL — must stay global)

All 5 keyframes must be defined in `app/globals.scss` (NOT in any `.module.scss`).
CSS Modules hash class names but NOT keyframe names when they're in a module file — however, to be safe and explicit, keep them all global so component module files can reference them as plain strings.

```scss
// 1. Loader items — scale pulse
@keyframes fadeInOut {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(0); opacity: 0; }
}

// 2. Loader container — slides away after 2s
@keyframes fadeOut {
  0%   { transform: translateY(0) translateX(0); opacity: 1; }
  100% { transform: translateY(-100%) translateX(0); opacity: 0; }
}

// 3. Profile picture border — rotating color
@keyframes animateBorder {
  0%   { border-color: #cfff70 transparent transparent transparent; }
  25%  { border-color: transparent #cfff70 transparent transparent; }
  50%  { border-color: transparent transparent #cfff70 transparent; }
  75%  { border-color: transparent transparent transparent #cfff70; }
  100% { border-color: #cfff70 transparent transparent transparent; }
}

// 4. Experience card borders — opacity pulse
@keyframes animateBorderUniform {
  0%, 100% { border-color: rgba(207, 255, 112, 1); }
  50%       { border-color: rgba(207, 255, 112, 0); }
}

// 5. Text color cycle — white → lime → white
@keyframes animateColor {
  0%, 100% { color: #fff; }
  50%       { color: #cfff70; }
}

// 6. Button hover stripe
@keyframes rebuild {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
}
```

---

## Page Layout

The body uses a 3-column CSS grid:

```
[4.5rem social sidebar] [1fr main content] [4.5rem nav sidebar]
```

On tablet/phone, sidebars hide and content goes full width.

The main content has 5 scroll sections stacked vertically:
1. `#section-header` — Hero / intro
2. `#section-skills` — Skills grid
3. `#section-experiences` — Work history
4. `#section-projects` — Project showcase
5. `#section-footer` — CTA + footer

---

## Component Breakdown

### File structure to build

```
app/
├── layout.tsx              ← fonts, metadata, globals.scss import
├── page.tsx                ← composes all section components
└── globals.scss            ← :root vars, keyframes, base reset, font-face

components/
├── Loader/
│   ├── Loader.tsx          ← 9-square grid, useState(visible), useEffect 2s hide
│   └── Loader.module.scss
├── SocialHandles/
│   ├── SocialHandles.tsx   ← left sidebar, maps over SocialLink[]
│   └── SocialHandles.module.scss
├── Navigation/
│   ├── Navigation.tsx      ← right sidebar, IntersectionObserver, useState(active)
│   └── Navigation.module.scss
├── Header/
│   ├── Header.tsx          ← hero section, 3x2 grid
│   ├── Header.module.scss
│   └── SkillCarousel.tsx   ← setInterval every 2s, useState(activeIndex)
├── Skills/
│   ├── Skills.tsx          ← maps over Skill[], SVG sprite icons
│   └── Skills.module.scss
├── Experience/
│   ├── Experience.tsx      ← section wrapper
│   ├── ExperienceCard.tsx  ← individual card with animateBorderUniform
│   └── Experience.module.scss
├── Projects/
│   ├── Projects.tsx        ← section wrapper
│   ├── ProjectCard.tsx     ← individual card with next/image
│   └── Projects.module.scss
└── Footer/
    ├── Footer.tsx
    └── Footer.module.scss

data/
└── content.ts              ← all hardcoded text as typed arrays

types/
└── index.ts                ← shared TypeScript interfaces

public/
├── img/                    ← all images (copied from /Users/macbook/Desktop/tiskae/src/img/)
├── fonts/
│   └── Miama.ttf           ← (copied from /Users/macbook/Desktop/tiskae/src/fonts/)
├── sprite.svg              ← (copied from /Users/macbook/Desktop/tiskae/src/css/)
└── CV.pdf                  ← (copied from /Users/macbook/Desktop/tiskae/)
```

---

## TypeScript Interfaces (`types/index.ts`)

```typescript
export interface Skill {
  name: string;
  iconId: string; // matches id in sprite.svg e.g. "icon-html5"
}

export interface ExperienceDetail {
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  logoSrc: string;
  logoAlt: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  iconId: string; // matches sprite.svg id
}

export interface NavTab {
  label: string;
  sectionId: string;
}
```

---

## Data Layer (`data/content.ts`)

Extract all hardcoded content from the original `index.html`. Reference the original at:
`/Users/macbook/Desktop/tiskae/index.html`

The data file should export typed arrays for: `skills`, `experiences`, `projects`, `socialLinks`, `navTabs`, `headerSkills` (the 11 skills shown in the hero carousel).

---

## JavaScript Logic → React Hooks

### Skill Carousel (`SkillCarousel.tsx`)
Original: global `setInterval` every 2000ms cycling through `.skill-box` elements via classList.
New approach:
```typescript
const [activeIndex, setActiveIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex(prev => (prev + 1) % headerSkills.length);
  }, 2000);
  return () => clearInterval(interval); // cleanup
}, []);
```

### Navigation Active State (`Navigation.tsx`)
Original: `IntersectionObserver` with threshold 0.55 on all sections, updates `.active` class.
New approach:
```typescript
const [activeSection, setActiveSection] = useState('section-header');
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    },
    { threshold: 0.55 }
  );
  // observe each section by id
  return () => observer.disconnect();
}, []);
```

### Loader (`Loader.tsx`)
Original: CSS animation `fadeOut` runs after 2s delay, loader visually disappears.
New approach:
```typescript
const [visible, setVisible] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => setVisible(false), 2500); // slight buffer after animation
  return () => clearTimeout(timer);
}, []);
if (!visible) return null;
```

---

## SASS Modules Rules

1. **Every component** gets a `.module.scss` file. Import as:
   ```typescript
   import styles from './Component.module.scss';
   // usage: className={styles.someClass}
   ```

2. **Shared abstracts** live in `styles/abstracts/`:
   - `_variables.scss` — color vars, shadow vars
   - `_mixins.scss` — `respond()` breakpoint mixin, `flexWrapCenter`, `gridCenter`
   - Each module file imports them with `@use '../styles/abstracts/variables' as v;`

3. **Keyframes stay in `globals.scss`** — referenced by string name in module files:
   ```scss
   .profilePic { animation: animateBorder 2s linear infinite; }
   ```

4. **Use `@use` not `@import`** — `@import` is deprecated in modern SASS.

5. **Never use `:global()` unnecessarily** — only for third-party class overrides.

---

## SVG Sprite Usage

The sprite is at `public/sprite.svg`. Use the same pattern as the original:
```tsx
<svg>
  <use href="/sprite.svg#icon-html5" />
</svg>
```

No changes needed. The `/public` directory is served at `/` in Next.js.

---

## Image Handling

Use `next/image` for all raster images (JPEG, PNG, AVIF):
```tsx
import Image from 'next/image';
<Image src="/img/profile-img.jpeg" alt="Ibrahim Adedokun" width={300} height={300} />
```

For decorative SVG backgrounds (the geometric patterns), use CSS `background-image: url('/img/pattern.svg')` in the module SCSS — no need for `next/image`.

---

## `app/layout.tsx` Setup

```typescript
import { Open_Sans, Lora, Milonga } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.scss';

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });
const lora = Lora({ subsets: ['latin'], weight: ['700'] });
const milonga = Milonga({ subsets: ['latin'], weight: ['400'] });
const miama = localFont({ src: '../public/fonts/Miama.ttf', variable: '--font-miama' });

export const metadata = {
  title: 'Tiskae | Frontend Developer',
  description: 'Portfolio of Ibrahim Adedokun — Frontend Developer',
};
```

---

## Key Rules for This Migration

- **`"use client"`** is required on any component using hooks (`useState`, `useEffect`, `useRef`) or browser APIs (`IntersectionObserver`, `setInterval`). Pure display components can be Server Components (no directive needed).
- **No `any` types** — use proper interfaces from `types/index.ts`.
- **No inline styles** — all styling via SASS modules or `globals.scss`.
- **`next build` must pass with zero errors** before considering the migration done.
- **Preserve all animation timings exactly**: 2s skill carousel, 2s loader fade, 2s border animation.
- **Preserve all exact color values** — do not approximate hex codes.
- **Mobile-first** — the original is mobile-first, keep it that way.
- **No new features** — this is a 1:1 rebuild, not an enhancement.

---

## Original Source Reference

All original source files are at `/Users/macbook/Desktop/tiskae/`:
- HTML: `index.html`
- SASS: `src/sass/` (main.scss + all partials)
- JS: `src/js/script.js`
- Images: `src/img/`
- Compiled CSS: `src/css/style.css` (useful for computed values)
- Font: `src/fonts/Miama.ttf`
- Sprite: `src/css/sprite.svg`
- CV: `CV.pdf`

When in doubt about any original value (spacing, color, timing), read the source files — don't guess.

---

## Scaffolding Command

From inside `/Users/macbook/Desktop/tiskae-next/`, run:
```bash
npx create-next-app@latest . --typescript --app --no-tailwind --eslint --src-dir --import-alias "@/*"
```

Then install SASS:
```bash
npm install --save-dev sass
```

Then copy assets:
```bash
cp -r /Users/macbook/Desktop/tiskae/src/img/ ./public/img/
cp /Users/macbook/Desktop/tiskae/src/fonts/Miama.ttf ./public/fonts/Miama.ttf
cp /Users/macbook/Desktop/tiskae/src/css/sprite.svg ./public/sprite.svg
cp /Users/macbook/Desktop/tiskae/CV.pdf ./public/CV.pdf
```
