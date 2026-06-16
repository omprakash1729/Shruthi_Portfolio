import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Search, Database, Briefcase, GraduationCap, Sigma } from "lucide-react";
import { Eyebrow, Chip } from "@/components/ui-bits";
import dashboardHero from "@/assets/dashboard-hero.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Shruthi Ram R S" },
      {
        name: "description",
        content:
          "Professional journey of Shruthi Ram R S — experience across digital marketing internships and data analytics roles.",
      },
      { property: "og:title", content: "Work — Shruthi Ram R S" },
      { property: "og:description", content: "Merging data with strategy — career trajectory and education." },
    ],
  }),
  component: WorkPage,
});

const experience = [
  {
    tag: "Current Role",
    role: "Digital Marketing Intern",
    company: "Aikyne Technologies",
    location: "Chennai · Dec 2025 – Present",
    side: "right" as const,
    bullets: [
      {
        icon: TrendingUp,
        text: "Handle Social Media Management across Instagram, Facebook, LinkedIn, and Google Business Profile.",
      },
      {
        icon: Search,
        text: "Perform SEO optimization via keyword research and content improvements, supporting website visibility.",
      },
    ],
  },
  {
    tag: "Remote",
    role: "Digital Marketing Intern (Part-time)",
    company: "ANTIMARKETED",
    location: "Remote · Dec 2024 – Sep 2025",
    side: "left" as const,
    bullets: [
      {
        icon: TrendingUp,
        text: "Spearheaded SSM campaigns delivering a 25% increase in organic reach across service-based brands.",
      },
      {
        icon: Search,
        text: "Optimized Google Business Profiles and managed Birdeye reputation across multiple locations.",
      },
    ],
  },
  {
    tag: "Data",
    role: "Data Analyst Intern",
    company: "Elevate Labs",
    location: "Remote · Sep 2025 – Oct 2025",
    side: "right" as const,
    bullets: [
      {
        icon: Database,
        text: "Built Power BI / Tableau dashboards to visualize KPIs and surface trends for stakeholders.",
      },
      {
        icon: Briefcase,
        text: "Cleaned and analyzed datasets with Python, Excel, and SQL to improve reporting accuracy.",
      },
    ],
  },
];

function WorkPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 md:pt-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Professional Journey</Eyebrow>
            <h1 className="mt-5 font-display font-bold tracking-tight text-5xl md:text-7xl leading-[1.02]">
              Merging Data
              <br />
              with <span className="text-gradient">Strategy.</span>
            </h1>
            <p className="mt-6 max-w-lg text-muted-foreground">
              A focused career trajectory transitioning from mathematical foundations to data
              science and growth marketing. I build narratives from numbers.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="surface-card aspect-[5/4] overflow-hidden">
              <img
                src={dashboardHero}
                alt="Analytics dashboards"
                width={1280}
                height={896}
                className="size-full object-cover opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
          <div className="eyebrow">2022 — Present</div>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <div key={i} className="grid md:grid-cols-2 md:gap-12 items-start relative">
                <div className={e.side === "left" ? "md:order-1" : "md:order-2"}>
                  <div className="md:text-right text-sm">
                    <div className="eyebrow justify-end md:justify-end">{e.tag}</div>
                    <h3 className="mt-2 font-display text-xl font-semibold">{e.role}</h3>
                    <div className="text-muted-foreground">{e.company}</div>
                    <div className="text-xs font-mono text-muted-foreground mt-1">{e.location}</div>
                  </div>
                </div>
                <div className={e.side === "left" ? "md:order-2" : "md:order-1"}>
                  <div className="surface-card p-6 space-y-3">
                    {e.bullets.map((b, j) => (
                      <div key={j} className="flex gap-3 text-sm text-muted-foreground">
                        <b.icon className="size-4 text-primary mt-0.5 shrink-0" />
                        <p>{b.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-3 size-3 rounded-full bg-primary shadow-[0_0_0_4px_var(--background)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 border-t border-border">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Education</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="surface-card p-7 relative overflow-hidden">
            <Chip>Post Graduate</Chip>
            <h3 className="mt-5 font-display font-semibold text-xl">M.Sc Data Science</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Kalasalingam Academy of Research and Education — specializing in statistical
              modeling, machine learning, and advanced data visualization.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" /> In Progress · Aug 2024 – May 2026
            </div>
            <GraduationCap className="absolute right-5 top-5 size-10 text-muted-foreground/30" />
          </div>
          <div className="surface-card p-7 relative overflow-hidden">
            <Chip>Graduate</Chip>
            <h3 className="mt-5 font-display font-semibold text-xl">B.Sc Mathematics</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              St Xavier's College, Palayamkottai — foundation in pure and applied mathematics,
              the analytical bedrock for data exploration.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
              Completed · Aug 2021 – May 2024
            </div>
            <Sigma className="absolute right-5 top-5 size-10 text-muted-foreground/30" />
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Tech Stack</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Python", "Power BI", "SQL", "SEO Strategy", "SSM", "Google Analytics", "Data Visualization", "Tableau", "SEMrush", "HubSpot"].map(
            (t) => (
              <Chip key={t}>{t}</Chip>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="surface-card p-12 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Let's build something
            <br />
            meaningful together.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Always open to discussing data-driven projects, growth strategies, or innovative
            marketing opportunities.
          </p>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/shruthi-ram-r-s-a6b7b62b5/"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              Reach Out <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
