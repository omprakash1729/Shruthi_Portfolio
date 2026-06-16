import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Chip } from "@/components/ui-bits";
import projectErcblm from "@/assets/project-ercblm.jpg";
import projectBioner from "@/assets/project-bioner.jpg";
import projectCrop from "@/assets/project-crop.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shruthi Ram R S" },
      {
        name: "description",
        content:
          "Selected works in NLP, biomedical AI, and applied machine learning by Shruthi Ram R S.",
      },
      { property: "og:title", content: "Projects — Shruthi Ram R S" },
      {
        property: "og:description",
        content: "Engineering intelligence and shaping digital growth — selected works 2026.",
      },
      { property: "og:image", content: projectErcblm },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-12">
        <Eyebrow>Selected Works 2026</Eyebrow>
        <h1 className="mt-5 font-display font-bold tracking-tight text-5xl md:text-7xl leading-[1.02]">
          Engineering <span className="text-gradient">Intelligence.</span>
          <br />
          Shaping Digital Growth.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          I focus on bridging the gap between raw analytical research and intuitive, useful
          interfaces — published, shipped, and replicable.
        </p>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
        <div className="surface-card overflow-hidden grid lg:grid-cols-2">
          <div className="aspect-[4/3] lg:aspect-auto">
            <img
              src={projectErcblm}
              alt="E-RCBLM long-document summarization"
              width={1280}
              height={896}
              className="size-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col">
            <div className="flex flex-wrap gap-2">
              <Chip>Python</Chip>
              <Chip>PyTorch</Chip>
              <Chip>
                <span className="size-1.5 rounded-full bg-primary" /> Scopus Indexed
              </Chip>
            </div>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">
              E-RCBLM: Long-Document Summarization
            </h2>
            <p className="mt-4 text-muted-foreground">
              An abstractive summarization system built on the Longformer Encoder-Decoder (LED)
              model — designed to distill massive datasets into concise, semantically faithful
              summaries while preserving long-range context.
            </p>
            <div className="mt-auto pt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                View Case Study <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Two-up */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid md:grid-cols-2 gap-5">
        <article className="surface-card overflow-hidden">
          <div className="aspect-[16/10]">
            <img
              src={projectBioner}
              alt="Hybrid biomedical NER"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="p-7">
            <div className="flex flex-wrap gap-2">
              <Chip>Scikit-learn</Chip>
              <Chip>
                <span className="size-1.5 rounded-full bg-primary" /> Scopus
              </Chip>
            </div>
            <h3 className="mt-4 font-display font-semibold text-xl">
              Hybrid Biomedical Named Entity Recognition
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Transformer + CRF biomedical entity extraction with consistency-rule repair to
              improve BIO label coherence.
            </p>
            <div className="mt-5 h-0.5 w-12 rounded-full" style={{ background: "var(--gradient-primary)" }} />
          </div>
        </article>

        <article className="surface-card overflow-hidden">
          <div className="aspect-[16/10]">
            <img
              src={projectCrop}
              alt="Climate-based crop recommendation"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="p-7">
            <div className="flex flex-wrap gap-2">
              <Chip>Python</Chip>
              <Chip>Climate Data</Chip>
            </div>
            <h3 className="mt-4 font-display font-semibold text-xl">
              Climate-Based Crop Recommendation
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering sustainable agriculture with predictive analytics that factor soil
              health and localized weather patterns.
            </p>
            <div className="mt-5 h-0.5 w-12 rounded-full" style={{ background: "var(--gradient-primary)" }} />
          </div>
        </article>
      </section>

      {/* Behind + CTA pair */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid lg:grid-cols-3 gap-5">
        <div className="surface-card p-10 lg:col-span-2">
          <h3 className="font-display text-3xl font-bold tracking-tight">
            Behind the Designs: Shaping Experiences
          </h3>
          <p className="mt-4 text-muted-foreground max-w-xl">
            I'm focused on building clean, intuitive interfaces that solve real-world problems.
            Whether it's complex data or simple interactions, my goal is to make the invisible
            visible.
          </p>
        </div>
        <div
          className="rounded-2xl p-10 flex flex-col"
          style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)" }}
        >
          <div className="font-mono text-[0.7rem] uppercase tracking-widest opacity-80">
            Ready to Build?
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold">
            Let's build something meaningful together.
          </h3>
          <a
            href="mailto:shruthiramrs@example.com"
            className="mt-auto pt-6 inline-flex items-center gap-2 self-start rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-card-elevated transition-colors"
          >
            Say Hello <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
