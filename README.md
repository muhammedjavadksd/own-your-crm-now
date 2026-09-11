# Own Your Space

Build a single-page marketing/landing website for a self-hosted CRM product called "OwnCRM."

PRODUCT CONTEXT
- The offer: a one-time payment of ₹49,999 for a fully installed, self-hosted CRM — not a subscription.
- What's included: Full Web Dashboard, Android App, iOS App, done-for-you installation on the buyer's own server, full documentation, and white-label branding (their name/logo, not ours).
- The core differentiators vs. every competing CRM: unlimited users (no per-seat billing), unlimited leads/records (no caps), and the buyer's own server (their data never touches a shared third-party cloud).
- Primary CTA everywhere: "Get Your CRM Installed" (scrolls/links to #pricing or #contact).
- Secondary CTA in the hero: "View Demo Dashboard" (links to #demo).
- Contact: email muhammedjavad119144@gmail.com, WhatsApp link (placeholder number).

TECH STACK
- React 19 + Vite, plain hand-written CSS (no Tailwind, no CSS-in-JS).
- lucide-react for icons.
- Content and copy live in a single `src/data/content.js` file that components import from — don't hardcode copy inside JSX.
- Component-per-section architecture: Header, Hero, Included, Features, StatsStrip, Comparison, Privacy, Demo, HowItWorks, Pricing, FAQ, FinalCTA, Footer — assembled in that order inside App.jsx.

VISUAL DESIGN SYSTEM
Two-tone system, not a light/dark theme toggle — specific sections are permanently dark, others permanently light mint, by design:
- Dark tokens: near-black background (#060a08), dark surface (#0f1713), dark border (#1e2b24), off-white text (#f4f8f5), muted grey-green text (#93a79a).
- Light tokens: pale mint background (#eef4ef), white card surface (#ffffff), soft border (#d3ded5), near-black text (#10201a), muted text (#52615a).
- Accent: emerald-to-teal gradient (#17e3a6 → #17b9c6), solid emerald (#12b589), deep emerald for text-on-light (#0b6e52).
- Font: Inter (400–800 weights) throughout, tight letter-spacing on headings, `text-wrap: balance`.
- Buttons: fully rounded pill shape (border-radius: 100px), primary = gradient fill with dark text on it, secondary = transparent with a light border, subtle lift-on-hover.
- Dark sections (Hero, "What's in the box", Final CTA) sit against a near-black background with a soft radial emerald glow positioned upper-right and a faint grid-line texture overlay.
- Light sections use pale mint backgrounds with white cards, soft borders, and generous rounded corners (16–24px).
- Alternating rhythm down the page: dark → light → light → light → light(pain cards)/light(response) → dark(demo... actually demo is dark-glow but not full section--dark) → light → light → light → dark.

SECTION-BY-SECTION SPEC

1. Header (sticky, dark, blurred background on scroll)
   - Wordmark: small gradient rounded-square icon + "OwnCRM" text.
   - One button, right-aligned: "Get Your CRM Installed" on desktop, collapses to "Get Installed" under ~420px width.

2. Hero (dark, full glow background)
   - Eyebrow: "One-time license · ₹49,999"
   - H1: "Your own CRM. Web, Android & iOS — installed, branded, documented." (with "iOS" rendered in the gradient accent color)
   - Subhead: one sentence on self-hosted, one-time, no vendor lock-in.
   - Checklist row (inline, not a list): Full Web Dashboard / Android App / iOS App / Installation + Documentation, each with a small checkmark icon.
   - CTA row: primary "Get Your CRM Installed" + secondary "View Demo Dashboard".
   - Small note line under the CTAs: "₹49,999 once — unlimited users, unlimited leads, forever."
   - Right side (or below on mobile): a visual "funnel" diagram — four trapezoid-shaped stacked bars narrowing top-to-bottom, labeled New Lead → Qualified → Proposal Sent → Deal Won, with "Qualified" highlighted (gradient border + glow) as the active stage.

3. Included / "What's in the box" (dark section)
   - 6-item grid (3 columns desktop, collapsing to 2 then 1): Full Web Dashboard, Android App, iOS App, Done-for-you Installation, Full Documentation, White-label Branding. Each card: small icon in a rounded emerald-tinted square, title, one-sentence description.
   - Ends with a centered CTA button.

4. Features / "Under the hood" (light section)
   - 6 feature-group cards (3 columns → 2 → 1), each with an eyebrow tag (e.g. "Leads & pipeline"), a heading, and a checklist of 4 bullet items. Cover: leads/pipeline, team & tasks, people ops/attendance, automation & comms, reporting/export, and mobile apps.
   - Ends with a centered CTA button.

5. StatsStrip / proof panel (light section)
   - Two-column panel (stacks on mobile): left side = a badge ("No per-seat pricing"), one paragraph of copy about cost not growing with headcount, and a CTA button. Right side = a 2×2 grid of stat tiles: Unlimited Users, Unlimited Leads, Your Server (Storage), ₹0 Per-seat fees — each with a one-line supporting note.

6. Comparison (light section)
   - Heading: "Here's what most CRMs won't put on their pricing page."
   - A responsive table (horizontal scroll on mobile) comparing "This CRM" vs. "A typical subscription CRM" across: pricing model, users allowed, leads/records, where data lives, mobile apps, field attendance tracking, automation/API access, vendor lock-in — plus a highlighted final row showing an illustrative 3-year cost comparison for a 10-person team, with a footnote caveat that the number is illustrative.
   - Ends with a CTA button.

7. Privacy / Data trust (two connected light sections — the key persuasion moment)
   Part A — Pain: centered heading "Your leads sit on someone else's server. Who else can see them?" followed by 3 cards raising specific fears: (a) data sits on a server you've never seen, under someone else's terms, (b) the bill grows every time you hire, (c) cancel the subscription and access stops that day.
   Part B — Response: a mint-gradient rounded panel directly below, headlined "Owning the server gives you everything a rented CRM can't," with supporting copy, then a checklist of trust points (only you hold server credentials, data never sits on a shared cloud, export/wipe anytime, fits data-residency expectations), then two CTAs side by side: "Get Your CRM Installed" and "Talk to us about your setup" (mailto).

8. Demo (dark-glow section, not full section--dark)
   - Heading: "The dashboard and apps, live."
   - A dark framed panel containing a simple CSS-drawn browser-window mockup next to a phone mockup (abstract blocks/bars, not real screenshots).
   - CTA: "Open Live Demo" (placeholder link, with a small note that it activates once a staging instance is deployed).

9. HowItWorks (light section)
   - 4-step numbered row: You buy → We install & brand it → You get docs + a walkthrough → You're live.
   - A scarcity note below: limited installs onboarded per month, for proper setup quality.
   - CTA button.

10. Pricing (light section)
    - Single centered pricing card (not multiple tiers): ₹49,999 one-time, "unlimited users & leads" caption, a checklist repeating the 6 bundle items, a guarantee line (refund if not live on the agreed timeline), and a full-width CTA button.

11. FAQ (light section)
    - 6 collapsible accordion items (native <details>/<summary>, first one open by default) covering: technical skill needed, hosting cost separate from the license, app-store publishing under their own account, what's in the documentation, post-install changes, source-code ownership.

12. FinalCTA (dark section, bookend to match the hero)
    - Heading: "Stop renting your customer data back every month."
    - One paragraph inviting them to talk.
    - Two CTAs: "Get Your CRM Installed" (mailto with prefilled subject) and "WhatsApp us" (external link).

13. Footer (dark)
    - Copyright line + inline nav links to What's included / Compare / Privacy / FAQ anchors.

PERSUASION PRINCIPLES TO KEEP INTACT
- Anchoring: lead with the one-time ₹49,999 price early and often so every later number reads as small by comparison.
- Loss aversion / endowment: emphasize what a subscription model takes away (access, ownership) rather than only what this product adds.
- Risk reversal: the timeline guarantee in Pricing.
- Honest scarcity: limited monthly install slots — framed as a quality reason, not manufactured urgency.
- Social proof surface: comparison table doing the work of proof by contrast, since there are no logos/testimonials yet.
- Repeated low-friction CTAs: every section ends with the same primary action, so intent is never left stranded mid-scroll.
- Concrete specificity over vague marketing language throughout the copy (exact feature lists, exact numbers).

RESPONSIVE BEHAVIOR
- Breakpoints at ~960px (3-col grids → 2-col, hero becomes single column with funnel diagram moved above the copy) and ~620px (all grids → 1-col, header button text shortens).
- Comparison table scrolls horizontally rather than reflowing.

Do not use a light/dark theme toggle — the dark and light sections are a fixed, deliberate two-tone brand system that doesn't respond to the user's OS theme preference.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://own-your-crm-now.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1706d26b-a652-4502-96e6-05be1376921a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
