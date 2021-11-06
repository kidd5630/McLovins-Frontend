import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { fetchAllUsers } from '../api'
import DeleteCartItem from './DeleteCartItem'

const Users = ({cartDisplayNumber, setCartDisplayNumber, cartItem, productsToCartItem, allCartItem, userToken, setAllCartItem, updateCart, setUpdateCart, userId}) => {
    
    /*     
    async function fetchingAllUsers(event) {
        event.preventDefault();
        try{
            const results = await fetchAllUsers(userToken);
            console.log('this results', results);

        } catch(error) {
            console.error(error)
        }
    } */
    return(
        <div>
            <h1>All Users</h1>
            <div></div>
        </div>
    )
}

export default Users;