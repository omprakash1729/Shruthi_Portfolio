import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { E as Eyebrow, C as Chip } from "./ui-bits-Du-Z9It0.mjs";
import { p as projectErcblm } from "./router-CJMF0mtY.mjs";
import { p as projectBioner, a as projectCrop } from "./project-crop-Bmbg1rI6.mjs";
import { D as Dialog$1, a as DialogTrigger$1, b as DialogPortal$1, c as DialogContent$1, d as DialogClose, e as DialogTitle$1, f as DialogOverlay$1, g as DialogDescription$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { A as ArrowRight, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Dialog$1;
const DialogTrigger = DialogTrigger$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogDescription$1.displayName;
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Selected Works 2026" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display font-bold tracking-tight text-5xl md:text-7xl leading-[1.02]", children: [
        "Engineering ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Growth." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Data-Backed Strategies."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-muted-foreground", children: "I focus on bridging the gap between raw analytical research and impactful digital marketing campaigns — driving organic traffic and boosting conversions." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card overflow-hidden grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] lg:aspect-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: projectErcblm, alt: "E-RCBLM long-document summarization", width: 1280, height: 896, className: "size-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "SEO Strategy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Content Marketing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Chip, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
            " +40% Organic Traffic"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight", children: "B2B Organic Traffic Acceleration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A comprehensive SEO and content strategy designed to capture high-intent search queries. Overhauled site architecture, optimized on-page elements, and built authoritative backlinks, resulting in sustained organic growth." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0 text-left font-sans font-semibold", children: [
            "View Case Study ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(B2BCaseStudyModal, {})
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-8 grid md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "surface-card overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: projectBioner, alt: "Hybrid Biomedical Named Entity Recognition", loading: "lazy", className: "size-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "NLP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Deep Learning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Bioinformatics" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display font-semibold text-xl", children: "Hybrid Biomedical Named Entity Recognition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground flex-1", children: "A hybrid BioNER model combining PubMedBERT, a Transformer encoder, and CRF decoding, paired with a BIO consistency rule repair module. Achieved 89.76% F1 score." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0 text-left font-sans font-semibold", children: [
                "Read Research Paper ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BioNERModal, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-12 rounded-full", style: {
              background: "var(--gradient-primary)"
            } })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "surface-card overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: projectCrop, alt: "Climate-Based Crop Recommendation System", loading: "lazy", className: "size-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Machine Learning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Agriculture" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Python" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display font-semibold text-xl", children: "Climate-Based Crop Recommendation System" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground flex-1", children: "A data-driven machine learning system utilizing Logistic Regression to recommend optimal crops based on soil composition and local climate metrics." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0 text-left font-sans font-semibold", children: [
                "Read Project Documentation ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CropRecommendationModal, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-12 rounded-full", style: {
              background: "var(--gradient-primary)"
            } })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-12 grid lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-10 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold tracking-tight", children: "Behind the Designs: Shaping Experiences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl", children: "I'm focused on building clean, intuitive interfaces that solve real-world problems. Whether it's complex data or simple interactions, my goal is to make the invisible visible." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-10 flex flex-col", style: {
        background: "var(--gradient-primary)",
        color: "var(--primary-foreground)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[0.7rem] uppercase tracking-widest opacity-80", children: "Ready to Build?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl font-bold", children: "Let's build something meaningful together." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=shruthiharshiniram2003@gmail.com", target: "_blank", rel: "noopener noreferrer", className: "mt-auto pt-6 inline-flex items-center gap-2 self-start rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-semibold hover:bg-card-elevated transition-colors", children: [
          "Say Hello ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] })
    ] })
  ] });
}
function B2BCaseStudyModal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border p-6 md:p-8 rounded-2xl shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[0.65rem] font-mono uppercase tracking-widest text-primary mb-2", children: "Growth & Acquisition Case Study" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display font-bold text-2xl md:text-3xl leading-tight text-foreground", children: "B2B Organic Traffic & Conversion Acceleration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border-b border-border pb-4 text-xs md:text-sm text-muted-foreground space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm md:text-base font-sans", children: "Lead Strategist: Shruthi Ram R S" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans", children: "Focus: SEO, Conversational Marketing (AiSensy), and Community Outreach" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "w-full mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "inline-flex min-w-full md:min-w-0 mb-6 bg-muted/40 p-1 rounded-xl gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", className: "rounded-lg text-xs md:text-sm", children: "Overview & Context" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "whatsapp", className: "rounded-lg text-xs md:text-sm", children: "WhatsApp & BNI Outreach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "seo", className: "rounded-lg text-xs md:text-sm", children: "SEO & Organic Growth" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-muted/10 p-5 rounded-xl border border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-base md:text-lg text-foreground mb-2 font-sans", children: "Campaign Challenge & Strategy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "Faced with a sudden corporate financial crisis, paid customer acquisition budgets were suspended. To keep sales pipelines full and maintain customer acquisition velocity, we shifted away from generic paid ads and focused on high-efficiency organic and relational channels." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm mt-3", children: "By combining long-term search engine authority with short-term direct outbound conversational campaigns, we built a self-sustaining B2B pipeline that delivered high-quality leads with zero media spend." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "Key Milestones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-2 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Demo Booking Rate Boost" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Leveraged direct messaging workflows to engage decision-makers and dramatically scale product demo bookings." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Conversational CRM Setup" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Deployed AiSensy API integration to coordinate outreach, ensure high-fidelity delivery, and track replies." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Zero-Budget Acquisition" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Substituted expensive paid ad sequences with referral networks and organic search silos." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "+40% Organic Footprint" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Optimized site core structure and keyword targeting to consistently rank on high-intent search queries." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "whatsapp", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "Leveraging Conversational Marketing (AiSensy)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs md:text-sm", children: [
            "During the company's financial crisis, cold emails and paid search yielded diminishing returns. To solve this, we implemented direct conversational outreach using ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AiSensy" }),
            " (WhatsApp Business API platform). We designed custom sequence flows, automated trigger templates, and reply-based follow-ups to maintain highly personal communication scales."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "Targeting BNI Community Members" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs md:text-sm", children: [
            "Instead of broad targeting, we focused specifically on the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "BNI (Business Network International) community members" }),
            ". BNI members represent a highly active group of business owners, founders, and decision-makers who thrive on trusted networks and referrals:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-xs md:text-sm mt-2 space-y-1.5 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Created specialized value propositions addressing BNI members' unique business growth bottlenecks." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Used WhatsApp sequences to share immediate case studies and invite them to exclusive product walkthroughs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Significantly improved trust signals by referencing localized BNI chapters, leading to a massive increase in response and conversion rates." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-4 rounded-xl border border-border bg-primary/5 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm mb-1 font-sans", children: "Impact & Results:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-sans", children: "By shifting the acquisition focus to BNI channels via AiSensy, we boosted the overall demo booking rate and successfully steered the sales pipeline through the company's financial crunch." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "seo", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "Technical SEO & Site Architecture" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "Parallel to conversational outreach, we strengthened our organic search foundation to drive long-term inbound leads:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-xs md:text-sm space-y-1.5 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Completed a comprehensive technical audit, fixing crawl errors, duplicate tags, and schema validation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Structured pages into clean content hubs (topic clusters) that established high topical authority." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Built reliable backlink streams from industry blogs to solidify keyword rankings." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "Outcome" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs md:text-sm", children: [
            "The organic optimization resulted in a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+40% increase in B2B organic traffic" }),
            ", creating a consistent inflow of organic leads without ongoing ad budget requirements."
          ] })
        ] })
      ] })
    ] })
  ] });
}
function BioNERModal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border p-6 md:p-8 rounded-2xl shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[0.65rem] font-mono uppercase tracking-widest text-primary mb-2", children: "Master of Science in Data Science — Project Report" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display font-bold text-2xl md:text-3xl leading-tight text-foreground", children: "Hybrid Biomedical Named Entity Recognition Using PubMedBERT, Transformer-CRF and Consistency Rule Repair" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border-b border-border pb-4 text-xs md:text-sm text-muted-foreground space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground text-sm md:text-base", children: [
          "Author: Shruthi Ram R S ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(9924146003)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Project Guide: Mr. M. Barath Kesavan, Assistant Professor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.75rem] md:text-xs text-muted-foreground/80 font-sans", children: "Department of Computer Science and Information Technology, School of Computing, Kalasalingam Academy of Research and Education (Deemed to be University), Krishnankoil, India" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[0.7rem] pt-1", children: [
          "Corresponding: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:shruthiharshiniram2003@gmail.com", className: "text-primary hover:underline", children: "shruthiharshiniram2003@gmail.com" }),
          " | ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:m.barathkesavan@gmail.com", className: "text-primary hover:underline", children: "m.barathkesavan@gmail.com" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "abstract", className: "w-full mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "inline-flex min-w-full md:min-w-0 mb-6 bg-muted/40 p-1 rounded-xl gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "abstract", className: "rounded-lg text-xs md:text-sm", children: "Abstract & Intro" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "methodology", className: "rounded-lg text-xs md:text-sm", children: "Methodology & Survey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "implementation", className: "rounded-lg text-xs md:text-sm", children: "Implementation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "results", className: "rounded-lg text-xs md:text-sm", children: "Results & Future" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "abstract", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-muted/10 p-5 rounded-xl border border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-base md:text-lg text-foreground mb-2", children: "Abstract" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-xs md:text-sm", children: "Biomedical Named Entity Recognition (BioNER) is an important task in Natural Language Processing (NLP) that focuses on identifying biomedical entities such as genes, diseases, proteins, and chemicals from biomedical literature. Due to the rapid growth of biomedical publications and the complexity of medical terminology, extracting meaningful information manually has become difficult and time-consuming. Traditional machine learning approaches often fail to capture contextual relationships and may produce inconsistent predictions while processing biomedical text." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-xs md:text-sm mt-3", children: "This project proposes a hybrid biomedical named entity recognition system using PubMedBERT, Transformer encoder layers, Conditional Random Field (CRF) decoding, and BIO consistency rule repair to improve biomedical entity extraction accuracy. PubMedBERT is used to generate contextual embeddings specifically trained on biomedical literature, helping the model better understand domain-specific biomedical terminology. The transformer encoder captures contextual dependencies between tokens, while the CRF layer ensures valid and structured BIO tag sequence prediction." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-xs md:text-sm mt-3", children: "In addition, a BIO consistency rule repair mechanism is implemented to correct invalid tag sequences and improve entity boundary detection. The proposed model is evaluated using benchmark biomedical datasets including JNLPBA, BC2GM, NCBI Disease, and BC5CDR. Experimental results demonstrate that the proposed hybrid model achieves improved Precision, Recall, and F1-score compared to several existing BioNER approaches. The model achieved an overall F1-score of 89.76%, showing its effectiveness in biomedical entity recognition." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-xs md:text-sm mt-3", children: "A Gradio-based web application is also developed to provide real-time biomedical entity prediction through an interactive and user-friendly interface. The proposed system can support biomedical text mining, healthcare information retrieval, clinical document analysis, and medical research applications by providing accurate and reliable biomedical entity recognition." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-1.5 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[0.65rem] font-bold uppercase tracking-wider text-foreground mr-1", children: "Key Abbreviations:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { className: "text-[0.65rem]", children: "BioNER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { className: "text-[0.65rem]", children: "PubMedBERT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { className: "text-[0.65rem]", children: "CRF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { className: "text-[0.65rem]", children: "BIO Tagging" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "1.1 Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Biomedical Named Entity Recognition (BioNER) is an important application of Natural Language Processing (NLP) that focuses on identifying biomedical entities such as genes, diseases, proteins, and chemicals from biomedical literature. With the rapid growth of biomedical publications and clinical documents, extracting meaningful information manually has become increasingly difficult and time-consuming. Therefore, automated biomedical entity recognition systems are required to improve biomedical text analysis and healthcare information retrieval." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "1.2 Challenges" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-2 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Complex Biomedical Terminology" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Biomedical literature contains complex medical terms, abbreviations, chemical names, gene symbols, and disease-related terminology that traditional ML struggles to parse." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Entity Boundary Ambiguity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Biomedical entities often consist of multiple words and nested terms, making it hard to identify exact start/end tokens." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Contextual Ambiguity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "The same biomedical term can have completely different meanings depending on surrounding sentence structures." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Sequence Labeling Consistency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Predictions may yield invalid tag transitions (e.g. predicting inside label 'I-GENE' without a preceding beginning label 'B-GENE')." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "1.3 Motivation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The motivation behind this project is to develop an accurate and reliable biomedical named entity recognition system using transformer-based contextual embeddings combined with structured sequence prediction techniques. The proposed hybrid model integrates PubMedBERT, Transformer encoder layers, Conditional Random Field (CRF) decoding, and BIO consistency rule repair to improve biomedical entity extraction and prediction consistency." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "1.4 Objectives" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "To preprocess biomedical text using tokenization, BIO tagging, and sequence alignment techniques." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "To use PubMedBERT and CRF for accurate biomedical entity recognition and structured sequence prediction." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "To implement BIO consistency rule repair for correcting invalid BIO tag sequences." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "To evaluate the proposed model using benchmark biomedical datasets such as JNLPBA, BC2GM, BC5CDR, and NCBI Disease." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "To develop a Gradio-based web application for real-time biomedical entity prediction and visualization." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "methodology", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "2.1 Existing Methods & Limitations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Earlier BioNER systems mainly used rule-based approaches and traditional machine learning algorithms such as Hidden Markov Models (HMM), Support Vector Machines (SVM), and Conditional Random Fields (CRF) for biomedical entity extraction. These methods depended heavily on handcrafted features and domain-specific dictionaries." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-destructive/5 mt-2 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm mb-1", children: "Limitations of Existing Methods:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Heavy reliance on handcrafted features and manually compiled dictionaries." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "BiLSTM-CRF models struggle with long-range semantic dependencies in medical contexts." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Transformer-based architectures still suffer from predicting invalid tag boundaries (invalid BIO structures)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Difficulty generalizing across different annotation styles and biomedical databases." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "3.1 Proposed Method" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The proposed project introduces a hybrid Biomedical Named Entity Recognition (BioNER) system using PubMedBERT, Transformer encoder layers, Conditional Random Field (CRF) decoding, and BIO consistency rule repair for accurate biomedical entity extraction." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-primary pl-4 py-1 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Key Architectural Advantages:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal list-inside space-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Contextual Understanding" }),
                ": PubMedBERT generates domain-specific subword embeddings."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Semantic Capture" }),
                ": Transformer encoder layers capture long-range contextual relationships."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Structured Prediction" }),
                ": A CRF layer enforces sequence-level constraints over predicted tags."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "BIO Rule Repair" }),
                ": A post-processing module resolves structural annotation violations in tagging sequences."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "3.2 System Architecture & Workflow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The architecture integrates PubMedBERT with both CRF and Transformer encoder layers. Tokenized subwords feed into PubMedBERT to fetch semantic features, followed by self-attention combiners to contextually represent tokens. Decoder CRF generates sequence-optimal paths, and BIO consistency rule repair patches structural boundary gaps." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "implementation", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "4.1 Dataset & Preprocessing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We evaluate across four benchmark biomedical datasets, summarized below:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg border border-border mt-2 bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "Dataset" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "Main Entity Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "Biomedical Entities" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-border/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: "JNLPBA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "Protein / Cell Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "Protein, DNA, RNA, Cell Type" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: "BC2GM" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "Gene Mention" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "Genes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: "BC5CDR" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "Chemical & Disease" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "Chemicals, Diseases" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: "NCBI Disease" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "Disease Recognition" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "Diseases" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "4.2 Model Configurations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "PubMedBERT Features" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-xs text-muted-foreground mt-2 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Domain-specific vocabulary pretraining" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Trained on full-text PubMed literature" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Generates high-fidelity bio-medical embeddings" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "AdamW Training Parameters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-xs text-muted-foreground mt-2 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Learning Rate: 3e-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Batch Size: 16" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Optimizer: AdamW (Weight Decay)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Epochs: 3 (PyTorch implementation)" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "4.3 BIO Consistency Rule Repair" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "In sequence labeling, models can output logically invalid tag transitions, such as predicting an ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "I-GENE" }),
            " (Inside) directly after an ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "O" }),
            " (Outside) tag. The repair module scans generated label sequences and automatically corrects them:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 p-3 rounded-lg border border-border font-mono text-xs mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "Invalid Input:" }),
            " O  I-GENE  I-GENE  O",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Corrected:" }),
            "     O  B-GENE  I-GENE  O"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "This ensures consistent boundaries and improves F1 evaluation indices." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "results", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "5.1 Performance Metrics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The proposed model is evaluated across standard datasets below:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg border border-border mt-2 bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "Dataset" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "Precision (%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "Recall (%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "F1-score (%)" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-border/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: "BC2GM" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "90.21" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "88.75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-primary font-bold", children: "89.47" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: "NCBI Disease" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "88.90" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "90.15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-primary font-bold", children: "89.52" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: "JNLPBA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "88.35" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "88.10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-primary font-bold", children: "88.22" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: "BC5CDR" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "89.10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "89.45" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-primary font-bold", children: "89.27" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground font-sans", children: "5.2 Comparative Analysis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Overall F1-score comparison with other baseline deep models:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg border border-border mt-2 bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "Model" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 font-semibold text-foreground", children: "F1-score (%)" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-border/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "BioBERT" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "86.40" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "SciBERT" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "87.10" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "BioMegatron" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "88.30" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "BART" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: "88.65" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-primary/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-semibold text-foreground", children: "Proposed Hybrid BioNER Model" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-bold text-primary", children: "89.76" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "6.1 Major Findings & Future Enhancement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "The hybrid system effectively outperformed general models like BioBERT and SciBERT by scoring ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "89.76% F1" }),
            ", particularly due to PubMedBERT's domain pretraining combined with a structural CRF decoding. In the future, we aim to extend the model to extract complex entities like symptoms, clinical procedures, and dosages, as well as deploy the service onto high-throughput servers."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 pt-4 border-t border-border font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-base text-foreground font-sans", children: "References" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal list-inside space-y-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "S. Dash, et al. “A Clinical Named Entity Recognition Model Using Pretrained Word Embeddings,” Decision Analytics, 2024." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "J. Devlin, et al. “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding,” NAACL, 2019." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "J. Lee, et al. “BioBERT: A Pre-trained Biomedical Language Representation Model,” Bioinformatics, 2020." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "I. Beltagy, et al. “SciBERT: A Pretrained Language Model for Scientific Text,” EMNLP, 2019." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Y. Gu, et al. “Domain-Specific Language Model Pretraining for Biomedical NLP,” ACM CH, 2021." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function CropRecommendationModal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border p-6 md:p-8 rounded-2xl shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[0.65rem] font-mono uppercase tracking-widest text-primary mb-2", children: "Academic Project Report" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display font-bold text-2xl md:text-3xl leading-tight text-foreground", children: "Climate-Based Crop Recommendation System" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border-b border-border pb-4 text-xs md:text-sm text-muted-foreground space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground text-sm md:text-base", children: [
          "Author: Shruthi Ram R S ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(9924146003)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Institution: Kalasalingam Academy of Research and Education, Krishnankoil, India" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[0.7rem] pt-1", children: [
          "Contact: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:shruthiharshiniram2003@gmail.com", className: "text-primary hover:underline", children: "shruthiharshiniram2003@gmail.com" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "intro-lit", className: "w-full mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "inline-flex min-w-full md:min-w-0 mb-6 bg-muted/40 p-1 rounded-xl gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "intro-lit", className: "rounded-lg text-xs md:text-sm", children: "1-3. Introduction & Lit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "analysis-design", className: "rounded-lg text-xs md:text-sm", children: "4-6. Analysis & Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "implementation-setup", className: "rounded-lg text-xs md:text-sm", children: "7-8. Setup & Stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "ui-experience", className: "rounded-lg text-xs md:text-sm", children: "9. UI & Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "testing-results", className: "rounded-lg text-xs md:text-sm", children: "10-13. Testing & Results" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "intro-lit", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-muted/10 p-5 rounded-xl border border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-base md:text-lg text-foreground mb-2", children: "1.1 Project Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "Agriculture is essential to both economic growth and global food security. However, crop productivity and sustainability are greatly impacted by climate fluctuation. A Climate-Based Crop Recommendation System uses data-driven insights to help farmers choose crops that are best suited to the soil type, climate, and resource availability of their area. With the help of this technology, farmers may maximize productivity, reduce environmental hazards, and make well-informed decisions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "1.2 Objectives & Key Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-2 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Climate Adaptation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Makes use of historical and current climate data (temperature, humidity, rainfall) to ensure crop suggestions align with local environments." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Soil Compatibility" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Incorporates key chemical characteristics of the soil including Nitrogen (N), Phosphorus (P), Potassium (K), and pH levels." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Data-Driven Insights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Utilizes trained machine learning models to forecast crop suitability and evaluate multi-dimensional data patterns." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "User-Focused Design" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Provides farmers and agricultural stakeholders with an easy-to-use, minimalist client interface to access advice." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "2.1 Significance & Application Areas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "The Climate-Based Crop Recommendation System tackles critical challenges in agriculture by:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-xs md:text-sm space-y-1 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increasing crop yield by leveraging analytical insights derived from environmental data." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Minimizing the waste of resources (fertilizers, water, labor) by suggesting contextually ideal crops." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Optimizing agricultural land usage to foster sustainable farming methods." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm mt-3", children: "Application fields span:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-muted/20 border border-border rounded-lg text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Precision Agriculture" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-muted/20 border border-border rounded-lg text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Extension Services" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-muted/20 border border-border rounded-lg text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Agri-tech Startups" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-muted/20 border border-border rounded-lg text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Government Policies" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-muted/20 border border-border rounded-lg text-center col-span-2 sm:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Educational Training" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "2.2 Current Trends & Future Scope" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-2 font-sans text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm mb-1", children: "Current Trends" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Big Data Analytics" }),
                  ": Real-time data overlays on historical crop patterns."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sustainability" }),
                  ": Focusing on water footprints and carbon-resilience."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cloud-Based Systems" }),
                  ": Real-time cloud storage and recommendation access."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm mb-1", children: "Future Scope" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Deep Learning" }),
                  ": Capturing complex, dynamic environmental patterns."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Drone Automation" }),
                  ": Live, automated field and moisture scanning."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pest & Disease Spotting" }),
                  ": Early detection via computer vision."
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "3.1 Literature Review: Previous Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-2 text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Integration of Climate Data APIs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Retrieval of local ambient temperature, relative humidity, and precipitation via OpenWeather or WeatherStack APIs to generate real-time recommendations." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Deep Learning Frameworks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Leveraging Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN) to process multi-variable geographic datasets and historical weather sequences." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "GIS-Based Spatial Systems" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Geographic Information Systems mapping soil properties and climates across topographic regions, providing localized suggestions." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "analysis-design", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "4.1 Problem Statement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "Shifting climatic trends, lack of accessible soil-testing facilities, and insufficient weather data make crop selection difficult for farmers, causing financial loss. The project addresses this by building an interactive web application that takes in N, P, K, soil pH, temperature, humidity, and rainfall to recommend crops suitable for specific fields." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "4.2 Requirement Analysis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm mb-2", children: "Functional Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Data Collection" }),
                  ": Parsing soil (N, P, K, pH) and climate parameters."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Model Training" }),
                  ": Classifying parameters using supervised ML models."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Webpage Interface" }),
                  ": Form inputs and dynamic suggestion displays."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Data Preprocessing" }),
                  ": Cleansing and normalization routines."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm mb-2", children: "Non-Functional Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Usability" }),
                  ": Minimal, simple design for non-technical users."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Performance" }),
                  ": Low latency response (under 50ms prediction)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scalability" }),
                  ": Easy extension to handle additional databases."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Accuracy" }),
                  ": High training accuracy to prevent wrong recommendations."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 rounded-xl border border-border bg-background/30 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block mb-2", children: "System HW & SW Specifications:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid grid-cols-2 gap-2 font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Language" }),
                ": Python"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Web Framework" }),
                ": Flask / Streamlit"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Libraries" }),
                ": Pandas, NumPy, Scikit-learn, Pickle"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hardware Min." }),
                ": Dual-core CPU, 4GB RAM"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "5.1 Proposed System Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "The proposed web-based application utilizes a machine learning classifier trained on agricultural datasets instead of external API dependencies. Users input soil compositions and climate data to predict the best-suited crop." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mt-2 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/20 border border-border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold text-foreground text-xs", children: "Nitrogen (N)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Leaf Health" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/20 border border-border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold text-foreground text-xs", children: "Phosphorus (P)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Roots/Flowers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/20 border border-border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold text-foreground text-xs", children: "Potassium (K)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Disease Resist" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/20 border border-border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold text-foreground text-xs", children: "Temperature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Climatic Growth" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/20 border border-border rounded-lg col-span-2 sm:col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold text-foreground text-xs", children: "Rainfall" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Water Input" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "6.1 System Architecture Flow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground", children: "A comprehensive view of data flow from client inputs to serialized ML output generation:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 p-6 rounded-xl border border-border bg-background/50 flex flex-col items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between w-full max-w-2xl gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center p-3 rounded-lg border border-border bg-muted/20 w-36 text-center shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground", children: "User Inputs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground mt-1", children: "N, P, K, pH, Temp, Hum, Rain" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rotate-90 md:rotate-0 text-primary", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center p-3 rounded-lg border border-border bg-muted/20 w-36 text-center shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground", children: "Web Interface" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground mt-1", children: "HTML, CSS, JS Front-end" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rotate-90 md:rotate-0 text-primary", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center p-3 rounded-lg border border-border bg-muted/20 w-36 text-center shadow-sm relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary to-secondary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground", children: "Flask Backend" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground mt-1", children: "Python server logic" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rotate-90 md:rotate-0 text-primary", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center p-3 rounded-lg border border-primary/30 bg-primary/10 w-36 text-center shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: "ML Prediction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground mt-1", children: "Unpickled Model (.pkl)" })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "implementation-setup", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "7.1 Technical Stack Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-xs font-mono text-primary uppercase", children: "Frontend Interface" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                "Developed with standard ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "HTML5, CSS3, and JavaScript" }),
                " to build a responsive data-entry form with input verification alerts."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-xs font-mono text-primary uppercase", children: "Backend Framework" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                "Built on ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Flask (Python)" }),
                " to serve static files, parse POST request data payloads, and communicate with the ML pipeline."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-xs font-mono text-primary uppercase", children: "Machine Learning Model" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                "Utilizes ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scikit-learn Logistic Regression" }),
                " for classification, yielding reliable multiclass crop predictions."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-xs font-mono text-primary uppercase", children: "Model Serialization" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                "Serialized using Python's ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pickle" }),
                " module to save trained weights and import them into production routes."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "8.1 Development Environment & Setup Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground block", children: "1. Library Installation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Install required Python dependencies:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 p-2.5 rounded-lg border border-border font-mono text-[11px] text-foreground mt-2 overflow-x-auto", children: "pip install pandas numpy scikit-learn flask pickle4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground block", children: "2. Model Training & Export" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                "Read dataset, clean missing values, split data using ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "train_test_split" }),
                ", train the Logistic Regression classifier, and dump to disk:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 p-2.5 rounded-lg border border-border font-mono text-[11px] text-foreground mt-2 overflow-x-auto", children: `import pickle
from sklearn.linear_model import LogisticRegression

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Save model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground block", children: "3. Backend server configuration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Load model in Flask server, listen to HTTP requests, and predict:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 p-2.5 rounded-lg border border-border font-mono text-[11px] text-foreground mt-2 overflow-x-auto", children: `with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prediction = model.predict([data['features']])
    return jsonify({'crop': prediction[0]})` })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "ui-experience", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "9.1 User Interface Design & Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "The interface is tailored to farmers and extension workers, maximizing clarity, responsiveness, and accessibility:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Dashboard Homepage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "A welcoming homepage that explains the system's objective, with simple navigation links to input forms and insights." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Interactive Input Form" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Fields for Nitrogen, Phosphorus, Potassium, Soil pH, Temperature, Humidity, and Rainfall with helpful placeholder bounds." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Suggestion Results Page" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Presents the recommended crop clearly with graphical charts mapping user input values relative to optimal crop needs." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm", children: "Responsive Mobile Design" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Adapts dynamically to smartphones, tablets, and desktop displays, supporting on-field farmers using mobile viewports." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 rounded-xl border border-border bg-primary/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm mb-1", children: "Theme & Accessibility Priorities:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Follows a minimalist theme using neutral tones with green highlights to symbolize agriculture. Font scaling and touch-target sizes are optimized to ensure legibility and ease of use in outdoor farming conditions." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "testing-results", className: "space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "10.1 & 10.2 Testing, Validation & Verification" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-2 text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Testing Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Unit testing" }),
                " verifies numerical boundary rules (e.g. soil pH must remain in [0, 14], N/P/K cannot be negative). ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Integration testing" }),
                " validates JSON payload transfer between frontend fetch calls and backend endpoints."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block", children: "Validation & Verification" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                "Cross-validated utilizing a ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "train_test_split" }),
                " validation scheme on benchmark climate datasets. Verification checks that output suggestions align with agricultural recommendations for identical chemical contexts."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 font-sans", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "11.1 & 11.2 Performance Analysis & User Feedback" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "Due to its lightweight footprint, the Logistic Regression model completes inference tasks in under 15ms. Test runs show high predictive consistency on soil profiles. Extension agents and farmers note that the system provides fast responses and displays information clearly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-lg text-foreground", children: "13.1 Summary of Key Findings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm", children: "Soil parameters (specifically Nitrogen and pH) and local climate factors (specifically Rainfall and Temperature) serve as powerful predictors for crop suitability classification. Serializing the model as a pickled object and serving it through Flask provides low-overhead deployment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3 p-4 rounded-xl border border-border bg-primary/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-foreground text-sm mb-1", children: "13.2 Recommendations & Future Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-xs text-muted-foreground space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integrate real-time climate data APIs (like OpenWeather) to automatically pull local weather conditions based on user location." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Implement advanced Deep Learning networks to handle more complex temporal patterns." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Develop automated soil sensor integration (IoT) to feed soil data straight into the application frontend." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Add disease detection using image recognition tools." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ProjectsPage as component
};
