# Theme Inversion Task TODO

## Overview
Invert the theme from white backgrounds to black/dark backgrounds while preserving red accents and ensuring text readability. Update CSS variables and replace hardcoded Tailwind classes.

## Steps
- [x] Update src/app/globals.css: Swap :root and .dark CSS variables to make default dark.
- [x] Update src/components/Hero.tsx: Replace bg-white with bg-black, adjust text and borders.
- [x] Update src/components/ServiceCard.tsx: Replace bg-white with bg-black, text-black with text-white, etc.
- [x] Update src/app/page.tsx: Replace bg-white with bg-black in sections.
- [x] Update src/components/Navbar.tsx: Replace bg-white with bg-black, text-black with text-white.
- [x] Update src/components/AboutSection.tsx: Replace bg-white with bg-black, text-gray-900 with text-white, etc.
- [x] Update src/components/CtaSection.tsx: Replace bg-white with bg-black.
- [x] Update src/components/FeaturedWorks.tsx: Replace bg-white with bg-black.
- [x] Update src/components/ProcessSection.tsx: Replace bg-gray-50 with bg-gray-900.
- [x] Update src/components/TestimonialCard.tsx: Replace bg-white with bg-black.
- [x] Update tailwind.config.ts: Add custom site variables (optional).
- [x] Verify accessibility: Ensure contrast ratios are acceptable.
- [ ] Follow-up: Suggest dark-mode logo variant for navbar.
