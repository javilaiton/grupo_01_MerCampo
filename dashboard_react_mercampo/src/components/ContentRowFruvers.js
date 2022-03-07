import React from "react";
import { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowFruvers() {
	const [Products, setProducts] = useState([]);
      
  	useEffect(async() => {await getProduct();
        }, []);
      
    const getProduct = async () => {
      const data = await fetch("https://mercampogrupo01.herokuapp.com/api/users");
      const product = await data.json();
      setProducts(product);
    };

    const count = Products.count

  	const [Users, setUsers] = useState([]);

    useEffect(async() => {await getUser();
        }, []);
      
  	const getUser = async () => {
      const data = await fetch("https://mercampogrupo01.herokuapp.com/api/users");
      const user = await data.json();
      setUsers(user);
    };

    const Usercount = Users.count

  let productsInDB = {
    title: "Total Productos",
    color: "primary",
    cuantity: count,
    icon: "fa-clipboard-list",
  };

  let usersQuantity = {
    title: "Cantidad de usuarios",
    color: "warning",
    cuantity: Usercount,
    icon: "fa-user-check",
  };

  let cartProps = [productsInDB, usersQuantity];

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>				
  )
}

export default ContentRowFruvers;