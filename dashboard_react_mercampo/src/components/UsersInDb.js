import React from "react";
import { useState, useEffect } from "react";
import User from "./User";

function UsersInDb() {
  const [Users, setUsers] = useState([]);

  useEffect(async () => {
    await getUsers();
  }, []);

  const getUsers = async () => {
    const data = await fetch("https://mercampogrupo01.herokuapp.com/api/users");
    const user = await data.json();
    setUsers(user);
  };
  const content =
    Users.length == 0 ? (
      <p>Cargando Usuarios</p>
    ) : (
      Users.list.map((user, index) => (
        <User
          key={index}
          idusers={user.idusers}
          name={user.name}
          lastname={user.lastname}
          email={user.email}
          image={user.details}
        ></User>
      ))
    );
  return (
    <div className="col-lg-6 mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Usuarios MerCampo
        </h5>
      </div>
      {content}
    </div>
  );
}

export default UsersInDb;
