import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import CartItem from './CartItem'

const Checkout = ({userToken, allProducts, allCartItem, isAdmin, setAllCartItem, userId}) => {

    return(
        <div>
         <h3>Billing Address</h3>
            <label for="fname"> Full Name</label>
            <input type="text" name="firstname" placeholder="John M. Doe"> </input>
            <label for="email"> Email</label>
            <input type="text" name="email" placeholder="john@example.com"></input>
            <label for="adr"> Address</label>
            <input type="text" name="address" placeholder="542 W. 15th Street"> </input>
            <label for="city"> City</label>
            <input type="text" name="city" placeholder="New York"></input>
        </div>
    )

}
export default Checkout;