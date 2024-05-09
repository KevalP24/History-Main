document.addEventListener("DOMContentLoaded", function() {
  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          const panel = this.nextElementSibling;
          const panels = document.querySelectorAll('.panel');
          const buttons = document.querySelectorAll('.accordion-btn');

          panels.forEach(p => {
              if (p !== panel && p.classList.contains('active')) {
                  p.classList.remove('active');
              }
          });

          buttons.forEach(b => {
              if (b !== this && b.classList.contains('active')) {
                  b.classList.remove('active');
              }
          });

          panel.classList.toggle('active');
          this.classList.toggle('active');
      });
  });
});