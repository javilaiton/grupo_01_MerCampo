import React from "react";
import logo from "../assets/images/logo_d.png";
import ContentWrapper from "./ContentWrapper";
import UsersInDb from "./UsersInDb";
import ProductsInDb from "./ProductsInDb";
import ContentRowFruvers from "./ContentRowFruvers";
import FindProduct from "./FindProduct";
import LastProduct from "./LastProduct";
import LastUser from "./LastUser";
import Error from "./Error";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="MerCampo"></img>
          </div>
          <div className="side-brand-icon">
            <span>MerCampo</span>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <span>MerCampo</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Información:</div>

        <li className="nav-item">
          <Link className="nav-link" to="/UsersInDb">
            <span>Todos los Usuarios</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/ProductsInDb">
            <span>Todos los Productos</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/ProductsInDb">
            <span>Todas las Verduras</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/ProductsInDb">
            <span>Todas las Frutas</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <ContentWrapper></ContentWrapper>
      <UsersInDb></UsersInDb>
      <ProductsInDb></ProductsInDb>
      <ContentRowFruvers></ContentRowFruvers>
      <FindProduct></FindProduct>
      <LastProduct></LastProduct>
      <LastUser></LastUser>
      <Error></Error>
    </React.Fragment>
  );
}

export default SideBar;
