const sideNav = document.querySelector(".side-menu")
const hamburguer= document.querySelector(".hamburguer")
let carousel = document.querySelector('.carousel');
let textos = ['Desenvolvimento Web', 'Design Responsivo', 'Soluções Personalizadas'];
let i = 0;

function mudarTexto() {
    setTimeout(() => {
        i = (i + 1) % textos.length;
        carousel.textContent = textos[i];
        
        // Adiciona a classe .show para mostrar o texto com a transição
        p.classList.add("show");
    }, 500);
}

setInterval(mudarTexto, 2000);

hamburguer.addEventListener("click", () => sideNav.classList.toggle("active"));

