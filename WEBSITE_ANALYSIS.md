# Teexho James Website - Detailed Analysis and Change Guide

## Purpose and positioning
- Brand focus: education consulting for Nigerian students + digital solutions for businesses.
- Tone: premium, confident, service-led; uses aspirational language and outcome-focused proof.
- Primary conversion goal: book contact / start journey (CTA to contact page).

## Tech stack and architecture
- Framework: Next.js App Router with React 19.
- Styling: Tailwind CSS v4 with global custom classes and CSS variables.
- Animation: GSAP + ScrollTrigger for hero and section reveals.
- Icons: lucide-react.
- Forms: static form markup; react-hook-form and zod are installed but unused.

Key files:
- App layout and metadata: [src/app/layout.tsx](src/app/layout.tsx)
- Global styles and tokens: [src/app/globals.css](src/app/globals.css)
- Home page: [src/app/page.tsx](src/app/page.tsx)
- Shared components: [src/components](src/components)
- GSAP hooks and animation wiring: [src/hooks/useGSAP.ts](src/hooks/useGSAP.ts), [src/utils/gsap.ts](src/utils/gsap.ts)

## Route map and page intent
- / (Home): hero, services intro, services grid, proof/benefits, team/training, testimonials loop, FAQ.
- /about: brand story, rotating hero background, team carousel, CTA.
- /contact: contact details and form.
- /services: placeholder page.
- /schools: placeholder page.

## Component system and reuse
Reusable components:
- Container, Section, Grid, Card, Button, SectionHeader.
- See usage guide: [src/components/README.md](src/components/README.md)

Current usage pattern:
- Home and About pages still use raw section markup with a mix of Tailwind classes and inline styles.
- Reusable Section and Grid exist but are only partially used.

## Visual design system
Color tokens (CSS variables):
- Primary: #063835
- Secondary: #00ABA3
- Accent: #520643
- Text: #1a1a1a / #666666
- Background: #f8f9fa

Custom utility classes:
- .text-teexho-blue, .bg-teexho-blue, .text-teexho-red, .bg-teexho-red
- .border-1-5 for a 1.5px border
- .section-title, .section-description, heading hierarchy helpers

Typography:
- Albert Sans via next/font, applied in layout; system fallback in globals.
- Navigation uses a hard-coded font family override (Rethink Sans), not defined in fonts.

Layout rhythm:
- Large vertical padding on primary sections (py-24, py-32) for premium spacing.
- Max content width 1400px via .container.

## Home page structure (content inventory)
- Navigation (fixed, responsive): [src/components/Navigation.tsx](src/components/Navigation.tsx)
- Hero (background image + overlay): [src/components/Hero.tsx](src/components/Hero.tsx)
- Services intro + services grid: [src/components/Services.tsx](src/components/Services.tsx)
- Why Choose Us (feature cards + counters): [src/app/page.tsx](src/app/page.tsx)
- Team/Training image grid: [src/app/page.tsx](src/app/page.tsx)
- Testimonials horizontal loop (duplicate set for infinite scroll): [src/app/page.tsx](src/app/page.tsx)
- FAQ accordion: [src/app/page.tsx](src/app/page.tsx)
- Footer: [src/components/Footer.tsx](src/components/Footer.tsx)

## About page structure
- Hero with cross-fading background images.
- Mission statement and purpose.
- Team carousel with LinkedIn icons and quotes.
- CTA section.

## Contact page structure
- Intro headline and supporting text.
- Image + contact details (address, phone, email).
- Static contact form (no submit handler).

## Animation and interaction
GSAP-driven animations:
- Hero headline/description/buttons fade-in.
- Section title/description reveal for services, features, team, testimonials.
- Feature cards scale-in.
- Team images scale-in.
- Counters animate to target values.

Gaps in animation wiring:
- .service-card and .testimonial-card selectors are not present in markup, so their animations never trigger.
- The testimonial slider relies on a CSS keyframe loop with inline style animation; pausing on hover works.

Files:
- Hook: [src/hooks/useGSAP.ts](src/hooks/useGSAP.ts)
- Animations: [src/utils/gsap.ts](src/utils/gsap.ts)

## SEO and metadata
- Global metadata is defined in layout only.
- No per-page metadata, OpenGraph, or Twitter card tags.
- No structured data.

## Accessibility and UX notes
- Navigation uses <a> tags instead of Link for internal routes.
- Mobile menu overlay closes on click; good.
- CTA buttons include icon chevrons that may not be desired in forms or icon-less contexts.
- Form inputs lack aria-invalid states and validation messaging.
- Some images use long descriptive filenames; alt text exists but can be tightened.
- A few social links are placeholders (#) and should be real URLs.

## Performance notes
- Large hero background with full-bleed image; uses next/image with priority.
- Multiple large images across sections could benefit from smaller sizes and descriptive sizes prop.
- GSAP ScrollTrigger running on many nodes; fine for this size but monitor for long pages.

## Dependencies and usage gaps
Installed but not used in current pages:
- framer-motion, react-hook-form, zod, next-seo, next-sanity, @sanity/client, resend, @vercel/analytics.

If not planned for near-term use, consider removing to reduce bundle size and surface area.

## Known content gaps
- /services and /schools pages are placeholders.
- Footer links point to routes that do not exist (legal, privacy, locations, careers, specific service pages).
- Testimonial data is hard-coded and duplicated for loop effect.

## Change guide (how to edit safely)
1. Update core typography and colors in [src/app/globals.css](src/app/globals.css).
2. Adjust hero copy and image in [src/components/Hero.tsx](src/components/Hero.tsx).
3. Update service cards and images in [src/components/Services.tsx](src/components/Services.tsx).
4. Modify the home page feature, team, testimonials, and FAQ in [src/app/page.tsx](src/app/page.tsx).
5. Update contact form fields and details in [src/app/contact/page.tsx](src/app/contact/page.tsx).
6. Add new pages under src/app/<route>/page.tsx and link from navigation/footer.

## Recommendations (short list)
- Add missing class names (.service-card, .testimonial-card) or update GSAP selectors to match existing markup.
- Replace placeholder footer links or add the missing routes.
- Consolidate sections to use the reusable Section/Grid/Card components for consistency.
- Add per-page metadata and OpenGraph tags.
- Wire contact form to an API route or external service (e.g., Resend) with validation.
- Audit unused dependencies and remove or implement intentionally.

## QA checklist for future changes
- Hero text readability over background across breakpoints.
- CTA visibility and spacing on mobile and tablet.
- Navigation layout at md and lg breakpoints.
- Image loading and cropping in all sections.
- GSAP animations trigger in target sections.
- Form field focus states and accessibility labels.
- Footer links resolve to valid pages.
