import { ContactForm } from "@/components/contact-form"
import { certifications, education, experience, links, projects, services, skills } from "@/lib/portfolio-data"

const externalProps = { target: "_blank", rel: "noreferrer" } as const

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="project-card" style={{ "--card-index": index } as React.CSSProperties}>
      <div className="project-card__top">
        <p className="project-number">{String(index + 1).padStart(2, "0")}</p>
        <div className="project-card__intro">
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="tag-list" aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </div>
        <a className="outline-button" href={project.href} {...externalProps}>{project.linkLabel ?? "View project"}<span aria-hidden="true"> ↗</span></a>
      </div>
      <div className="project-card__body">
        <div className="project-card__images">{project.images.map((image) => <img key={image} src={image} alt={`${project.title} visual detail`} loading="lazy" />)}</div>
        <div className={`project-art project-art--${project.art}`} aria-label={`${project.title} project artwork`} role="img">
          <span className="project-art__orb" /><span className="project-art__label">{project.artLabel}</span><span className="project-art__caption">DESIGNED & BUILT BY ANSH</span>
        </div>
      </div>
      {project.relatedLinks && <div className="related-project-links" aria-label="Hospitality website links">{project.relatedLinks.map((item) => <a key={item.label} href={item.href} {...externalProps}>{item.label} ↗</a>)}</div>}
    </article>
  )
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <nav className="site-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
        <div className="hero-title-wrap"><h1>Hi, I’m Ansh</h1></div>
        <div className="hero-monogram" aria-label="Ansh Vishwakarma monogram"><span>AV</span><i aria-hidden="true" /></div>
        <div className="hero-bottom">
          <p>I build and ship thoughtful web products from first sketch to production — with a bias for clear systems, useful interfaces, and momentum.</p>
          <a className="contact-button" href="#contact">Let’s work together <span aria-hidden="true">↗</span></a>
        </div>
        <p className="hero-location">KANPUR, INDIA <span>AVAILABLE FOR SELECT PROJECTS</span></p>
      </section>

      <section className="marquee" aria-label="Areas of work">
        <div className="marquee-row marquee-row--forward"><div>{[...skills.marquee, ...skills.marquee].map((item, i) => <span key={`a${i}`}>{item} <b>✦</b></span>)}</div></div>
        <div className="marquee-row marquee-row--reverse"><div>{[...skills.marquee].reverse().concat([...skills.marquee].reverse()).map((item, i) => <span key={`b${i}`}>{item} <b>✦</b></span>)}</div></div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-orbit about-orbit--one" aria-hidden="true" /><div className="about-orbit about-orbit--two" aria-hidden="true" />
        <SectionEyebrow>01 / A little context</SectionEyebrow>
        <h2 className="display-heading">Useful software,<br />thoughtfully shipped.</h2>
        <p className="about-copy">I’m Ansh Vishwakarma, a full-stack developer and founder based in Kanpur, India. I combine product thinking, responsive interfaces, APIs, data, and deployment to turn rough ideas into dependable web experiences.</p>
        <div className="metric-row"><div><strong>6+</strong><span>live projects</span></div><div><strong>5+</strong><span>client engagements</span></div><div><strong>~40%</strong><span>faster time-to-market*</span></div><div><strong>~30%</strong><span>higher lead conversion*</span></div></div>
        <p className="metric-note">*Approximate outcomes reported in my resume.</p><a className="text-link" href="#contact">Let’s work together <span aria-hidden="true">↗</span></a>
      </section>

      <section className="services-section" id="services"><div className="section-wrap services-inner">
        <SectionEyebrow>What I can help with</SectionEyebrow><h2 className="display-heading display-heading--dark">What I do</h2>
        <div className="services-list">{services.map((service, index) => <article className="service-row" key={service.title}><strong className="service-number">{String(index + 1).padStart(2, "0")}</strong><div><h3>{service.title}</h3><p>{service.description}</p></div></article>)}</div>
      </div></section>

      <section className="projects-section" id="projects"><div className="section-wrap projects-inner">
        <SectionEyebrow>02 / Selected work</SectionEyebrow><h2 className="display-heading projects-heading">Projects</h2>
        <div className="project-stack">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        <div className="project-more"><a className="contact-button" href={links.github} {...externalProps}>More on GitHub <span aria-hidden="true">↗</span></a></div>
      </div></section>

      <section className="career-section section-wrap" id="experience">
        <div className="career-heading"><SectionEyebrow>03 / The path so far</SectionEyebrow><h2 className="display-heading">Experience<br />& learning</h2></div>
        <div className="career-columns">
          <div><h3 className="subsection-title">Experience</h3><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><p className="timeline-date">{item.date}</p><h4>{item.role}</h4><p className="timeline-org">{item.href ? <a href={item.href} {...externalProps}>{item.organization} ↗</a> : item.organization}</p><p className="timeline-copy">{item.description}</p></article>)}</div></div>
          <div><h3 className="subsection-title">Education</h3><div className="timeline">{education.map((item) => <article className="timeline-item" key={item.title}><p className="timeline-date">{item.date}</p><h4>{item.title}</h4><p className="timeline-org">{item.organization}</p><p className="timeline-copy">{item.details}</p></article>)}</div>
            <h3 className="subsection-title subsection-title--spaced">Skills</h3><div className="skill-groups">{skills.groups.map((group) => <p key={group.title}><strong>{group.title}</strong><span>{group.items.join(" · ")}</span></p>)}</div>
            <h3 className="subsection-title subsection-title--spaced">Certifications & leadership</h3><ul className="cert-list">{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="social-proof-links"><span>LinkedIn updates</span>{links.linkedinUpdates.map((item) => <a key={item} href={item} {...externalProps}>View update ↗</a>)}</div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner">
        <div className="contact-heading"><SectionEyebrow>04 / Have a project in mind?</SectionEyebrow><h2 className="display-heading">Let’s create.</h2><p>Tell me a little about what you’re building. I’ll get back to you by email.</p>
          <div className="contact-socials"><a href={links.github} {...externalProps}>GitHub ↗</a><a href={links.linkedin} {...externalProps}>LinkedIn ↗</a><a href={links.email}>Email ↗</a><a href={links.currentPortfolio} {...externalProps}>Current portfolio ↗</a></div>
        </div><ContactForm />
      </div></section>

      <footer className="site-footer section-wrap"><a href="#home" className="footer-mark">AV<span> / ANSH VISHWAKARMA</span></a><p>Full-stack developer & founder · Kanpur, India</p><a href="#home">Back to top ↑</a></footer>
    </main>
  )
}
