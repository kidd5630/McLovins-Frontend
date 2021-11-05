import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import CartItem from './CartItem'

const Cart = ({cartDisplayNumber, setCartDisplayNumber, userToken, allProducts, allCartItem, isAdmin, setAllCartItem, userId}) => {
  const [updateCart,setUpdateCart] = useState(allCartItem)
  const [totalPrice, settotalPrice] = useState(0)
  console.log('allCartItem 3=============D', allCartItem);

  useEffect(() => {

    let totalCartPrice = allCartItem ? allCartItem.reduce( ( sum, { price, item_quantity } ) => sum + (parseFloat(price) * parseFloat(item_quantity)), 0) : 0
    settotalPrice(totalCartPrice)
  }, [allCartItem]
)

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
              cartDisplayNumber={cartDisplayNumber}
              setCartDisplayNumber={setCartDisplayNumber}/>
            )
          })
        :
        "Your Cart is Empty"}
        </div>
        <div>Total: $ {totalPrice}</div>
        </div>

    )}

export default Cart;