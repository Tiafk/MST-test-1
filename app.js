const header = document.querySelector('.header');
const first = document.querySelector('.header-placeholder');
const headerHeight = header.offsetHeight;
console.log(headerHeight);

const firstHeight = first.offsetHeight;
console.log(firstHeight);

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    console.log(scrollDistance);
    
    if(scrollDistance >= headerHeight + 40) {
        header.classList.add('header--fixed');
        first.style.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('header--fixed');
        first.style.marginTop = null;
    }
})

console.log(headerHeight);

const overlay = document.querySelector(".scroll-overlay");
let scrollTimeout;

window.addEventListener("scroll", () => {
  overlay.classList.add("active");

  // Сбрасываем предыдущий таймер
  clearTimeout(scrollTimeout);

  // Убираем затемнение через 200мс после остановки
  scrollTimeout = setTimeout(() => {
    overlay.classList.remove("active");
  }, 200);
});


let burgerBtn = document.querySelector('.header__burger-menu_button');
let burgerMenu = document.querySelector('.navigation');
let content = document.querySelector('.main');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    if (burgerMenu.classList.contains('active')) {
        body.classList.add('lock');
        content.classList.add('lock');
    } else {
        body.classList.remove('lock');
        content.classList.remove('lock');
    }
});

document.addEventListener("click", function (event) {
    let isClickInsideNavBar = burgerMenu.contains(event.target);
    let isClickOnBurger = burgerBtn.contains(event.target);

    if (!isClickInsideNavBar && !isClickOnBurger) {
        burgerMenu.classList.remove("active");
        burgerBtn.classList.remove("active");
        content.classList.remove("lock");
        body.classList.remove("lock");
    }
});