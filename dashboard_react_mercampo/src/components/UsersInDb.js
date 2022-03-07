import React from "react";
import { useState, useEffect } from "react";
import User from "./User";

function UsersInDb() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Usuarios MerCampo
        </h5>
      </div>
      <User></User>
    </div>
  );
}

export default UsersInDb;
