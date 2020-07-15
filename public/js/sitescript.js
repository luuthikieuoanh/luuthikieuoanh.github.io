//Hiện menu nav
const a = document.querySelector('.navbar-toggler');
const b = document.querySelector('#collapsibleNavId');
a.addEventListener("click", function() {
    b.classList.toggle('show');
});

//Bắt sự kiện lăn chuột
const navBar = document.querySelector('.navbar');
const logo = document.querySelector('a.logo');
const discover = document.querySelector('discover');
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset)
    if (window.pageYOffset > 5) {
        navBar.classList.add('fixed');
        logo.classList.add('setlogo');
        navBar.classList.add('setcontainer');
        discover.classList.add('setdiscover');
    } else {
        navBar.classList.remove('fixed');
        logo.classList.remove('setlogo');
        navBar.classList.remove('setcontainer');
        discover.classList.remove('setdiscover');

    }
})