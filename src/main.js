import './styles.css';

const cases={
  rooli:{tag:'FEATURED CASE STUDY · CO-FOUNDER / HEAD OF GROWTH / PRODUCT / QA',title:'Rooli: co-founder, Head of Growth, product research and QA',intro:'As a co-founder of Rooli, I contributed in building social media management platform for creators, social media managers, agencies and brands to help them in managing and scheduling contents, team and client collaboration and post approvals, AI content generation and many more.',blocks:[['Product research & surveys','Conducted product surveys to understand user workflows, recurring frustrations and the kinds of experiences agencies, brands and social media managers need from the platform.'],['Product management contribution','Brought user needs into feature discussions and helped think through how workflows should feel in practice, especially around post reviews, collaboration and client approvals.'],['Head of Growth & Marketing Strategy','Contributed to marketing strategy, led outreach to prospective users and agencies, email marketing, meetings and product pitches, while communicating the platform through relatable user problems.'],['QA & product testing','Tested product journeys, identified usability issues and workflow gaps, and shared feedback to improve the day-to-day experience for users.']],take:'A cross-functional role connecting user insight, product thinking, marketing communication and quality assurance.',url:'https://rooli.co',urltext:'Visit Rooli ↗'},
  biooli:{tag:'FEATURED CASE STUDY · CO-FOUNDER / HEAD OF GROWTH / QA',title:'Biooli - co-founder, Head of Growth, QA and product testing',intro:'Biooli is a free link-in-bio platform for creators, consultants, small businesses and communities. As co-founder and Head of Growth, I contributed to marketing strategy and took a leading role in QA and product testing.',blocks:[['QA ownership','Did most of the QA and product testing work on the Biooli side, checking key user journeys and helping identify where the product needed attention before release.'],['Flow testing','Tested user journeys involving handle claiming, profile setup, sign-in and navigation, with attention to clarity and usability.'],['Feedback for improvement','Documented issues, flagged friction points and gave feedback that could help the team improve the product experience.'],['Head of Growth & Marketing Strategy','Contributed to marketing strategy, reached out to prospective users through email campaigns, held meetings and pitched the product to target audiences. Worked with the team to communicate product feedback.']],take:'Biooli gave me hands-on experience contributing to a creator-focused product through QA, usability feedback and user acquisition work.',url:'https://bioo.li',urltext:'Visit Biooli ↗'},
  recon:{tag:'CUSTOMER SUPPORT / FINTECH',title:'Recon Labs - helping users resolve payment issues',intro:'Customer Support Specialist · November 2023 - September 2025',blocks:[['Multichannel customer care','Handled 15-30 customer support tickets daily across chat, email, calls and social channels for a contactless payments app.'],['Payment issue resolution','Assisted users experiencing failed transactions and other app-related questions, prioritising clarity and empathetic communication.'],['Escalation and feedback','Identified recurring transaction failure patterns and escalated them to product and engineering teams for investigation.'],['Support operations','Maintained organised records and consistent responses while handling daily requests across multiple channels.']],take:'Customer support is more than answering questions. It means identifying patterns, communicating clearly and making sure user problems reach the right people.'},
  cryptojack:{tag:'MARKETING & PARTNERSHIPS',title:'CryptoJack Media - meaningful partnerships at scale',intro:'Marketing Lead · December 2024 - December 2025',blocks:[['Outreach & partnerships','Researched and contacted 2,000+ Web3 projects through X, LinkedIn and email, securing 200+ direct partnerships.'],['Coordination','Created and managed collaboration groups to maintain communication between clients and internal teams.'],['Tracking & reporting','Maintained Excel documentation covering 2,000+ projects, with charts to track performance.']],take:'A strong mix of prospecting, relationship building and structured reporting.'},
  teleswap:{tag:'COMMUNITY MANAGEMENT',title:'TeleSwap - keeping a community engaged',intro:'Community Manager · November 2024 - May 2025',blocks:[['Community operations','Managed 3,000+ Discord and Telegram members through updates, announcements and guideline moderation.'],['Member support','Supported 200+ users by addressing questions and helping resolve problems.'],['Events','Hosted community activities and coordinated team-organised events.']],take:'Community management combines engagement with responsiveness and trust.'},
  cassava:{tag:'COMMUNITY MODERATION',title:'Cassava Network - support at community scale',intro:'Community Moderator · February 2023 - September 2024',blocks:[['Moderation & safety','Moderated Discord and Telegram communities of 15,000+ members and enforced community guidelines.'],['Issue escalation','Resolved user problems and escalated technical concerns to development teams.'],['Engagement & listening','Supported weekly engagement plans, events and user-feedback collection.']],take:'Reliable moderation and useful feedback help build healthier communities.'}
};

const featuredProjects=[
  {
    key:'rooli',
    brand:'Rooli',
    subbrand:'SOCIAL MEDIA MANAGEMENT PLATFORM',
    tag:'Co-founder / Head of Growth / Product / QA',
    heading:'Rooli: building a clearer experience for social media teams.',
    copy1:'As a Rooli co-founder and Head of Growth, I contributed to marketing strategy, product surveys, outreach, email marketing, meetings and pitching to prospective users and agencies, alongside QA and testing. My work stayed close to the user experience and the needs of the people using the platform.',
    copy2:'I helped connect feedback from social media managers, agencies and brands with product discussions, tested publishing and approval experiences, and pitched Rooli to prospective users through outreach, email campaigns and meetings.',
    quote:'A product becomes more meaningful when the workflow feels clear, practical and easy for real people to use.',
    labels:['Inside the platform','ROOLI FEATURES →'],
    items:[
      {title:'Content Scheduler',text:'Plan posts and manage publishing from one place.'},
      {title:'Client Approvals',text:'Support review, feedback, revisions and approval trails.'},
      {title:'Team Roles',text:'Different permissions for contributors, editors and managers.'},
      {title:'Analytics & Reports',text:'Track performance and keep reporting organised.'}
    ],
    stats:[
      {title:'My role',text:'Co-founder, Head of Growth, product surveys, QA and testing.'},
      {title:'Main lens',text:'How the workflow feels for agencies, brands, clients and SMMs.'},
      {title:'What I added',text:'Feedback on usability, friction points and product communication.'},
      {title:'Best fit',text:'Cross-functional work connecting people, product and growth.'}
    ]
  },
  {
    key:'biooli',
    brand:'Biooli',
    subbrand:'LINK-IN-BIO PLATFORM FOR CREATORS',
    tag:'Co-founder / Head of Growth / QA / Product testing',
    heading:'Biooli - improving the creator profile experience.',
    copy1:'As a Biooli co-founder and Head of Growth, I contributed to marketing strategy through outreach to prospective users, email marketing, meetings and product pitches. I also handled a significant part of the QA and product testing effort.',
    copy2:'My product testing focused on the experience of claiming a handle, setting up a public profile, signing in and navigating core journeys. I also supported outreach, email marketing, meetings and product pitches.',
    quote:'Good testing is not just about finding bugs. It is about protecting the user experience before users ever feel the problem.',
    labels:['Inside the platform','BIOOLI FEATURES →'],
    items:[
      {title:'Claim your handle',text:'Create a personal bioo.li/@yourname link.'},
      {title:'Custom profile page',text:'Add a photo, links and a personal colour.'},
      {title:'Link analytics',text:'Review views, clicks and top-performing links.'},
      {title:'Rooli integration',text:'Use the same account to access Rooli.'}
    ],
    stats:[
      {title:'My contribution',text:'Co-founder and Head of Growth, with major involvement in QA and product testing.'},
      {title:'Focus areas',text:'Handle claiming, profile setup, sign-in and usability.'},
      {title:'What I brought',text:'QA observations, usability feedback and growth outreach.'},
      {title:'The product',text:'Free link-in-bio pages, analytics and shared Rooli sign-in.'}
    ]
  }
];

const modal=document.getElementById('modal');
const content=document.getElementById('modalcontent');
let previouslyFocused=null;
function showCase(key){
  const d=cases[key]; if(!d) return;
  previouslyFocused=document.activeElement;
  const actions = d.url
    ? `<div class="caseactions"><a class="btn dark" target="_blank" rel="noopener" href="${d.url}">${d.urltext}</a><a class="btn light" href="https://calendly.com/richard-obenze/rooli" target="_blank" rel="noopener">Ask me about this ↗</a></div>`
    : `<div class="caseactions"><a class="btn dark" href="https://calendly.com/richard-obenze/rooli" target="_blank" rel="noopener">${d.urltext || 'Ask me about this ↗'}</a></div>`;
  content.innerHTML = `<div class="casehero"><div class="casehero-top"><span class="case-kicker">${d.tag}</span></div><h2 id="dialogtitle">${d.title}</h2><p class="intro">${d.intro}</p><span class="casehero-rule" aria-hidden="true"></span></div><div class="casebody"><div class="case-section-heading"><span>My contributions</span><span>${String(d.blocks.length).padStart(2,'0')} focus areas</span></div><div class="casegrid">${d.blocks.map((b,i)=>`<div class="case"><span class="case-number">${String(i+1).padStart(2,'0')}</span><h3>${b[0]}</h3><p>${b[1]}</p></div>`).join('')}</div><div class="casefooter"><span class="casefooter-label">THE BIG PICTURE</span><div><strong>The thread connecting this work:</strong> ${d.take}</div></div>${actions}</div>`;
  modal.classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('close').focus();
}
function closeCase(){modal.classList.remove('open');document.body.style.overflow='';if(previouslyFocused)previouslyFocused.focus();}
document.querySelectorAll('[data-case]').forEach(el=>el.addEventListener('click',()=>showCase(el.dataset.case)));
document.getElementById('close').addEventListener('click',closeCase);
modal.addEventListener('click',e=>{if(e.target===modal)closeCase()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeCase();if(e.key==='Tab'&&modal.classList.contains('open')){const f=modal.querySelectorAll('button,a[href]');const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});

const featureEls={
  brand:document.getElementById('featureBrand'),
  subbrand:document.getElementById('featureSubbrand'),
  tag:document.getElementById('featureTag'),
  heading:document.getElementById('featureHeading'),
  copy1:document.getElementById('featureCopy1'),
  copy2:document.getElementById('featureCopy2'),
  grid:document.getElementById('platformGrid'),
  quote:document.getElementById('featureQuote'),
  stats:document.getElementById('featureStats'),
  modalBtn:document.getElementById('featureModalBtn'),
  labelLeft:document.getElementById('platformLabelLeft'),
  labelRight:document.getElementById('platformLabelRight')
};
let currentFeature=0;
function renderFeature(index){
  const p=featuredProjects[index];
  featureEls.brand.textContent=p.brand;
  const counter=document.getElementById("featureCount"); if(counter){counter.textContent=String(index+1).padStart(2,"0")+" / "+String(featuredProjects.length).padStart(2,"0");counter.setAttribute("aria-label",`Project ${index+1} of ${featuredProjects.length}`)}
  featureEls.subbrand.textContent=p.subbrand;
  featureEls.tag.textContent=p.tag;
  featureEls.heading.textContent=p.heading;
  featureEls.copy1.textContent=p.copy1;
  featureEls.copy2.textContent=p.copy2;
  featureEls.labelLeft.textContent=p.labels[0];
  featureEls.labelRight.textContent=p.labels[1];
  featureEls.quote.textContent=p.quote;
  featureEls.grid.innerHTML=p.items.map(item=>`<div class="platformitem"><strong>${item.title}</strong><span>${item.text}</span></div>`).join('');
  featureEls.stats.innerHTML=p.stats.map(stat=>`<div class="stat"><strong>${stat.title}</strong><span>${stat.text}</span></div>`).join('');
  featureEls.modalBtn.dataset.case=p.key;
}
function moveFeature(dir){currentFeature=(currentFeature+dir+featuredProjects.length)%featuredProjects.length;renderFeature(currentFeature)}
document.getElementById('prevFeature').addEventListener('click',()=>moveFeature(-1));
document.getElementById('nextFeature').addEventListener('click',()=>moveFeature(1));
renderFeature(currentFeature);

const menu=document.getElementById('menu');
const links=document.getElementById('navlinks');
menu.addEventListener('click',()=>{const v=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(v));menu.textContent=v?'×':'☰'});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
document.getElementById('topbtn').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('[data-expand]').forEach(btn=>btn.addEventListener('click',()=>{
  const list=document.getElementById(btn.dataset.expand);
  const expanding=btn.getAttribute('aria-expanded')!=='true';
  list.querySelectorAll('.extra-chip, .extra-role').forEach((item,index)=>{
    item.hidden=!expanding;
    item.classList.remove('revealed');
    item.style.animationDelay='';
    if(expanding){
      void item.offsetWidth;
      item.classList.add('revealed');
      item.style.animationDelay=`${Math.min(index*35,210)}ms`;
    }
  });
  btn.setAttribute('aria-expanded',String(expanding));
  btn.textContent=expanding?'See less ↑':'See more ↓';
}));
document.getElementById('year').textContent=new Date().getFullYear();

// Keep the regular header menu at the top of the page, switching to an icon rail on scroll.
(function initScrollRail(){
  const rail=document.getElementById('scrollRail');
  const headerLinks=document.getElementById('navlinks');
  const mobileMenu=document.getElementById('menu');
  const railLinks=[...rail.querySelectorAll('[data-rail-target]')];
  const sectionIds=['home','work','about','experience','contact'];
  const sections=sectionIds.map(id=>document.getElementById(id));
  let queued=false;
  function update(){
    queued=false;
    const scrolled=window.scrollY>160;
    document.body.classList.toggle('has-icon-rail',scrolled);
    rail.inert=!scrolled;
    rail.setAttribute('aria-hidden',String(!scrolled));
    headerLinks.inert=scrolled;
    mobileMenu.inert=scrolled;
    if(scrolled&&headerLinks.classList.contains('open')){
      headerLinks.classList.remove('open');
      mobileMenu.setAttribute('aria-expanded','false');
      mobileMenu.textContent='☰';
    }
    const probe=window.scrollY+window.innerHeight*.65;
    let current='home';
    for(const section of sections){
      if(section && section.getBoundingClientRect().top+window.scrollY<=probe){current=section.id;}
    }
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-85){current='contact';}
    for(const link of railLinks){
      const active=link.dataset.railTarget===current;
      link.classList.toggle('is-active',active);
      if(active)link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    }
  }
  function requestUpdate(){if(!queued){queued=true;requestAnimationFrame(update)}}
  window.addEventListener('scroll',requestUpdate,{passive:true});
  window.addEventListener('resize',requestUpdate);
  window.addEventListener('hashchange',requestUpdate);
  requestUpdate();
})();
