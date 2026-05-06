# Guide de déploiement — TerrangaFood

## 1. MongoDB Atlas
- Cluster : terrangafood-les-elites (M0 Free, AWS Paris)
- Utilisateur : terrangafood-admin
- Accès réseau : 0.0.0.0/0
- Base : terrangafood
- Seed : exécuté avec 5 restaurants + 27 plats
## 2. Render (API Express)
- Service : terrangafood-api-[equipe]
- URL : https://terrangafood-api-les-elites.onrender.com
- Root Directory : api
- Runtime : Node
- Instance : Free
- Variables : MONGODB_URI (Atlas), PORT (3001)
## 3. Vercel (Frontend Next.js)
- Projet : terrangafood-[equipe]
- URL : https://terrangafood-les-elites.vercel.app
- Root Directory : web
- Framework : Next.js (auto-détecté)
- Variable : NEXT_PUBLIC_API_URL (URL Render + /api)
- Déploiement continu : activé (push sur main)