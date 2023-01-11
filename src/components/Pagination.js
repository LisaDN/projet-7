import React from "react";

export default function Pagination({
  accommodationsPerPage,
  currentPage,
  setCurrentPage,
  totalPosts,
}) {
  const pageNumbers = [...Array(accommodationsPerPage + 1).keys()].splice(1);
  console.log(accommodationsPerPage, currentPage);

  const pages = Math.ceil(totalPosts / accommodationsPerPage);
  console.log(pageNumbers, pages);
  return (
    <ul>
      {/* {pageNumbers.map((pageN) => (
        <li key={pageN}>
          <a href="!#" onClick={() => setCurrentPage(pageN)}>
            {pageN}
          </a>
        </li>
      ))} */}
    </ul>
  );
}
