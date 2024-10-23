const header = document.querySelector("header");
const aside = document.querySelector("aside");
const nav = document.querySelector("nav");
const categoriaList = document.querySelector('.categorias-drop');
const dropdownTitle = document.getElementById('dropdown-title');
const hamburguer= document.querySelector(".hamburguer")
const sideNav = document.querySelector(".side-menu")
// Função otimizada para adicionar as classes 'sticky' ao rolar
function handleScroll() {
    const isScrolled = window.scrollY > 1;

    header.classList.toggle("sticky-header", isScrolled);
    nav.classList.toggle("sticky-nav", isScrolled); // Adicione esta linha
}

// Usa 'requestAnimationFrame' para melhorar o desempenho
window.addEventListener("scroll", () => {
    requestAnimationFrame(handleScroll);
});


// Alternar o dropdown de categorias
dropdownTitle.addEventListener('click', () => {
    categoriaList.classList.toggle('open');
});

hamburguer.addEventListener("click", () => sideNav.classList.toggle("active"));



