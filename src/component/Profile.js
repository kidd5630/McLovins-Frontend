import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Admin from './Admin';


const Profile = ({myUsername, isAdmin, myPassword, myEmail}) => {

    console.log("email", myEmail);
return (
   <>
    <div className="userInfo">
        <h1>My Profile</h1>
        <div>UserName: {myUsername}</div>
        <div>Email: {myEmail}</div>
        <div>Password: {myPassword}</div>
    </div>
    {isAdmin?
    <Admin />
    :
    <div></div>
    }
   </>
)

}
export default Profile;


