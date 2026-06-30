// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const links = document.querySelector('nav.links');

  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#fff';
      links.style.padding = '20px 24px';
      links.style.gap = '18px';
      links.style.borderBottom = '1px solid var(--line)';
      links.style.boxShadow = '0 14px 30px -10px rgba(11,61,102,.2)';
    });

    document.querySelectorAll('nav.links a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 920) links.style.display = 'none';
      });
    });
  }

  // Smooth in-page anchor navigation (avoids host treating same-page
  // anchors as external links in some preview environments)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const targetId = a.getAttribute('href').slice(1);
    if (!targetId) return;
    a.addEventListener('click', (e) => {
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }
});
