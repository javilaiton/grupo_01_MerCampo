import React from "react";
import { useState, useEffect } from "react";
import UserDetail from "./UserDetail";

function LastUser() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Último Usuario</h5>
      </div>
      <UserDetail></UserDetail>
    </div>
  );
}

export default LastUser;
