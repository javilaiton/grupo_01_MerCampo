import '../assets/css/UserDetail.css'
import { useState, useEffect } from 'react';


function UserDetail(props) {
    const [isVisit, setIsVisit] = useState(false);

    useEffect(async() => {
        setTimeout(() => {
            setIsVisit(true);
        }, 2000)
    }, [])

    let view = isVisit ? (
        <div className="oneUser">
            <div>
            <div className="oneUser__image">
                <img src={props.image} alt="User" />
            </div>
                <h3 className='oneUser__title'>
                    {props.Name} {props.lastname}
                </h3>
                <h3 className='oneUser__title'>
                    Email: {props.email}
                </h3>
            </div>
            
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

export default UserDetail;