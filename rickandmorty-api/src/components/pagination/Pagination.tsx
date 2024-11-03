import { FC } from 'react';

import './pagination.css';
import 'boxicons/css/boxicons.min.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
      <i className='bx bx-chevron-left' style={{color: '#fff', fontSize: '40px'}}  ></i>
      </button>
      <span> Page {currentPage} of {totalPages} </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
      <i className='bx bx-chevron-right' style={{color: '#fff', fontSize: '40px'}}></i>
      </button>
    </div>
  );
};
