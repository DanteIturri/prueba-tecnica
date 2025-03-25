import { FC, useState } from 'react';
import useFavoritesStore from '../../store/useFavoritesStore';
import { Character } from '../../types/Characters';
import { CharacterDetails } from './CharacterDetails';

export const ItemCharacter: FC<{ character: Character }> = ({ character }) => {
  const { addTempFavorite, removeTempFavorite, isTempFavorite } =
    useFavoritesStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const isCharacterFavorite = isTempFavorite(character.id);

  const toggleTempFavorite = () => {
    if (isCharacterFavorite) {
      removeTempFavorite(character.id);
    } else {
      addTempFavorite(character);
    }
  };

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
  };
  const closeModal = () =>{
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  }

  return (
    <>
      <a onClick={openModal}>
        <div className="card-character" key={character.id}>
          <div className="card-image">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="card-content">
            <div>
              <h2>{character.name}</h2>
              <p>{character.status}</p>
              <p>{character.species}</p>
            </div>
            <button
              className="button-heart heart"
              onClick={toggleTempFavorite}
              style={{ color: isCharacterFavorite ? '#2C7A8E' : 'black' }}
            >
              <i className="bx bxs-heart"></i>
            </button>
          </div>
          <button className="button-more-details" onClick={openModal}>
            {' '}
            more details
          </button>
        </div>
      </a>
      <CharacterDetails
        isOpen={isModalOpen}
        onClose={closeModal}
        character={character}
      />
    </>
  );
};
