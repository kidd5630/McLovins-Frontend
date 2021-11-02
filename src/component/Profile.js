import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Admin from './Admin';
import {editUser, BASE_URL} from '../api'
import EditProfile from './EditProfile';


const Profile = ({myUsername, setMyUsername, isAdmin, myPassword, setMyPassword, myEmail, setMyEmail}) => {
    const [newUser, setNewUser] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [isActiveEdit, setActiveEdit] = useState("false");
    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };

    function resetForm() {
        setNewUser('');
        setNewPass('');
        setNewEmail('');
    }
    async function edit(e) {
        e.preventDefault();
            try {
                const results = await editUser(BASE_URL, userToken, userName, password,email);
                if(results.id) {
                    setMyUsername(userName);
                    setMyPassword(password);
                    setMyEmail(email)
                    location.reload()
                    // ToggleClass();
                    resetForm();
                }
            } catch(error) {
                console.error(error)
            }
    }

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


