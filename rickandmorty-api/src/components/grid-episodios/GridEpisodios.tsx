import { FC, useState } from 'react';
import { Pagination } from '../pagination/Pagination';
import { CardLoader } from '../card-loader/CardLoader';
import { useFetch } from '../../hook/useFech';
import './Grid.css';
import { URl_API } from '../../constans/Url';

type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};
export const GridEpisodes: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error, infoPages } = useFetch(
    URl_API + 'episode',
    currentPage
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="grid-episodes">
        {data.map((episode: Episode) =>
          loading ? (
            <CardLoader key={episode.id} />
          ) : (
            <div className="card-episode" key={episode.id}>
              <div className="card-content">
                <h2>{episode.name}</h2>
                <p>{episode.air_date}</p>
                <p>{episode.episode}</p>
              </div>
            </div>
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
