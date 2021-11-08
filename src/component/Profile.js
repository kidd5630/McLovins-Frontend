import React, {useState} from 'react';
import Admin from './Admin';
import EditProfile from './EditProfile';

const Profile = ({usersList, myUsername, userToken,  isAdmin, myPassword,  myEmail}) => {
    const [isActiveEdit, setActiveEdit] = useState("false");
    const [isActiveAdmin, setActiveAdmin] = useState("false");
    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };
    const ToggleClassAdmin = () => {
        setActiveAdmin(!isActiveAdmin);
    };
    let hiddenPassword = '';
    for(let i=0; i<myPassword.length; i++){
        hiddenPassword+="*";
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
                <div>Password: {hiddenPassword}</div> 
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
            {myUsername?
                (<div className="iaInteractiveBox">
                    <div className={`editFeild-${isActiveEdit ? "inactive" : "active"}`}>
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
            (<div>
                <button className="adminbtn" 
                onClick={ToggleClassAdmin}>
                    User List
                </button>
            </div>)
            :
            (<div></div>)
            }
            {isAdmin?
                (<div className="adminInteractiveBox">
                    <div className={`editFeild-${isActiveAdmin ? "inactive" : "active"}`}>
                        <Admin 
                        userToken={userToken}
                        usersList={usersList}
                        />
                    </div>
                </div>)
                :
                (<div></div>)
            }
        </>
        )
}
export default Profile;