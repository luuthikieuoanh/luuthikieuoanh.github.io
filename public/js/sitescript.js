//Hiện menu nav
const a = document.querySelector('.navbar-toggler');
const b = document.querySelector('#collapsibleNavId');
//
// a.addEventListener("click", function() {
//     b.classList.toggle('show');
// });

//Bắt sự kiện lăn chuột
const navBar = document.querySelector('.navbar');
const logo = document.querySelector('a.logo');
const c = document.querySelector('.header-inner');
const d = document.querySelector('.ms-slide-layer');
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
    //Chỉnh kéo theo và làm mờ nền
    d.style.top = `${-(window.scrollY *0.30)}px`;
    d.style.opacity = `${1 - window.scrollY*0.001}`;
});

function name(params) {
    //Thay đổi độ dài của ảnh với các screen khác nhau
    // const ax = document.querySelector('.masterslider');

    // function changeScreen() {
    //     ax.style.width = `${screen.width}px`
    //         // ax.style.height = `${screen.height}px`
    // }
    // setInterval(changeScreen, 100);

    //Bắt sự kiện di chuyển chuột mousemove
    // function myFunction(e) {
    //     let x = e.clientX;
    //     let y = e.clientY;
    //     let rs = x + "," + y;
    //     console.log(rs);
    // }

    // let mm = document.querySelector(".ms-parallax-layer");

    // mm.addEventListener('mousemove', (e) => {
    //     mm.style.backgroundPositionX = e.pageX + "px";
    //     mm.style.backgroundPositionY = e.pageY + "px";
    // })

    // let oanh = document.querySelectorAll('.move');

    // oanh.forEach(move => {
    //     let valueX = move.style.top;
    //     alert(document.querySelector('.move').style.top)
    //     let valueY = move.style.left;
    //     console.log(valueX + "," + valueY);
    //     $(document).ready(function() {
    //         $(document).mousemove(function(event) {
    //             $(move).css({ 'top': event.pageX, 'left': event.pageY })
    //         });
    //     });
    // });

    // let valueX = document.querySelector('.move1').style.top;
    // alert(document.querySelector('.move').style.top)
    // let valueY = document.querySelector('.move').style.left;
}
//Chỉnh chuyển động củ hành
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move1').css({
            'top': 170 + event.pageY * 0.08,
            'left': 215 + event.pageX * 0.05
        })
    });
});
//Chỉnh chuyển động tô hành
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move2').css({ 'top': 440 + event.pageY * 0.04, 'left': 200 + event.pageX * 0.05 })
    });
});
//Chỉnh chuyển động cây nấm
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move3').css({ 'top': 578 + event.pageY * 0.03, 'left': 213 + event.pageX * 0.04 })
    });
});
//Chỉnh chuyển động đầu nấm
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move4').css({ 'top': 660 + event.pageY * (-0.03), 'left': 200 + event.pageX * 0.05 })
    });
});
//Chỉnh chuyển động của nấm đôi trên
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move5').css({ 'top': 120 + event.pageY * 0.02, 'left': 1080 + event.pageX * 0.03 })
    });
});
//Chỉnh chuyển động của nấm đôi dưới
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move6').css({ 'top': 370 + event.pageY * 0.02, 'left': 1090 + event.pageX * 0.009 })
    });
});
//Chỉnh chuyển động của lá
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move7').css({ 'top': 95 + event.pageY * 0.02, 'left': 1000 + event.pageX * 0.05 })
    });
});
//Chỉnh chuyển động của cây nấm
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move8').css({ 'top': 340 + event.pageY * 0.02, 'left': 920 + event.pageX * 0.05 })
    });
});

let strDate = document.form.date;
//Kiểm tra ngày nhập vào 
function checkDate(strDate) {
    var comp = strDate.value.split('/')
    var d = parseInt(comp[0], 10) //parseint(phần tử trước dấu /, 10(là số thập phân))
    var m = parseInt(comp[1], 10)
    var y = parseInt(comp[2], 10)
    var date = new Date(y, m - 1, d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
        return true
    }
    return false
}

//Bắt sự kiện phím enter để kiểm tra ngày nhập vào đúng hay sai
function keydownHandler(event) {
    if (event.keyCode == 13) {
        if (checkDate(strDate) === false) {
            alert('Please verify entered data and try again!');
        }
    }
}