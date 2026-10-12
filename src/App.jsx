import { useEffect, useRef, useState } from 'react';
import { cases, featuredProjects } from './data.js';

const sectionIds = ['home', 'work', 'about', 'experience', 'contact'];
const marqueeItems = ['Product surveys', 'Marketing leadership', 'QA & product testing', 'Community operations', 'Partnership outreach', 'Remote collaboration'];
const skills = ['Customer support', 'Complaint resolution', 'Escalation management', 'User surveys', 'Product discovery', 'Marketing strategy', 'Partnership outreach', 'Community engagement', 'QA & test feedback', 'Excel reporting'];
const tools = ['Google Workspace', 'Slack', 'ClickUp', 'Discord', 'Telegram', 'Microsoft Excel & Word', 'X (Twitter)', 'LinkedIn', 'Zoom'];
const roles = [
  ['Rooli', 'Co-founder & Head of Growth · Product surveys, marketing strategy, outreach and QA', 'Selected project'],
  ['Biooli', 'Co-founder & Head of Growth · Marketing strategy, outreach and substantial QA and product testing', 'Selected project'],
  ['Recon Labs', 'Customer Support Specialist · Resolved 15-30 daily tickets and escalated recurring payment issues', 'Nov 2023 - Sep 2025'],
  ['CryptoJack Media', 'Marketing Executive & Operations Coordinator · 2,000+ project contacts, 200+ partnerships, client coordination and Excel reporting', 'Dec 2024 - Dec 2025'],
  ['Kurve', 'Marketing Executive Intern · Prospect research, outreach and documentation', 'Oct 2024 - Apr 2025'],
  ['TeleSwap', 'Community Manager · Discord and Telegram engagement and support', 'Nov 2024 - May 2025'],
  ['PawX', 'Community Moderator · Member engagement, onboarding and issue resolution', 'Jun 2024 - Sep 2024'],
  ['Cassava Network', 'Community Moderator · Community guidelines, member support and event engagement', 'Feb 2023 - Sep 2024'],
  ['Movepad', 'Community Moderator · Discussions, member onboarding and engagement', 'Sep 2021 - Jun 2023'],
];

function RailIcon({ id }) {
  if (id === 'home') return <><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></>;
  if (id === 'work') return <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></>;
  if (id === 'about') return <><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></>;
  if (id === 'experience') return <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></>;
  return <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H4l1.5-3A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11h9"/></>;
}

function Header({ activeSection, scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (scrolled) setMobileOpen(false);
  }, [scrolled]);

  const closeMenu = () => setMobileOpen(false);

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="top">
      <div className="wrap nav">
        <a href="#home" className="brand">Richard Obenze</a>
        <button className="menu" type="button" aria-expanded={mobileOpen} aria-controls="navlinks" aria-label="Open menu" inert={scrolled} onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? '×' : '☰'}</button>
        <nav className={`navlinks${mobileOpen ? ' open' : ''}`} id="navlinks" inert={scrolled}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="navcontact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
    <nav className="scroll-rail" aria-label="Quick section navigation" aria-hidden={!scrolled} inert={!scrolled}>
      {sectionIds.map((id) => {
        const label = id[0].toUpperCase() + id.slice(1);
        const active = activeSection === id;
        return <a key={id} href={`#${id}`} className={`rail-link${active ? ' is-active' : ''}`} aria-label={label} title={label} aria-current={active ? 'location' : undefined}>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><RailIcon id={id}/></svg>
          <span className="rail-tooltip" aria-hidden="true">{label}</span>
        </a>;
      })}
    </nav>
  </>;
}

function ExpandGroup({ heading, id, items, initialCount = 3 }) {
  const [expanded, setExpanded] = useState(false);
  return <div className="contrib-group">
    <h3 className="contrib-heading">{heading}</h3>
    <div className="chips" id={id}>
      {items.map((item, index) => {
        const extra = index >= initialCount;
        return <span key={item} className={`chip${extra ? ' extra-chip' : ''}${extra && expanded ? ' revealed' : ''}`} hidden={extra && !expanded} style={extra && expanded ? { animationDelay: `${Math.min((index - initialCount) * 35, 210)}ms` } : undefined}>{item}</span>;
      })}
    </div>
    <button type="button" className="more-btn" data-expand={id} aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>{expanded ? 'See less ↑' : 'See more ↓'}</button>
  </div>;
}

function CaseModal({ caseKey, onClose }) {
  const closeRef = useRef(null);
  const data = caseKey ? cases[caseKey] : null;

  useEffect(() => {
    if (!data) return undefined;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const focusable = [...document.querySelectorAll('.modal.open button, .modal.open a[href]')];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  return <div className="modal open" role="dialog" aria-modal="true" aria-labelledby="dialogtitle" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <div className="dialog">
      <button ref={closeRef} className="close" type="button" aria-label="Close case study" onClick={onClose}>×</button>
      <div id="modalcontent">
        <div className="casehero">
          <div className="casehero-top"><span className="case-kicker">{data.tag}</span></div>
          <h2 id="dialogtitle">{data.title}</h2>
          <p className="intro">{data.intro}</p>
          <span className="casehero-rule" aria-hidden="true"/>
        </div>
        <div className="casebody">
          <div className="case-section-heading"><span>My contributions</span><span>{String(data.blocks.length).padStart(2, '0')} focus areas</span></div>
          <div className="casegrid">
            {data.blocks.map(([title, copy], index) => <div className="case" key={title}><span className="case-number">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="casefooter"><span className="casefooter-label">THE BIG PICTURE</span><div><strong>The thread connecting this work:</strong> {data.take}</div></div>
          <div className="caseactions">
            {data.url && <a className="btn dark" target="_blank" rel="noopener" href={data.url}>{data.urltext}</a>}
            <a className={data.url ? 'btn light' : 'btn dark'} href="https://calendly.com/richard-obenze/rooli" target="_blank" rel="noopener">{data.url ? 'Ask me about this ↗' : (data.urltext || 'Ask me about this ↗')}</a>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function App() {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [modalKey, setModalKey] = useState(null);
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const previousFocus = useRef(null);
  const project = featuredProjects[featureIndex];

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const isScrolled = window.scrollY > 160;
      setScrolled(isScrolled);
      document.body.classList.toggle('has-icon-rail', isScrolled);
      const probe = window.scrollY + window.innerHeight * 0.65;
      let current = 'home';
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= probe) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 85) current = 'contact';
      setActiveSection(current);
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('hashchange', requestUpdate);
    requestUpdate();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('hashchange', requestUpdate);
      document.body.classList.remove('has-icon-rail');
    };
  }, []);

  const openCase = (key, event) => {
    previousFocus.current = event.currentTarget;
    setModalKey(key);
  };
  const closeCase = () => {
    setModalKey(null);
    requestAnimationFrame(() => previousFocus.current?.focus());
  };
  const moveFeature = (direction) => setFeatureIndex((index) => (index + direction + featuredProjects.length) % featuredProjects.length);

  return <>
    <Header activeSection={activeSection} scrolled={scrolled}/>
    <main id="main">
      <section className="wrap hero" id="home">
        <div>
          <div className="availability"><span className="dot" aria-hidden="true"/> Available for remote opportunities</div>
          <h1>People.<br/><span className="product-accent">Product.</span><br/>Growth.</h1>
          <p className="lead">I bring together <strong>customer support, product research, growth and community management</strong> to help teams understand their users, solve real problems and build lasting relationships.</p>
          <div className="heroactions">
            <a className="btn dark" href="#work" aria-label="Explore selected work" title="Explore selected work"><span className="heroaction-label">Explore selected work ↓</span><svg className="heroaction-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg></a>
            <a className="btn light" href="/Richard_Obenze_ATS_Resume.pdf" download="Richard_Obenze_ATS_Resume.pdf" type="application/pdf" aria-label="Download Richard Obenze ATS-friendly CV as PDF" title="Download CV"><span className="heroaction-label">Download CV <span aria-hidden="true">↓</span></span><svg className="heroaction-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4"/></svg></a>
            <a className="btn light" href="mailto:chineduobenze@gmail.com?subject=Portfolio%20enquiry%20for%20Richard%20Obenze" aria-label="Email me" title="Email me"><span className="heroaction-label">Email me ↗</span><svg className="heroaction-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg></a>
          </div>
        </div>
        <aside className="sideinfo" aria-label="Portfolio highlights"><div className="sideinfo-label">NUMBERS THAT TELL A STORY <span>↗</span></div><div><div className="num">200+</div><p>Partnerships secured through structured outreach.</p></div><div><div className="num">15k+</div><p>Largest community moderated across Discord and Telegram.</p></div><div><div className="num">15-30</div><p>Customer support tickets handled daily at Recon Labs.</p></div></aside>
      </section>

      <div className="wrap marquee" aria-label={marqueeItems.join(', ')}><div className="marquee-track">{[false, true].map((duplicate) => <div className="marquee-set" aria-hidden={duplicate || undefined} key={String(duplicate)}>{marqueeItems.map((item) => <span key={item}>{item}</span>)}</div>)}</div></div>

      <section className="section wrap" id="work">
        <div className="sectionhead"><div><div className="eyebrow">Featured work</div><h2>Work that connects<br/>users and product.</h2></div><p>Selected work across product, customer support and community. Use the arrows to explore my featured products.</p></div>
        <div className="featurewrap">
          <div className="featuretoolbar"><div className="featuretitle">Product spotlight <span className="feature-count" aria-label={`Project ${featureIndex + 1} of ${featuredProjects.length}`}>{String(featureIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}</span></div><div className="arrows" aria-label="Switch featured product"><button className="arrowbtn" type="button" aria-label="Show previous featured project" onClick={() => moveFeature(-1)}>←</button><button className="arrowbtn" type="button" aria-label="Show next featured project" onClick={() => moveFeature(1)}>→</button></div></div>
          <section className="feature" aria-live="polite">
            <div className="featurevisual"><div className="featuremeta"><div><div className="featurebrand">{project.brand}</div><small>{project.subbrand}</small></div></div><div className="platformcard"><div className="platformtop"><span>{project.labels[0]}</span><span>{project.labels[1]}</span></div><div className="platformgrid">{project.items.map((item) => <div className="platformitem" key={item.title}><strong>{item.title}</strong><span>{item.text}</span></div>)}</div></div><p className="visualquote">{project.quote}</p></div>
            <div className="featurebody"><span className="tag">{project.tag}</span><h3>{project.heading}</h3><p>{project.copy1}</p><p>{project.copy2}</p><div className="statlist">{project.stats.map((stat) => <div className="stat" key={stat.title}><strong>{stat.title}</strong><span>{stat.text}</span></div>)}</div><button className="linkbutton" type="button" data-case={project.key} onClick={(event) => openCase(project.key, event)}>View full case study ↗</button></div>
          </section>
        </div>
        <div className="selected">
          <article className="miniwork"><span className="tag">Marketing</span><h3>CryptoJack Media</h3><p>Reached 2,000+ Web3 projects, secured 200+ partnerships and kept reporting organised.</p><button className="linkbutton" type="button" data-case="cryptojack" onClick={(event) => openCase('cryptojack', event)}>View highlights ↗</button></article>
          <article className="miniwork"><span className="tag">Community</span><h3>TeleSwap</h3><p>Managed 3,000+ member Telegram and Discord communities and supported 200+ users.</p><button className="linkbutton" type="button" data-case="teleswap" onClick={(event) => openCase('teleswap', event)}>View highlights ↗</button></article>
          <article className="miniwork"><span className="tag">Customer Support</span><h3>Recon Labs</h3><p>Handled 15-30 support tickets daily on a payment platform, escalated recurring issues and supported customers across multiple channels.</p><button className="linkbutton" type="button" data-case="recon" onClick={(event) => openCase('recon', event)}>View highlights ↗</button></article>
        </div>
      </section>

      <div className="rule wrap"/>
      <section className="section wrap" id="about">
        <div className="sectionhead"><div><div className="eyebrow">About</div><h2>Curious about<br/>the why.</h2></div></div>
        <div className="aboutgrid"><p className="abouttext">I work where <em>people, products and growth</em> meet. I listen to what users are struggling with, help teams respond clearly and turn recurring problems into practical product feedback.</p><div><p>My experience spans customer support, Web3 communities, partnerships and growth. As a co-founder of Rooli and Biooli, I have also worked on product research, marketing strategy, QA and product testing.</p><p>I bring user feedback, clear communication and a hands-on approach to helping teams improve products and customer experiences.</p><div className="eyebrow" style={{ margin: '30px 0 15px' }}>Where I contribute</div><ExpandGroup heading="Skills" id="skills-list" items={skills}/><ExpandGroup heading="Tools" id="tools-list" items={tools}/></div></div>
      </section>

      <div className="rule wrap"/>
      <section className="section wrap" id="experience">
        <div className="sectionhead"><div><div className="eyebrow">Experience</div><h2>Where I&apos;ve<br/>contributed.</h2></div><p>Customer support, growth, product work and community experience. Select a project card above to explore the work in more detail.</p></div>
        <div className="roles" id="experience-list">{roles.map(([company, copy, date], index) => { const extra = index >= 3; return <div className={`role${extra ? ' extra-role' : ''}${extra && experienceExpanded ? ' revealed' : ''}`} hidden={extra && !experienceExpanded} style={extra && experienceExpanded ? { animationDelay: `${Math.min((index - 3) * 35, 210)}ms` } : undefined} key={company}><b>{company}</b><p>{copy}</p><span className="date">{date}</span></div>; })}</div>
        <button type="button" className="more-btn" data-expand="experience-list" aria-expanded={experienceExpanded} onClick={() => setExperienceExpanded((value) => !value)}>{experienceExpanded ? 'See less ↑' : 'See more ↓'}</button>
      </section>

      <section className="wrap" id="contact"><div className="contact"><div><div className="eyebrow">Let&apos;s connect</div><h2>Let&apos;s make<br/>something matter.</h2><p>Let&apos;s discuss how I can contribute to your team&apos;s customer experience, growth or product goals.</p></div><div><a className="btn" href="https://calendly.com/richard-obenze/rooli" target="_blank" rel="noopener noreferrer">Book a conversation <span className="hello-arrow" aria-hidden="true">↗</span></a></div></div></section>
    </main>

    <footer className="wrap footer"><span>© {new Date().getFullYear()} Richard Obenze. Built with intention.</span><span><a href="https://www.linkedin.com/in/richard-obenze-18818a1b4/" target="_blank" rel="noopener">LinkedIn ↗</a> &nbsp; · &nbsp; <a href="mailto:chineduobenze@gmail.com">Email ↗</a> &nbsp; · &nbsp; <a href="https://t.me/richiz1" target="_blank" rel="noopener noreferrer">Telegram ↗</a></span><button className="to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></footer>
    <CaseModal caseKey={modalKey} onClose={closeCase}/>
  </>;
}

export default App;
