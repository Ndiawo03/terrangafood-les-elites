# Guide de déploiement — TerrangaFood

## 1. MongoDB Atlas
- Cluster : terrangafood-[equipe] (M0 Free, AWS Paris)
- Utilisateur : terrangafood-admin
- Accès réseau : 0.0.0.0/0
- Base : terrangafood
- Seed : exécuté avec 5 restaurants + 27 plats
## 2. Render (API Express)
- Service : terrangafood-api-[equipe]
- URL : https://terrangafood-api-[equipe].onrender.com
- Root Directory : api
- Runtime : Node
- Instance : Free
- Variables : MONGODB_URI (Atlas), PORT (3001)