import { FC, useState } from 'react'
import { Pagination } from '../pagination/Pagination';
import { CardLoader } from '../card-loader/CardLoader';
import { useFetch } from '../../hook/useFech'
import { URl_API } from '../../constans/Url';

import './grid-locations.css'

export const GridLocations:FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, error, infoPages } = useFetch(
        URl_API + 'location',
        currentPage
    )
    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <>
        <div className="grid-locations">
            {data.map((location: {id: number, name: string, type: string, dimension: string}) => (
                loading ? (
                    <CardLoader key={location.id} />
                ):(
                    <div className="card-location" key={location.id}>
                    <div className='card-content'>
                        <h2>{location.name}</h2>
                        <p>{location.type}</p>
                        <p>{location.dimension}</p>
                    </div>
                    </div>
                )
                
            ))}
        </div>
        <Pagination
            currentPage={currentPage}
            totalPages={infoPages as number}
            onPageChange={setCurrentPage}
            />
    </>
  )
}
