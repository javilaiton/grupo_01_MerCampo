import { useState, useEffect } from 'react';
import '../assets/css/UserList.css'
import User from './user';


function UsersList() {
    const [listUsers, setListUsers] = useState([]);
    const [isVisit, setIsVisit] = useState(false);

    const callApi = async () => {
        try {
            const res = await fetch("https://mercampogrupo01.herokuapp.com/api/users")
            const result = await res.json()
            return result[1]
        } catch (error) {
            throw "Ocurrió un error con fetch"
        }
    }

    useEffect(async () => {
        const list = await callApi()
        setListUsers([...listUsers, ...list])
        setTimeout(() => {
            setIsVisit(true);
        }, 3000)
    }, [])

    let view = isVisit ? (
        listUsers.length === 0 ? (
            "CARGANDO.."
        ) : (
            listUsers.map((user, index) =>
                <User key={index} id={user.idusers} name={user.name} lastname={user.lastname} email={user.email} image={user.image} />
            )
        )
    ) : (
        "..."
    )

    return (
        <div className='user__list'>
            {view}
        </div>
    )
}

export default UsersList;