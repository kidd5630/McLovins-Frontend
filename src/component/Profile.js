import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Admin from './Admin';
import {editUser, BASE_URL} from '../api'
import EditProfile from './EditProfile';


const Profile = ({myUsername, userToken, setMyUsername, isAdmin, myPassword, setMyPassword, myEmail, setMyEmail}) => {
    const [isActiveEdit, setActiveEdit] = useState("false");
    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };

return (
   <>
    <div className="userInfo">
        <h1>My Profile</h1>
        <div>
            <div>UserName: {myUsername}</div>

        </div>
        <div>
            <div>Email: {myEmail}</div>
        </div>
        <div>
           <div>Password: {myPassword}</div> 
        </div>
    </div>

    {myUsername?
        (<div>
        <button className="edit button" 
        onClick={ToggleClass}>
            Edit
        </button>
    </div>)
    :
    (<div></div>)
    }
{myUsername
    ?
    (<div className="iaInteractiveBox">
            <div 
            className={`editFeild-${isActiveEdit ? "inactive" : "active"}`}
            >
                <EditProfile 
                ToggleClass={ToggleClass}   
                userToken={userToken}
                    
                />
            </div>
    </div>)
    :
    (<div></div>)
    }




    {isAdmin?
    <Admin />
    :
    <div></div>
    }
   </>
)
}
export default Profile;


