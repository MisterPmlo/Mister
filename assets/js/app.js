// Fonction pour afficher le nav
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener("click", () => {
        // Activer le nav
        nav.classList.toggle('nav-active');

        // Animer les liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index/5+0.5}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Changer de pages quand on clique sur le bouton Découvrir
function buttonProjets()
{
    window.location = "./projets.html"
}