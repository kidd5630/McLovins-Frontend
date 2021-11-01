import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Cart = ({userToken, allProducts, allCartItem, isAdmin}) => {
  console.log('isAdmin', isAdmin);
    return ( 
        <div>
    
        {allCartItem ?
        allCartItem.map(cartItem=> {
            const productsToCartItem = allProducts.filter(obj=>{
                return obj.id === cartItem.product_id
            })
            return (
              <div className="cartContainer" key={productsToCartItem[0].id}>
                <div className="cartBody">
                  <div className="cartHeader">
                    <div className="cartDescription">
                      <div className='innerbox'>  
                        <div className='innerboxText' style={{fontWeight:"bolder", color:"black"}}
                            onClick={() => {
                            cartID(cartItem.id)
                            setselectedcart(cartItem.id)
                            }}>
                          <Link to={`/cart/${productsToCartItem[0].id}`} className="cartLink">
                            {productsToCartItem[0].name}
                          </Link>
                        </div>
                        <img className="prodPhoto"src={productsToCartItem[0].photo} alt="a picture of product" width="200" height="250" />
                        <div className='innerboxText'>{productsToCartItem[0].description}</div>
                        <div className='innerboxText'>{productsToCartItem[0].price}</div>
                      </div>
                    </div>  
                  </div>  
                </div>    
              </div>
            )
          })
        :
        "Your Cart is Empty"}
       
        </div>
         
    )}

export default Cart;