
let carousel = document.querySelector('.carousel');
let textos = ['Desenvolvimento Web', 'Design Responsivo', 'Soluções Personalizadas'];
let i = 0;

function mudarTexto() {
    i = (i + 1) % textos.length;
    carousel.textContent = textos[i];
}

setInterval(mudarTexto, 2000);

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.navmenu');
    navMenu.classList.toggle('active');
});

