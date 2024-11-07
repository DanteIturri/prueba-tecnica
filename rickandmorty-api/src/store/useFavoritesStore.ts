import { create } from 'zustand';
import { URL_API_BACKEND } from '../constans/Url';

import { FavoritesState } from '../types/Favorites';

const useFavoritesStore = create<FavoritesState>((set, get) => ({
    tempFavorites: [],
    favorites: [],
    fetchFavorites: async () => {
        const response = await fetch(URL_API_BACKEND);
        const data = await response.json();
        set({ favorites: data });
    },
    addTempFavorite: (item) => set((state) => ({
        tempFavorites: [...state.tempFavorites, item],
      })),
    
      removeTempFavorite: (id) => set((state) => ({
        tempFavorites: state.tempFavorites.filter((item) => item.id !== id),
      })),
    
      isTempFavorite: (id) => {
        const state = get();
        return state.tempFavorites.some((item) => item.id === id);
      },
      saveFavorites: async () => {
        const tempFavorites = get().tempFavorites;
        
        for (const item of tempFavorites) {
            try {
                const response = await fetch(URL_API_BACKEND, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: item.id,
                        name: item.name,
                        status: item.status,
                        image: item.image,
                        species: item.species
                    })
                });
    
                if (!response.ok) {
                    throw new Error(`Error al guardar el favorito con ID ${item.id}`);
                }
            } catch (error) {
                console.error(error);
            }
        }
    
        set((state) => ({
          favorites: [...state.favorites, ...state.tempFavorites],
          tempFavorites: [],
        }));
    }
}));

export default useFavoritesStore;