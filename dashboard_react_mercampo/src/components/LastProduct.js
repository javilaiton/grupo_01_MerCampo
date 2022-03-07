import React from "react";
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

function LastProduct() {
  const [product, setProducts] = useState([]);
      
  	useEffect(async() => {await getProduct();
        }, []);
      
    const getProduct = async () => {
      const data = await fetch("https://mercampogrupo01.herokuapp.com/api/products/last");
      const product = await data.json();
      setProducts(product);
    };

		const result = (
			<ProductDetail
				name={product.nombre}
				description={product.descripcion}
				price={product.precio}
				picture={product.imagen}
				amount={product.cantidad}
			/>
		);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo Producto
          </h5>
        </div>
        {result}
      </div>
    </div>				
  )
}

export default LastProduct;