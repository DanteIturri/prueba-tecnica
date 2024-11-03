import { FC, useState } from 'react';
import useFavoritesStore from '../../store/useFavoritesStore';
import 'boxicons/css/boxicons.min.css';

export const SaveButton: FC = () => {
    const saveFavorites = useFavoritesStore((state) => state.saveFavorites);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSave = async () => {
        setIsLoading(true);
        setError(null); // Resetear el error antes de intentar guardar
        try {
            await saveFavorites(); // Suponiendo que saveFavorites es una función asíncrona
        } catch (error) {
            setError('Error al guardar favoritos. Inténtalo de nuevo. '+ error);
        } finally {
            setTimeout(() => setIsLoading(false), 1000); // Deshabilitar el botón después de 2 segundos
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
                <i className="bx bx-loader-circle bx-spin"></i> // Icono de carga
            ) : (
                <i className="bx bx-save"></i>
            )}
            <span>{isLoading ? 'Guardando...' : 'Guardar favoritos'}</span>
            {error && <p className="error-message">{error}</p>} {/* Mensaje de error */}
        </button>
    );
};
