import React from "react";

function UserDetail(props) {
  return (
    <div className="col-lg-6 mb-4">
      <br></br>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="text-center">Imagen</div>
          <p>
            Nombre:
            <br></br>
            Id:
            <br></br>
            Email:
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
