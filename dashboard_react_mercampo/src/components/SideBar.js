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
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="MerCampo"></img>
          </div>
        </Link>

        <hr className="sidebar-divider my-0"></hr>

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - MerCampo</span>
          </Link>
        </li>

        <hr className="sidebar-divider">
          <div className="sidebar-heading">Opciones</div>
        </hr>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Todos los Usuarios</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Todos los Productos</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Total de Frutas</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Total de Verduras</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block"></hr>
      </ul>
      <Routes>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/UsersInDb">
          <UsersInDb />
        </Route>
        <Route path="/ProductsInDb">
          <ProductsInDb />
        </Route>
        <Route path="/ContentRowFruvers">
          <ContentRowFruvers />
        </Route>
        <Route path="/LastProduct">
          <LastProduct />
        </Route>
        <Route path="/LastUser">
          <LastUser />
        </Route>
        <Route path="/FindProduct/:id">
          <FindProduct />
        </Route>
        <Route component={Error} />
      </Routes>
    </React.Fragment>
  );
}

export default SideBar;
