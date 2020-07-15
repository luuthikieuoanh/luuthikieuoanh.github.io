//Hiện menu nav
const a = document.querySelector('.navbar-toggler');
const b = document.querySelector('#collapsibleNavId');
//
a.addEventListener("click", function() {
    b.classList.toggle('show');
});

//Bắt sự kiện lăn chuột
const navBar = document.querySelector('.navbar');
const logo = document.querySelector('a.logo');
const c = document.querySelector('.header-inner');
//
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset)
    if (window.pageYOffset > 1) {
        navBar.classList.add('fixed');
        c.style.backgroundColor = 'rgba(0, 0, 0, 0.90)';
        c.style.paddingTop = `${0}`;
        logo.classList.add('setlogo');
    } else {
        navBar.classList.remove('fixed');
        logo.classList.remove('setlogo');
        c.style.backgroundColor = 'transparent';
        c.style.paddingTop = `${20}px`;
    }
})

//Thay đổi độ dài của ảnh với các screen khác nhau
const ax = document.querySelector('.slide-img-bg');

function changeScreen() {
    ax.style.width = `${screen.width}px`
    ax.style.height = `${screen.height}px`
}
setInterval(changeScreen, 100);

//Bắt sự kiện di chuyển chuột mousemove
function myFunction(e) {
    let x = e.clientX;
    let y = e.clientY;
    let rs = x + "," + y;
    console.log(rs);

}