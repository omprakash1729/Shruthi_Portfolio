import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Search, MessageSquare, Megaphone } from "lucide-react";
import { Eyebrow, Chip } from "@/components/ui-bits";
import heroPortrait from "@/assets/hero-portrait.jpg";
import projectErcblm from "@/assets/project-ercblm.jpg";
import projectBioner from "@/assets/project-bioner.jpg";
import projectCrop from "@/assets/project-crop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shruthi Ram — Digital Marketing & Data Science Portfolio" },
      {
        name: "description",
        content:
          "Bridging analytical insight and high-impact digital storytelling. Data-driven marketing ecosystems by Shruthi Ram R S.",
      },
      { property: "og:title", content: "Shruthi Ram — Digital Marketing & Data Science" },
      {
        property: "og:description",
        content: "Data-driven digital marketing portfolio of Shruthi Ram R S.",
      },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  {
    icon: Search,
    title: "SEO & Organic Growth",
    body: "Optimizing content and technical infrastructure to dominate search rankings and drive high-intent traffic.",
  },
  {
    icon: MessageSquare,
    title: "Direct Marketing",
    body: "Crafting highly engaging Email and WhatsApp marketing campaigns that convert and retain audiences.",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    body: "Building vibrant communities and brand narratives across major social platforms (SMM).",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    body: "Utilizing Python and SQL to analyze campaign performance and uncover actionable growth opportunities.",
  },
];

const ecosystem = [
  {
    num: "01",
    tag: "Acquisition",
    title: "SEO & SMM Strategy",
    body: "Comprehensive search engine optimization (on-page & technical) and full-cycle social media management to maximize brand visibility.",
    chips: ["SEO", "SOCIAL_MEDIA", "CONTENT_STRATEGY"],
  },
  {
    num: "02",
    tag: "Retention",
    title: "Email & WhatsApp",
    body: "Designing automated email sequences and highly personalized WhatsApp marketing blasts to nurture leads and boost conversion rates.",
    chips: ["EMAIL_MARKETING", "WHATSAPP_API", "AUTOMATION"],
  },
  {
    num: "03",
    tag: "Analytics",
    title: "Marketing Data Science",
    body: "Backing every creative decision with empirical evidence. Building dashboards in Power BI and cleaning datasets with Python/SQL.",
    chips: ["PYTHON", "POWER_BI", "SQL"],
  },
];

const featured = [
  {
    img: projectCrop,
    tag: "SEO · CONTENT",
    title: "Organic Traffic Acceleration",
    body: "A comprehensive SEO strategy overhauling site architecture and content, leading to a 40% increase in organic search visibility.",
  },
  {
    img: projectBioner,
    tag: "EMAIL · WHATSAPP",
    title: "Omnichannel Lead Nurture",
    body: "Integrated Mailchimp and WhatsApp API automation workflow that improved lead retention and boosted conversion rates by 25%.",
  },
  {
    img: projectErcblm,
    tag: "DATA SCIENCE",
    title: "Marketing Analytics Dashboard",
    body: "A Power BI and Python-based solution to track cross-channel marketing KPIs, enabling real-time ROI tracking.",
  },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Available for Projects</Eyebrow>
            <h1 className="mt-5 font-display font-bold tracking-tight text-5xl md:text-7xl leading-[1.02]">
              Hey, I'm <span className="text-gradient">Shruthi.</span>
              <br />
              Digital Marketing
              <br />
              &amp; Growth Strategy
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg">
              Bridging the gap between creative digital storytelling and analytical insight. I engineer SEO, SMM, and direct marketing ecosystems (Email/WhatsApp) that drive measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                View Projects <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/work"
                className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                My Journey
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="surface-card relative aspect-[4/5] overflow-hidden">
              <img
                src={heroPortrait}
                alt="Abstract portrait formed from orange data particles"
                width={896}
                height={1152}
                className="absolute inset-0 size-full object-cover opacity-90"
              />
              <div className="absolute top-5 right-5 surface-card px-4 py-3 text-right">
                <div className="text-[0.6rem] font-mono uppercase tracking-widest text-muted-foreground">
                  Campaigns Shipped
                </div>
                <div className="font-display text-2xl font-bold">25+</div>
              </div>
              <div className="absolute bottom-5 left-5 surface-card px-4 py-3">
                <div className="text-[0.6rem] font-mono uppercase tracking-widest text-muted-foreground">
                  Organic Reach Lift
                </div>
                <div className="font-display text-2xl font-bold text-gradient">+25%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Objective &amp; Vision
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              To leverage my multidisciplinary background in Data Science and Digital Marketing
              to build intelligent brand infrastructures that don't just reach audiences, but
              resonate with them through hyper-personalized experiences.
            </p>
            <p>
              I focus on translating complex datasets into actionable marketing strategies —
              ensuring every creative decision is backed by solid empirical evidence.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {capabilities.map((c) => (
            <div key={c.title} className="surface-card p-6">
              <div className="size-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border">
        <Eyebrow>Core Competencies</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
          Professional Ecosystem
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {ecosystem.map((e) => (
            <div key={e.num} className="surface-card p-7 flex flex-col">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {e.num} — <span className="text-primary">{e.tag}</span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-xl">{e.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{e.body}</p>
              <div className="mt-5 space-y-1 text-[0.7rem] font-mono text-muted-foreground">
                {e.chips.map((c) => (
                  <div key={c}># {c}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="text-sm text-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            View Entire Portfolio <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {featured.map((p) => (
            <Link
              key={p.title}
              to="/projects"
              className="surface-card overflow-hidden group block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Chip>{p.tag}</Chip>
                <h3 className="mt-3 font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 border-t border-border text-center">
        <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
          Ready to <span className="text-gradient">Accelerate?</span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
          Whether you need a full-scale marketing audit or a custom-built predictive data model,
          I'm ready to help you reach the next level.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shruthiharshiniram2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex px-6 py-3 text-sm font-semibold gap-2 items-center"
          >
            Start a Project <BarChart3 className="size-4" />
          </a>
          <a
            href="https://okay-bronze-bcikomum.edgeone.app/Shruthi%27s_%20Resume_%20Digital_Marketing.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex px-6 py-3 text-sm font-semibold"
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  );
}
