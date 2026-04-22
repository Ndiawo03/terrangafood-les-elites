# Rapport de tests – Lab 1

## Équipe : Les Elites
## Testeur : Ndiawo Ba FALL (QA)

| # | Test | Résultat | Notes |
|---|------|----------|-------|
| 1 | POST commande valide | ✅ PASS | Status 201, statut "en attente" |
| 2 | POST commande sans client | ✅ PASS | Status 400, erreurs de validation |
| 3 | GET toutes les commandes | ✅ PASS | Status 200 |
| 4 | GET commande par ID | ✅ PASS | Status 200, populate OK |
| 5 | GET commande ID inexistant | ✅ PASS | Status 404 |
| 6 | PATCH en attente → confirmée | ✅ PASS | Status 200 |
| 7 | PATCH confirmée → en livraison | ✅ PASS | Status 200 |
| 8 | PATCH en livraison → livrée | ✅ PASS | Status 200 |
| 9 | PATCH transition interdite | ✅ PASS | Status 400 |
| 10 | PATCH commande livrée bloquée | ✅ PASS | Status 400, transitions [] |
| 11 | DELETE commande | ✅ PASS | Status 200 |
| 12 | Populate restaurant visible | ✅ PASS | Nom et adresse affichés |
| 13 | Populate plats visible | ✅ PASS | Nom et prix affichés |