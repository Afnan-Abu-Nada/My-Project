

var add = document.querySelector('.circle').onclick = () =>
    document.querySelector('.first-section').style.display = 'none';

document.querySelector('.open-menu').onclick = () =>
    document.querySelector('.sidebar').classList.add("show")

document.querySelector('.bg-sidebar').onclick = () =>
    document.querySelector('.sidebar').classList.remove("show")


var btn = document.querySelector('.backspace');
var menu = document.querySelector('.sidebar');


btn.addEventListener('click', function () {
    menu.style.display =
        menu.style.display === 'block' ? 'none' : 'block';
})