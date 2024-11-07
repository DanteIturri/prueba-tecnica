import { FC, useState } from 'react';
import { ItemCharacter } from './ItemCharacter';
import { Pagination } from '../pagination/Pagination';
import { SaveButton } from './SaveButton';
import { useFetch } from '../../hook/useFech';
import { URl_API } from '../../constans/Url';
import { Character } from '../../types/Characters';
import 'boxicons/css/boxicons.min.css';
import './grid-characters.css';
import { CardLoader } from '../card-loader/CardLoader';
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
        {data.map((character: Character) =>
          loading ? (
            <CardLoader key={character.id}  isImage={true} />
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
