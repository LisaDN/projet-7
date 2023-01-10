import React from "react";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(pages + 1).keys()].splice(1);
  return (
    <ul>
      {pageNumbers.map((pageN) => (
        <li key={pageN}>
          <a onClick={() => setCurrentPage(pageN)}>{pageN}</a>
        </li>
      ))}
    </ul>
  );
}
