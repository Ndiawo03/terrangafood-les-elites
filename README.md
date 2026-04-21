# 🍛 TerrangaFood

Plateforme de commande de plats auprès de restaurants dakarois.

**Projet pédagogique** — Architecture Logicielle 2 — L3 Génie Logiciel — UCAD / ESP

## Stack technique

| Module | Stack |
|--------|-------|
| Backend API | Express.js, MongoDB, Mongoose |
| Frontend | Next.js 14 (App Router) |
| Base de données | MongoDB (local ou Atlas) |

## Démarrage rapide
Suivez ces étapes pour installer et lancer le projet localement sur votre machine.

### 1. Prérequis
* **Node.js** (version 20 LTS ou supérieure)
* **MongoDB** (serveur local ou un cluster MongoDB Atlas)
* **Git**

### 2. Installation et Configuration

# Cloner le dépôt
```
git clone [https://github.com/](https://github.com/)[votre-pseudo]/terrangafood-[equipe].git
cd terrangafood-[equipe]
```

# Configurer les variables d'environnement
# Copiez le fichier d'exemple pour créer votre propre .env
```
cp .env.example .env
```

# ⚠️ IMPORTANT : Ouvrez le fichier .env et renseignez votre URI MongoDB :
# Exemple : MONGODB_URI=mongodb://localhost:27017/terrangafood

### 3. Installation des dépendances

Le projet est divisé en deux parties indépendantes. Vous devez installer les modules pour chacune d'elles :

# Installation des dépendances du Backend (API)
```
cd api
npm install
```

# Installation des dépendances du Frontend (Web)
```
cd ../web
npm install
```

### 4. Lancement des serveurs

Pour faire fonctionner l'application, vous devez lancer les deux modules simultanément dans deux terminaux différents :

Terminal 1 — API Backend (Port 3001)

```
cd api
npm run dev
```

Terminal 2 — Interface Frontend (Port 3000)

```
cd web
npm run dev
```

### 5. Initialisation des données (Seed)

Si vous souhaitez remplir votre base de données avec des exemples de restaurants et de menus dakarois :

```
cd api
npm run seed
```

## Structure du projet

```
terrangafood/
├── api/                    # Backend Express
│   ├── src/
│   │   ├── models/         # Modèles Mongoose
│   │   ├── routes/         # Routes Express
│   │   ├── controllers/    # Logique métier
│   │   ├── middleware/      # Middleware
│   │   ├── seed/           # Données initiales
│   │   └── app.js          # Point d'entrée
│   └── package.json
├── web/                    # Frontend Next.js
│   ├── app/                # Pages (App Router)
│   ├── components/         # Composants réutilisables
│   ├── lib/                # Utilitaires
│   └── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Licence

Projet pédagogique — Usage académique uniquement.
