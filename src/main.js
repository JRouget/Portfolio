// Récupération de l'élément cible
const dynamicText = document.getElementById('dynamic-text') as HTMLSpanElement;

// Les phrases à afficher : Mix Tech & Business
const phrases: string[] = [
    "je livre de la valeur.",
    "je gère vos projets.",
    "j'optimise les process.",
    "je crée des produits."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Effacer le texte
        dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Plus rapide pour effacer
    } else {
        // Écrire le texte
        dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Vitesse normale de frappe
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Fin de la phrase, pause avant d'effacer
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        // Fin de l'effacement, passer à la phrase suivante
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Lancer l'animation au chargement
document.addEventListener('DOMContentLoaded', () => {
    if(dynamicText) {
        typeEffect();
    }
});