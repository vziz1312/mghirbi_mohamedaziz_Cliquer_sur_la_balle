🎯 Cliquer_sur_la_balle

Mini-application interactive orientée réactivité et manipulation avancée du DOM

📘 Présentation du projet

Cliquer_sur_la_balle est une application web minimaliste ayant pour objectif de développer une mécanique d’interaction réactive entre l’utilisateur et un élément graphique (la “balle”).
Le projet illustre la gestion d’événements utilisateurs, le positionnement dynamique d’éléments dans la page, la génération pseudo-aléatoire et les bonnes pratiques de structuration JavaScript.

Ce projet peut servir :

de base pédagogique pour l’apprentissage du DOM et des événements,

de mini-jeu pour tester la réactivité,

d’exemple de manipulation d’éléments graphiques simples.

🛠️ Stack Technique
Technologie	Rôle
HTML5	Structure lourde du document, conteneur principal du jeu
CSS3	Stylisation, positionnement relatif/absolu, esthétique de la balle
JavaScript Vanilla	Logique dynamique, gestion d’événements, calculs, randomisation
(Optionnel) Canvas API	Rendu graphique optimisé si la balle est dessinée via Canvas
⚙️ Fonctionnalités Clés

Positionnement aléatoire de la balle dans l’espace visible du navigateur.

Détection de clic avec gestion précise de la zone interactive.

Réapparition dynamique de l’élément après interaction.

Cycle de jeu infini ou paramétré (selon configuration).

Manipulation propre du DOM : ajout, suppression, mise à jour d’éléments.

Compatibilité multi-résolution (desktop et mobile).

🌐 Déploiement GitHub Pages

➡️ Lien de démonstration :
https://vziz1312.github.io/mghirbi_mohamedaziz_Cliquer_sur_la_balle/

🧠 Nouveautés & Acquis

Durant la réalisation du projet, les points suivants ont été explorés, consolidés ou découverts :

Maîtrise accrue des événements DOM (click, position du curseur, triggers).

Génération d’emplacements aléatoires tout en respectant les limites du viewport.

Gestion de positions absolues et compréhension fine du modèle de boîte.

Structuration du code en fonctions isolées : logique, affichage, réinitialisation.

Utilisation éventuelle du Canvas 2D pour dessiner un élément interactif.

Mise en ligne rapide via GitHub Pages pour un rendu public.

🚧 Difficultés Rencontrées

Respect des limites du viewport afin que la balle apparaisse toujours complètement visible.

Synchronisation entre événements de clic et repositionnement, évitant les double-détections.

Gestion du responsive lorsque la taille de fenêtre change.

Débogage du calcul des coordonnées (déplacement, offset, taille réelle de la balle).

(Si Canvas) Alignement entre coordonnées canvas et coordonnées réelles du clic.

🛡️ Solutions Apportées

Mise en place d’un calcul dynamique de positions basé sur window.innerWidth / innerHeight moins le diamètre de la balle.

Utilisation de getBoundingClientRect() pour obtenir les coordonnées réelles de l’élément.

Ajout de conditions de sécurité pour éviter l’apparition partielle hors-écran.

Tests manuels + console.log + Chrome DevTools pour affiner les comportements.

Relecture de la documentation MDN concernant :

Event.clientX / clientY,

Element.style.transform,

requestAnimationFrame() si animation utilisée.
