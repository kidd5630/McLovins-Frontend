import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import CartItem from './CartItem'

const Cart = ({userToken, allProducts, allCartItem, isAdmin}) => {
  
    return ( 
        <div>
    
        {allCartItem && allCartItem.length ?
        allCartItem.map(cartItem=> {
            const productsToCartItem = [];
            for (let i=0; i<allProducts.length; i++){
              if (allProducts[i].id == cartItem.product_id){
                productsToCartItem.push(allProducts[i])
              }
            }
            return (
              <CartItem
              cartItem={cartItem}
              productsToCartItem={productsToCartItem}/>
            )
          })
        :
        "Your Cart is Empty"}
       
        </div>
         
    )}

export default Cart;