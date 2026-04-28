// === Fonctions d'appel à l'API TerrangaFood ===

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// --- Lecture ---

// Récupérer tous les restaurants
export async function getRestaurants() {
  const res = await fetch(`${API_URL}/restaurants`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Impossible de récupérer les restaurants');
  }
  return res.json();
}

// Récupérer un restaurant par son ID
export async function getRestaurant(id) {
  const res = await fetch(`${API_URL}/restaurants/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Restaurant non trouvé');
  }
  return res.json();
}

// Récupérer les plats d'un restaurant
export async function getPlatsByRestaurant(restaurantId) {
  const res = await fetch(`${API_URL}/plats/restaurant/${restaurantId}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Impossible de récupérer les plats');
  }
  return res.json();
}

// Récupérer tous les plats
export async function getPlats() {
  const res = await fetch(`${API_URL}/plats`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Impossible de récupérer les plats');
  }
  return res.json();
}

// Récupérer toutes les commandes
export async function getCommandes() {
  const res = await fetch(`${API_URL}/commandes`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Impossible de récupérer les commandes');
  }
  return res.json();
}

// --- Écriture ---

// Créer une nouvelle commande
export async function creerCommande(data) {
  const res = await fetch(`${API_URL}/commandes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Erreur lors de la création de la commande');
  }
  return res.json();
}