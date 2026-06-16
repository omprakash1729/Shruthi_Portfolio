const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shruthi-ram-r-s-a6b7b62b5/" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Email", href: "https://www.linkedin.com/in/shruthi-ram-r-s-a6b7b62b5/" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 text-center">
        <p className="font-display text-2xl font-semibold tracking-tight">Shruthi Ram R S</p>
        <div className="mt-5 flex justify-center gap-7 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="hover:text-primary transition-colors">
              {s.label}
            </a>
          ))}
        </div>
        <div className="mt-8 h-px w-24 mx-auto bg-border" />
        <p className="mt-5 text-xs font-mono text-muted-foreground tracking-widest">
          © 2026 SHRUTHI RAM R S · BUILT WITH PRECISION
        </p>
      </div>
    </footer>
  );
}
