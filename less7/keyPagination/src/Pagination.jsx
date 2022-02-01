// input: pageNumber, prevNumber, nextHandler
// out: jsx

import React from "react";

const Pagination = ({pageNumber, prev, next, usersCount, itemsPerPage}) => {
  const lastPage = Math.ceil(usersCount / itemsPerPage);
  return (
    <div className='pagination'>
      <button className='btn' onClick={prev} disabled={pageNumber === 1}>
        ←
      </button>
      <span className='pagination__page'>{pageNumber}</span>
      <button className='btn' onClick={next} disabled={pageNumber === lastPage}>
        →
      </button>
    </div>
  );
};

export default Pagination;
