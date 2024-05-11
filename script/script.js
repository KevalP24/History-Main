document.addEventListener("DOMContentLoaded", function() {
    const accordionbuttonList = document.querySelectorAll('.accordion-btn');

    accordionbuttonList.forEach(btn => {
        btn.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            const panelList = document.querySelectorAll('.panel');
            const buttonList = document.querySelectorAll('.accordion-btn');

            panelList.forEach(p => {
                if (p !== panel && p.classList.contains('active')) {
                  p.classList.remove('active');
                }
            });
            buttonList.forEach(b => {
                if (b !== this && b.classList.contains('active')) {
                  b.classList.remove('active');
                }
            });

            panel.classList.toggle('active');
            this.classList.toggle('active');
        });
    });
});

