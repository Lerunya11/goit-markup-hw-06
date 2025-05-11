(() => {
        const menuBtn = document.querySelector('.js-open-menu');
        const closeMenuBtn = document.querySelector('.js-close-menu');
        const mobileMenu = document.querySelector('.js-menu-container');
      
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.add('is-open');
        });
      
        closeMenuBtn.addEventListener('click', () => {
          mobileMenu.classList.remove('is-open');
        });
      })();
      