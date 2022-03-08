import { useState, useEffect } from 'react';
import '../assets/css/TotProducts.css'

function TotProducts() {
    const [total, setTotal] = useState([]);
    const [last, setLast] = useState([]);

    const callApi = async () => {
        try {
            const res = await fetch("https://mercampogrupo01.herokuapp.com/api/products")
            const result = await res.json()
            return result[0]
        } catch (error) {
            throw "Ocurrió un error con fetch"
        }
    }

    const callProduct = async () => {
        try {
            const res = await fetch(`https://mercampogrupo01.herokuapp.com/api/products/last`)
            const result = await res.json()
            return result
        } catch (error) {
            throw "Ocurrió un error con fetch"
        }
    }

    useEffect(async () => {
        const newTotal = await callApi()
        const newProduct = await callProduct()
        setTotal(newTotal)
        setLast(newProduct)
    }, [])

    return (
        <div>
            <div className='product__card'>
                
                <div className='product__info'>
                    <div className='product__info--total'>
                        <div className='total-products'>
                            <h4>{total.count}</h4>
                        </div>
                        <div className='total-products_desc'>
                            <p>Total de productos</p>
                        </div>
                    </div>
                    <div className='product__info--last'>
                        <div className='last-product'>
                            <h4>{last.name}</h4>
                        </div>
                        <div className='last-product_desc'>
                            <p>Ultimo producto creado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotProducts;