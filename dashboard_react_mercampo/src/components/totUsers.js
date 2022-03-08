import { useState, useEffect } from 'react';

import '../assets/css/TotProducts.css'

function TotUsers() {
    const [total, setTotal] = useState([]);
    const [last, setLast] = useState([]);

    const callApi = async () => {
        try {
            const res = await fetch("https://mercampogrupo01.herokuapp.com/api/users")
            const result = await res.json()
            return result[0]
        } catch (error) {
            throw "Ocurrió un error con fetch"
        }
    }

    const callUser = async () => {
        try {
            const res = await fetch(`https://mercampogrupo01.herokuapp.com/api/users/last`)
            const result = await res.json()
            return result
        } catch (error) {
            throw "Ocurrió un error con fetch"
        }
    }

    useEffect(async () => {
        const newTotal = await callApi()
        const newUser = await callUser()
        setTotal(newTotal)
        setLast(newUser)
    }, [])

    return (
        <div>
            <div className='product__card'>
                
                <div className='product__info usr'>
                    <div className='product__info--total'>
                        <div className='total-products'>
                            <h4>{total.count}</h4>
                        </div>
                        <div className='total-products_desc'>
                            <p>Total de usuarios</p>
                        </div>
                    </div>
                    <div className='product__info--last'>
                        <div className='last-product'>
                            <h4>{last.name} {last.lastname}</h4>
                        </div>
                        <div className='last-product_desc'>
                            <p>Ultimo usuario registrado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotUsers;