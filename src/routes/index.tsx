import { createFileRoute } from "@tanstack/react-router";

import landingCss from "../landing.css?url";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Included from "@/components/landing/Included";
import Features from "@/components/landing/Features";
import StatsStrip from "@/components/landing/StatsStrip";
import Comparison from "@/components/landing/Comparison";
import Privacy from "@/components/landing/Privacy";
import Demo from "@/components/landing/Demo";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const title = "OwnCRM — Self-hosted CRM installed on your server, ₹49,999 once";
const description =
  "A self-hosted CRM with web dashboard, Android and iOS apps, installed and white-labelled on your own server for one payment of ₹49,999. Unlimited users and leads.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: landingCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Included />
        <Features />
        <StatsStrip />
        <Comparison />
        <Privacy />
        <Demo />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
