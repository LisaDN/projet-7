import React from "react";
import { NavLink } from "react-router-dom";

export default function Pagination({
  accommodationsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const numberOfPages = [];
  // console.log(currentPage);
  for (let i = 1; i <= Math.ceil(totalPosts / accommodationsPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <nav className="wrapperNumber">
      <ul className="numberFlex">
        {numberOfPages.map((number) => (
          <li key={number}>
            <NavLink
              to={"/"}
              onClick={() => paginate(number)}
              className={() => (currentPage === number ? "active" : "")}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
