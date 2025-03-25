import 'boxicons/css/boxicons.min.css';
import { FC, useState } from 'react';
import { URl_API } from '../../constans/Url';
import { useFetch } from '../../hook/useFech';
import { Character } from '../../types/Characters';
import { CardLoader } from '../card-loader/CardLoader';
import { Pagination } from '../pagination/Pagination';
import './grid-characters.css';
import { ItemCharacter } from './ItemCharacter';
import { SaveButton } from './SaveButton';
export const GridCharacters: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error, infoPages } = useFetch(
    URl_API + 'character',
    currentPage
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SaveButton />
      <div className="grid-character">
        {loading ? (
          // Show a predetermined number of skeleton loaders when loading
          Array.from({ length: 20 }).map((_, index) => (
            <CardLoader key={`skeleton-${index}`} isImage={true} />
          ))
        ) : (
          // Only map through data when not loading
          data?.map((character: Character) => (
            <ItemCharacter key={character.id} character={character} />
          ))
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
