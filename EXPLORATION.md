# Rapport d'exploration -- Lab 0

## Équipe : Les Elites

### Architecture Backend (par DB -- Yacine)
- Nombre de modèles : 2
- Endpoints existants : GET /api/restaurants, GET /api/restaurants/:id, POST /api/restaurants, PUT /api/restaurants/:id, DELETE /api/restaurants/:id, GET /api/plats, GET /api/plats/:id, POST /api/plats, PUT /api/plats/:id, DELETE /api/plats/:id
- Pattern utilisé : MVC

### Architecture Frontend (par DF -- Moustapha)
- Nombre de pages : 2
- Composants réutilisables : Header, RestaurantCard, PlatCard
- Méthode d'appel API : fetch dans lib/api.js

### Configuration (par DO -- Fatou)
- Variables d'environnement : MONGODB_URI, PORT
- Scripts npm : dev, start, seed
- Fichiers ignorés par Git : node_modules, .env, .next

### Tests fonctionnels (par QA -- Nawal)
- Fonctionnalités testées : [Affichage de la liste des restaurants, Affichage des détails d’un restaurant, Affichage des plats, API REST fonctionnelle]
- Bugs trouvés : [Aucun bug majeur trouvé lors de l'exploration initiale]

### Synthèse (par CP -- Ndiawo)
- Ce qui fonctionne bien : L'API REST est fonctionnelle avec tous les endpoints nécessaires. Le frontend affiche correctement la liste des restaurants et les détails des plats.
- Ce qui manque (le 30%) : Il manque des fonctionnalités avancées comme la recherche de restaurants, les filtres, et la gestion des utilisateurs. De plus, il n'y a pas encore de tests automatisés.