import React, { useState } from 'react';
import { editUser, BASE_URL } from '../api'

const EditProfile = ({password, email, userToken, ToggleClass, setMyPassword,setMyEmail }) => {

    const [newPass, setNewPass] = useState(password);
    const [newEmail, setNewEmail] = useState(email);
    function resetForm() {
        setNewUser('');
        setNewPass('');
        setNewEmail('');
    }
    async function edit(e) {
        e.preventDefault();
        try {
            const results = await editUser(BASE_URL, userToken, newPass, newEmail);
            console.log("these are the results from edit", results)
            if (results) {
                setMyPassword(newPass);
                setMyEmail(newEmail)
                location.reload()
                ToggleClass();
                resetForm();
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section className="editUserAside">
            <h1 className="editUser">Edit User Information</h1>
            <form className="editUserForm"
                onSubmit={(e) => {
                edit(e)
                }}>
                <div className="editUserContent">
                    <label className="editUserLabel">Password:</label>
                </div>
                <div className="editUserContent">
                    <input className="editUserInput" type="password"
                        placeholder="password" value={newPass}
                        onChange={(event) => {
                            setNewPass(event.target.value);
                        }} />
                </div>
                <div className="editUserContent">
                    <label className="editUserLabel">Email:</label>
                </div>
                <div className="editUserContent">
                    <input className="editUserInput" type="email"
                        placeholder="email" value={newEmail}
                        onChange={(event) => {
                            setNewEmail(event.target.value);
                        }} />
                </div>
                <button className="editProdSubmit" type="submit">Update Info!</button>
            </form>
        </section>
    )
}

export default EditProfile;