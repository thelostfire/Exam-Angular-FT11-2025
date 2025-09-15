# ExamAngularFT11

Examen dans le cadre du module Angular de la formation DWWM FT11  
Les sections qui suivent sont les réponses demandées dans le sujet de l'examen

## Justification des choix techniques

### Composants
- Boutons définis en tant que composants réutilisables (avec plusieurs propriétés modifiables en fonction du rôle du bouton)
- Layout (header) réutilisé sur toutes les pages du site
- Les pages sont traitées comme 'features'

### Services
- Services pour l'authentification, le panier, et les produits
- Chaque service s'occupe de centraliser les appels et transformations et simplifie les composants
- Par exemple, le service cart (panier) gère le contenu du panier et s'occupe d'attribuer un id unique à chaque produit ajouté. Cela permet la simplification du retrait de produits du panier.

### Pipes
- Utilisation d'une pipe monnaie (CurrencyPipe) pour formatter le prix en € et ajouter de la cohérence à l'UI (bien faire comprendre qu'il s'agit du prix du produit / total du panier)

### DTO
- Pas de mapping dans ce site, les produits sont gardés tels quels pour simplifier leur utilisation (on pourrait effectuer du mapping au niveau de leur date de création/modification avec string => Date)

### Arborescence
- Le site a une arborescence claire (features pour les pages, shared pour les composants réutilisables, core pour les services, modèles, interceptors...)


## Instructions

- Le site utilise tailwind (https://tailwindcss.com/docs/installation/framework-guides/angular)
- Pas de configuration de la base API nécessaire
- Pour lancer le serveur de développement, utiliser les commandes ```ng serve``` ou ```npm start```
