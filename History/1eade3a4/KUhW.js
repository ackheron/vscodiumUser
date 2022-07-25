/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaListAlt,
  FaCheckSquare,
  FaPlusSquare,
  FaTrash,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      ss="d-flex justify-content-between bg-secondary p-3"
      id="mainFooter"
    >
      <div ss="btn-group">
        <a href="#" ss="btn btn-outline-dark bg-light">
          <FaListAlt />
        </a>
        <a href="#" ss="btn btn-outline-dark bg-light">
          <FaCheckSquare />
        </a>
        <a href="#" ss="btn btn-outline-dark bg-light">
          <FaPlusSquare />
        </a>
      </div>
      <button ss="btn btn-outline-dark bg-light">
        <FaTrash />
      </button>
    </footer>
  );
};

export default Footer;
