import '../assets/css/UserDetail.css'
import { useState, useEffect } from 'react';


function LastUsrInDb() {
    const [lastUser, setLastUser] = useState([]);
    const [isVisit, setIsVisit] = useState(false);

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
        const newUser = await callUser()
        setLastUser(newUser)
        setTimeout(() => {
            setIsVisit(true);
        }, 2000)
    }, [])

    let view = isVisit ? (
        <div className="oneUser">
            <div><div className="oneUser__image">
                <img src={lastUser.image} alt="User" />
            </div>
                <h3 className='oneUser__title'>
                    Nombre: {lastUser.name}
                </h3>
                <h3 className='oneUser__title'>
                    Apellido: {lastUser.lastname}
                </h3>
                <h3 className='oneUser__title'>
                    Email: {lastUser.email}
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

export default LastUsrInDb;