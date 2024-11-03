import { FC, useState } from 'react';
import useFavoritesStore from '../../store/useFavoritesStore';
import { CharacterDetails } from './CharacterDetails';
interface Character {
  id: number;
  name: string;
  status: string; 
  species: string;
  type: string;
  gender: string; 
  origin: Location; 
  location: Location; 
  image: string; 
  episode: string[];
  url: string; 
  created: string;
}
interface Location {  
  name: string; 
  url: string; 
}

export const ItemCharacter: FC<{character:Character}> = ({ character }) => {
    const { addTempFavorite, removeTempFavorite, isTempFavorite } = useFavoritesStore();
    const [isModalOpen, setModalOpen] = useState(false);
  const isCharacterFavorite = isTempFavorite(character.id);

  const toggleTempFavorite = () => {
    if (isCharacterFavorite) {
      removeTempFavorite(character.id);
    } else {
      addTempFavorite(character);
    }
  };

  const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

  return (
    
    <>
    <div className="card-character" key={character.id} >
        <div className='card-image'><img src={character.image} alt={character.name} /></div>
        <div className="card-content">
          <div>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
          </div>
          <button className="button-heart heart" onClick={toggleTempFavorite} style={{color: isCharacterFavorite ? '#2C7A8E' : 'black'}}>
            <i className="bx bxs-heart"></i>
          </button>
        </div>
        <button className='button-more-details' onClick={openModal}> more details</button>
    </div>
        <CharacterDetails isOpen={isModalOpen} onClose={closeModal} character={character} />
    </>
  );
};
