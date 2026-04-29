# Rapport de tests -- Lab 3 (Docker)

## Équipe : [Nom de guerre]
## Testeur : Moustapha (QA)

### Images Docker
| # | Test | OK ? | Notes |
|---|------|------|-------|
| 1 | docker build API réussit |✅ | |
| 2 | docker build Frontend réussit |✅ | |
| 3 | Image API < 250 Mo | ✅| Taille : 182MB|
| 4 | Image Frontend < 500 Mo |✅ | Taille : 409MB|

### Docker Compose
| # | Test | OK ? | Notes |
|---|------|------|-------|
| 5 | docker compose up --build réussit |✅ | RAS|
| 6 | 3 conteneurs en état "Up" |✅ | |
| 7 | Seed fonctionne dans le conteneur |✅ | |
| 8 | API répond sur localhost:3001 |✅ | |
| 9 | Frontend répond sur localhost:3000 | | erreur port deja utilise|

### Fonctionnel
| # | Test | OK ? | Notes |
|---|------|------|-------|
| 10 | Restaurants affichés |✅ | |
| 11 | Commande créée via formulaire |✅| |
| 12 | Commande visible dans mes-commandes |✅ | |
| 13 | Données persistent après restart |✅ | |
| 14 | docker compose down fonctionne | ✅| |
| 15 | docker compose down -v vide la DB |✅ | |