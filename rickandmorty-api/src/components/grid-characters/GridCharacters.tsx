import 'boxicons/css/boxicons.min.css';
import { FC, useEffect, useState } from 'react';
import { useCharacters } from '../../hook/useCharacters';
import { CardLoader } from '../card-loader/CardLoader';
import { Pagination } from '../pagination/Pagination';
import './grid-characters.css';
import { ItemCharacter } from './ItemCharacter';
import { SaveButton } from './SaveButton';

export const GridCharacters: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useCharacters(currentPage);

  const infoPages = data?.info.pages || 0;
  const URl_API = 'https://rickandmortyapi.com/api/';

  useEffect(() => {
    // Prefetch siguiente página
    if (currentPage < infoPages) {
      const prefetchNextPage = async () => {
        const nextPageUrl = `${URl_API}character?page=${currentPage + 1}`;
        await fetch(nextPageUrl);
      };
      prefetchNextPage();
    }
  }, [currentPage, infoPages]);

  if (error) {
    return <div>Error: {(error as Error)?.message || 'An error occurred'}</div>;
  }

  return (
    <>
      <SaveButton />
      <div className="grid-character">
        {isLoading ? (
          // Mostrar skeletons durante la carga
          Array.from({ length: 20 }).map((_, index) => (
            <CardLoader key={`skeleton-${index}`} isImage={true} />
          ))
        ) : (
          data?.results.map((character) => (
            <ItemCharacter key={character.id} character={character} />
          ))
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={data?.info.pages || 0}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
