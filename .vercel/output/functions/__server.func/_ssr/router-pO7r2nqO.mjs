import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-C9LdJfdX.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" }
];
function SiteNav() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-display font-semibold tracking-tight text-lg", children: "Shruthi Ram" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8 text-sm", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          activeOptions: { exact: true },
          activeProps: { className: "text-primary" },
          inactiveProps: { className: "text-muted-foreground hover:text-foreground transition-colors" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=shruthiharshiniram2003@gmail.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden sm:inline-flex btn-primary px-4 py-2 text-sm font-medium items-center gap-2",
            children: "Get in Touch"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "md:hidden p-2 rounded-md border border-border",
            onClick: () => setOpen((v) => !v),
            "aria-label": "Toggle menu",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-4" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 flex flex-col gap-3 text-sm", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        onClick: () => setOpen(false),
        activeProps: { className: "text-primary" },
        inactiveProps: { className: "text-muted-foreground" },
        children: l.label
      },
      l.to
    )) }) })
  ] });
}
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shruthi-ram-r-s-a6b7b62b5/" },
  { label: "+91 94862 09620", href: "tel:+919486209620" }
];
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-14 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold tracking-tight", children: "Shruthi Ram R S" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-center gap-7 text-xs font-mono uppercase tracking-widest text-muted-foreground", children: socials.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.href, className: "hover:text-primary transition-colors", children: s.label }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-px w-24 mx-auto bg-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xs font-mono text-muted-foreground tracking-widest", children: "© 2026 SHRUTHI RAM R S" })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-primary inline-flex px-5 py-2.5 text-sm font-medium", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "btn-primary inline-flex px-5 py-2.5 text-sm font-medium",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "btn-ghost inline-flex px-5 py-2.5 text-sm font-medium", children: "Go home" })
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shruthi Ram R S — Digital Marketing & Data Science" },
      {
        name: "description",
        content: "Portfolio of Shruthi Ram R S — Digital Marketing strategist and Data Science practitioner building data-driven growth ecosystems."
      },
      { name: "author", content: "Shruthi Ram R S" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Shruthi Ram R S — Digital Marketing & Data Science" },
      {
        property: "og:description",
        content: "Data-driven digital marketing and data science portfolio."
      },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$3 = () => import("./work-DWIRhxZy.mjs");
const Route$3 = createFileRoute("/work")({
  head: () => ({
    meta: [{
      title: "Work — Shruthi Ram R S"
    }, {
      name: "description",
      content: "Professional journey of Shruthi Ram R S — experience across digital marketing internships and data analytics roles."
    }, {
      property: "og:title",
      content: "Work — Shruthi Ram R S"
    }, {
      property: "og:description",
      content: "Merging data with strategy — career trajectory and education."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const projectErcblm = "/assets/project-ercblm-CAHmxUw_.jpg";
const $$splitComponentImporter$2 = () => import("./projects-C2kEEXX4.mjs");
const Route$2 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Shruthi Ram R S"
    }, {
      name: "description",
      content: "Selected works in NLP, biomedical AI, and applied machine learning by Shruthi Ram R S."
    }, {
      property: "og:title",
      content: "Projects — Shruthi Ram R S"
    }, {
      property: "og:description",
      content: "Engineering intelligence and shaping digital growth — selected works 2026."
    }, {
      property: "og:image",
      content: projectErcblm
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CeDkBco9.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Shruthi Ram R S"
    }, {
      name: "description",
      content: "Engineering growth through data and logic. Capabilities, expertise matrix, and achievements of Shruthi Ram R S."
    }, {
      property: "og:title",
      content: "About — Shruthi Ram R S"
    }, {
      property: "og:description",
      content: "A synthesis of technical prowess in programming and strategic insight in digital marketing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DVf4AZKh.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Shruthi Ram — Digital Marketing & Data Science Portfolio"
    }, {
      name: "description",
      content: "Bridging analytical insight and high-impact digital storytelling. Data-driven marketing ecosystems by Shruthi Ram R S."
    }, {
      property: "og:title",
      content: "Shruthi Ram — Digital Marketing & Data Science"
    }, {
      property: "og:description",
      content: "Data-driven digital marketing portfolio of Shruthi Ram R S."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkRoute = Route$3.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$4
});
const ProjectsRoute = Route$2.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ProjectsRoute,
  WorkRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  projectErcblm as p,
  router as r
};
