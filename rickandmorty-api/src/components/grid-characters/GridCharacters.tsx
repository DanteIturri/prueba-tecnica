import { FC, useState } from 'react';
import { ItemCharacter } from './ItemCharacter';
import { CardLoading } from './CardLoading';
import { Pagination } from '../pagination/Pagination';
import { SaveButton } from './saveButton';
import { useFetch } from '../../hook/useFech';
import 'boxicons/css/boxicons.min.css';
import './grid-characters.css';

type Character = {
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
};

interface Location {  
  name: string; 
  url: string; 
}

export const GridCharacters: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error, infoPages } = useFetch(
    'https://rickandmortyapi.com/api/character',
    currentPage
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SaveButton />
      <div className="grid-character">
        {data.map((character: Character) =>
          loading ? (
            <CardLoading key={character.id}/>
          ) : (
            <ItemCharacter key={character.id} character={character} />
          )
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={infoPages as number}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
