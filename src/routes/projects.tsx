import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Chip } from "@/components/ui-bits";
import projectErcblm from "@/assets/project-ercblm.jpg";
import projectBioner from "@/assets/project-bioner.jpg";
import projectCrop from "@/assets/project-crop.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

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
          Engineering <span className="text-gradient">Growth.</span>
          <br />
          Data-Backed Strategies.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          I focus on bridging the gap between raw analytical research and impactful digital marketing campaigns — driving organic traffic and boosting conversions.
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
              <Chip>SEO Strategy</Chip>
              <Chip>Content Marketing</Chip>
              <Chip>
                <span className="size-1.5 rounded-full bg-primary" /> +40% Organic Traffic
              </Chip>
            </div>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">
              B2B Organic Traffic Acceleration
            </h2>
            <p className="mt-4 text-muted-foreground">
              A comprehensive SEO and content strategy designed to capture high-intent search queries. Overhauled site architecture, optimized on-page elements, and built authoritative backlinks, resulting in sustained organic growth.
            </p>
            <div className="mt-auto pt-8">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0 text-left font-sans font-semibold">
                    View Case Study <ArrowRight className="size-4" />
                  </button>
                </DialogTrigger>
                <B2BCaseStudyModal />
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Two-up */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid md:grid-cols-2 gap-5">
        <article className="surface-card overflow-hidden flex flex-col">
          <div className="aspect-[16/10]">
            <img
              src={projectBioner}
              alt="Hybrid Biomedical Named Entity Recognition"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="p-7 flex flex-col flex-1">
            <div className="flex flex-wrap gap-2">
              <Chip>NLP</Chip>
              <Chip>Deep Learning</Chip>
              <Chip>Bioinformatics</Chip>
            </div>
            <h3 className="mt-4 font-display font-semibold text-xl">
              Hybrid Biomedical Named Entity Recognition
            </h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1">
              A hybrid BioNER model combining PubMedBERT, a Transformer encoder, and CRF decoding, paired with a BIO consistency rule repair module. Achieved 89.76% F1 score.
            </p>
            <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0 text-left font-sans font-semibold">
                    Read Research Paper <ArrowRight className="size-4" />
                  </button>
                </DialogTrigger>
                <BioNERModal />
              </Dialog>
              <div className="h-0.5 w-12 rounded-full" style={{ background: "var(--gradient-primary)" }} />
            </div>
          </div>
        </article>

        <article className="surface-card overflow-hidden flex flex-col">
          <div className="aspect-[16/10]">
            <img
              src={projectCrop}
              alt="Climate-Based Crop Recommendation System"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="p-7 flex flex-col flex-1">
            <div className="flex flex-wrap gap-2">
              <Chip>Machine Learning</Chip>
              <Chip>Agriculture</Chip>
              <Chip>Python</Chip>
            </div>
            <h3 className="mt-4 font-display font-semibold text-xl">
              Climate-Based Crop Recommendation System
            </h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1">
              A data-driven machine learning system utilizing Logistic Regression to recommend optimal crops based on soil composition and local climate metrics.
            </p>
            <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0 text-left font-sans font-semibold">
                    Read Project Documentation <ArrowRight className="size-4" />
                  </button>
                </DialogTrigger>
                <CropRecommendationModal />
              </Dialog>
              <div className="h-0.5 w-12 rounded-full" style={{ background: "var(--gradient-primary)" }} />
            </div>
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shruthiharshiniram2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-6 inline-flex items-center gap-2 self-start rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-card-elevated transition-colors"
          >
            Say Hello <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

function B2BCaseStudyModal() {
  return (
    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border p-6 md:p-8 rounded-2xl shadow-2xl">
      <DialogHeader className="text-left">
        <div className="text-[0.65rem] font-mono uppercase tracking-widest text-primary mb-2">Growth &amp; Acquisition Case Study</div>
        <DialogTitle className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
          B2B Organic Traffic &amp; Conversion Acceleration
        </DialogTitle>
        <div className="mt-4 border-b border-border pb-4 text-xs md:text-sm text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground text-sm md:text-base font-sans">
            Lead Strategist: Shruthi Ram R S
          </p>
          <p className="font-sans">
            Focus: SEO, Conversational Marketing (AiSensy), and Community Outreach
          </p>
        </div>
      </DialogHeader>

      <Tabs defaultValue="overview" className="w-full mt-6">
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <TabsList className="inline-flex min-w-full md:min-w-0 mb-6 bg-muted/40 p-1 rounded-xl gap-1">
            <TabsTrigger value="overview" className="rounded-lg text-xs md:text-sm">Overview &amp; Context</TabsTrigger>
            <TabsTrigger value="whatsapp" className="rounded-lg text-xs md:text-sm">WhatsApp &amp; BNI Outreach</TabsTrigger>
            <TabsTrigger value="seo" className="rounded-lg text-xs md:text-sm">SEO &amp; Organic Growth</TabsTrigger>
          </TabsList>
        </div>

        {/* TAB 1: Overview & Context */}
        <TabsContent value="overview" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
          <section className="bg-muted/10 p-5 rounded-xl border border-border/50">
            <h4 className="font-display font-bold text-base md:text-lg text-foreground mb-2 font-sans">Campaign Challenge &amp; Strategy</h4>
            <p className="text-xs md:text-sm">
              Faced with a sudden corporate financial crisis, paid customer acquisition budgets were suspended. To keep sales pipelines full and maintain customer acquisition velocity, we shifted away from generic paid ads and focused on high-efficiency organic and relational channels.
            </p>
            <p className="text-xs md:text-sm mt-3">
              By combining long-term search engine authority with short-term direct outbound conversational campaigns, we built a self-sustaining B2B pipeline that delivered high-quality leads with zero media spend.
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">Key Milestones</h4>
            <div className="grid sm:grid-cols-2 gap-4 mt-2 font-sans">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Demo Booking Rate Boost</h5>
                <p className="text-xs text-muted-foreground mt-1">Leveraged direct messaging workflows to engage decision-makers and dramatically scale product demo bookings.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Conversational CRM Setup</h5>
                <p className="text-xs text-muted-foreground mt-1">Deployed AiSensy API integration to coordinate outreach, ensure high-fidelity delivery, and track replies.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Zero-Budget Acquisition</h5>
                <p className="text-xs text-muted-foreground mt-1">Substituted expensive paid ad sequences with referral networks and organic search silos.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">+40% Organic Footprint</h5>
                <p className="text-xs text-muted-foreground mt-1">Optimized site core structure and keyword targeting to consistently rank on high-intent search queries.</p>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* TAB 2: WhatsApp & BNI Outreach */}
        <TabsContent value="whatsapp" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans">
          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">Leveraging Conversational Marketing (AiSensy)</h4>
            <p className="text-xs md:text-sm">
              During the company's financial crisis, cold emails and paid search yielded diminishing returns. To solve this, we implemented direct conversational outreach using <strong>AiSensy</strong> (WhatsApp Business API platform). We designed custom sequence flows, automated trigger templates, and reply-based follow-ups to maintain highly personal communication scales.
            </p>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">Targeting BNI Community Members</h4>
            <p className="text-xs md:text-sm">
              Instead of broad targeting, we focused specifically on the <strong>BNI (Business Network International) community members</strong>. BNI members represent a highly active group of business owners, founders, and decision-makers who thrive on trusted networks and referrals:
            </p>
            <ul className="list-disc list-inside text-xs md:text-sm mt-2 space-y-1.5 font-sans">
              <li>Created specialized value propositions addressing BNI members' unique business growth bottlenecks.</li>
              <li>Used WhatsApp sequences to share immediate case studies and invite them to exclusive product walkthroughs.</li>
              <li>Significantly improved trust signals by referencing localized BNI chapters, leading to a massive increase in response and conversion rates.</li>
            </ul>
          </section>

          <section className="p-4 rounded-xl border border-border bg-primary/5 font-sans">
            <h5 className="font-semibold text-foreground text-sm mb-1 font-sans">Impact &amp; Results:</h5>
            <p className="text-xs text-muted-foreground font-sans">
              By shifting the acquisition focus to BNI channels via AiSensy, we boosted the overall demo booking rate and successfully steered the sales pipeline through the company's financial crunch.
            </p>
          </section>
        </TabsContent>

        {/* TAB 3: SEO & Organic Growth */}
        <TabsContent value="seo" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans">
          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">Technical SEO &amp; Site Architecture</h4>
            <p className="text-xs md:text-sm">
              Parallel to conversational outreach, we strengthened our organic search foundation to drive long-term inbound leads:
            </p>
            <ul className="list-disc list-inside text-xs md:text-sm space-y-1.5 font-sans">
              <li>Completed a comprehensive technical audit, fixing crawl errors, duplicate tags, and schema validation.</li>
              <li>Structured pages into clean content hubs (topic clusters) that established high topical authority.</li>
              <li>Built reliable backlink streams from industry blogs to solidify keyword rankings.</li>
            </ul>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">Outcome</h4>
            <p className="text-xs md:text-sm">
              The organic optimization resulted in a <strong>+40% increase in B2B organic traffic</strong>, creating a consistent inflow of organic leads without ongoing ad budget requirements.
            </p>
          </section>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}

function BioNERModal() {
  return (
    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border p-6 md:p-8 rounded-2xl shadow-2xl">
      <DialogHeader className="text-left">
        <div className="text-[0.65rem] font-mono uppercase tracking-widest text-primary mb-2">Master of Science in Data Science — Project Report</div>
        <DialogTitle className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
          Hybrid Biomedical Named Entity Recognition Using PubMedBERT, Transformer-CRF and Consistency Rule Repair
        </DialogTitle>
        <div className="mt-4 border-b border-border pb-4 text-xs md:text-sm text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground text-sm md:text-base">
            Author: Shruthi Ram R S <span className="text-muted-foreground font-normal">(9924146003)</span>
          </p>
          <p>
            Project Guide: Mr. M. Barath Kesavan, Assistant Professor
          </p>
          <p className="text-[0.75rem] md:text-xs text-muted-foreground/80 font-sans">
            Department of Computer Science and Information Technology, School of Computing, Kalasalingam Academy of Research and Education (Deemed to be University), Krishnankoil, India
          </p>
          <p className="font-mono text-[0.7rem] pt-1">
            Corresponding: <a href="mailto:shruthiharshiniram2003@gmail.com" className="text-primary hover:underline">shruthiharshiniram2003@gmail.com</a> | <a href="mailto:m.barathkesavan@gmail.com" className="text-primary hover:underline">m.barathkesavan@gmail.com</a>
          </p>
        </div>
      </DialogHeader>

      <Tabs defaultValue="abstract" className="w-full mt-6">
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <TabsList className="inline-flex min-w-full md:min-w-0 mb-6 bg-muted/40 p-1 rounded-xl gap-1">
            <TabsTrigger value="abstract" className="rounded-lg text-xs md:text-sm">Abstract &amp; Intro</TabsTrigger>
            <TabsTrigger value="methodology" className="rounded-lg text-xs md:text-sm">Methodology &amp; Survey</TabsTrigger>
            <TabsTrigger value="implementation" className="rounded-lg text-xs md:text-sm">Implementation</TabsTrigger>
            <TabsTrigger value="results" className="rounded-lg text-xs md:text-sm">Results &amp; Future</TabsTrigger>
          </TabsList>
        </div>

        {/* TAB 1: Abstract & Intro */}
        <TabsContent value="abstract" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
          <section className="bg-muted/10 p-5 rounded-xl border border-border/50">
            <h4 className="font-display font-bold text-base md:text-lg text-foreground mb-2">Abstract</h4>
            <p className="italic text-xs md:text-sm">
              Biomedical Named Entity Recognition (BioNER) is an important task in Natural Language Processing (NLP) that focuses on identifying biomedical entities such as genes, diseases, proteins, and chemicals from biomedical literature. Due to the rapid growth of biomedical publications and the complexity of medical terminology, extracting meaningful information manually has become difficult and time-consuming. Traditional machine learning approaches often fail to capture contextual relationships and may produce inconsistent predictions while processing biomedical text.
            </p>
            <p className="italic text-xs md:text-sm mt-3">
              This project proposes a hybrid biomedical named entity recognition system using PubMedBERT, Transformer encoder layers, Conditional Random Field (CRF) decoding, and BIO consistency rule repair to improve biomedical entity extraction accuracy. PubMedBERT is used to generate contextual embeddings specifically trained on biomedical literature, helping the model better understand domain-specific biomedical terminology. The transformer encoder captures contextual dependencies between tokens, while the CRF layer ensures valid and structured BIO tag sequence prediction.
            </p>
            <p className="italic text-xs md:text-sm mt-3">
              In addition, a BIO consistency rule repair mechanism is implemented to correct invalid tag sequences and improve entity boundary detection. The proposed model is evaluated using benchmark biomedical datasets including JNLPBA, BC2GM, NCBI Disease, and BC5CDR. Experimental results demonstrate that the proposed hybrid model achieves improved Precision, Recall, and F1-score compared to several existing BioNER approaches. The model achieved an overall F1-score of 89.76%, showing its effectiveness in biomedical entity recognition.
            </p>
            <p className="italic text-xs md:text-sm mt-3">
              A Gradio-based web application is also developed to provide real-time biomedical entity prediction through an interactive and user-friendly interface. The proposed system can support biomedical text mining, healthcare information retrieval, clinical document analysis, and medical research applications by providing accurate and reliable biomedical entity recognition.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 items-center">
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-foreground mr-1">Key Abbreviations:</span>
              <Chip className="text-[0.65rem]">BioNER</Chip>
              <Chip className="text-[0.65rem]">PubMedBERT</Chip>
              <Chip className="text-[0.65rem]">CRF</Chip>
              <Chip className="text-[0.65rem]">BIO Tagging</Chip>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">1.1 Overview</h4>
            <p>
              Biomedical Named Entity Recognition (BioNER) is an important application of Natural Language Processing (NLP) that focuses on identifying biomedical entities such as genes, diseases, proteins, and chemicals from biomedical literature. With the rapid growth of biomedical publications and clinical documents, extracting meaningful information manually has become increasingly difficult and time-consuming. Therefore, automated biomedical entity recognition systems are required to improve biomedical text analysis and healthcare information retrieval.
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">1.2 Challenges</h4>
            <div className="grid sm:grid-cols-2 gap-4 mt-2 font-sans">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Complex Biomedical Terminology</h5>
                <p className="text-xs text-muted-foreground mt-1">Biomedical literature contains complex medical terms, abbreviations, chemical names, gene symbols, and disease-related terminology that traditional ML struggles to parse.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Entity Boundary Ambiguity</h5>
                <p className="text-xs text-muted-foreground mt-1">Biomedical entities often consist of multiple words and nested terms, making it hard to identify exact start/end tokens.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Contextual Ambiguity</h5>
                <p className="text-xs text-muted-foreground mt-1">The same biomedical term can have completely different meanings depending on surrounding sentence structures.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Sequence Labeling Consistency</h5>
                <p className="text-xs text-muted-foreground mt-1">Predictions may yield invalid tag transitions (e.g. predicting inside label 'I-GENE' without a preceding beginning label 'B-GENE').</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">1.3 Motivation</h4>
            <p>
              The motivation behind this project is to develop an accurate and reliable biomedical named entity recognition system using transformer-based contextual embeddings combined with structured sequence prediction techniques. The proposed hybrid model integrates PubMedBERT, Transformer encoder layers, Conditional Random Field (CRF) decoding, and BIO consistency rule repair to improve biomedical entity extraction and prediction consistency.
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">1.4 Objectives</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>To preprocess biomedical text using tokenization, BIO tagging, and sequence alignment techniques.</li>
              <li>To use PubMedBERT and CRF for accurate biomedical entity recognition and structured sequence prediction.</li>
              <li>To implement BIO consistency rule repair for correcting invalid BIO tag sequences.</li>
              <li>To evaluate the proposed model using benchmark biomedical datasets such as JNLPBA, BC2GM, BC5CDR, and NCBI Disease.</li>
              <li>To develop a Gradio-based web application for real-time biomedical entity prediction and visualization.</li>
            </ul>
          </section>
        </TabsContent>

        {/* TAB 2: Survey & Methodology */}
        <TabsContent value="methodology" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">2.1 Existing Methods &amp; Limitations</h4>
            <p>
              Earlier BioNER systems mainly used rule-based approaches and traditional machine learning algorithms such as Hidden Markov Models (HMM), Support Vector Machines (SVM), and Conditional Random Fields (CRF) for biomedical entity extraction. These methods depended heavily on handcrafted features and domain-specific dictionaries.
            </p>
            <div className="p-4 rounded-xl border border-border bg-destructive/5 mt-2 font-sans">
              <h5 className="font-semibold text-foreground text-sm mb-1">Limitations of Existing Methods:</h5>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>Heavy reliance on handcrafted features and manually compiled dictionaries.</li>
                <li>BiLSTM-CRF models struggle with long-range semantic dependencies in medical contexts.</li>
                <li>Transformer-based architectures still suffer from predicting invalid tag boundaries (invalid BIO structures).</li>
                <li>Difficulty generalizing across different annotation styles and biomedical databases.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">3.1 Proposed Method</h4>
            <p>
              The proposed project introduces a hybrid Biomedical Named Entity Recognition (BioNER) system using PubMedBERT, Transformer encoder layers, Conditional Random Field (CRF) decoding, and BIO consistency rule repair for accurate biomedical entity extraction.
            </p>
            <div className="border-l-2 border-primary pl-4 py-1 space-y-2">
              <h5 className="font-semibold text-foreground text-sm">Key Architectural Advantages:</h5>
              <ol className="list-decimal list-inside space-y-1 text-xs text-muted-foreground">
                <li><strong>Contextual Understanding</strong>: PubMedBERT generates domain-specific subword embeddings.</li>
                <li><strong>Semantic Capture</strong>: Transformer encoder layers capture long-range contextual relationships.</li>
                <li><strong>Structured Prediction</strong>: A CRF layer enforces sequence-level constraints over predicted tags.</li>
                <li><strong>BIO Rule Repair</strong>: A post-processing module resolves structural annotation violations in tagging sequences.</li>
              </ol>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">3.2 System Architecture &amp; Workflow</h4>
            <p>
              The architecture integrates PubMedBERT with both CRF and Transformer encoder layers. Tokenized subwords feed into PubMedBERT to fetch semantic features, followed by self-attention combiners to contextually represent tokens. Decoder CRF generates sequence-optimal paths, and BIO consistency rule repair patches structural boundary gaps.
            </p>
          </section>
        </TabsContent>

        {/* TAB 3: Implementation Details */}
        <TabsContent value="implementation" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans">
          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">4.1 Dataset &amp; Preprocessing</h4>
            <p>We evaluate across four benchmark biomedical datasets, summarized below:</p>
            <div className="overflow-x-auto rounded-lg border border-border mt-2 bg-background/50">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Dataset</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Main Entity Type</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Biomedical Entities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3 font-medium">JNLPBA</td>
                    <td className="py-2 px-3">Protein / Cell Type</td>
                    <td className="py-2 px-3">Protein, DNA, RNA, Cell Type</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">BC2GM</td>
                    <td className="py-2 px-3">Gene Mention</td>
                    <td className="py-2 px-3">Genes</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">BC5CDR</td>
                    <td className="py-2 px-3">Chemical &amp; Disease</td>
                    <td className="py-2 px-3">Chemicals, Diseases</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">NCBI Disease</td>
                    <td className="py-2 px-3">Disease Recognition</td>
                    <td className="py-2 px-3">Diseases</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">4.2 Model Configurations</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">PubMedBERT Features</h5>
                <ul className="list-disc list-inside text-xs text-muted-foreground mt-2 space-y-1">
                  <li>Domain-specific vocabulary pretraining</li>
                  <li>Trained on full-text PubMed literature</li>
                  <li>Generates high-fidelity bio-medical embeddings</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">AdamW Training Parameters</h5>
                <ul className="list-disc list-inside text-xs text-muted-foreground mt-2 space-y-1">
                  <li>Learning Rate: 3e-5</li>
                  <li>Batch Size: 16</li>
                  <li>Optimizer: AdamW (Weight Decay)</li>
                  <li>Epochs: 3 (PyTorch implementation)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">4.3 BIO Consistency Rule Repair</h4>
            <p>
              In sequence labeling, models can output logically invalid tag transitions, such as predicting an <code>I-GENE</code> (Inside) directly after an <code>O</code> (Outside) tag. The repair module scans generated label sequences and automatically corrects them:
            </p>
            <div className="bg-muted/30 p-3 rounded-lg border border-border font-mono text-xs mt-2">
              <span className="text-destructive">Invalid Input:</span> O  I-GENE  I-GENE  O<br />
              <span className="text-primary">Corrected:</span>     O  B-GENE  I-GENE  O
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This ensures consistent boundaries and improves F1 evaluation indices.
            </p>
          </section>
        </TabsContent>

        {/* TAB 4: Results & References */}
        <TabsContent value="results" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans">
          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">5.1 Performance Metrics</h4>
            <p>The proposed model is evaluated across standard datasets below:</p>
            <div className="overflow-x-auto rounded-lg border border-border mt-2 bg-background/50">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Dataset</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Precision (%)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">Recall (%)</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">F1-score (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3 font-medium">BC2GM</td>
                    <td className="py-2 px-3">90.21</td>
                    <td className="py-2 px-3">88.75</td>
                    <td className="py-2 px-3 text-primary font-bold">89.47</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">NCBI Disease</td>
                    <td className="py-2 px-3">88.90</td>
                    <td className="py-2 px-3">90.15</td>
                    <td className="py-2 px-3 text-primary font-bold">89.52</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">JNLPBA</td>
                    <td className="py-2 px-3">88.35</td>
                    <td className="py-2 px-3">88.10</td>
                    <td className="py-2 px-3 text-primary font-bold">88.22</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">BC5CDR</td>
                    <td className="py-2 px-3">89.10</td>
                    <td className="py-2 px-3">89.45</td>
                    <td className="py-2 px-3 text-primary font-bold">89.27</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground font-sans">5.2 Comparative Analysis</h4>
            <p>Overall F1-score comparison with other baseline deep models:</p>
            <div className="overflow-x-auto rounded-lg border border-border mt-2 bg-background/50">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="py-2.5 px-3 font-semibold text-foreground">Model</th>
                    <th className="py-2.5 px-3 font-semibold text-foreground">F1-score (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3">BioBERT</td>
                    <td className="py-2 px-3">86.40</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">SciBERT</td>
                    <td className="py-2 px-3">87.10</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">BioMegatron</td>
                    <td className="py-2 px-3">88.30</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">BART</td>
                    <td className="py-2 px-3">88.65</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="py-2 px-3 font-semibold text-foreground">Proposed Hybrid BioNER Model</td>
                    <td className="py-2 px-3 font-bold text-primary">89.76</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">6.1 Major Findings &amp; Future Enhancement</h4>
            <p>
              The hybrid system effectively outperformed general models like BioBERT and SciBERT by scoring <strong>89.76% F1</strong>, particularly due to PubMedBERT's domain pretraining combined with a structural CRF decoding. In the future, we aim to extend the model to extract complex entities like symptoms, clinical procedures, and dosages, as well as deploy the service onto high-throughput servers.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border font-sans">
            <h4 className="font-display font-bold text-base text-foreground font-sans">References</h4>
            <ol className="list-decimal list-inside space-y-1 text-xs text-muted-foreground">
              <li>S. Dash, et al. “A Clinical Named Entity Recognition Model Using Pretrained Word Embeddings,” Decision Analytics, 2024.</li>
              <li>J. Devlin, et al. “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding,” NAACL, 2019.</li>
              <li>J. Lee, et al. “BioBERT: A Pre-trained Biomedical Language Representation Model,” Bioinformatics, 2020.</li>
              <li>I. Beltagy, et al. “SciBERT: A Pretrained Language Model for Scientific Text,” EMNLP, 2019.</li>
              <li>Y. Gu, et al. “Domain-Specific Language Model Pretraining for Biomedical NLP,” ACM CH, 2021.</li>
            </ol>
          </section>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}

function CropRecommendationModal() {
  return (
    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border p-6 md:p-8 rounded-2xl shadow-2xl">
      <DialogHeader className="text-left">
        <div className="text-[0.65rem] font-mono uppercase tracking-widest text-primary mb-2">Academic Project Report</div>
        <DialogTitle className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
          Climate-Based Crop Recommendation System
        </DialogTitle>
        <div className="mt-4 border-b border-border pb-4 text-xs md:text-sm text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground text-sm md:text-base">
            Author: Shruthi Ram R S <span className="text-muted-foreground font-normal">(9924146003)</span>
          </p>
          <p>
            Institution: Kalasalingam Academy of Research and Education, Krishnankoil, India
          </p>
          <p className="font-mono text-[0.7rem] pt-1">
            Contact: <a href="mailto:shruthiharshiniram2003@gmail.com" className="text-primary hover:underline">shruthiharshiniram2003@gmail.com</a>
          </p>
        </div>
      </DialogHeader>

      <Tabs defaultValue="intro-lit" className="w-full mt-6">
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <TabsList className="inline-flex min-w-full md:min-w-0 mb-6 bg-muted/40 p-1 rounded-xl gap-1">
            <TabsTrigger value="intro-lit" className="rounded-lg text-xs md:text-sm">1-3. Introduction &amp; Lit</TabsTrigger>
            <TabsTrigger value="analysis-design" className="rounded-lg text-xs md:text-sm">4-6. Analysis &amp; Architecture</TabsTrigger>
            <TabsTrigger value="implementation-setup" className="rounded-lg text-xs md:text-sm">7-8. Setup &amp; Stack</TabsTrigger>
            <TabsTrigger value="ui-experience" className="rounded-lg text-xs md:text-sm">9. UI &amp; Experience</TabsTrigger>
            <TabsTrigger value="testing-results" className="rounded-lg text-xs md:text-sm">10-13. Testing &amp; Results</TabsTrigger>
          </TabsList>
        </div>

        {/* TAB 1: Introduction, Domain & Literature Review */}
        <TabsContent value="intro-lit" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
          <section className="bg-muted/10 p-5 rounded-xl border border-border/50">
            <h4 className="font-display font-bold text-base md:text-lg text-foreground mb-2">1.1 Project Overview</h4>
            <p className="text-xs md:text-sm">
              Agriculture is essential to both economic growth and global food security. However, crop productivity and sustainability are greatly impacted by climate fluctuation. A Climate-Based Crop Recommendation System uses data-driven insights to help farmers choose crops that are best suited to the soil type, climate, and resource availability of their area. With the help of this technology, farmers may maximize productivity, reduce environmental hazards, and make well-informed decisions.
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">1.2 Objectives &amp; Key Features</h4>
            <div className="grid sm:grid-cols-2 gap-4 mt-2 font-sans">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Climate Adaptation</h5>
                <p className="text-xs text-muted-foreground mt-1">Makes use of historical and current climate data (temperature, humidity, rainfall) to ensure crop suggestions align with local environments.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Soil Compatibility</h5>
                <p className="text-xs text-muted-foreground mt-1">Incorporates key chemical characteristics of the soil including Nitrogen (N), Phosphorus (P), Potassium (K), and pH levels.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Data-Driven Insights</h5>
                <p className="text-xs text-muted-foreground mt-1">Utilizes trained machine learning models to forecast crop suitability and evaluate multi-dimensional data patterns.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">User-Focused Design</h5>
                <p className="text-xs text-muted-foreground mt-1">Provides farmers and agricultural stakeholders with an easy-to-use, minimalist client interface to access advice.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground">2.1 Significance &amp; Application Areas</h4>
            <p className="text-xs md:text-sm">
              The Climate-Based Crop Recommendation System tackles critical challenges in agriculture by:
            </p>
            <ul className="list-disc list-inside text-xs md:text-sm space-y-1 text-muted-foreground">
              <li>Increasing crop yield by leveraging analytical insights derived from environmental data.</li>
              <li>Minimizing the waste of resources (fertilizers, water, labor) by suggesting contextually ideal crops.</li>
              <li>Optimizing agricultural land usage to foster sustainable farming methods.</li>
            </ul>
            <p className="text-xs md:text-sm mt-3">
              Application fields span:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2 text-xs">
              <div className="p-3 bg-muted/20 border border-border rounded-lg text-center">
                <span className="font-semibold text-foreground block">Precision Agriculture</span>
              </div>
              <div className="p-3 bg-muted/20 border border-border rounded-lg text-center">
                <span className="font-semibold text-foreground block">Extension Services</span>
              </div>
              <div className="p-3 bg-muted/20 border border-border rounded-lg text-center">
                <span className="font-semibold text-foreground block">Agri-tech Startups</span>
              </div>
              <div className="p-3 bg-muted/20 border border-border rounded-lg text-center">
                <span className="font-semibold text-foreground block">Government Policies</span>
              </div>
              <div className="p-3 bg-muted/20 border border-border rounded-lg text-center col-span-2 sm:col-span-1">
                <span className="font-semibold text-foreground block">Educational Training</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">2.2 Current Trends &amp; Future Scope</h4>
            <div className="grid sm:grid-cols-2 gap-4 mt-2 font-sans text-xs">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm mb-1">Current Trends</h5>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Big Data Analytics</strong>: Real-time data overlays on historical crop patterns.</li>
                  <li><strong>Sustainability</strong>: Focusing on water footprints and carbon-resilience.</li>
                  <li><strong>Cloud-Based Systems</strong>: Real-time cloud storage and recommendation access.</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm mb-1">Future Scope</h5>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Deep Learning</strong>: Capturing complex, dynamic environmental patterns.</li>
                  <li><strong>Drone Automation</strong>: Live, automated field and moisture scanning.</li>
                  <li><strong>Pest &amp; Disease Spotting</strong>: Early detection via computer vision.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground">3.1 Literature Review: Previous Works</h4>
            <div className="space-y-3 mt-2 text-xs md:text-sm">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <span className="font-semibold text-foreground block">Integration of Climate Data APIs</span>
                <p className="text-xs text-muted-foreground mt-1">
                  Retrieval of local ambient temperature, relative humidity, and precipitation via OpenWeather or WeatherStack APIs to generate real-time recommendations.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <span className="font-semibold text-foreground block">Deep Learning Frameworks</span>
                <p className="text-xs text-muted-foreground mt-1">
                  Leveraging Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN) to process multi-variable geographic datasets and historical weather sequences.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <span className="font-semibold text-foreground block">GIS-Based Spatial Systems</span>
                <p className="text-xs text-muted-foreground mt-1">
                  Geographic Information Systems mapping soil properties and climates across topographic regions, providing localized suggestions.
                </p>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* TAB 2: System Analysis & Architecture */}
        <TabsContent value="analysis-design" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">4.1 Problem Statement</h4>
            <p className="text-xs md:text-sm">
              Shifting climatic trends, lack of accessible soil-testing facilities, and insufficient weather data make crop selection difficult for farmers, causing financial loss. The project addresses this by building an interactive web application that takes in N, P, K, soil pH, temperature, humidity, and rainfall to recommend crops suitable for specific fields.
            </p>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground">4.2 Requirement Analysis</h4>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm mb-2">Functional Requirements</h5>
                <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                  <li><strong>Data Collection</strong>: Parsing soil (N, P, K, pH) and climate parameters.</li>
                  <li><strong>Model Training</strong>: Classifying parameters using supervised ML models.</li>
                  <li><strong>Webpage Interface</strong>: Form inputs and dynamic suggestion displays.</li>
                  <li><strong>Data Preprocessing</strong>: Cleansing and normalization routines.</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm mb-2">Non-Functional Requirements</h5>
                <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                  <li><strong>Usability</strong>: Minimal, simple design for non-technical users.</li>
                  <li><strong>Performance</strong>: Low latency response (under 50ms prediction).</li>
                  <li><strong>Scalability</strong>: Easy extension to handle additional databases.</li>
                  <li><strong>Accuracy</strong>: High training accuracy to prevent wrong recommendations.</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl border border-border bg-background/30 text-xs">
              <span className="font-semibold text-foreground block mb-2">System HW &amp; SW Specifications:</span>
              <ul className="grid grid-cols-2 gap-2 font-mono">
                <li><strong>Language</strong>: Python</li>
                <li><strong>Web Framework</strong>: Flask / Streamlit</li>
                <li><strong>Libraries</strong>: Pandas, NumPy, Scikit-learn, Pickle</li>
                <li><strong>Hardware Min.</strong>: Dual-core CPU, 4GB RAM</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">5.1 Proposed System Overview</h4>
            <p className="text-xs md:text-sm">
              The proposed web-based application utilizes a machine learning classifier trained on agricultural datasets instead of external API dependencies. Users input soil compositions and climate data to predict the best-suited crop.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mt-2 font-sans">
              <div className="p-3 bg-muted/20 border border-border rounded-lg">
                <span className="block font-bold text-foreground text-xs">Nitrogen (N)</span>
                <span className="text-[10px] text-muted-foreground">Leaf Health</span>
              </div>
              <div className="p-3 bg-muted/20 border border-border rounded-lg">
                <span className="block font-bold text-foreground text-xs">Phosphorus (P)</span>
                <span className="text-[10px] text-muted-foreground">Roots/Flowers</span>
              </div>
              <div className="p-3 bg-muted/20 border border-border rounded-lg">
                <span className="block font-bold text-foreground text-xs">Potassium (K)</span>
                <span className="text-[10px] text-muted-foreground">Disease Resist</span>
              </div>
              <div className="p-3 bg-muted/20 border border-border rounded-lg">
                <span className="block font-bold text-foreground text-xs">Temperature</span>
                <span className="text-[10px] text-muted-foreground">Climatic Growth</span>
              </div>
              <div className="p-3 bg-muted/20 border border-border rounded-lg col-span-2 sm:col-span-1">
                <span className="block font-bold text-foreground text-xs">Rainfall</span>
                <span className="text-[10px] text-muted-foreground">Water Input</span>
              </div>
            </div>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground">6.1 System Architecture Flow</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              A comprehensive view of data flow from client inputs to serialized ML output generation:
            </p>
            
            <div className="mt-2 p-6 rounded-xl border border-border bg-background/50 flex flex-col items-center gap-4">
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-2xl gap-4">
                {/* Inputs */}
                <div className="flex flex-col items-center p-3 rounded-lg border border-border bg-muted/20 w-36 text-center shadow-sm">
                  <span className="text-xs font-bold text-foreground">User Inputs</span>
                  <span className="text-[9px] text-muted-foreground mt-1">N, P, K, pH, Temp, Hum, Rain</span>
                </div>
                {/* Arrow */}
                <div className="rotate-90 md:rotate-0 text-primary">→</div>
                {/* Web Interface */}
                <div className="flex flex-col items-center p-3 rounded-lg border border-border bg-muted/20 w-36 text-center shadow-sm">
                  <span className="text-xs font-bold text-foreground">Web Interface</span>
                  <span className="text-[9px] text-muted-foreground mt-1">HTML, CSS, JS Front-end</span>
                </div>
                {/* Arrow */}
                <div className="rotate-90 md:rotate-0 text-primary">→</div>
                {/* Flask Backend */}
                <div className="flex flex-col items-center p-3 rounded-lg border border-border bg-muted/20 w-36 text-center shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold text-foreground">Flask Backend</span>
                  <span className="text-[9px] text-muted-foreground mt-1">Python server logic</span>
                </div>
                {/* Arrow */}
                <div className="rotate-90 md:rotate-0 text-primary">→</div>
                {/* ML Model */}
                <div className="flex flex-col items-center p-3 rounded-lg border border-primary/30 bg-primary/10 w-36 text-center shadow-md">
                  <span className="text-xs font-bold text-primary">ML Prediction</span>
                  <span className="text-[9px] text-muted-foreground mt-1">Unpickled Model (.pkl)</span>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* TAB 3: Technical Stack & Software Setup */}
        <TabsContent value="implementation-setup" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans">
          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">7.1 Technical Stack Details</h4>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-xs font-mono text-primary uppercase">Frontend Interface</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Developed with standard <strong>HTML5, CSS3, and JavaScript</strong> to build a responsive data-entry form with input verification alerts.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-xs font-mono text-primary uppercase">Backend Framework</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Built on <strong>Flask (Python)</strong> to serve static files, parse POST request data payloads, and communicate with the ML pipeline.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-xs font-mono text-primary uppercase">Machine Learning Model</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Utilizes <strong>Scikit-learn Logistic Regression</strong> for classification, yielding reliable multiclass crop predictions.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-xs font-mono text-primary uppercase">Model Serialization</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Serialized using Python's <strong>Pickle</strong> module to save trained weights and import them into production routes.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground">8.1 Development Environment &amp; Setup Process</h4>
            
            <div className="space-y-4 text-xs md:text-sm">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <span className="font-bold text-foreground block">1. Library Installation</span>
                <p className="text-xs text-muted-foreground mt-1">Install required Python dependencies:</p>
                <div className="bg-muted/40 p-2.5 rounded-lg border border-border font-mono text-[11px] text-foreground mt-2 overflow-x-auto">
                  pip install pandas numpy scikit-learn flask pickle4
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-background/30">
                <span className="font-bold text-foreground block">2. Model Training &amp; Export</span>
                <p className="text-xs text-muted-foreground mt-1">
                  Read dataset, clean missing values, split data using <code>train_test_split</code>, train the Logistic Regression classifier, and dump to disk:
                </p>
                <div className="bg-muted/40 p-2.5 rounded-lg border border-border font-mono text-[11px] text-foreground mt-2 overflow-x-auto">
                  {`import pickle\nfrom sklearn.linear_model import LogisticRegression\n\n# Train model\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\n# Save model\nwith open('model.pkl', 'wb') as f:\n    pickle.dump(model, f)`}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-background/30">
                <span className="font-bold text-foreground block">3. Backend server configuration</span>
                <p className="text-xs text-muted-foreground mt-1">
                  Load model in Flask server, listen to HTTP requests, and predict:
                </p>
                <div className="bg-muted/40 p-2.5 rounded-lg border border-border font-mono text-[11px] text-foreground mt-2 overflow-x-auto">
                  {`with open('model.pkl', 'rb') as f:\n    model = pickle.load(f)\n\n@app.route('/predict', methods=['POST'])\ndef predict():\n    data = request.get_json()\n    prediction = model.predict([data['features']])\n    return jsonify({'crop': prediction[0]})`}
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* TAB 4: User Interface Design */}
        <TabsContent value="ui-experience" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans">
          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground">9.1 User Interface Design &amp; Experience</h4>
            <p className="text-xs md:text-sm">
              The interface is tailored to farmers and extension workers, maximizing clarity, responsiveness, and accessibility:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Dashboard Homepage</h5>
                <p className="text-xs text-muted-foreground mt-1">A welcoming homepage that explains the system's objective, with simple navigation links to input forms and insights.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Interactive Input Form</h5>
                <p className="text-xs text-muted-foreground mt-1">Fields for Nitrogen, Phosphorus, Potassium, Soil pH, Temperature, Humidity, and Rainfall with helpful placeholder bounds.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Suggestion Results Page</h5>
                <p className="text-xs text-muted-foreground mt-1">Presents the recommended crop clearly with graphical charts mapping user input values relative to optimal crop needs.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <h5 className="font-semibold text-foreground text-sm">Responsive Mobile Design</h5>
                <p className="text-xs text-muted-foreground mt-1">Adapts dynamically to smartphones, tablets, and desktop displays, supporting on-field farmers using mobile viewports.</p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl border border-border bg-primary/5">
              <h5 className="font-semibold text-foreground text-sm mb-1">Theme &amp; Accessibility Priorities:</h5>
              <p className="text-xs text-muted-foreground">
                Follows a minimalist theme using neutral tones with green highlights to symbolize agriculture. Font scaling and touch-target sizes are optimized to ensure legibility and ease of use in outdoor farming conditions.
              </p>
            </div>
          </section>
        </TabsContent>

        {/* TAB 5: Testing, Validation & Findings */}
        <TabsContent value="testing-results" className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans">
          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">10.1 &amp; 10.2 Testing, Validation &amp; Verification</h4>
            <div className="space-y-3 mt-2 text-xs md:text-sm">
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <span className="font-semibold text-foreground block">Testing Strategies</span>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong>Unit testing</strong> verifies numerical boundary rules (e.g. soil pH must remain in [0, 14], N/P/K cannot be negative). <strong>Integration testing</strong> validates JSON payload transfer between frontend fetch calls and backend endpoints.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background/30">
                <span className="font-semibold text-foreground block">Validation &amp; Verification</span>
                <p className="text-xs text-muted-foreground mt-1">
                  Cross-validated utilizing a <code>train_test_split</code> validation scheme on benchmark climate datasets. Verification checks that output suggestions align with agricultural recommendations for identical chemical contexts.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 font-sans">
            <h4 className="font-display font-bold text-lg text-foreground">11.1 &amp; 11.2 Performance Analysis &amp; User Feedback</h4>
            <p className="text-xs md:text-sm">
              Due to its lightweight footprint, the Logistic Regression model completes inference tasks in under 15ms. Test runs show high predictive consistency on soil profiles. Extension agents and farmers note that the system provides fast responses and displays information clearly.
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-display font-bold text-lg text-foreground">13.1 Summary of Key Findings</h4>
            <p className="text-xs md:text-sm">
              Soil parameters (specifically Nitrogen and pH) and local climate factors (specifically Rainfall and Temperature) serve as powerful predictors for crop suitability classification. Serializing the model as a pickled object and serving it through Flask provides low-overhead deployment.
            </p>
          </section>

          <section className="space-y-3 p-4 rounded-xl border border-border bg-primary/5">
            <h5 className="font-semibold text-foreground text-sm mb-1">13.2 Recommendations &amp; Future Work</h5>
            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
              <li>Integrate real-time climate data APIs (like OpenWeather) to automatically pull local weather conditions based on user location.</li>
              <li>Implement advanced Deep Learning networks to handle more complex temporal patterns.</li>
              <li>Develop automated soil sensor integration (IoT) to feed soil data straight into the application frontend.</li>
              <li>Add disease detection using image recognition tools.</li>
            </ul>
          </section>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}
