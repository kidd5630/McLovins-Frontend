import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import CartItem from './CartItem'

const Cart = ({userToken, allProducts, allCartItem, isAdmin, setAllCartItem, userId}) => {
  const [updateCart,setUpdateCart] = useState(allCartItem)
  const totalCartPrice = allCartItem ? allCartItem.reduce( ( sum, { price } ) => sum + parseFloat(price) , 0) : 0
  console.log('allCartItem fgsdf', allCartItem);



  return ( 
      <div>
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
              productsToCartItem={productsToCartItem}
              userToken={userToken}
              setAllCartItem={setAllCartItem}
              allCartItem={allCartItem}
              updateCart={updateCart}
              setUpdateCart={setUpdateCart}
              userId={userId}
              />
            )
          })
        :
        "Your Cart is Empty"}
        </div>
        <div>Total: ${totalCartPrice}</div>
        </div>

    )}

export default Cart;