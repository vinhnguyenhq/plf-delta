import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <Link to="/admin">Admin - Home Link</Link>
    <Link to="/admin/store/form">Admin - Store - Form Link</Link>
    <Link to="/admin/store/list">Admin - Store - List Link</Link>
  </div>
);

export default NavBar;
