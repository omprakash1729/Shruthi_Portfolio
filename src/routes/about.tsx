import { createFileRoute } from "@tanstack/react-router";
import { Code2, Megaphone, BarChart2, Search, Share2, Mail, Linkedin } from "lucide-react";
import { Eyebrow, Chip } from "@/components/ui-bits";
import dashboardHero from "@/assets/dashboard-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shruthi Ram R S" },
      {
        name: "description",
        content:
          "Engineering growth through data and logic. Capabilities, expertise matrix, and achievements of Shruthi Ram R S.",
      },
      { property: "og:title", content: "About — Shruthi Ram R S" },
      {
        property: "og:description",
        content: "A synthesis of technical prowess in programming and strategic insight in digital marketing.",
      },
    ],
  }),
  component: AboutPage,
});

const achievements = [
  {
    num: "01",
    title: "Digital Marketing Impact",
    body: "Spearheaded SEO and social media campaigns that resulted in a 25% average increase in organic reach and engagement.",
  },
  {
    num: "02",
    title: "Omnichannel Engagement",
    body: "Successfully integrated WhatsApp and Email marketing automation into client workflows, significantly boosting customer retention.",
  },
  {
    num: "03",
    title: "Data-Driven Approach",
    body: "Ranked among the Top 3 students in M.Sc Data Science, leveraging deep analytical skills to inform and optimize marketing strategies.",
  },
  {
    num: "04",
    title: "Scopus-Indexed AI Research",
    body: "Two research papers published in Scopus-indexed journals — showcasing a strong foundation in deep learning and natural language processing.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 md:pt-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Capabilities &amp; Milestones</Eyebrow>
            <h1 className="mt-5 font-display font-bold tracking-tight text-5xl md:text-7xl leading-[1.02]">
              Engineering <span className="text-gradient italic">Growth</span>
              <br />
              through Data
              <br />
              &amp; Logic.
            </h1>
            <p className="mt-6 max-w-lg text-muted-foreground">
              A synthesis of strategic insight in digital marketing and analytical prowess. Driving growth through SEO, Social, Email, and WhatsApp campaigns backed by data.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="surface-card aspect-[5/4] overflow-hidden">
              <img
                src={dashboardHero}
                alt="Analytics dashboard"
                width={1280}
                height={896}
                className="size-full object-cover opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE MATRIX */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Expertise
            <br />
            Matrix
          </h2>
          <div className="eyebrow text-right">
            Technical Stack and
            <br />
            Professional Core
            <br />
            Competencies
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-5">
          <div className="surface-card p-7 lg:col-span-5">
            <div className="size-9 rounded-md bg-primary/10 text-primary flex items-center justify-center">
              <Megaphone className="size-4" />
            </div>
            <h3 className="mt-5 font-display font-semibold text-lg">Digital Marketing</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Strategic brand positioning through search optimization, social media management, and direct communication channels. I focus on ROI-driven campaigns, organic growth loops, and engaging email and WhatsApp sequences.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip>SEO</Chip>
              <Chip>SMM</Chip>
              <Chip>Email</Chip>
              <Chip>WhatsApp</Chip>
            </div>
          </div>

          <div className="surface-card p-7 lg:col-span-3">
            <div className="size-9 rounded-md bg-primary/10 text-primary flex items-center justify-center">
              <BarChart2 className="size-4" />
            </div>
            <h3 className="mt-5 font-display font-semibold text-lg">Data Science</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Using Python and SQL to analyze marketing data, predict trends, and optimize campaign performance.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-5">
            <div className="surface-card p-5 flex flex-col justify-center">
              <div className="font-display font-semibold text-primary">Email</div>
              <p className="text-xs text-muted-foreground mt-1">Lead Nurturing</p>
            </div>
            <div className="surface-card p-5 flex flex-col justify-center">
              <div className="font-display font-semibold text-primary">WA API</div>
              <p className="text-xs text-muted-foreground mt-1">Direct Engagement</p>
            </div>
            <div className="surface-card p-5 flex flex-col justify-center">
              <div className="font-display font-semibold text-primary">SEO</div>
              <p className="text-xs text-muted-foreground mt-1">Organic Reach</p>
            </div>
            <div className="surface-card p-5 flex flex-col justify-center">
              <div className="font-display font-semibold text-primary">SMM</div>
              <p className="text-xs text-muted-foreground mt-1">Brand Presence</p>
            </div>
          </div>

          <div className="surface-card p-7 lg:col-span-12 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-semibold text-lg">Marketing & Analytical Toolkit</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Tools I use to manage campaigns and visualize complex data sets.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Chip><Search className="size-3.5" /> SEMrush</Chip>
              <Chip><Mail className="size-3.5" /> Mailchimp</Chip>
              <Chip><Share2 className="size-3.5" /> WhatsApp API</Chip>
              <Chip>Google Analytics</Chip>
              <Chip>HubSpot</Chip>
              <Chip>Power BI</Chip>
              <Chip>SQL</Chip>
              <Chip>Canva</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Validation &amp;
            <br />
            Achievements
          </h2>
          <div className="mt-8 space-y-6">
            {achievements.map((a) => (
              <div key={a.num} className="flex gap-5 border-b border-border pb-5">
                <div className="font-mono text-xs text-primary pt-1">{a.num}</div>
                <div>
                  <h3 className="font-display font-semibold">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="surface-card aspect-[4/5] overflow-hidden">
            <img
              src={dashboardHero}
              alt="Data visualization"
              className="size-full object-cover opacity-70"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="surface-card p-12 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Ready to start a <span className="text-gradient">Growth</span> project?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Available for strategic digital marketing consulting and data-driven development roles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shruthiharshiniram2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              <Mail className="size-4" /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/shruthi-ram-r-s-a6b7b62b5/"
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
