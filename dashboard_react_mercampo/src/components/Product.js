import '../assets/css/Product.css'
import { Link } from 'react-router-dom';


function  Product(props)  {
    let id = `/products/${props.id}`
    return (
        
        <div className="product">
                <h4 className="product__title">
                     {props.name}
                </h4>
                <p className='product__image'>
                    <img src={props.image} alt="product"  />     
                </p>
                <p className='product__price'>
                     {props.description}
                </p>
                <h4 className='product__price'>
                    $ {props.price}
                </h4>
                <h4 className='product__price'>
                    Categoria:{props.category}
                </h4>
        </div>
    )
}

export default Product;
