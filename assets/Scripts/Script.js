let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // On scrolle vers le bas : cacher la navbar
        navbar.classList.add('hide');
    } else {
        // On scrolle vers le haut : montrer la navbar
        navbar.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Empêcher les valeurs négatives
});

// Pour changer la couleur du logo au click 

function changeTextColor(element) {
    const colors = [
        '#FF5733', '#33FF57', '#5733FF', '#33B8FF',
        '#FF33E9', '#FFEC00', '#00FFD8', '#FF0084',
        '#00FF00', '#FF0000', '#9933FF', '#33FF99',
        '#ff7200',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
}

//Mise à jour automatique de la date du copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Fonction pour le interaction du bouton commencé 

function toggleMenu() {
    const menu = document.getElementById('quiz-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function goToCategory(category) {
  // Cette fonction permet de charger la redirection vers les pages du quiz (ex. HTML : quiz-html.html)
    window.location.href = `quiz-${category}.html`;
}

// Session pour gérer l'interaction et l'affichage et la redirection pour lancer le quiz sur quiz.html
function goToCategory(categorie) {
    localStorage.setItem("categorieChoisie", categorie);
    window.location.href = "quiz.html";
}

// Pour gérer l'interacion du menu hamburger
function toggleMobileMenu() {
    const menu = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        hamburger.textContent = "✖"; // Icône X
    } else {
        hamburger.textContent = "☰"; // Icône menu
    }
}

