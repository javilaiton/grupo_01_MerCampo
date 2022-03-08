import '../assets/css/mainIndex.css'
import TotProducts from './totProducts'
import TotUsers from './totUsers'
import cosecha from '../assets/images/cosecha.jpg'
function MainIndex() {
    return (
        <div className="mainIndex-api">
            <div className='infoImage'>
                <p>"Frutas y verduras cosechadas con amor para la familia"</p>
                <img src={cosecha}  className='image' />  
                
            </div>
            <div className='infoCards'>
                <TotProducts />
                <TotUsers />
            </div>
        </div>
    )
}

export default MainIndex