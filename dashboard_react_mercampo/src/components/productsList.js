import { useState, useEffect } from 'react';
import Product from './product';
import '../assets/css/ProductsList.css'

function ProductsList() {
    const [listProducts, setListProducts] = useState([]);
    const [isVisit, setIsVisit] = useState(false);

    const callApi = async () => {
        try {
            const res = await fetch("https://mercampogrupo01.herokuapp.com/api/products")
            const result = await res.json()
            return result [1]
        } catch (error) {
            throw "Ocurrió un error con fetch"
        }
    }

    useEffect(async () => {
        const list = await callApi()
        setListProducts([...listProducts, ...list])
        setTimeout(() => {
            setIsVisit(true);
        }, 3000)
    }, [])

    let view = isVisit ? (
        listProducts.length === 0 ? (
            "CARGANDO.."
        ) : (
            listProducts.map((product, index) => <Product key={index} id={product.idproducts} image={product.image} name={product.name}  description={product.description} price={product.price} category={product.category}  />)
        )
    ) : (
        "..."
    )

    return (
        <div className='product__list'>
            {view}
        </div>
    )
}

export default ProductsList;