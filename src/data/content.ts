export const site = {
  brand: "OwnCRM",
  price: "₹49,999",
  email: "muhammedjavad119144@gmail.com",
  whatsapp: "https://wa.me/910000000000",
  mailto:
    "mailto:muhammedjavad119144@gmail.com?subject=Get%20my%20CRM%20installed%20(OwnCRM%20%E2%82%B949%2C999)",
  mailtoSetup:
    "mailto:muhammedjavad119144@gmail.com?subject=Question%20about%20my%20CRM%20setup",
  ctaPrimary: "Get Your CRM Installed",
  ctaPrimaryShort: "Get Installed",
  ctaSecondary: "View Demo Dashboard",
};

export const hero = {
  eyebrow: "One-time license · ₹49,999",
  titleStart: "Your own CRM. Web, Android & ",
  titleAccent: "iOS",
  titleEnd: " — installed, branded, documented.",
  subhead:
    "A complete CRM installed on your own server for one payment of ₹49,999 — no monthly seats, no record limits, no vendor holding your customer data hostage.",
  checklist: [
    "Full Web Dashboard",
    "Android App",
    "iOS App",
    "Installation + Documentation",
  ],
  note: "₹49,999 once — unlimited users, unlimited leads, forever.",
  funnel: [
    { label: "New Lead", value: "1,248" },
    { label: "Qualified", value: "612", active: true },
    { label: "Proposal Sent", value: "241" },
    { label: "Deal Won", value: "96" },
  ],
};

export const included = {
  eyebrow: "What's in the box",
  title: "Everything you need, handed over on day one.",
  subhead:
    "One payment covers the software, the apps, the install on your server, the docs and your branding.",
  items: [
    {
      icon: "LayoutDashboard",
      title: "Full Web Dashboard",
      text: "Leads, pipeline, tasks, team, attendance and reports in one browser dashboard.",
    },
    {
      icon: "Smartphone",
      title: "Android App",
      text: "Native-feel Android app for your field and sales team, published under your name.",
    },
    {
      icon: "Apple",
      title: "iOS App",
      text: "The same CRM on iPhone, so nobody is stuck waiting for a laptop to log a lead.",
    },
    {
      icon: "ServerCog",
      title: "Done-for-you Installation",
      text: "We install, configure and hardening-check the CRM on your own server for you.",
    },
    {
      icon: "BookOpen",
      title: "Full Documentation",
      text: "Written admin and user documentation, plus a recorded walkthrough of every module.",
    },
    {
      icon: "Palette",
      title: "White-label Branding",
      text: "Your company name, logo and colours everywhere. Our name appears nowhere.",
    },
  ],
};

export const features = {
  eyebrow: "Under the hood",
  title: "Exactly which features you get. No asterisks.",
  subhead:
    "Six modules, all included in the one-time license — not split across Starter, Pro and Enterprise.",
  groups: [
    {
      tag: "Leads & pipeline",
      title: "Capture and move every lead",
      items: [
        "Unlimited leads and contacts",
        "Custom pipeline stages",
        "Lead source and owner tracking",
        "Bulk import from CSV or Excel",
      ],
    },
    {
      tag: "Team & tasks",
      title: "Assign work and see follow-through",
      items: [
        "Unlimited user accounts",
        "Role-based permissions",
        "Task assignment with due dates",
        "Follow-up reminders and notes",
      ],
    },
    {
      tag: "People ops",
      title: "Attendance and field tracking",
      items: [
        "Check-in / check-out with location",
        "Leave and holiday records",
        "Daily visit logs for field staff",
        "Monthly attendance export",
      ],
    },
    {
      tag: "Automation & comms",
      title: "Fewer manual messages",
      items: [
        "Email and WhatsApp templates",
        "Stage-change triggers",
        "Webhooks and REST API access",
        "Website form to lead capture",
      ],
    },
    {
      tag: "Reporting & export",
      title: "Numbers you can take with you",
      items: [
        "Pipeline and conversion reports",
        "Per-user performance view",
        "Filterable activity history",
        "Full CSV export of every table",
      ],
    },
    {
      tag: "Mobile apps",
      title: "Android and iOS, your branding",
      items: [
        "Push notifications for new leads",
        "Offline-tolerant lead entry",
        "Call and WhatsApp from the record",
        "Published on your developer account",
      ],
    },
  ],
};

export const stats = {
  badge: "No per-seat pricing",
  title: "Your cost stops growing the day you buy it.",
  text: "Most CRMs bill per user per month, so every hire quietly raises your software bill. Here the price is fixed at ₹49,999 once — add your tenth or your hundredth user and the invoice stays exactly the same.",
  tiles: [
    { value: "Unlimited", label: "Users", note: "Add the whole company, no seat maths." },
    { value: "Unlimited", label: "Leads", note: "No record caps, no storage tiers." },
    { value: "Your server", label: "Storage", note: "Limited only by your own disk." },
    { value: "₹0", label: "Per-seat fees", note: "Forever. Not a promo rate." },
  ],
};

export const comparison = {
  eyebrow: "Straight comparison",
  title: "Here's what most CRMs won't put on their pricing page.",
  columns: ["", "This CRM", "A typical subscription CRM"],
  rows: [
    ["Pricing model", "₹49,999 one time", "₹1,000–2,500 per user / month"],
    ["Users allowed", "Unlimited", "Billed per seat"],
    ["Leads / records", "Unlimited", "Capped by plan tier"],
    ["Where data lives", "Your own server", "Their shared cloud"],
    ["Mobile apps", "Android + iOS, your branding", "Their branding, sometimes paid add-on"],
    ["Field attendance tracking", "Included", "Usually a separate product"],
    ["Automation / API access", "Included", "Higher tier only"],
    ["Vendor lock-in", "None — you hold the server", "Stop paying, lose access"],
  ],
  highlight: [
    "3-year cost, team of 10",
    "₹49,999 total",
    "₹5,40,000+ and rising",
  ],
  footnote:
    "Illustrative only: based on ₹1,500 per user per month for 10 users over 36 months. Your actual competitor quote will differ.",
};

export const privacy = {
  pain: {
    title: "Your leads sit on someone else's server. Who else can see them?",
    subhead:
      "Three things about rented CRMs that only become obvious after your data is already inside them.",
    cards: [
      {
        icon: "EyeOff",
        title: "You've never seen the server",
        text: "Your customer list, deal values and call notes live on hardware you don't control, under terms that can change without your signature.",
      },
      {
        icon: "TrendingUp",
        title: "The bill grows with your team",
        text: "Every new hire adds another seat charge. Growing the team quietly becomes a reason to spend more on software.",
      },
      {
        icon: "Lock",
        title: "Cancel and access stops that day",
        text: "The moment a payment fails, the pipeline you spent years building is behind a paywall you no longer control.",
      },
    ],
  },
  response: {
    title: "Owning the server gives you everything a rented CRM can't.",
    text: "The CRM is installed on infrastructure you already pay for and already control. There is no shared tenant, no third-party dashboard, and no switch anyone else can flip.",
    points: [
      "Only you hold the server credentials",
      "Your data never sits on a shared multi-tenant cloud",
      "Export or wipe every record at any time",
      "Fits data-residency expectations for local clients",
    ],
    ctaPrimary: "Get Your CRM Installed",
    ctaSecondary: "Talk to us about your setup",
  },
};

export const demo = {
  eyebrow: "See it",
  title: "The dashboard and apps, live.",
  subhead:
    "Same layout you'll get after install — your logo and colours in place of ours.",
  cta: "Open Live Demo",
  ctaHref: "#demo",
  note: "The live link activates as soon as the staging instance is deployed. Email us and we'll walk you through it today.",
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "From payment to live CRM in four steps.",
  steps: [
    { title: "You buy", text: "One payment of ₹49,999. We send an onboarding form for your server and branding details." },
    { title: "We install & brand it", text: "We deploy the CRM to your server, apply your logo, colours and domain, and build both apps." },
    { title: "Docs + a walkthrough", text: "You receive full documentation and a recorded session covering every module and admin setting." },
    { title: "You're live", text: "Your team logs in on web, Android and iOS. Unlimited users, unlimited leads, your server." },
  ],
  scarcity:
    "We onboard a limited number of installs each month — enough time per client to configure, test and hand over properly rather than rush the setup.",
};

export const pricing = {
  eyebrow: "Pricing",
  title: "One payment. Then it's yours.",
  price: "₹49,999",
  priceCaption: "one-time · unlimited users & leads",
  items: [
    "Full Web Dashboard",
    "Android App",
    "iOS App",
    "Done-for-you installation on your server",
    "Full documentation + recorded walkthrough",
    "White-label branding (your name and logo)",
  ],
  guarantee:
    "Risk reversal: if your CRM isn't live on the timeline we agree in writing, you get a full refund.",
  cta: "Get Your CRM Installed",
};

export const faq = {
  eyebrow: "FAQ",
  title: "The questions buyers actually ask.",
  items: [
    {
      q: "Do I need technical skills to run this?",
      a: "No. We handle the installation, configuration and hardening. Day-to-day use is a normal web dashboard and two mobile apps — no terminal, no server work for you.",
    },
    {
      q: "Is hosting included in the ₹49,999?",
      a: "No, and that's deliberate. The license covers the software, apps, install, docs and branding. You pay your own hosting provider directly — typically ₹500–2,000 a month — so the server and its credentials stay yours.",
    },
    {
      q: "Are the apps published under my account?",
      a: "Yes. Both apps are built with your branding and published on your own Google Play and Apple developer accounts, so the listings belong to your company.",
    },
    {
      q: "What exactly is in the documentation?",
      a: "An admin guide (users, roles, pipeline stages, automation, backups), a user guide for your team, an API reference, and a recorded walkthrough of every module.",
    },
    {
      q: "Can I get changes made after install?",
      a: "Yes. Post-install customisation is quoted separately as a fixed-price piece of work. Nothing about the license expires while you wait.",
    },
    {
      q: "Do I own the source code?",
      a: "You get a perpetual license to run, modify and self-host the installed instance for your business, with your branding. It is not resold or redistributed as a competing product.",
    },
  ],
};

export const finalCta = {
  title: "Stop renting your customer data back every month.",
  text: "Tell us about your team size and where you'd like it hosted. We'll confirm the fit, the timeline and the handover — then install it on your server for a single payment of ₹49,999.",
  primary: "Get Your CRM Installed",
  secondary: "WhatsApp us",
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} OwnCRM. Self-hosted CRM, installed and branded for your business.`,
  links: [
    { label: "What's included", href: "#included" },
    { label: "Compare", href: "#compare" },
    { label: "Privacy", href: "#privacy" },
    { label: "FAQ", href: "#faq" },
  ],
};
