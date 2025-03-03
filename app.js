const header = document.querySelector('.header');
const first = document.querySelector('.firstPage');
const headerHeight = header.offsetHeight;
console.log(headerHeight);

const firstHeight = first.offsetHeight;
console.log(firstHeight);

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    console.log(scrollDistance);
    
    if(scrollDistance >= headerHeight + 30) {
        header.classList.add('header--fixed');
        first.computedStyleMap.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('header--fixed');
        first.computedStyleMap.marginTop = null;
    }
})
