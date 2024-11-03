import { FC, useState } from 'react'
import { Pagination } from '../pagination/Pagination';
import { useFetch } from '../../hook/useFech'

import './grid-locations.css'

export const GridLocations:FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, error, infoPages } = useFetch(
        'https://rickandmortyapi.com/api/location',
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
                    <div key={location.id} className="card-loading">
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text short"></div>
                        <div className="skeleton-text short"></div>
                    </div>
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
        {/* <div className="pagination">    
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span> Page {currentPage} </span>
            <button onClick={handleNextPage} disabled={currentPage === infoPages}>Next</button>
        </div> */}
    </>
  )
}
