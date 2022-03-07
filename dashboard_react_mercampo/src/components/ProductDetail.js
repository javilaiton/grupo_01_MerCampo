import React from "react";

function ProductDetail(props) {
  return (
    <div className="col-lg-6 mb-4">
      <br></br>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 60 + "rem" }}
              src={props.image}
            />
          </div>
          <p>
            <h4>{props.name}</h4>
            <br></br>
            {props.description}
            <br></br>
            Precio: {props.price}
            <br></br>
            Categoria: {props.category}
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
