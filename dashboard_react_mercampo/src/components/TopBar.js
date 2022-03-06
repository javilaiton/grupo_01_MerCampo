import React from "react";

function TopBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
            <i className="fas fa-bell fa-fw"></i>
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              MerCampo
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
