interface FavoriteItem {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
}


export interface FavoritesState {
    tempFavorites: FavoriteItem[]; // Temporales hasta que se guarden
    favorites: FavoriteItem[]; // Cargados desde la base de datos
    addTempFavorite: (item: FavoriteItem) => void;
    removeTempFavorite: (id: number) => void;
    isTempFavorite: (id: number) => boolean;
    saveFavorites: () => Promise<void>; // Guardar todos los favoritos seleccionados en la base de datos
    fetchFavorites: () => void;
}