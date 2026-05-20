const heroImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80";

const projectCards = [
  {
    title: "Private Residences",
    copy: "Warm, resort-like homes shaped around light, texture, and daily rituals.",
  },
  {
    title: "Boutique Hospitality",
    copy: "Spaces that turn every arrival into a calm, memorable first impression.",
  },
  {
    title: "Interior Styling",
    copy: "Layered materials, custom furniture, and finishing details with character.",
  },
];

const studioNotes = [
  "Human-centered layouts that feel intimate, clear, and easy to inhabit.",
  "Material palettes inspired by tropical architecture, raw stone, and warm timber.",
  "End-to-end direction from concept storytelling to construction-ready coordination.",
];

export function ManaStudioPage() {
  return (
    <div className="bg-[#f4f1eb] text-[#111111]">
      <section className="relative min-h-screen overflow-hidden bg-[#1e1711] text-white">
        <img
          src={heroImage}
          alt="Warm tropical bedroom interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.22)_32%,rgba(0,0,0,0.38)_100%)]" />

        <header className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 text-[11px] uppercase tracking-[0.24em] sm:px-10 lg:px-16">
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#projects" className="transition-opacity hover:opacity-70">
              Projects
            </a>
            <a href="#shop" className="transition-opacity hover:opacity-70">
              Shop
            </a>
          </nav>
          <div className="text-center text-xs font-semibold tracking-[0.28em]">
            <div>Kamu</div>
            <div>Concepts</div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#contact" className="transition-opacity hover:opacity-70">
              Contact
            </a>
            <a href="#about" className="transition-opacity hover:opacity-70">
              About Us
            </a>
            <a href="#career" className="transition-opacity hover:opacity-70">
              Career
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-end px-5 pb-10 pt-28 sm:px-10 lg:px-16 lg:pb-12">
          <div className="flex items-end justify-between gap-8">
            <div className="space-y-2 text-[11px] uppercase tracking-[0.24em] text-white/90">
              <p>Mira Hotel</p>
              <p>Bingin, Bali</p>
            </div>
            <a
              href="#tagline"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:bg-white/20"
              aria-label="Scroll to next section"
            >
              <span className="text-xl leading-none">.</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="tagline"
        className="mx-auto flex min-h-[60vh] w-full max-w-[1440px] items-center px-5 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <h1 className="max-w-[1100px] text-[clamp(2.75rem,6vw,5.75rem)] font-semibold uppercase leading-[0.94] tracking-[-0.05em] text-[#d8dbe2]">
          <span className="text-[#232a36]">We design</span> a house that we want to live
        </h1>
      </section>

      <section
        id="about"
        className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-10 sm:px-10 lg:grid-cols-[minmax(0,644px)_minmax(0,1fr)] lg:gap-5 lg:px-16"
      >
        <div className="min-h-[520px] bg-[#d9d9d9]" />
        <div className="space-y-8 pt-1">
          <p className="text-xs uppercase tracking-[0.22em] text-[#252525]">About us</p>
          <div className="max-w-[540px] space-y-5 text-[15px] leading-8 text-[#5f5952]">
            <p>
              Kami Concepts crafts tropical modern spaces with a calm editorial tone, balancing
              architecture, interiors, and atmosphere into one quiet story.
            </p>
            <p>
              The visual direction from the Figma frame leans minimal and gallery-like, so this
              implementation keeps the layout restrained: large negative space, sharp typography,
              and material-led imagery.
            </p>
          </div>
          <div className="grid gap-3 pt-2">
            {studioNotes.map((note) => (
              <div
                key={note}
                className="rounded-full border border-[#ddd5cb] bg-white/70 px-5 py-3 text-sm text-[#403931] shadow-[0_10px_30px_rgba(17,17,17,0.05)]"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#71685d]">Selected scope</p>
            <h2 className="max-w-[700px] text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[#232a36]">
              Spaces designed with hotel-level warmth and residential ease
            </h2>
          </div>
          <p className="max-w-[360px] text-sm leading-7 text-[#6b6359]">
            The supporting sections extend the Figma direction into a realistic homepage so the
            screen feels complete when opened in the browser.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projectCards.map((card, index) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[28px] border border-[#e4ddd3] bg-[#fcfaf7] shadow-[0_18px_45px_rgba(17,17,17,0.06)]"
            >
              <div
                className="h-72 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(17,17,17,0.05), rgba(17,17,17,0.32)), url(${heroImage}&ixid=${index + 1})`,
                }}
              />
              <div className="space-y-3 px-6 py-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a7f72]">
                  0{index + 1}
                </p>
                <h3 className="text-2xl font-semibold text-[#1f2430]">{card.title}</h3>
                <p className="text-sm leading-7 text-[#665f56]">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-10 lg:px-16 lg:pb-24"
      >
        <div className="rounded-[32px] bg-[#1f2430] px-6 py-10 text-white sm:px-10 lg:flex lg:items-end lg:justify-between lg:px-14 lg:py-14">
          <div className="max-w-[620px] space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">Start a project</p>
            <h2 className="text-[clamp(2rem,4vw,4.4rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em]">
              Let&apos;s shape a retreat-minded space with clarity and character
            </h2>
          </div>
          <a
            href="mailto:studio@kamuconcepts.com"
            className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] transition hover:bg-white hover:text-[#1f2430] lg:mt-0"
          >
            studio@kamuconcepts.com
          </a>
        </div>
      </section>
    </div>
  );
}
