const btn=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');

// Accessible mobile navigation.
if(btn&&nav){
  nav.id=nav.id||'site-navigation';
  btn.setAttribute('aria-controls',nav.id);
  btn.setAttribute('aria-expanded','false');
  btn.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&nav.classList.contains('open')){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      btn.focus();
    }
  });
}

// Mark the current page in the primary navigation.
const currentFile=window.location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.navlinks a').forEach(link=>{
  const target=(link.getAttribute('href')||'').split('#')[0];
  if(target===currentFile){
    link.setAttribute('aria-current','page');
    link.classList.add('active');
  }
});

// Apply the current circular emblem across the site.
const emblemPath='ChatGPT%20Image%20Sep%2010%2C%202026%2C%2008_27_53%20AM.png';
document.querySelectorAll('.brand-mark').forEach(mark=>{
  mark.textContent='';
  mark.setAttribute('aria-hidden','true');
});

const brandStyle=document.createElement('style');
brandStyle.textContent=`
  .brand-mark{
    width:48px!important;
    height:48px!important;
    min-width:48px;
    border-radius:50%!important;
    background-color:transparent!important;
    background-image:url("${emblemPath}")!important;
    background-size:137%!important;
    background-position:center!important;
    background-repeat:no-repeat!important;
    box-shadow:0 4px 12px rgba(42,36,33,.12)!important;
    overflow:hidden!important;
  }
  .brand-mark:after{display:none!important}
  .navlinks a.active:not(:last-child){color:var(--terracotta)}
  .navlinks a.active:not(:last-child):after{right:0}
  footer .small a{margin-left:14px;text-decoration:none;font-weight:600}
  footer .small a:hover{text-decoration:underline}
  @media(max-width:820px){
    .brand-mark{width:44px!important;height:44px!important;min-width:44px}
    .navlinks a.active:not(:last-child){color:var(--terracotta)}
  }
`;
document.head.appendChild(brandStyle);

// Use the emblem as the browser/favicon identity as well.
if(!document.querySelector('link[rel="icon"]')){
  const favicon=document.createElement('link');
  favicon.rel='icon';
  favicon.type='image/png';
  favicon.href=emblemPath;
  document.head.appendChild(favicon);
}
if(!document.querySelector('link[rel="apple-touch-icon"]')){
  const appleIcon=document.createElement('link');
  appleIcon.rel='apple-touch-icon';
  appleIcon.href=emblemPath;
  document.head.appendChild(appleIcon);
}

// Keep legal/footer navigation consistent while policies are prepared for launch.
const footerSmall=document.querySelector('footer .small');
if(footerSmall){
  footerSmall.innerHTML='© 2026 Between the Trees. <a href="privacy.html">Privacy</a><a href="terms.html">Terms</a>';
}

// Feature the four-part biblical story montage on the homepage.
const storyGrid=document.querySelector('#story .story-grid');
if(storyGrid){
  storyGrid.style.gridTemplateColumns='1fr';
  storyGrid.style.gap='42px';

  const storyCopy=storyGrid.firstElementChild;
  if(storyCopy){storyCopy.style.maxWidth='860px';}

  const storyVisual=storyGrid.querySelector('.story-visual');
  if(storyVisual){
    storyVisual.classList.add('story-montage-active');
    storyVisual.style.minHeight='0';
    storyVisual.style.aspectRatio='1672 / 941';
    storyVisual.style.padding='0';
    storyVisual.style.backgroundImage='url("ChatGPT%20Image%20Sep%2010%2C%202026%2C%2008_04_16%20AM.png")';
    storyVisual.style.backgroundSize='cover';
    storyVisual.style.backgroundPosition='center';
    storyVisual.style.backgroundRepeat='no-repeat';
    storyVisual.style.boxShadow='0 24px 54px rgba(42,36,33,.14)';
    storyVisual.setAttribute('role','img');
    storyVisual.setAttribute('aria-label','Creation, Fall, Redemption, and Restoration — the biblical story from the Tree of Life to the cross and renewed creation.');
    const oldCaption=storyVisual.querySelector('.visual-caption');
    if(oldCaption){oldCaption.remove();}
  }

  const style=document.createElement('style');
  style.textContent=`
    #story .story-montage-active::before{display:none}
    @media(max-width:820px){
      #story .story-grid{gap:30px!important}
      #story .story-montage-active{border-radius:18px!important}
    }
  `;
  document.head.appendChild(style);
}
