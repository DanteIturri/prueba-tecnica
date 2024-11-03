import { create } from 'zustand';

interface FavoriteItem {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
}


interface FavoritesState {
    tempFavorites: FavoriteItem[]; // Temporales hasta que se guarden
    favorites: FavoriteItem[]; // Cargados desde la base de datos
    addTempFavorite: (item: FavoriteItem) => void;
    removeTempFavorite: (id: number) => void;
    isTempFavorite: (id: number) => boolean;
    saveFavorites: () => Promise<void>; // Guardar todos los favoritos seleccionados en la base de datos
    fetchFavorites: () => void;
  }

const useFavoritesStore = create<FavoritesState>((set, get) => ({
    tempFavorites: [],
    favorites: [],
    fetchFavorites: async () => {
        const response = await fetch('http://localhost:5000/api/characters');
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
                const response = await fetch('http://localhost:5000/api/characters', {
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