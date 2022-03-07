import React from "react";
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

function LastProduct() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo Producto
          </h5>
        </div>
        <ProductDetail></ProductDetail>
      </div>
    </div>
  );
}

export default LastProduct;
