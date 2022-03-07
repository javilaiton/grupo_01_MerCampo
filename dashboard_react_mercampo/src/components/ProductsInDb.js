import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";

function ProductsInDb() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Productos MerCampo
          <Product></Product>
        </h5>
      </div>
      Contenido
    </div>
  );
}

export default ProductsInDb;
