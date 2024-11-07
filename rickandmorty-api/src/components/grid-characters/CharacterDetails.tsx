import { FC } from 'react';
import 'boxicons/css/boxicons.min.css';
import { Character } from '../../types/Characters';
interface CharacterDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  character: Character;
}

export const CharacterDetails: FC<CharacterDetailsProps> = ({
  isOpen,
  onClose,
  character,
}) => {
  if (!isOpen || !character) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <i className="bx bx-x"></i>
        </button>

        <div className="modal-content-details">
          <img src={character.image} alt={character.name} />
          <div className="modal-content-text">
            <h2>{character.name}</h2>
            <p>
              <span className="font-black">Status:</span> {character.status}
            </p>
            <p><span className="font-black">Species:</span> {character.species}</p>
            <p><span className="font-black">Type:</span> {character.type}</p>
            <p><span className="font-black">Gender:</span> {character.gender}</p>
            <p><span className="font-black">Origin:</span> {character.origin.name}</p>
            <p><span className="font-black">Location:</span> {character.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
