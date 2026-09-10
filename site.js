const btn=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
if(btn){btn.addEventListener('click',()=>nav.classList.toggle('open'));}

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
