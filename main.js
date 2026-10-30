/* KEDVIRA LAB — navigation, bilingual content and content rendering.
   All strings/records are edited centrally in content.js. No API calls. */
(function () {
  'use strict';
  const site = window.KEDVIRA_SITE;
  if (!site) { console.error('KEDVIRA content.js is missing.'); return; }
  const page = document.body.dataset.page || 'home';
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const escapeHTML = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = (value) => { try {const u = new URL(value);return ['https:','http:'].includes(u.protocol) ? u.href : '';} catch{return '';} };
  function icon(name, size = 27) {
    const paths = {
      graph:'<circle cx="4" cy="8" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 8L18 5M5 10L6 17M8 19H16M19 7L18 17M6 9L17 18"/>',
      image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="2"/><path d="m4 17 5-5 4 4 3-3 4 4"/>',
      book:'<path d="M12 21V6C9.3 4.2 6.7 4.1 3 5v14c4-1.1 6.9-.8 9 1Z"/><path d="M12 21V6c2.7-1.8 5.3-1.9 9-1v14c-4-1.1-6.9-.8-9 1Z"/>',
      brain:'<path d="M12 5a3 3 0 0 0-5.4-1.8A4.8 4.8 0 0 0 3.5 11 4.5 4.5 0 0 0 7 19a3 3 0 0 0 5-1.5Z"/><path d="M12 5a3 3 0 0 1 5.4-1.8A4.8 4.8 0 0 1 20.5 11 4.5 4.5 0 0 1 17 19a3 3 0 0 1-5-1.5Z"/><path d="M7 9c2-1 3 0 3 2M17 9c-2-1-3 0-3 2"/>',
      user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
      papers:'<path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/><path d="M11 3h7l3 3v7h-10Z"/><path d="M14 10h4M7 12h4M7 16h9"/>',
      arrow:'<path d="M7 17 17 7M8 7h9v9"/>'
    };
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.graph}</svg>`;
  }
  function pathGet(obj, path) {return path.split('.').reduce((acc,key)=>acc == null?undefined:acc[key],obj)}
  let lang = 'vi';
  function storeLanguage(value){try{localStorage.setItem('kedvira-lang',value)}catch{}}
  function storedLanguage(){try{return localStorage.getItem('kedvira-lang')}catch{return null}}
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const initial = ['vi','en'].includes(urlLang) ? urlLang : storedLanguage();
  if (initial === 'en') lang='en';
  function renderPillars(c) {
    $('#pillars-grid').innerHTML = c.pillars.items.map((p,i)=>`<article class="pillar-card"><div class="pillar-top"><div class="pillar-icon">${icon(['graph','image','book'][i],26)}</div><span class="pillar-num">0${i+1} / 03</span></div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p><div class="pillar-bottom"><span>${escapeHTML(p.tag)}</span><span>${escapeHTML(p.keywords)}</span></div></article>`).join('');
  }
  function renderResearch(c){
    const label={foundational:c.research.tagFoundational,domain:c.research.tagDomain,applied:c.research.tagApplied};
    $('#research-grid').innerHTML=c.research.areas.map(a=>`<article class="research-card" aria-labelledby="area-${a.id}"><div class="research-card-head"><span class="research-id">${a.id} / 04</span><span class="research-type">${escapeHTML(label[a.kind]||'')}</span></div><div class="research-icon">${icon(a.symbol,27)}</div><h3 id="area-${a.id}">${escapeHTML(a.title)}</h3><p class="research-vi">${escapeHTML(a.vi)}</p><p>${escapeHTML(a.description)}</p><div class="tag-row">${a.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div></article>`).join('');
  }
  function renderApproach(c){
    $('#approach-steps').innerHTML=c.approach.steps.map(s=>`<article class="approach-step"><span class="step-no">${escapeHTML(s.number)} /</span><div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.detail)}</p></div></article>`).join('');
  }
  function renderInitiatives(c){
    $('#initiative-grid').innerHTML=c.initiatives.items.map(a=>`<article class="initiative-card"><div class="initiative-top"><span class="initiative-num">KDV / ${escapeHTML(a.id)}</span><span class="initiative-type">${escapeHTML(a.tag)}</span></div><h3>${escapeHTML(a.title)}</h3><div class="initiative-vi">${escapeHTML(a.vi)}</div><p>${escapeHTML(a.description)}</p><div class="initiative-footer">${escapeHTML(c.initiatives.status)}</div></article>`).join('');
  }
  // Dedicated list pages. Sample rows are always explicitly labeled placeholders.
  function renderDirectoryPeople(c){
    const root=$('#directory-list');if(!root)return;
    const d=c.directory.people,shared=c.directory.shared;
    const people=(Array.isArray(site.settings.people)?site.settings.people:[]).filter(p=>p && String(p.name||'').trim());
    $('#directory-count').textContent=people.length?d.count(people.length):shared.pending;
    $('#directory-notice').textContent=people.length?shared.privacy:d.waiting;
    let rows;
    if(!people.length){
      rows=d.samples.map((p,i)=>`<li class="directory-row directory-row-placeholder person-directory-row">
        <span class="directory-no">${String(i+1).padStart(2,'0')}</span>
        <div class="directory-avatar is-sample">${icon('user',28)}</div>
        <div class="directory-main"><span class="directory-type">${escapeHTML(p.role)}</span><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.info)}</p></div>
        <span class="directory-placeholder-label">${escapeHTML(shared.example)}</span>
      </li>`).join('');
    }else{
      rows=people.map((p,i)=>{
        const name=String(p.name||'').trim(),initials=name.split(/\s+/).slice(-2).map(t=>t[0]||'').join('').toUpperCase();
        const role=lang==='vi'?(p.role_vi||p.role_en||''):(p.role_en||p.role_vi||'');
        const affiliation=lang==='vi'?(p.affiliation_vi||p.affiliation_en||''):(p.affiliation_en||p.affiliation_vi||'');
        const interests=lang==='vi'?(p.interests_vi||p.interests_en||''):(p.interests_en||p.interests_vi||'');
        const detail=[affiliation,interests].filter(Boolean).map(escapeHTML).join(' · ');
        const profile=safeUrl(p.profile);
        const externalImage=safeUrl(p.image);
        const localImage=typeof p.image==='string'&&/^assets\/people\/[a-z0-9_.-]+$/i.test(p.image)?p.image:'';
        const image=externalImage||localImage;
        return `<li class="directory-row person-directory-row">
          <span class="directory-no">${String(i+1).padStart(2,'0')}</span>
          <div class="directory-avatar">${image?`<img src="${escapeHTML(image)}" alt="" loading="lazy">`:escapeHTML(initials)}</div>
          <div class="directory-main"><span class="directory-type">${escapeHTML(role)}</span><h3>${escapeHTML(name)}</h3>${detail?`<p>${detail}</p>`:''}</div>
          <div class="directory-row-end">${profile?`<a class="directory-action-link" href="${escapeHTML(profile)}" target="_blank" rel="noopener noreferrer">${escapeHTML(shared.openProfile)} ↗</a>`:''}</div>
        </li>`;
      }).join('');
    }
    root.innerHTML=`<ol class="directory-list" aria-label="${escapeHTML(d.listTitle)}">${rows}</ol>`;
  }
  function renderDirectoryPublications(c){
    const root=$('#directory-list');if(!root)return;
    const d=c.directory.publications,shared=c.directory.shared;
    const entries=(Array.isArray(site.settings.publications)?site.settings.publications:[]).filter(p=>p&&String(p.title||'').trim());
    $('#directory-count').textContent=entries.length?d.count(entries.length):shared.pending;
    $('#directory-notice').textContent=entries.length?shared.privacy:d.waiting;
    let rows;
    if(!entries.length){
      rows=d.samples.map((p,i)=>`<li class="directory-row directory-row-placeholder publication-directory-row">
        <span class="directory-no">${String(i+1).padStart(2,'0')}</span>
        <div class="directory-main"><span class="directory-type">${escapeHTML(p.kind)}</span><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.meta)}</p></div>
        <span class="directory-placeholder-label">${escapeHTML(shared.example)}</span>
      </li>`).join('');
    }else{
      rows=entries.slice().sort((a,b)=>(Number(b.year)||0)-(Number(a.year)||0)).map((p,i)=>{
        const type=String(p.type||'other').toLowerCase();
        const label=d.types[type]||d.types.other;
        const doi=String(p.doi||'').trim();
        const doiLink=/^10\.\d{4,9}\/[a-z0-9._;():/\-]+$/i.test(doi)?`https://doi.org/${encodeURI(doi)}`:'';
        const link=safeUrl(p.url)||doiLink;
        const metadata=[p.venue,p.year].filter(Boolean).map(escapeHTML).join(' · ');
        return `<li class="directory-row publication-directory-row">
          <span class="directory-no">${String(i+1).padStart(2,'0')}</span>
          <div class="directory-main"><span class="directory-type">${escapeHTML(label)}</span><h3>${escapeHTML(p.title)}</h3>${p.authors?`<p class="directory-authors">${escapeHTML(p.authors)}</p>`:''}${metadata?`<p>${metadata}</p>`:''}${doi?`<p>DOI: ${escapeHTML(doi)}</p>`:''}</div>
          <div class="directory-row-end">${link?`<a class="directory-action-link" href="${escapeHTML(link)}" target="_blank" rel="noopener noreferrer">${escapeHTML(shared.viewPaper)} ↗</a>`:''}</div>
        </li>`;
      }).join('');
    }
    root.innerHTML=`<ol class="directory-list" aria-label="${escapeHTML(d.listTitle)}">${rows}</ol>`;
  }
  function renderContact(c){
    const settings=site.settings;
    const rows=[
      [c.contact.emailLabel,settings.email?`<a href="mailto:${encodeURIComponent(settings.email).replace('%40','@')}">${escapeHTML(settings.email)}</a>`:escapeHTML(c.contact.pending)],
      [c.contact.institutionLabel,settings.institution?(safeUrl(settings.institutionUrl)?`<a href="${escapeHTML(safeUrl(settings.institutionUrl))}" target="_blank" rel="noopener noreferrer">${escapeHTML(settings.institution)}</a>`:escapeHTML(settings.institution)):escapeHTML(c.contact.pending)],
      [c.contact.locationLabel,settings.location?escapeHTML(settings.location):escapeHTML(c.contact.pending)]
    ];
    $('#contact-details').innerHTML=rows.map(([a,b])=>`<div class="contact-row"><span class="contact-label">${escapeHTML(a)}</span><span class="contact-value">${b}</span></div>`).join('');
    const links=[];
    const github=safeUrl(settings.github),scholar=safeUrl(settings.scholar);
    if(github)links.push(`<a class="social-link" href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer">${escapeHTML(c.contact.github)} ↗</a>`);
    if(scholar)links.push(`<a class="social-link" href="${escapeHTML(scholar)}" target="_blank" rel="noopener noreferrer">${escapeHTML(c.contact.scholar)} ↗</a>`);
    if(settings.email)links.push(`<a class="social-link" href="mailto:${encodeURIComponent(settings.email).replace('%40','@')}">${escapeHTML(c.contact.emailAction)} ↗</a>`);
    $('#contact-links').innerHTML=links.join('');
  }
  function updateSeo(){
    const c=site[lang];
    const isHome=page==='home';
    const description=isHome?(lang==='en'?'KEDVIRA Lab — Knowledge Graphs, Semantic Image Retrieval and AI in Education.':'KEDVIRA Lab — Nhóm nghiên cứu Đồ thị tri thức, Truy xuất ảnh ngữ nghĩa và AI trong giáo dục.'):c.directory[page].lead;
    const title=isHome?('KEDVIRA Lab — '+(lang==='en'?'Knowledge-Driven AI Research':'Nghiên cứu AI dựa trên tri thức')):(c.directory[page].title+' | KEDVIRA Lab');
    document.title=title;
    const desc=$('meta[name="description"]');if(desc)desc.setAttribute('content',description);
    const ogTitle=$('meta[property="og:title"]');if(ogTitle)ogTitle.content=title;
    const ogDescription=$('meta[property="og:description"]');if(ogDescription)ogDescription.content=description;
    const url=safeUrl(site.settings.websiteUrl);
    if(url){
      const canonicalURL=new URL(isHome?'':page+'.html',url).href;
      let canonical=$('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}
      canonical.href=canonicalURL;
      let ogUrl=$('meta[property="og:url"]');if(!ogUrl){ogUrl=document.createElement('meta');ogUrl.setAttribute('property','og:url');document.head.appendChild(ogUrl)}
      ogUrl.content=canonicalURL;
      const ogImage=$('meta[property="og:image"]');if(ogImage)ogImage.content=new URL('assets/social-card.png',url).href;
    }
  }
  function setLanguage(next){
    if (!site[next]) return;
    lang=next;document.documentElement.lang=next;
    const c=site[next];
    $$('[data-text]').forEach(node=>{const v=pathGet(c,node.dataset.text);if(typeof v==='string')node.textContent=v});
    $$('[data-html]').forEach(node=>{const v=pathGet(c,node.dataset.html);if(typeof v==='string')node.innerHTML=v});
    if(page==='home'){
      $$('[data-node]').forEach(node=>{node.textContent=c.hero.nodes[Number(node.dataset.node)]||''});
      $$('[data-focus]').forEach(node=>{node.textContent=c.hero.focus[Number(node.dataset.focus)]||''});
    }
    $$('.locale-btn').forEach(node=>{const on=node.dataset.lang===next;node.classList.toggle('is-selected',on);node.setAttribute('aria-pressed',String(on))});
    $('.menu-toggle').setAttribute('aria-label',c.misc.menu);
    if(page==='home'){renderPillars(c);renderResearch(c);renderApproach(c);renderInitiatives(c);renderContact(c)}
    else if(page==='people')renderDirectoryPeople(c);
    else if(page==='publications')renderDirectoryPublications(c);
    updateSeo();storeLanguage(next);
  }
  $$('.locale-btn').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  const header=$('#header');const menu=$('.menu-toggle');
  function closeMenu(){header.classList.remove('menu-active');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',site[lang].misc.menu);document.body.classList.remove('menu-open')}
  menu.addEventListener('click',()=>{const willOpen=!header.classList.contains('menu-active');header.classList.toggle('menu-active',willOpen);menu.setAttribute('aria-expanded',String(willOpen));menu.setAttribute('aria-label',willOpen?site[lang].misc.closeMenu:site[lang].misc.menu);document.body.classList.toggle('menu-open',willOpen)});
  $$('.nav a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
  window.addEventListener('resize',()=>{if(window.innerWidth>1010)closeMenu()});
  window.addEventListener('scroll',()=>header.classList.toggle('is-scrolled',window.scrollY>12),{passive:true});
  if (page==='home' && 'IntersectionObserver' in window) {
    const navlinks=$$('.nav a').filter(a=>(a.getAttribute('href')||'').startsWith('#'));
    const sections=navlinks.map(a=>$(a.getAttribute('href'))).filter(Boolean);
    const obs=new IntersectionObserver(entries=>{
      entries.filter(e=>e.isIntersecting).forEach(e=>{
        navlinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));
      });
    },{rootMargin:'-30% 0px -58% 0px',threshold:0});
    sections.forEach(s=>obs.observe(s));
  }
  $('#year').textContent=new Date().getFullYear();
  setLanguage(lang);
})();
