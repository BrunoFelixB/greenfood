const mobilebt = document.getElementById ('mobile');

function showmenu() {
    const nav = document.getElementById('menu1');
    nav.classList.toggle('active')
}

mobilebt.addEventListener('click', showmenu);
