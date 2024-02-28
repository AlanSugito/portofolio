window.addEventListener('scroll', () => {
  const jubmotronHeadline = document.querySelector('.jumbotron__headline');

  jubmotronHeadline.style.transform = `translateY(${window.scrollY / 2}px)`;
});

window.addEventListener('DOMContentLoaded', () => {
  const barMenu = document.querySelector('.bar');
  const closeMenu = document.querySelector('.close');
  const navBar = document.querySelector('nav > ul');
  const navItems = document.querySelectorAll('.nav-item');

  function closeNavbar() {
    navBar.classList.add('slide-right');
    navBar.classList.remove('slide-left');

    setTimeout(() => {
      navBar.classList.remove('slide-right');
    }, 500);
  }

  barMenu.addEventListener('click', () => {
    navBar.classList.add('slide-left');
  });

  closeMenu.addEventListener('click', closeNavbar);

  const mediaMatch = window.matchMedia('(max-width: 600px)');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (mediaMatch.matches) closeNavbar();
    });
  });
});
