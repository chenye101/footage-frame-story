import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/cheyne-hero.jpg";
import aboutImage from "@/assets/cheyne-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheyne Hoesli | Cinematographer in Boise & Orange County" },
      {
        name: "description",
        content:
          "Cinematic brand films, social content, and event coverage by Cheyne Hoesli in Boise and Orange County.",
      },
      { property: "og:title", content: "Cheyne Hoesli | Cinematographer" },
      {
        property: "og:description",
        content: "Pure cinema by footagebycheyne — brand films, social content, and event coverage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const films = [
  { number: "01", title: "Motion / Automotive", position: "object-center" },
  { number: "02", title: "Salt / Coastal", position: "object-left" },
  { number: "03", title: "After Dark / Music", position: "object-right" },
  { number: "04", title: "Open Road / Travel", position: "object-bottom" },
  { number: "05", title: "Made by Hand / Brand", position: "object-top" },
  { number: "06", title: "In the Moment / Event", position: "object-center" },
];

const services = [
  {
    number: "01",
    title: "Brand & Commercial",
    description:
      "Cinematic brand videos and advertisements that make your product feel like a moment worth remembering.",
    accent: "border-service-gold",
  },
  {
    number: "02",
    title: "Social Media Content",
    description:
      "Short form content built for TikTok, Instagram, and beyond. Scroll-stopping visuals that actually convert.",
    accent: "border-service-blue",
  },
  {
    number: "03",
    title: "Event Coverage",
    description:
      "Real moments, captured beautifully. Whether it's an intimate gathering or a large scale production.",
    accent: "border-service-pink",
  },
];

function Mark() {
  return <span className="font-display text-lg italic text-foreground">fbc.</span>;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current">
      <path d="M10.5 6.8v18.4L25 16 10.5 6.8Z" />
    </svg>
  );
}

function EdgeLines({ side }: { side: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 740"
      className={`absolute top-1/2 hidden h-[72%] w-32 -translate-y-1/2 text-foreground/35 lg:block ${side === "left" ? "left-0" : "right-0 -scale-x-100"}`}
      fill="none"
    >
      <path d="M17 2C52 62 20 101 64 157c36 46-8 93 26 145 40 62-29 104 9 162 34 51-15 103 19 156 22 35 2 75 28 117" stroke="currentColor" strokeWidth="1" />
      <path d="M0 76c47 28 26 78 71 112 33 25-5 83 30 118 45 45-4 102 29 142 24 30 8 70 24 95" stroke="currentColor" strokeWidth="0.7" opacity=".45" />
      <path d="M42 0c-1 59 37 86 15 142-15 39 36 81 10 125-30 51 32 86 3 137-31 54 25 96-5 149-25 44 10 93-12 146" stroke="currentColor" strokeWidth="0.6" opacity=".25" />
    </svg>
  );
}

function Portfolio() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10" aria-label="Main navigation">
          <a href="#home" className="font-display text-base font-semibold text-foreground md:text-lg">
            footagebycheyne<span className="text-primary">.</span>
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {['Home', 'Portfolio', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="text-[0.68rem] uppercase tracking-[0.18em] text-primary md:hidden">Inquire</a>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground lg:block">Boise · Orange County</span>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-[92svh] items-center justify-center border-b border-border">
        <img src={heroImage} alt="A cinematographer filming at the coast" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-cinematic-overlay" />
        <EdgeLines side="left" />
        <EdgeLines side="right" />
        <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center">
          <span className="mb-3 text-[0.68rem] uppercase tracking-[0.42em] text-primary">footage by</span>
          <h1 className="font-display text-5xl font-medium leading-none sm:text-7xl lg:text-8xl">Cheyne Hoesli</h1>
          <p className="mt-4 font-display text-2xl italic text-foreground/80 sm:text-3xl">pure cinema.</p>
        </div>
        <a href="#portfolio" aria-label="Scroll to portfolio" className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
          <span className="h-12 w-px bg-primary/70" />
        </a>
      </section>

      <section id="portfolio" className="section-shell scroll-mt-20 relative">
        <EdgeLines side="left" />
        <EdgeLines side="right" />
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-14 flex items-end justify-between border-b border-border pb-6 sm:mb-20">
            <div>
              <span className="section-label">Selected work · 2024—26</span>
              <h2 className="mt-3 font-display text-3xl tracking-[0.16em] sm:text-5xl">PORTFOLIO.</h2>
            </div>
            <Mark />
          </div>
          <div className="space-y-8 md:space-y-16">
            {films.map((film, index) => (
              <article key={film.number} className="group">
                <div className="relative aspect-video overflow-hidden bg-card">
                  <img
                    src={index % 2 === 0 ? heroImage : aboutImage}
                    alt=""
                    width={index % 2 === 0 ? 1920 : 1024}
                    height={index % 2 === 0 ? 1080 : 1408}
                    loading="lazy"
                    className={`h-full w-full object-cover opacity-45 grayscale transition duration-700 group-hover:scale-[1.02] group-hover:opacity-65 ${film.position}`}
                  />
                  <div className="absolute inset-0 bg-film-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/50 text-foreground transition group-hover:border-primary group-hover:text-primary sm:h-20 sm:w-20"><PlayIcon /></span>
                  </div>
                  <span className="absolute left-4 top-4 text-[0.62rem] tracking-[0.2em] text-foreground/65 sm:left-7 sm:top-6">FILM {film.number}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell scroll-mt-20 border-y border-border bg-surface relative">
        <EdgeLines side="left" />
        <EdgeLines side="right" />
        <div className="mx-auto grid max-w-[1180px] gap-14 md:grid-cols-[1.05fr_.95fr] md:items-center lg:gap-24">
          <div>
            <span className="section-label">about</span>
            <h2 className="section-title">Behind the<br />Scenes.</h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              What's up, I'm Cheyne, a 21-year-old cinematographer based in Boise, Idaho / Orange County, California. I've always thought of myself as creative. As a kid I was obsessed with YouTubers like Smosh and PewDiePie, dreaming of making my own videos. What I didn't realize then was that it was never about being on camera. It was about creating. That realization led me here — turning everyday moments into cinematic experiences. Cars, motorcycles, surfing, cooking, music, travel — anything can be cinematic.
            </p>
            <div className="mt-10 flex items-center gap-4"><span className="h-px w-14 bg-primary" /><span className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">Based out west</span></div>
          </div>
          <figure className="relative mx-auto max-w-md md:max-w-none">
            <img src={aboutImage} alt="Cinematographer Cheyne Hoesli working behind the camera" width={1024} height={1408} loading="lazy" className="aspect-[4/5] w-full object-cover grayscale" />
            <figcaption className="absolute -bottom-5 -left-4 bg-primary px-4 py-3 text-[0.6rem] uppercase tracking-[0.2em] text-primary-foreground sm:-left-7">Create what moves you.</figcaption>
          </figure>
        </div>
      </section>

      <section id="services" className="section-shell scroll-mt-20 relative">
        <EdgeLines side="left" />
        <EdgeLines side="right" />
        <div className="mx-auto max-w-[1240px]">
          <span className="section-label">services</span>
          <h2 className="section-title">What I offer.</h2>
          <div className="mt-14 grid border-x border-b border-border md:grid-cols-3 md:divide-x md:divide-border">
            {services.map((service) => (
              <article key={service.title} className={`flex min-h-[340px] flex-col border-t-2 bg-card p-8 sm:p-10 ${service.accent}`}>
                <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground">{service.number}</span>
                <h3 className="mt-10 font-display text-2xl sm:text-3xl">{service.title}</h3>
                <p className="mt-5 leading-7 text-muted-foreground">{service.description}</p>
                <a href="#contact" className="mt-auto pt-10 text-[0.68rem] uppercase tracking-[0.18em] text-primary underline-offset-8 hover:underline">Inquire for pricing ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell scroll-mt-20 border-t border-border bg-surface relative">
        <EdgeLines side="left" />
        <EdgeLines side="right" />
        <div className="mx-auto grid max-w-[1180px] gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="section-label">contact</span>
            <h2 className="section-title">Let's make<br /><em>something.</em></h2>
            <a href="mailto:footagebycheyne@gmail.com" className="mt-9 inline-block text-sm text-primary underline-offset-8 hover:underline sm:text-base">footagebycheyne@gmail.com</a>
          </div>
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="grid gap-8 sm:grid-cols-2">
            <label className="field-label">Your name<input className="field-input" type="text" name="name" required autoComplete="name" /></label>
            <label className="field-label">Your email<input className="field-input" type="email" name="email" required autoComplete="email" /></label>
            <label className="field-label">Project type<select className="field-input" name="projectType" defaultValue=""><option value="" disabled>Select a service</option><option>Brand & Commercial</option><option>Social Media Content</option><option>Event Coverage</option><option>Other</option></select></label>
            <label className="field-label">Budget range<select className="field-input" name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>$500 – $1,000</option><option>$1,000 – $2,500</option><option>$2,500 – $5,000</option><option>$5,000+</option></select></label>
            <label className="field-label">Timeline<select className="field-input" name="timeline" defaultValue=""><option value="" disabled>Select a timeline</option><option>Within 2 weeks</option><option>Within 1 month</option><option>1–3 months</option><option>Flexible</option></select></label>
            <label className="field-label sm:col-span-2">Tell me about your project<textarea className="field-input min-h-28 resize-y" name="message" required /></label>
            <button type="submit" className="mt-2 inline-flex h-14 items-center justify-center border border-primary bg-transparent px-8 text-[0.68rem] uppercase tracking-[0.22em] text-primary transition hover:bg-primary hover:text-primary-foreground sm:col-span-2 sm:w-fit">Send Inquiry ↗</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 sm:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 footagebycheyne.</span><span>Boise, ID · Orange County, CA</span>
        </div>
      </footer>
    </main>
  );
}