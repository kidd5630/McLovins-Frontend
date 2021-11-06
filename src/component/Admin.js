import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import OrderHistory from './OrderHistory'
import Users from './Users'

const Admin = ({userToken, allProducts, allCartItem}) => {

return(
    <>
    <div>You're an admin?!</div>
    
    <Users/>
    <OrderHistory/>
    </>
)
}

export default Admin;