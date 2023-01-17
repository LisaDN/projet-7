import React from "react";
import { NavLink } from "react-router-dom";

export default function Pagination({
  accommodationsPerPage,
  totalPosts,
  paginate,
}) {
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / accommodationsPerPage); i++) {
    numberOfPages.push(i);
  }
  return (
    <nav className="wrapperNumber">
      <ul>
        {numberOfPages.map((number) => (
          <li key={number}>
            <NavLink to={"/"} onClick={() => paginate(number)}>
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
