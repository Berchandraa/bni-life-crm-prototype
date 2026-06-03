import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import "./jasacopy.css";

const techIcons = [
  { name: "Figma", src: "/hero-icons/figma.svg", radius: "534px", angle: "226deg", duration: "38s" },
  { name: "GitHub", src: "/hero-icons/github.svg", radius: "381px", angle: "242deg", duration: "32s", reverse: true },
  { name: "Union", src: "/figma-hero/icon-union-frame.png", radius: "381px", angle: "232deg", duration: "36s", fullFrame: true },
  { name: "Java", src: "/hero-icons/java.svg", radius: "381px", angle: "296deg", duration: "32s", reverse: true },
  { name: "Laravel", src: "/hero-icons/laravel.svg", radius: "534px", angle: "283deg", duration: "40s" },
  { name: "React", src: "/hero-icons/react.svg", radius: "534px", angle: "248deg", duration: "38s" },
  { name: "WordPress", src: "/hero-icons/wordpress.svg", radius: "287px", angle: "236deg", duration: "28s" },
  { name: "TypeScript", src: "/hero-icons/typescript.svg", radius: "534px", angle: "318deg", duration: "40s" },
  { name: "Node.js", src: "/hero-icons/nodejs.svg", radius: "287px", angle: "264deg", duration: "28s", reverse: true },
  { name: "Framer", src: "/hero-icons/framer.svg", radius: "287px", angle: "282deg", duration: "28s" },
];

const aboutCards = [
  {
    title: "Design Meets Clean Code",
    body: "Bridging user-centric visual interfaces with semantic frontend code architecture that is easily indexed by AI and search engines.",
    visual: "code",
    span: "compact",
  },
  {
    title: "Conversion Optimization",
    body: "Every user journey and interface element is designed based on empirical analytic data. We focus on improving organic ROI metrics.",
    visual: "chart",
    span: "wide",
  },
  {
    title: "Engineered for Search & Scale",
    body: "Beyond aesthetic design, we build enterprise-scale technical foundations optimized for maximum visibility in modern search engines.",
    visual: "result",
    span: "wide",
  },
  {
    title: "",
    body: "",
    visual: "badges",
    span: "compact",
  },
];

const services = [
  {
    title: "Modern Web Engineering",
    body: "Building lightning-fast, responsive web platforms. We implement pixel-perfect designs using modern frameworks optimized for SEO and conversion.",
    visual: "screen",
  },
  {
    title: "Mobile App Development",
    body: "Engineering native and cross-platform mobile applications (iOS & Android). Delivering seamless mobile experiences with complex API integrations.",
    visual: "phones",
  },
  {
    title: "UI/UX Product Design",
    body: "Crafting intuitive, scalable interfaces. From user research to high-fidelity prototyping, establishing a robust design system for smooth engineering handoff.",
    visual: "ui",
  },
  {
    title: "Backend & System Architecture",
    body: "Architecting secure data pipelines, cloud infrastructure, and complex API integrations. We build the hidden engine that powers enterprise scalability.",
    visual: "network",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    body: "We analyze your business goals, user behavior, and technical requirements to define the ideal database schema and tech stack.",
  },
  {
    step: "02",
    title: "UI/UX Prototyping",
    body: "Transforming logic into interactive wireframes and high-fidelity prototypes. Establishing a scalable design system for development.",
  },
  {
    step: "03",
    title: "Full-Stack Engineering",
    body: "Writing clean, maintainable code. We build robust backend APIs and responsive frontend interfaces optimized for performance.",
  },
  {
    step: "04",
    title: "QA & Deployment",
    body: "Rigorous testing for bugs, security, and Core Web Vitals. Finalizing server configurations before launching to production.",
  },
];

export function JasaCopyLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const needs = String(formData.get("needs") || "").trim();
    const subject = `New project inquiry from ${business || name || "Berlabs website"}`;
    const body = [
      "Halo Berlabs,",
      "",
      "Saya ingin mendiskusikan kebutuhan project.",
      "",
      `Nama: ${name}`,
      `Email: ${email}`,
      `Nomor Telepon: ${phone}`,
      `Nama Bisnis: ${business}`,
      "",
      "Deskripsi Kebutuhan:",
      needs,
    ].join("\n");

    window.location.href = `mailto:chandrasuraman05@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>(".jc-scroll-reveal"));
    const anchorNodes = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = event.currentTarget as HTMLAnchorElement;
      const hash = anchor.hash;

      if (!hash) {
        return;
      }

      const target = document.querySelector<HTMLElement>(hash);

      if (!target) {
        return;
      }

      event.preventDefault();

      const header = document.querySelector<HTMLElement>(".jc-header");
      const headerOffset = header ? header.offsetHeight + 28 : 0;
      const targetTop = hash === "#home" ? 0 : target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });

      window.history.pushState(null, "", hash);
    };

    anchorNodes.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));

    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return () => anchorNodes.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18,
      }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      anchorNodes.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick));
    };
  }, []);

  return (
    <div className="jasacopy-shell">
      <header className={`jc-header${isMobileMenuOpen ? " is-mobile-open" : ""}`}>
        <a className="jc-logo" href="#home" aria-label="Berlabs home">
          <img className="jc-logo-icon" src="/berlabs-mark-white.svg" alt="" aria-hidden="true" />
        </a>
        <nav className="jc-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#workflow">Workflow</a>
        </nav>
        <a
          className="jc-header-cta"
          href="https://wa.me/6281283247741?text=Halo%20Berlabs%2C%20saya%20ingin%20diskusi%20project."
          target="_blank"
          rel="noreferrer"
        >
          <span className="jc-header-cta-label">Start Projects</span>
          <svg
            className="jc-header-cta-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12.0249 4.94166L17.0832 10L12.0249 15.0583"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91675 10H16.9417"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <button
          className="jc-mobile-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="jc-mobile-menu" id="mobile-navigation" aria-hidden={!isMobileMenuOpen}>
          <nav aria-label="Mobile navigation">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#workflow" onClick={() => setIsMobileMenuOpen(false)}>
              Workflow
            </a>
          </nav>
          <a
            className="jc-header-cta jc-mobile-cta"
            href="https://wa.me/6281283247741?text=Halo%20Berlabs%2C%20saya%20ingin%20diskusi%20project."
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="jc-header-cta-label">Start Projects</span>
            <svg
              className="jc-header-cta-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12.0249 4.94166L17.0832 10L12.0249 15.0583"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91675 10H16.9417"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </header>

      <main id="home">
        <section className="jc-hero">
          <div className="jc-hero-highlight" aria-hidden="true" />
          <div className="jc-light-rays" aria-hidden="true" />
          <img className="jc-hero-vector jc-hero-vector-left" src="/figma-hero/vector-62.png" alt="" aria-hidden="true" decoding="async" />
          <img className="jc-hero-vector jc-hero-vector-right" src="/figma-hero/vector-61.png" alt="" aria-hidden="true" decoding="async" />
          <div className="jc-hero-copy">
            <p className="jc-kicker">Available for B2B &amp; Enterprise projects</p>
            <h1>
              Building Fast, Structured
              <br />
              &amp; Optimal Digital Platforms.
            </h1>
            <p>
              A leading digital agency combining premium UI/UX design with robust
              software architecture. We engineer comprehensive digital products
              that dominate search and scale your business.
            </p>
            <div className="jc-actions">
              <a className="jc-button jc-button-primary" href="#contact-form">
                Free Consultation
              </a>
            </div>
          </div>

          <div className="jc-orbit" aria-hidden="true">
            <div className="jc-orbit-ring jc-orbit-ring-one" />
            <div className="jc-orbit-ring jc-orbit-ring-two" />
            <div className="jc-orbit-ring jc-orbit-ring-three" />
            {techIcons.map((icon) => (
              <span
                key={icon.name}
                className={`${icon.fullFrame ? "jc-tech-icon-full" : ""}${icon.reverse ? " jc-tech-icon-reverse" : ""}`.trim()}
                style={
                  {
                    "--orbit-radius": icon.radius,
                    "--orbit-angle": icon.angle,
                    "--orbit-duration": icon.duration,
                  } as CSSProperties
                }
              >
                <img src={icon.src} alt="" decoding="async" />
              </span>
            ))}
          </div>
        </section>

        <section className="jc-section jc-intro jc-scroll-reveal">
          <p className="jc-kicker jc-reveal-item" style={{ "--reveal-delay": "0ms" } as CSSProperties}>About Berlabs Agency</p>
          <h2 className="jc-reveal-item" style={{ "--reveal-delay": "90ms" } as CSSProperties}>
            The synergy between intuitive interface design
            <br />
            and search-optimized code infrastructure.
          </h2>
          <div className="jc-proof-grid jc-reveal-item" style={{ "--reveal-delay": "170ms" } as CSSProperties}>
            {aboutCards.map((card, index) => (
              <article
                className={`jc-about-card jc-about-card-${card.visual} jc-about-card-${card.span}${card.visual === "badges" ? " jc-card-visual-only" : ""}`}
                key={index}
                style={{ "--reveal-delay": `${240 + index * 90}ms` } as CSSProperties}
              >
                {card.title && <h3>{card.title}</h3>}
                {card.body && <p>{card.body}</p>}
                <CardVisual type={card.visual} />
              </article>
            ))}
          </div>
        </section>

        <section className="jc-section jc-scroll-reveal" id="services">
          <div className="jc-section-heading jc-reveal-item" style={{ "--reveal-delay": "0ms" } as CSSProperties}>
            <p className="jc-kicker">Services</p>
            <h2>
              Not a generic agency. A studio
              <br />
              with a contractual
              <br />
              commitment to performance.
            </h2>
            <p>
              From proofreading to the final draft, ready to be incorporated into
              your design or website.
            </p>
          </div>
          <div className="jc-service-grid jc-reveal-item" style={{ "--reveal-delay": "150ms" } as CSSProperties}>
            {services.map((service, index) => (
              <article
                className="jc-service-card"
                key={service.title}
                style={{ "--reveal-delay": `${230 + index * 90}ms` } as CSSProperties}
              >
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
                <ServiceVisual type={service.visual} />
              </article>
            ))}
          </div>
        </section>

        <section className="jc-section jc-process jc-scroll-reveal" id="workflow">
          <div className="jc-process-heading jc-reveal-item" style={{ "--reveal-delay": "0ms" } as CSSProperties}>
            <p className="jc-kicker">Execution Workflow</p>
            <span>The Engineering Pipeline.</span>
            <h2>
              A predictable, transparent, and battle-tested process. From the initial architecture phase to the final scalable deployment.
            </h2>
          </div>
          <div className="jc-process-grid jc-reveal-item" style={{ "--reveal-delay": "150ms" } as CSSProperties}>
            {processSteps.map((item, index) => (
              <article
                className="jc-process-card"
                key={item.step}
                style={{ "--reveal-delay": `${230 + index * 90}ms` } as CSSProperties}
              >
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="jc-contact jc-scroll-reveal" id="contact">
          <div className="jc-contact-hero jc-reveal-item" style={{ "--reveal-delay": "0ms" } as CSSProperties}>
            <h2>Ready to take your digital product to the next level?</h2>
            <span>
              Partner with our experts to engineer scalable platforms and stunning user experiences today.
            </span>
            <a className="jc-button jc-button-primary jc-contact-hero-button" href="#contact-form">
              Start your Projects
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
          <div className="jc-contact-panel jc-reveal-item" id="contact-form" style={{ "--reveal-delay": "150ms" } as CSSProperties}>
            <aside>
              <h3>Not sure where to start?</h3>
              <p>
                Berlabs helps brands turn business goals into fast websites, conversion-focused landing pages, and scalable digital products. Tell us your business context, product goals, and timeline so we can map the right direction.
              </p>
              <div>
                <span>Product strategy</span>
                <span>UI/UX design</span>
                <span>Web development</span>
              </div>
            </aside>
            <form className="jc-contact-form" onSubmit={handleContactSubmit}>
              <label>
                <span>Nama *</span>
                <input type="text" name="name" placeholder="Your name here" autoComplete="name" required />
              </label>
              <label>
                <span>Email *</span>
                <input type="email" name="email" placeholder="Your email here" autoComplete="email" required />
              </label>
              <label>
                <span>Nomor Telepon *</span>
                <input type="tel" name="phone" placeholder="WhatsApp or phone number" autoComplete="tel" required />
              </label>
              <label>
                <span>Nama Bisnis *</span>
                <input type="text" name="business" placeholder="Your business or brand name" autoComplete="organization" required />
              </label>
              <label>
                <span>Deskripsikan Kebutuhan *</span>
                <textarea name="needs" placeholder="Tell us what you need, your target audience, target location, and ideal launch date" rows={4} required />
              </label>
              <div className="jc-contact-actions">
                <button className="jc-button jc-button-primary jc-contact-submit" type="submit">
                  Submit
                  <span aria-hidden="true">-&gt;</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="jc-footer">
        <div>
          <a className="jc-logo" href="#home" aria-label="Berlabs home">
            <img src="/jasacopy-logo-blue.png" alt="Berlabs" loading="lazy" decoding="async" />
          </a>
          <p>
            Trusted B2B digital product design and development studio.
            Prioritizing functional aesthetics driven by strategic data.
          </p>
        </div>
        <nav className="jc-footer-nav" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#workflow">Workflow</a>
        </nav>
        <small>{"\u00A9 2026 Berlabs Digital Studio. All Rights Reserved."}</small>
      </footer>
    </div>
  );
}

function CardVisual({ type }: { type: string }) {
  if (type === "code") {
    return (
      <div className="jc-code-panel" aria-hidden="true">
        <div className="jc-about-content-card">
          <div className="jc-search-shell">
            <div className="jc-search-input">
              <img src="/figma-about/search.svg" alt="" loading="lazy" decoding="async" />
              <span>Cari referensi copy...</span>
              <i aria-hidden="true" />
            </div>
            <div className="jc-shortcuts">
              <kbd>⌘</kbd>
              <kbd>K</kbd>
            </div>
          </div>
          <div className="jc-code-card">
            <span>&lt;HeadlineUtama&gt;</span>
            <span>&lt;ValueProposition target="buyer" /&gt;</span>
            <span>&lt;CTAAction /&gt;</span>
            <span>&lt;/HeadlineUtama&gt;</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "chart") {
    return (
      <div className="jc-chart-panel" aria-hidden="true">
        <div className="jc-about-content-card">
          <div className="jc-chart-header">
            <strong>Lead Quality</strong>
            <em>Naik</em>
            <small>+24.5% Conv. Rate</small>
          </div>
          <div className="jc-chart">
            {[50, 50, 78, 44, 58, 34, 50, 50].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "result") {
    return (
      <div className="jc-result-card" aria-hidden="true">
        <div className="jc-result-inner">
          <div className="jc-result-brand">
            <img src="/figma-about/brand-logo.svg" alt="" loading="lazy" decoding="async" />
            <div>
              <strong>Brand Anda</strong>
              <p>website.com &gt; landing-page</p>
            </div>
          </div>
          <div className="jc-result-copy">
            <b>Landing Page Copy | Campaign Launch</b>
            <p>Narasi utama, benefit, proof point, dan CTA dibuat dalam satu alur yang jelas untuk calon pembeli.</p>
          </div>
          <div className="jc-result-tags">
            <span>Siap Publish</span>
            <span>SEO Friendly</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="jc-badge-cloud" aria-hidden="true">
      <div>
        {["Profesional", "Strategic", "Lead-Focused"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div>
        {["Trust-Driven", "Modern Website", "Conversion Flow", "Strategic UX"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div>
        {["Simple", "Growth Ready", "Built to Convert"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  return (
    <div className={`jc-service-visual jc-service-visual-${type}`} aria-hidden="true">
      {type === "screen" && (
        <img className="jc-service-browser" src="/figma-services/web-mockup.webp" alt="" loading="lazy" decoding="async" />
      )}
      {type === "phones" && (
        <img className="jc-service-phones" src="/figma-services/phone-mockup.webp" alt="" loading="lazy" decoding="async" />
      )}
      {type === "ui" && (
        <div className="jc-service-ui-scene">
          <div className="jc-service-soft-icon jc-service-soft-icon-figma">
            <img src="/figma-services/figma.svg" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="jc-service-soft-icon jc-service-soft-icon-miro">
            <img src="/figma-services/miro.svg" alt="" loading="lazy" decoding="async" />
          </div>
          <span className="jc-service-pill jc-service-pill-pink">Web Copy</span>
          <span className="jc-service-pill jc-service-pill-blue">Ad Copy</span>
          <img className="jc-service-cursor jc-service-cursor-one" src="/figma-services/cursor.svg" alt="" loading="lazy" decoding="async" />
          <img className="jc-service-cursor jc-service-cursor-two" src="/figma-services/cursor.svg" alt="" loading="lazy" decoding="async" />
          <div className="jc-service-rating">
            <p>
              <span>Trust</span>
              <b>9.0</b>
            </p>
            <i>
              <em />
            </i>
            <p>
              <span>Clarity</span>
              <b>9.4</b>
            </p>
            <i>
              <em />
            </i>
            <div className="jc-service-controls">
              <span />
              <span />
              <span />
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>
      )}
      {type === "network" && (
        <div className="jc-service-network">
          <span className="jc-service-status" />
          <div className="jc-service-db">
            <img src="/figma-services/database.svg" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="jc-service-node jc-service-node-code">
            <img src="/figma-services/code.svg" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="jc-service-node jc-service-node-github">
            <img src="/figma-services/github.svg" alt="" loading="lazy" decoding="async" />
          </div>
          <span className="jc-service-node jc-service-node-cta">API</span>
          <i className="jc-service-line jc-service-line-one" />
          <i className="jc-service-line jc-service-line-two" />
          <i className="jc-service-line jc-service-line-three" />
          <i className="jc-service-line jc-service-line-four" />
        </div>
      )}
    </div>
  );
}
