  const burgerBtn = document.querySelector('.header-mobile-btm');
  const mobileWindow = document.querySelector('.mobile-window');
  const closeBtn = document.querySelector('.close-button');
  const mobileLinks = document.querySelectorAll('.header-mobile-list-link');

    
  window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const homeSection = document.querySelector(".section-home");

  const scrollY = window.scrollY;

  //Header scroll effect
  if (scrollY > homeSection.offsetHeight - 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }


  //Auto close mobile menu on scroll distance
  if(mobileWindow.classList.contains('is-open')) {
    mobileWindow.classList.remove('is-open');
    console.log("mobile is removed");
  }
  });

  //Open mobile menu
  burgerBtn.addEventListener('click', () => {
    mobileWindow.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    console.log("burgerBtn is clicked");
  })

  //close mobile menu
  closeBtn.addEventListener('click', () => {
    mobileWindow.classList.remove('is-open');
    document.body.style.overflow = ''; 
  });

  // Close mobile menu when clicking any nav link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
    mobileWindow.classList.remove('is-open');
    document.body.style.overflow = '';
    console.log("Mobile menu closed after clicking a link");
  });
});









