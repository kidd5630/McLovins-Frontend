import React, { useState, useEffect } from 'react';
import { fetchAllUsers } from '../api'

const Admin = ({ userToken }) => {
    useEffect(() => {
        fetchAllUsers(userToken)
            .then((users) => {
                const list = users.users;
                setUsersList(list);
                localStorage.setItem('usersList', JSON.stringify(list));
            })
            .catch(error => console.error(error))
    }, []);
    const [usersList, setUsersList] = useState([localStorage.getItem('usersList')]);
    console.log("here", usersList)
    return (
        <div className="adminDash">
            {usersList[0] ?
                usersList.map(user => {
                    console.log("here it is", user)
                    return (
                        <div className="userBox">
                            <div> {user.username} </div>
                            <div>Email: {user.email} </div>
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}
export default Admin;