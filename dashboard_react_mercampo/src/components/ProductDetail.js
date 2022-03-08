import '../assets/css/ProductDetail.css'
import { useState, useEffect } from 'react';


function ProductDeatil(props) {
    const [isVisit, setIsVisit] = useState(false);

    useEffect(async() => {
        setTimeout(() => {
            setIsVisit(true);
        }, 2000)
    }, [])

    let view = isVisit ? (
        <div className="oneProduct">
            <div className='oneProduct__image'>
                <img src={props.image} alt="Product" />
            </div>
            <h3 className="oneProduct__title">
                {props.name}
            </h3>
            <p className="oneProduct__desc">
                {props.description}
            </p>            
            <p className='oneProduct__price'>
                $ {props.price}
            </p>
        </div>        
    ) : (
        "..."
    )

    return (
        <div>
            {view}
        </div>
    )
}

export default ProductDeatil;