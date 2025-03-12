// Défilement fluide pour la navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Effet de survol pour les produits
const produits = document.querySelectorAll('.produit');

produits.forEach(produit => {
    produit.addEventListener('mouseover', function () {
        produit.style.transform = 'scale(1.05)';
        produit.style.transition = 'transform 0.3s ease-in-out';
    });

    produit.addEventListener('mouseout', function () {
        produit.style.transform = 'scale(1)';
    });
});

// Message d'accueil après le chargement de la page
window.addEventListener('load', () => {
    alert("Bienvenue sur Nutrea, votre allié naturel pour un bien-être optimal !");
});
