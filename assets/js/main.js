(function(){
  const lb = document.querySelector('.lightbox');
  const lbImg = document.querySelector('.lb-img');
  const lbCap = document.querySelector('.lb-caption');
  const closeBtn = document.querySelector('.lb-close');

  function open(src, alt){
    lbImg.src = src;
    lbImg.alt = alt || '';
    lbCap.textContent = alt || '';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-src]').forEach(btn => {
    btn.addEventListener('click', () => open(btn.dataset.src, btn.dataset.alt));
  });

  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', (e) => { if(e.target === lb) close(); });
  window.addEventListener('keydown', (e) => { if(e.key === 'Escape') close(); });

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '10px';
      nav.style.marginLeft = '0';
      nav.style.padding = '12px';
      nav.style.border = '1px solid rgba(255,255,255,.10)';
      nav.style.borderRadius = '14px';
      nav.style.background = 'rgba(18,20,32,.92)';
      nav.style.position = 'absolute';
      nav.style.top = '62px';
      nav.style.right = '20px';
      nav.style.minWidth = '180px';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }
})();
