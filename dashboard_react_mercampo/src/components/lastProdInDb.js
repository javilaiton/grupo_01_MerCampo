import '../assets/css/ProductDetail.css'
import { useState, useEffect } from 'react';

function LastProdInDb() {
    const [lastProduct, setLastProduct] = useState([]);
    const [isVisit, setIsVisit] = useState(false);

    const callProduct = async () => {
        try {
            const res = await fetch(`https://mercampogrupo01.herokuapp.com/api/products/last`)
            const result = await res.json()
            return result 
        } catch (error) {
            throw "Ocurrió un error con fetch"
        }
    }

    useEffect(async() => {
        const newProduct = await callProduct()
        setLastProduct(newProduct)
        setTimeout(() => {
            setIsVisit(true);
        }, 2000)
    }, [])

    let view = isVisit ? (
        <div className="oneProduct">
            <div className="oneProduct__image">
                <img src={lastProduct.image} alt="product" />
            </div>
            <h3 className='oneProduct__title'>
                Nombre: {lastProduct.name}
            </h3>
            <h3 className='oneProduct__title'>
                Descripción: {lastProduct.description}
            </h3>            
            <h3 className='oneProduct__title'>
                Precio: ${lastProduct.price}
            </h3>
            <h3 className='oneProduct__title'>
                 Categoria: {lastProduct.category}
            </h3>

        </div>
    ) :( 
        "..."
    )

    return (
        <div>
            {view}
        </div>
    )
}

export default LastProdInDb;