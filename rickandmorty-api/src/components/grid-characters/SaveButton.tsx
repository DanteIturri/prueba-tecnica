import { FC, useState } from 'react';
import useFavoritesStore from '../../store/useFavoritesStore';
import 'boxicons/css/boxicons.min.css';

export const SaveButton: FC = () => {
    const saveFavorites = useFavoritesStore((state) => state.saveFavorites);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSave = async () => {
        setIsLoading(true);
        setError(null); 
        try {
            await saveFavorites();
        } catch (error) {
            setError('Error al guardar favoritos. Inténtalo de nuevo. '+ error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button 
            onClick={handleSave} 
            className='button-save' 
            disabled={isLoading}
            aria-label="Guardar favoritos"
        >
            {isLoading ? (
                <i className="bx bx-loader-circle bx-spin"></i>
            ) : (
                <i className="bx bx-save"></i>
            )}
            <span>{isLoading ? 'Guardando...' : 'Guardar favoritos'}</span>
            {error && <p className="error-message">{error}</p>}
        </button>
    );
};
